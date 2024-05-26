import { BrowserRouter } from 'react-router-dom';
import Router from '../../Router';

import Navigator from '../Navigator';
import Container from './styles';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navigator />
        <Router />
      </BrowserRouter>
    </Container>
  );
}

export default App;
