import React from 'react';
import { Menu, Icon } from 'antd';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';





class Header extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu className="tc" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

          <Menu.Item key="home">
            <Link to="/">Simple Book Rental</Link>
          </Menu.Item>
        
          <Menu.Item key="rentedBooks">
            <Link to="/MyRentedBooks">My Rented Books</Link>
          </Menu.Item>

          <SearchBox />
        
        </Menu>
      </div>
      
    );
  }
}

export default Header;