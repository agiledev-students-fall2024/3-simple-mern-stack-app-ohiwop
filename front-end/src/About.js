import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css'

const AboutPage = () => {
    const [aboutInfo, setAboutInfo] = useState([]);
    const [error, setError] = useState('');

    const fetchAbout = () => {
        console.log("Fetching about information..."); 
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(response => {
                console.log("Response received:", response.data); 
                const messages = response.data;
                setAboutInfo(messages);
            })
            .catch(err => {
                console.error("Error fetching messages:", err); 
                const errMsg = err.response?.data?.error || err.message;
                setError(errMsg);
            });
    };


    
    

    useEffect(() => {
        fetchAbout();

    }, []); 

    return (
        <>
        <h1>About Me!</h1>
        <h2>{aboutInfo.name}</h2>
        <div><img src={aboutInfo.url} alt="alttext" className="profile-image" /></div>
        <p>{aboutInfo.description}
        </p>
      </>

    );
};

export default AboutPage;
