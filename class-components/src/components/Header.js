// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header">
//       <img
//         src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg"
//         alt="logo of website"
//       />
//       <section>
//         <Button buttonText="Login" />
//         <Button buttonText="Logout" />
//       </section>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import Button from './Button';

class Header extends React.Component {
  render() {
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
  }
}

export default Header;
