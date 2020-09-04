import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets'
import Login from './components/Login/Login'
import {useStateValue} from './StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    // BEM naming convention...
    <div className="app">
      {!user? (
        <Login />
      ) : (
        <>
        <Header /> 
        <hr/>
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      )}
    </div>
  );
}

export default App;
