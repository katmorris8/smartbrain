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
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles
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
