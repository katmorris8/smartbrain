import React from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
