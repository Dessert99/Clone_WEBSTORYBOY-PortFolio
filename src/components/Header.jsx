import React, { useState } from 'react';

const headerNav = [
  { title: 'intro', url: '#intro' },
  { title: 'skill', url: '#skill' },
  { title: 'site', url: '#site' },
  { title: 'portfolio', url: '#port' },
  { title: 'contact', url: '#contact' },
];

function Header() {
  const [show, setShow] = useState(false); //setShow의 초기값은 false임
  const toggleMenu = () => {
    setShow((preShow) => !preShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            portfolio<em>react.js</em>
          </a>
        </div>
        <nav className={`header__nav ${show ? 'show' : ''}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {/* 인자와 인덱스 */}
            {headerNav.map((nav, key) => (
              <li>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? 'true' : 'false'}
          role="button"
          tabindex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
