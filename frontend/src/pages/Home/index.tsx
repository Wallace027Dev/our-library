import React, { useEffect, useState } from 'react';
import { Container, BookComponent, CategoryLabel } from './styles';
import { Books, IBook } from '../../data/books';
import { Genders } from '../../data/genders';

interface IHomeProp {
  searchBook: string;
}

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
    const normalizedSearchBook = normalizeString(searchBook);
    const filtered = books.filter((book) => {
      const titleMatch = normalizeString(book.title).includes(normalizedSearchBook);
      const categoryMatch = selectedCategory === 'Todos os gêneros' ||
        book.categories.some(category => normalizeString(category.title) === normalizeString(selectedCategory));
      return titleMatch && categoryMatch;
    });
    setFilteredBooks(filtered);
  }, [searchBook, selectedCategory, books]);

  return (
    <Container>
      <aside>
        <h1>Livros por gênero</h1>
        {Genders.map((gender) => (
          <CategoryLabel
            key={gender._id}
            onClick={() => setSelectedCategory(gender.title)}
            isSelected={selectedCategory === gender.title}
          >
            {gender.title}
          </CategoryLabel>
        ))}
      </aside>
      <section>
        <h1>Livros disponíveis</h1>
        <div>
          {filteredBooks.map((book) => (
            <BookComponent key={book._id}>
              <img src={book.imagePath} alt={book.title} />
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
  );
}

export default Home;
