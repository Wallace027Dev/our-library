import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import { BookComponent, Container } from './styles';
import ladraoDeRaios from '../../assets/ladrao-de-raios.jpg'

interface IBook {
  _id: number;
  imagePath: string;
  title: string;
  author: string;
  categories: { title: string }[];
}

interface IHomeProp {
  searchBook: string
}

const Books: IBook[] = [
  {
    _id: 1,
    imagePath: ladraoDeRaios,
    title: "O ladrão de Raios",
    author: "Rick Riordan",
    categories: [
      { title: "Terror" }
    ]
  },
  {
    _id: 2,
    imagePath: ladraoDeRaios,
    title: "Mar de Monstros",
    author: "Rick Riordan",
    categories: [
      { title: "Literatura" },
      { title: "Juvenil" },
    ]
  },
  {
    _id: 3,
    imagePath: ladraoDeRaios,
    title: "Maldição do Titã",
    author: "Rick Riordan",
    categories: [
      { title: "Literatura" },
      { title: "Ficção" }
    ]
  },
  {
    _id: 4,
    imagePath: ladraoDeRaios,
    title: "O Último Herói",
    author: "Rick Riordan",
    categories: [
      { title: "Juvenil" },
      { title: "Ficção" }
    ]
  },
];


const Home: React.FC<IHomeProp> = ({ searchBook }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);

  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  };  

  useEffect(() => {
    setBooks(Books);
  }, []);

  useEffect(() => {
    const normalizedSearchBook = normalizeString(searchBook)
    const filterBooks = books.filter((book) =>
      normalizeString(book.title).includes(normalizedSearchBook)
    );
      setFilteredBooks(filterBooks);
  }, [books, searchBook]);
  
/*useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        return console.error(error)
    })
  }, []); */

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
          {filteredBooks.map((book) => (
            <BookComponent key={book._id}>
              {/* <img src={`http://localhost:3001/uploads/${book.imagePath}`} alt={book.imagePath} /> */}
              <img src={ book.imagePath } alt={book.imagePath} />
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
