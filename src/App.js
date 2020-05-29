import React from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}

export default App;
