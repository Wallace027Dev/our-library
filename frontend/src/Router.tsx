import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
  
interface IRouterProps {
  data: string;
}

const Router: React.FC<IRouterProps> = ({ data }) => {
  return (
    <Routes>
      <Route path='/' element={<Home searchBook={data} />} />
    </Routes>
  )
}

export default Router;
