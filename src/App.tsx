import React from 'react';
import Header from './components/Header';
import './styles/home.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: 20 }}>
        <div className="centered-welcome">
          <h1>Bem-vindo(a) ao Bookshelf!</h1>
        </div>
      </main>
    </>
  );
};

export default App;