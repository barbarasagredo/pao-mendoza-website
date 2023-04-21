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
        <img src='public/m-logo.svg' className='w-6 h-6' alt='mala logo' />
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
          >
            HOME
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/portafolio'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
          >
            PORTAFOLIO
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/resume'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
          >
            RESUME
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
          >
            ABOUT
          </NavLink>
          <span className='md:visible invisible'>~</span>
          <NavLink
            to='/contact'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='md:pb-0'
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      <div className='flex md:hidden justify-end' onClick={openMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#626c7f'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='3' y1='12' x2='21' y2='12'></line>
          <line x1='3' y1='6' x2='21' y2='6'></line>
          <line x1='3' y1='18' x2='21' y2='18'></line>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
