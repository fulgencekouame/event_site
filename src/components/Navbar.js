import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth <= 960) {  
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth <= 960) {  
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

   const showButton = () => {
     if (window.innerWidth <= 960) {  
       setButton(false);
     } else {
       setButton(true);
     }
   };

   useEffect(() => {
    showButton();
  }, []);

   window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <span>L</span>'évèn<span>em</span>entie<span>l</span>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link
                to='/espaces'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Espaces evènementiel<i className='fas fa-caret-down'/>
              </Link>
              {dropdown && <Dropdown />}

            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nos contacts
              </Link>
            </li>

            <li>
              <Link
                to='/se connecter'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Se connecter
              </Link>
            </li>
          </ul>
         {button && <Button buttonStyle='btn--outline'>Se connecter</Button>} 
          
       </div>
      </nav>
    </>
  );
}

export default Navbar;
