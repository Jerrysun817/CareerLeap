import React from 'react';
// download the dependencies by executing: npm install react-native-web
import { Linking } from 'react-native';
import './Company.css';
const email = require('./images/email.png');
const linkedin = require('./images/linkedin.png');

function Company(props) {

    return (
        <div className='profile flex-child'>
            <div className='container'>
                <img className="image flex-child" src={props.image}/>
                <ul className="socials flex-child">
                    <li className="sociallist">
                        {/* <img width="20px" height="20px" className="sociallogo" src={email} /> */}
                        <img src={email} className="sociallogo" width="20px" height="20px" onClick={() => Linking.openURL(`mailto:${props.email}?subject=Looking for a mentor...`) }/>
                    </li>
                    <li className="sociallist">
                        <a href={props.linkedin} target="_blank">
                            <img width="20px" height="20px" className="sociallogo" src={linkedin}/>
                        </a>
                    </li>
                </ul>
            </div>
            
            <ul className="info">
                <li className="status">{props.name}</li>
                <li className="location">{props.location}</li>
            </ul>
        </div>
    );

}

export default Company;