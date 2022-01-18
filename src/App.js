import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Init from './components/Init';
import Menu from './components/Menu';
import Kitchen from './components/Kithchen';


const App = () =>{
  return (
    <Routes>
      <Route path="/" element={ <Init/> } />
      <Route path="/Rest" element={ <Menu/> } />
      <Route path="/Kitchen" element={ <Kitchen/> } />
    </Routes>
  );
}



export default App;
