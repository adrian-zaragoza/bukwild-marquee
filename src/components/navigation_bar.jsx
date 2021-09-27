import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = ({ pagesTitles }) => {
  let music = new Audio("/We_Like_To_Party.mp3");

  const playMusic = () => {
    music.play();
  };

  return(
      <header className="navigation-container">
        <div>
          <figure className="logo-container">
            <img src="/abc_logo.svg" alt="abc-logo" />
          </figure>
          <nav>
            {pagesTitles.map((pageTitle) =>
              <NavLink key={pageTitle[1]} className={`nav-link`} activeStyle={{color: "#ffc004"}} to={pageTitle[1]}>{pageTitle[0]}</NavLink>
            )}
          </nav>
        </div>
        <button id="contact" onClick={playMusic}>Contact Us</button>
      </header>
  );
}

export default NavigationBar;