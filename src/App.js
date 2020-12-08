import React from 'react';
import './styles.scss';
import Header from './Components/Header/Header';
import Headline from './Components/Headline/Headline';


function App() {

  const tempArr =[
    {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
    }
  ]

  return (
    <div className="app">
      <Header />
      <section className="content">
         <Headline title="Test Title" description="this is descriptions" tempArr/>
      </section>
    </div>
  );
}


export default App;
