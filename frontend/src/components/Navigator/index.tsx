import React, { useState, ChangeEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, SearchSection, SearchBook } from './styles';
import ouLibrary from '../../assets/ourlibrary.svg';
import imageHero from '../../assets/imagehero.png';
import searchIcon from '../../assets/search.svg';

const Navigator: React.FC<{
  onDataChange: (data: string) => void }> = (
    { onDataChange }
  ) => {
  const [searchTitle, setSearchTitle] = useState<string>('');

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setSearchTitle(title);
    onDataChange(title);
  };

  return (
    <Container>
      <img className='image-hero' src={imageHero} alt="Girl holding a book" />

      <Nav>
        <img src={ouLibrary} alt="OurLibrary logo" />
        <div>
          <Link to='/'>Home</Link>
          <Link to='/users'>Usuários</Link>
        </div>
      </Nav>

      <SearchSection>
        <h1>VEJA QUAIS LIVROS ESTÃO<br />EM NOSSA COLEÇÃO</h1>
        <p>Encontre seu livro favorito e adicione-o à sua lista de desejos</p>
      </SearchSection>

      {isHomePage && <SearchBook>
        <img src={searchIcon} alt="Search icon" />
        <input
          type="text"
          placeholder='Pesquise um livro'
          value={searchTitle}
          onChange={handleSearchTitle}
        />
      </SearchBook>}
    </Container>
  );
};

export default Navigator;
