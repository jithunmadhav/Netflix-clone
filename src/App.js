import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { action, netflix_originals } from './url';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={netflix_originals} title='Netflix Originals'/>
      <RowPost url={action} title='Actions' isSmall/>
    </div>
  );
}

export default App;
