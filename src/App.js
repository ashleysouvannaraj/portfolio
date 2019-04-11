import React, { Component } from 'react';
import Skills from './components/skills';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App has-navbar-fixed-top">
        <Header />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Contact />
      </div>
    );
  }
}

export default App;
