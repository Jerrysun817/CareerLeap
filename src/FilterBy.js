import React, { useState } from "react";
import Company from "./Company";
import data from "./data.json";
import { Link, useNavigate } from "react-router-dom";


function FilterBy() {

    const getDisabilityInitialState = () => {
        const disability = "Yes";
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
        <div>
            <div>
                <div>
                <button onClick={navigateToHome}>go back</button>
                </div>
                {/* <Select options={disability} placeholder="Filter by Disability"/>
                <Select options={jobs} placeholder="Filter by Job Type"/> */}
                <select value={disability} onChange={handleDisabilityChange}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <select value={job} onChange={handleJobChange}>
                    <option value="Building Trades">Building Trades</option>
                    <option value="Industrial Trades">Industrial Trades</option>
                    <option value="Mechanical Trades">Mechanical Trades</option>
                    <option value="Medical Trades">Medical Trades</option>
                </select>
                {/* <p>{`You selected ${disability}, ${job}`}</p> */}
            </div>
            <button onClick={() => handleFilter()}>Go</button>
            <div>
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
    );
  }
  
  export default FilterBy;

// import React from "react";
// import Company from "./Company";
// import data from "./data.json";
// import { Link, useNavigate } from "react-router-dom";

// function FilterBy() {
//     const navigate = useNavigate();
  
//     const navigateToHome = () => {
//       //  navigate back to Home
//       navigate("/");
//     };
  
//     return (
//       <div>
//         <div>
//           <button onClick={navigateToHome}>go back</button>
//         </div>

//       </div>
//     );
//   }
  
//   export default FilterBy;
