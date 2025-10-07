import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import './styles/home.scss';
import { ROUTES } from './routes/routes';
import BookForm from './pages/BookForm';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SHELF} element={<Bookshelf />} />
          <Route path={ROUTES.BOOK_FORM} element={<BookForm />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;