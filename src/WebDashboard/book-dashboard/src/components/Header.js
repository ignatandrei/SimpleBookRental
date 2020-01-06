import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;



class Header extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu className="tc" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          
        <Link to="/">Simple Book Rental</Link>
        </Menu.Item>
        
        <Menu.Item key="rentedBooks">
          <Link to="/MyRentedBooks">My Rented Books</Link>
          
        </Menu.Item>
        <Search
          placeholder="Search Books"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </Menu>
    );
  }
}

export default Header;