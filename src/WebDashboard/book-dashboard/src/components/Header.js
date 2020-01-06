import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { Input } from 'antd';

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
          
          Simple Book Rental
        </Menu.Item>
        
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            My Rented Books
          </a>
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