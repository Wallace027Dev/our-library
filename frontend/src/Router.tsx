import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UsersPage';
import BookRegistrationPage from './pages/BookRegistrationPage';

interface IRouterProps {
  data: string;
}

const Router: React.FC<IRouterProps> = ({ data }) => {
  return (
    <Routes>
      <Route path='/' element={<Home search={ data } />} />
      <Route path='/users' element={<UserPage />} />
      <Route path='/new-books' element={<BookRegistrationPage />} />
    </Routes>
  )
}

export default Router;
