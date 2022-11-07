

import React from "react";
import Company from "./Company";
import data from "./data.json";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const navigateToFilterBy = () => {
        //  navigate to /FilterBy
        navigate("/FilterBy");
    };
    
    return (
        <div className="container profile-container">
        <p align="right">
            <button onClick={navigateToFilterBy} className="button">filter by</button>
        </p>
        <div className="container">
            {
                data.map((item) => {
                    return (
                        <Company image={item.image}
                                email={item.email}
                                linkedin={item.linkedin}
                                name={item.name}
                                location={item.location}
                                job={item.job}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Home;