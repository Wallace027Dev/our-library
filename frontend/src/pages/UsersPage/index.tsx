import { useEffect, useState } from "react";
import axios from "axios";

import IUser from "../../interfaces/IUser";

import {
  Container, ResultComponent, SelectLabel
} from "../../styles/BookPages";
import IUserBook from "../../interfaces/IUserBook";

const UserPage = () => {
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [userName, setUserName] = useState('');
  const [userBooks, setUserBooks] = useState<IUserBook[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const statusMap = {
    'ALREADY_READ': 'Já lido',
    'READING': 'Lendo',
    'NOT_READ': 'Não lido'
  };

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));

  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/user/${selectedUser}/books`)
      .then(response => setUserBooks(response.data))
      .catch(err => console.log(err));
    }, [selectedUser]);

  return (
    <Container>
      <aside>
        <h1>Livros por usuário</h1>
        {users ? users.map((user) => (
          <SelectLabel
            key={user._id}
            onClick={ () => {
              setSelectedUser(user._id || '');
              setUserName(user.name);
            }}
            isSelected={selectedUser === user._id}
          >
            {user.name}
          </SelectLabel>
        )) : <h2>Nenhum usuário encontrado!</h2>}
      </aside>
      <section>
        {selectedUser ?
          <h1>Livros de {userName}</h1> :
          <h1>Livros do usuário selecionado</h1>
        }
        <div>
          {selectedUser ? userBooks.map((book) => (
            <ResultComponent key={book._id}>
              <img src={`http://localhost:3001/uploads/${book.bookId.imagePath}`} alt={book.bookId.title} />
              <div>
                <h2>{book.bookId.title}</h2>
                <h3>{book.bookId.author}</h3>
                <p>{book.bookId.categories.map(category => category.title).join(', ')}</p>
                <div>
                  <p>{formatDate(book.startedReadingAt)}</p>
                  <p>{statusMap[book.status]}</p>
                </div>
              </div>
            </ResultComponent>
          )) : <h2 style={{ marginLeft: 12, fontWeight: 400, color: '#FAC586' }}>Selecione um usuário!</h2>}
        </div>
      </section>
    </Container>
  );
};

export default UserPage;
