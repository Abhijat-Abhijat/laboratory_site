import React from 'react';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <footer className='BottomNav'>
        <Link to='/'>Home</Link>
        <Link to='/research'>Research</Link>
        <Link to='/news'>News</Link>
        <Link to='/people'>People</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/publications'>Publications</Link>
        <Link to='/contact'>Contact</Link>
    </footer>
  )
}

export default Nav;