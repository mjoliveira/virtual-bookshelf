import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import '../../styles/bookshelf.scss';

const Bookshelf: React.FC = () => {
  return (
    <div className="bookshelf-container">
      <header className="bookshelf-header">
        <h1>Minha Estante</h1>
        <Button className="add-button" sx={{ textTransform: 'none' }} component={Link} to={ROUTES.BOOK_FORM}>+ Adicionar Livro</Button>
      </header>
      {/*<p>Veja aqui os livros que você já leu, está lendo ou quer ler.</p>*/}
      <section className="bookshelf-content">
        {/* Aqui virá a listagem dos livros */}
      </section>
    </div>
  );
};

export default Bookshelf;