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

const normalizeString = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};  

const Home: React.FC<IHomeProp> = ({ searchBook }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os gêneros');

  useEffect(() => {
    setBooks(Books);
  }, []);

  useEffect(() => {
    const normalizedSearchBook = normalizeString(searchBook)
    const filterBooks = books.filter((book) =>{
      const titleMatch = normalizeString(book.title).includes(normalizedSearchBook)
      const categoryMatch = selectedCategory === 'Todos os gêneros' || book.categories.some(category => normalizeString(category.title) === normalizeString(selectedCategory));
      return titleMatch && categoryMatch;
    });
      setFilteredBooks(filterBooks);
    }, [searchBook, selectedCategory, books]);

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
        <button type='button' onClick={() => setSelectedCategory('Todos os gêneros')}>Todos os gêneros</button>
        <button type='button' onClick={() => setSelectedCategory('Ficção')}>Ficção</button>
        <button type='button' onClick={() => setSelectedCategory('Literatura')}>Literatura</button>
        <button type='button' onClick={() => setSelectedCategory('Juvenil')}>Juvenil</button>
        <button type='button' onClick={() => setSelectedCategory('Fantasia')}>Fantasia</button>
        <button type='button' onClick={() => setSelectedCategory('Terror')}>Terror</button>
        <button type='button' onClick={() => setSelectedCategory('Romance')}>Romance</button>
        <button type='button' onClick={() => setSelectedCategory('Drama')}>Drama</button>
        <button type='button' onClick={() => setSelectedCategory('Crônica')}>Crônica</button>
        <button type='button' onClick={() => setSelectedCategory('Poema')}>Poema</button>
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
