import React, { useState } from "react";
import Company from "./Company";
import data from "./data.json";
import { Link, useNavigate } from "react-router-dom";
import "./FilterBy.css";

function FilterBy() {

    const getDisabilityInitialState = () => {
        const disability = "With disability";
        return disability;
    };

    const getJobInitialState = () => {
        const job = "Building Trades";
        return job;
    };
    
    const [disability, setDisability] = useState(getDisabilityInitialState);
    const [job, setJob] = useState(getJobInitialState);
    let [result, setResult] = useState([]);

    const handleDisabilityChange = (e) => {
        setDisability(e.target.value);
    };

    const handleJobChange = (e) => {
        setJob(e.target.value);
    };

    const navigate = useNavigate();
  
    const navigateToHome = () => {
      //  navigate back to Home
        navigate("/");
    };
    
    function handleFilter() {
        let filtered = data.filter(item => (item.tags.includes(disability) && item.tags.includes(job)));
        setResult(filtered);
        console.log(disability, job);
        console.log(result);
    }
    
    return (
        <div style={{
            width: '100%'
        }}>
            <div>
                <div className="buttonmove">
            <div>                
                
                <button className="button" onClick={() => handleFilter()}>Search</button>
                <button onClick={navigateToHome} className="button">go back</button>
                <div>
                </div>
                <div className="leftindent">
                {/* <Select options={disability} placeholder="Filter by Disability"/>
                <Select options={jobs} placeholder="Filter by Job Type"/> */}
                <select value={disability} onChange={handleDisabilityChange}>
                    <option value="With disability">With disability</option>
                    <option value="Without disability">Without disability</option>
                </select>
                
                <select value={job} onChange={handleJobChange}>
                    <option value="Building Trades">Building Trades</option>
                    <option value="Industrial Trades">Industrial Trades</option>
                    <option value="Mechanical Trades">Mechanical Trades</option>
                    <option value="Medical Trades">Medical Trades</option>
                </select>
                </div>
                {/* <p>{`You selected ${disability}, ${job}`}</p> */}
            </div>
            
            </div>
            </div>
            <div  className="container2">
                <div className="prof">
                    {
                        result.map((item) => {
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
        </div>
    );
  }
  
  export default FilterBy;