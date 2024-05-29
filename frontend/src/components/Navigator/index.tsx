import { Link } from 'react-router-dom';

import { Container, Nav, SearchSection, SearchBook } from './styles'

import oulibrary from '../../assets/ourlibrary.svg'
import imagehero from '../../assets/imagehero.png'
import search from '../../assets/search.svg'
import React, { useState } from 'react';

  interface ITitleSearch {
    onDataChange: (data: string) => void;
  }

  const Navigator: React.FC<ITitleSearch> = ({ onDataChange }) => {
    const [searchTitle, setSearchTitle] = useState<string>('');

    function handleSearchTitle(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchTitle(e.target.value);
      onDataChange(e.target.value);
    }

  return (
    <Container>
      <img className='image-hero' src={imagehero} alt="Girl holding a book" />

      <Nav>
        <img src={oulibrary} alt="OurLibrary logo" />

        <div>
          <Link to='/home'>Home</Link>
          <Link to='/books'>Livros</Link>
          <Link to='/users'>Usuários</Link>
        </div>
      </Nav>

      <SearchSection>
        <h1>VEJA QUAIS LIVROS ESTÃO<br />EM NOSSA COLEÇÃO</h1>
        <p>Encontre seu livro favorito e adicione-o à sua lista de desejos</p>
      </SearchSection>

      <SearchBook>
        <img src={search} alt="Search icon" />
        <input
          type="text"
          placeholder='Pesquise um livro'
          value={searchTitle}
          onChange={handleSearchTitle}
        />
      </SearchBook>
    </Container>
  )
}

export default Navigator;
