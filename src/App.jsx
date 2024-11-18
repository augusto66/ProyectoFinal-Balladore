import React from 'react'
import { useState } from 'react'
import './App.css'
import './components/NavBarComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {

  return (
<BrowserRouter>
  <NavBarComponent/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App
