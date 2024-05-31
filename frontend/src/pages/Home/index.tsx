import React, { useEffect, useState } from 'react';
import axios from 'axios';

import normalizeString from '../../utils/NormalizeString';

import {
  Container, ResultComponent, SelectLabel
} from '../../styles/BookPages';
import IBook from '../../interfaces/IBook';
import ICategory from '../../interfaces/ICategory';

interface IHomeProp {
  search: string;
}

const Home: React.FC<IHomeProp> = ({ search }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os gêneros');

  useEffect(() => {
    axios.get('http://localhost:3001/books')
    .then(response => {
      setBooks(response.data)
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
    .then(response => {
      setCategories(response.data)
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    const normalizedSearch = normalizeString(search);
    const filtered = books.filter((book) => {
      const titleMatch = normalizeString(book.title).includes(normalizedSearch);

      const categoryMatch = selectedCategory === 'Todos os gêneros' ||
        book.categories?.some(category => normalizeString(category.title) === normalizeString(selectedCategory));

      return titleMatch && categoryMatch;
    });
    setFilteredBooks(filtered);
  }, [search, selectedCategory, books]);

  return (
    <Container>
      <aside>
        <h1>Livros por gênero</h1>
        {categories.map((category) => (
          <SelectLabel
            key={category._id}
            onClick={() => setSelectedCategory(category.title)}
            isSelected={selectedCategory === category.title}
          >
            {category.title}
          </SelectLabel>
        ))}
      </aside>
      <section>
        <h1>Livros disponíveis</h1>
        <div>
          {filteredBooks.map((book) => (
            <ResultComponent key={book._id}>
              <img src={`http://localhost:3001/uploads/${book.imagePath}`} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.categories?.map(category => category.title).join(', ')}</p>
              </div>
            </ResultComponent>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Home;
