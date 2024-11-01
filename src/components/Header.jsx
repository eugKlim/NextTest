import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>Home</Link>
      <span> | </span>
      <Link href='/1'>Page 1</Link>
      <span> | </span>
      <Link href='/items'>Items</Link>
    </header>
  );
};

export default Header;