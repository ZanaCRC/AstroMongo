function NavBar({ currentPath = "/" }) {
  const isActive = (path) => currentPath === path;

  const getLinkStyle = (path) => ({
    ...styles.linkStyle,
  });

  return (
    <header className="pt-3">
      <div className="flex flex-row items-center justify-between pl-5 pr-5">
        <img
        class="rounded-4xl h-14"
        src="https://pbs.twimg.com/profile_images/1841926818376437760/JJAUt40Q_400x400.jpg"
        alt=""
      />
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        class="w-10 h-10 fill-current text-white"
        data-testid="icon"
      >
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
      </div>
      
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
    </header>
  );
}

const styles = {
  nav: {
    top: 0,
    width: "100%",
    maxWidth: "540px",
    position: "sticky",
    zIndex: 1000,
    margin: 0,
    borderBottom: "1px solid rgb(47, 51, 54)",
    flexShrink: 0,
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    listStyle: "none",
    width: "100%",
    margin: 0,
  },
  links: {
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: "10px 12px",
    width: "100%",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontFamily: '"Favorit", "Helvetica Neue", Helvetica, Arial, sans-serif',
    position: "relative",
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    left: 0,
    right: 0,
    borderBottom: "none",
    transition: "border-bottom-color 0.2s ease",
  },
  activeBorder: {
    position: "absolute",
    bottom: "-13px",
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: "#1d9bf0",
    transition: "opacity 0.2s ease",
  },
};

export default NavBar;
