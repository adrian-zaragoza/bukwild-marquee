import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = ( {pagesTitles, pathname}) => {

  return(
      <header className="navigation-container">
        <div>
          <figure className="logo-container">
            <img src="/abc_logo.svg" alt="abc-logo" />
          </figure>
          <nav>
            {pagesTitles.map((pageTitle) =>
              <NavLink key={pageTitle[1]} className={`nav-link ${pathname === `/${pageTitle[1]}` ? "selected-nav-link" : ""}`} to={pageTitle[1]}>{pageTitle[0]}</NavLink>
            )}
          </nav>
        </div>
        <button id="contact">Contact Us</button>
      </header>
  );
}

export default NavigationBar;