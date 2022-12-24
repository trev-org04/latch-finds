import logo from './static/logo.svg';
import menu from './static/menu.svg';
import search from './static/search.svg';
import closeIcon from './static/closeIcon.png';
import React from 'react';
import './404.css';

const Error = () => {


  window.addEventListener('load', () => {
    document.onkeydown = function (e) {
      if (e.keyCode === 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
      }
    }
  });

  const openSidenav = () => {
    var sidenav = document.getElementById('sidenav');
    var opacity = document.getElementById('opacity');
    sidenav.style.width = '250px';
    sidenav.style.padding = '35px';
    opacity.style.display = 'block';
  }

  const closeSidenav = () => {
    var sidenav = document.getElementById('sidenav');
    var opacity = document.getElementById('opacity');
    sidenav.style.width = '0px';
    sidenav.style.padding = '0px';
    opacity.style.display = 'none';
  }

  return (
    <>
      <div id='opacity' className='opacity'></div>
      <div id="sidenav" className="sidenav">
        <img src={logo} className='logo' alt=''></img>
        <div className='closeContain'>
          <img src={closeIcon} alt='' className='sidenavIcon' onClick={() => closeSidenav()}></img>
        </div>
        <div className='linkContain'>
          <a className='link' href="/">About</a>
          <a className='link' href="/gallery">Gallery</a>
          <a className='link' href="/contact">Contact</a>
        </div>
      </div>
      <header className="header">
        <img src={menu} className='menu' alt='' onClick={() => openSidenav()}></img>
        <img src={logo} className='logo' alt=''></img>
        <div className='searchBox'>
          <img src={search} className='search' alt=''></img>
          <input className='box' placeholder='Search' type='text'></input>
        </div>
      </header>
      <div className='errorContain'>
        rong page
      </div>
      <div className="sitemap">
        <span className='sitemapText'>© 2022 latch finds. All Rights Reserved.</span>
      </div>
    </>
  );
};

export default Error;