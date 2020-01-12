import React, { useState, useContext } from 'react';
import { Menu } from 'antd';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';





const Header = () => {



    return (
      <div>
        <Menu className="tc" mode="horizontal">

          <Menu.Item key="home">
            <Link to="/">Simple Book Rental</Link>
          </Menu.Item>
        
          <Menu.Item key="rentedBooks">
            <Link to="/MyRentedBooks">My Rented Books</Link>
          </Menu.Item>

          
        
        </Menu>
      </div>
      
    );
}

export default Header;