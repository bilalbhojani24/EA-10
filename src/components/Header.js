import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg"
        alt="logo of website"
      />
      <section>
        <Button buttonText="Login" />
        <Button buttonText="Logout" />
      </section>
    </header>
  );
};

export default Header;

// function add(a, b) {
//   a = 10;
//   b = 20;
// }

// add(10, 20);
