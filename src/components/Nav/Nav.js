import React from 'react';

const Nav = ({ onRouteChange }) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
  )
}

export default Nav;