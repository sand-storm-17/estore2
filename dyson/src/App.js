import './App.css';
import React from 'react'
import Header from './Header.js'
import Home from './Home.js'

function App() {
  return (
    <div className="app"> 
      {/*/app not App according to BEM naming convention.*/}

      {/*HEADER*/}s
      <Header />


      {/*HOME*/}
      <Home />
    </div>
  );
}

export default App;
