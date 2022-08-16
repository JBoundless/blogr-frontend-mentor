import React from 'react';

const Menu = ({ isOpen, setIsOpen }) => {
  const openIcon =
    'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/icon-hamburger.svg';
  const closeIcon =
    'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/icon-close.svg';
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <img src={closeIcon} alt="close icon" />
        ) : (
          <img src={openIcon} alt="icon hamburger" />
        )}
      </button>
    </>
  );
};

export default Menu;
