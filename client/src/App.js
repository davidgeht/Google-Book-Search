import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Search from "./components/search";
import Saved from "./context/saved";
import NavBar from "./components/navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Header/>
      <Route exact path="/search">
      <Search/>
      </Route>
      <Route path="/saved">
      <Saved/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
