import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {Icon} from 'antd';

const Footer = () => {

  const [ commit, setCommit ] = useState([]);

    useEffect(() => {
        const getCommits = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit");
            const jsonResponse = await response.json();
            // console.log(jsonResponse, 'working footer');
            setCommit(jsonResponse);
        };

        getCommits();
    }, []);

  return (
    <div>
      <footer className="tc white-80 pv5 pv4-l ph4">
            
        <h2 className="f6 ml3 pr2">
              Created by <a href="https://github.com/ignatandrei"> <Icon type="github" /> Andrei Ignat </a> and <a href="https://github.com/shdow"> <Icon type="github" /> Bogdan Bobe </a>
              <br />
              Check out this project on <a href="https://github.com/ignatandrei/SimpleBookRental"> <Icon type="github" /> GitHub </a>
              <br />
              Latest commit was made {moment(commit.dateCommit).startOf('hour').fromNow()} by {commit.lastAuthor} at {moment(commit.dateCommit,).format('MMMM Do YYYY, HH:mm:ss')} with the message: {commit.latestCommit}
              
        </h2>
            
      </footer>
    </div>
  )
}

export default Footer;
      