import { useEffect, useState } from "react";
import axios from "axios";

import IUser from "../../interfaces/IUser";

import {
  Container, ResultComponent, SelectLabel
} from "../../styles/BookPages";
import IUserBook from "../../interfaces/IUserBook";

const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
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
        {users.map((user) => (
          <SelectLabel
            key={user._id}
            onClick={() => setSelectedUser(user._id)}
            isSelected={selectedUser === user._id}
          >
            {user.name}
          </SelectLabel>
        ))}
      </aside>
      <section>
      <h1>Livros disponíveis</h1>
        <div>
          {userBooks.map((book) => (
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
          ))}
        </div>
      </section>
    </Container>
  );
};

export default UserPage;
