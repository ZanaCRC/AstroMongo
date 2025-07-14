import { Font } from 'astro:assets';
import React from 'react';

function NavBar({ currentPath = '/' }) {
  const isActive = (path) => currentPath === path;

  const getLinkStyle = (path) => ({
    ...styles.linkStyle,
  });

  return (
    <nav style={styles.nav}>
      <ul style={styles.navLinks}>
         <li style={styles.links}>
          <a style={getLinkStyle('/')} href="/">
            Para ti
            {isActive('/') && <div style={styles.activeBorder}></div>}
          </a>
        </li>
        <li style={styles.links}>
          <a style={getLinkStyle('/about')} href="/about">
            Siguiendo
            {isActive('/about') && <div style={styles.activeBorder}></div>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    top: 0, 
    width: '100%',
    maxWidth: '540px',
    position: 'sticky',
    zIndex: 1000,
    margin: 0,
    borderBottom: '1px solid rgb(47, 51, 54)',
    flexShrink: 0, 
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    listStyle: 'none',
    width: '100%',
    margin: 0,
  },
  links: {
    whiteSpace: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: '10px 12px',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontFamily: '"Favorit", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: 'relative',
    
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    left: 0,
    right: 0,
    borderBottom: 'none',
    transition: 'border-bottom-color 0.2s ease',
  },
  activeBorder: {
    position: 'absolute',
    bottom: '-13px',
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: '#1d9bf0',
    transition: 'opacity 0.2s ease',
  },
};

export default NavBar;
