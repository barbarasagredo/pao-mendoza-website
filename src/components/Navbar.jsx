import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = { color: ' #AAAAAA', fontWeight: 600 };

  const openMenu = () => {
    let menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  };

  return (
    <nav className='flex justify-between items-center fixed w-full h-12 px-4'>
      <div className='flex-grow'>
        <img src='/m-logo.svg' className='w-6 h-6' alt='mala logo' />
      </div>
      <div
        id='menu'
        className='md:flex hidden flex-grow justify-start absolute md:relative md:top-0 top-12 md:border-none border-solid md:border-0 border-2  bg-back-gray w-full md:w-fit'
      >
        <div className='flex flex-col md:flex-row space-x-4 items-center md:py-0 py-8'>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='pl-4 pb-2 md:pb-0'
            onClick={openMenu}
          >
            HOME
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/portafolio'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
            onClick={openMenu}
          >
            PORTAFOLIO
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/resume'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
            onClick={openMenu}
          >
            RESUME
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
            onClick={openMenu}
          >
            ABOUT
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/contact'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
            onClick={openMenu}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      <div className='flex md:hidden justify-end' onClick={openMenu}>
        <img src='src/images/burger.svg' alt='burger' />
      </div>
    </nav>
  );
};

export default Navbar;
