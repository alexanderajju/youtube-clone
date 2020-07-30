import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommentedVideos from './RecommentedVideos';

function App() {
  return (
    <div className="app">
     
      <Header/>

      <div className="app__page">
      <Sidebar/>
      <RecommentedVideos/>
      </div>
      


    </div>
  );
}

export default App;
