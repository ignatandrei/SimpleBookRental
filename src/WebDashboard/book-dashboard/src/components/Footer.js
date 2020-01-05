import React, {useState, useEffect} from 'react';
import moment from 'moment';

const Footer = () => {

  const [ commit, setCommit ] = useState([]);

    useEffect(() => {
        const getCommits = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit");
            const jsonResponse = await response.json();
            console.log(jsonResponse, 'working commit api');
            setCommit(jsonResponse);
        };

        getCommits();
    }, []);

  return (
    <div>
    <footer className="tc white-80 pv5 pv4-l ph4">
            
              <h2 className="f6 ml3 pr2">
              Created by Andrei Ignat and Bogdan Bobe || 
              Latest commit made by {commit.lastAuthor} at {commit.dateCommit} with the message: {commit.latestCommit}
              <br />MomentsJS time is now {moment().format('LLLL', commit.dateCommit)} at {moment.locale()}
              </h2>
            
        </footer>
    </div>
  )
}

export default Footer;
      