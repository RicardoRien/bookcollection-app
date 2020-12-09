import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Button } from '../Button/button';
import { Link } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';
import {  HiOutlineSortDescending, HiOutlineSortAscending } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
  // State~
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Functions =>
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton();
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-containerNav containerNav">

            {/* Logo & name [BookCollection] */}
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <FiBook className="navbar-icon"/>
              Book Collection
            </Link>

            {/* Menu-Icon Bar / X */}
            <div className="menu-icon" onClick={() => handleClick()} aria-hidden="true">
              {click ? <HiOutlineSortAscending /> : <HiOutlineSortDescending />}
            </div>

            {/* Menu Names / Desktop -Mobile (slide) */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/completed' className="nav-links" onClick={closeMobileMenu}>
                 Completed
                </Link>
              </li>
              <li className="nav-bar">
                {button ? 
                (
                  <Link to='/add' className="btn-link">
                    <Button buttonStyle="btn--outline">
                      Add a Book
                    </Button>
                  </Link>
                )
                :
                (
                  <Link to='/add' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Add a Book</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>  
    </>
  )
}