import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommentedVideos from "./RecommentedVideos";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommentedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
