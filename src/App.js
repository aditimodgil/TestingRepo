import React from 'react';
import './styles.scss';
import Header from './Components/Header/Header';
import Headline from './Components/Headline/Headline';
import HeadLine from './Components/Headline/Headline';

function App() {
  return (
    <div className="app">
      <Header />
      <section className="content">
         <Headline title="Test Title" description="this is descriptions"/>
      </section>
    </div>
  );
}

export default App;
