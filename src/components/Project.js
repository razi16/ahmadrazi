import React from "react";

function Project(props){
    return (
      <div>
        <h3>{props.name}</h3>
        <div className='project-card'>
        <div className='img-wrap'>
          <img src={props.source} alt={props.alt}/>
          <p className='img-description'>{props.description}</p>
        </div>
      </div>
      </div>
        
    )
}


export default Project;