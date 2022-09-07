<<<<<<< HEAD
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "./components/Login";
function App() {
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Detail from './components/Detail';

const App=() =>{
>>>>>>> master
  return (
    <div className="App">
      <Router>
        <Header />
<<<<<<< HEAD
        <Routes>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home />}/>            
        </Routes>
=======

        <Switch>
            <Route exact path="/">
                <Login/>
                <Footer/>
            </Route>
            <Route exact path="/home">
                <Home/>
                <Footer/>
            </Route>
            <Route exact path="/detail/:id"  component={Detail}/>
        </Switch>
>>>>>>> master
      </Router>
    </div>
  );
}

export default App;
