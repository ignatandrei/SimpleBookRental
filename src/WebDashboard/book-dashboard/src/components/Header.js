import React from 'react';

const Header = () => {
  return (
    <div className='tc'>
      <header className=" w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      {<img className="" src="https://img.icons8.com/flat_round/80/000000/bookmark-book.png" />}
      <nav className="f6 fw6 ttu tracked">
      
      <a className="link dim white dib mr3" href="" title="Home">
       Simple Book Rental</a>
      <a  className="link dim white dib mr3" href="#" title="About">Rent</a>
      <a className="link dim white dib mr3" href="#" title="Store">Placeholder</a>
      <a className="link dim white dib" href="#" title="Contact">Placeholder</a>
      </nav>
      </header>
    </div>
  );
  
}

export default Header;