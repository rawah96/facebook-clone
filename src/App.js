import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    // BEM naming convention...
    <div className="app">

      <Header/> 
      <hr/>
      <div className="app-body">
        <Sidebar/>
        <Feed/>
      </div>
      {/*
      BODY
        FEED
          STORIES
          MESSAGE
          POSTS
        WIDGETS
      */}
    </div>
  );
}

export default App;
