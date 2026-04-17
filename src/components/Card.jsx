import React from "react";

const Card = ({image,state,capital,about}) => {
  return (
    <div className="card" style={{ "--bg-image": `url(${image})` }}>
         <h1>{state}</h1>
      <h3>{capital}</h3>
      <ul>
        <li>{about.city}</li>
        <li>{about.population}</li>
        <li>{about.knownFor}</li>
        <li>{about.language}</li>
      </ul>
      <div className="about">
        <p>
          {about.para}
        </p>
      </div>
     </div>
    
  );
};

export default Card;
