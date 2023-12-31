import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductsList from './components/Product-list/Products-list.jsx';
import { useTelegram } from './shared/hooks/useTelegram.js';
import { Container } from './components/Container/Container';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Container>
      <Header />
      <ProductsList />
    </Container>
  );
}

export default App;
