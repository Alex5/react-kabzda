import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";


const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Sidebar/>
          <Content/>
      </div>
  );
}


export default App;
