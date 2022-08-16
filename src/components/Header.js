import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import { footer } from '../data/footer';
import Menu from './Menu';

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);

  const logo =
    'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/logo.svg';

  return (
    <div>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div classsName="md:mr-5">
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
          <>
            <nav className="navbar md:flex md:justify-between">
              <ul>
                {navLinks.map(({ id, title, link }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
              <Buttons />
            </nav>
          </>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </div>
  );
};

export default Header;
