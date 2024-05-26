import { useEffect, useState } from 'react';
import axios from 'axios';

import { BookComponent, Container } from './styles';

interface IBook {
  _id: string;
  imagePath: string;
  title: string;
  author: string;
  categories: { title: string }[];
}

function Home() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        return console.error(error)
    })
  }, []);

  console.log(books)

  return (
    <Container>
      <aside>
        <h1>Livros por gênero</h1>
        <button type='button' onClick={() => console.log("Todos os gêneros")}>Todos os gêneros</button>
        <button type='button' onClick={() => console.log("Ficção")}>Ficção</button>
        <button type='button' onClick={() => console.log("Literatura")}>Literatura</button>
        <button type='button' onClick={() => console.log("Juvenil")}>Juvenil</button>
        <button type='button' onClick={() => console.log("Fantasia")}>Fantasia</button>
        <button type='button' onClick={() => console.log("Terror")}>Terror</button>
        <button type='button' onClick={() => console.log("Romance")}>Romance</button>
        <button type='button' onClick={() => console.log("Drama")}>Drama</button>
        <button type='button' onClick={() => console.log("Crônica")}>Crônica</button>
        <button type='button' onClick={() => console.log("Poema")}>Poema</button>
      </aside>

      <section>
        <h1>Livros disponíveis</h1>

        <div>
          {books.map((book) => (
            <BookComponent key={book._id}>
              <img src={`http://localhost:3001/uploads/${book.imagePath}`} alt={book.imagePath} />
              <div>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.categories.map(category => category.title).join(', ')}</p>
              </div>
            </BookComponent>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Home;
