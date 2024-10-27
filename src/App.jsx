import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (

      <div className="App">
        <Navbar />{Navbar}
        <ItemListContainer saludo="¡Bienvenido a CourtMaster!" />
      </div>

 
  );
}

export default App
