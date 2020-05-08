import React from 'react';

import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <header>
        
        <div className="logo">
        <Link to="/react-site/">LOGO</Link>
        </div>

        <nav>
            <ul>
                <li className="first">
                  <Link to="/react-site/">Home</Link>
                </li>
                <li>
                  <Link to="/react-site/About">About</Link>
                </li>
                <li className="last">
                  <Link to="/react-site/Contact">Contact</Link>
                </li>
            </ul>
        </nav>

    </header>
  );
}

export default Header;
