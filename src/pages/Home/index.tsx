import React from 'react';
import '../../styles/home.scss';

const Home: React.FC = () => {
  return (
    <>
      <main style={{ padding: 20 }}>
        <div className="centered-welcome">
          <h1>Bem-vindo(a) ao Bookshelf!</h1>
        </div>
      </main>
    </>
  );
};

export default Home;