import { BrowserRouter } from 'react-router-dom';
import Router from '../../Router';

import Navigator from '../Navigator';
import Container from './styles';
import { useState } from 'react';


const App: React.FC = () => {
  const [data, setData] = useState<string>('');
  
  function handleDataChange(newData: string) {
    setData(newData);
  }

  return (
    <Container>
      <BrowserRouter>
        <Navigator onDataChange={handleDataChange} />
        <Router data={data} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
