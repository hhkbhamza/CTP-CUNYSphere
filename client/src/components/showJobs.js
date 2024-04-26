import React from 'react'
import "../style/JobBoardCard.css"

export default function Job({ job }) {

  return (
    <div className='row'>
      <div className="col-sm-9 card">
          <div className="card text-center">
          <div className="card-header">
            <h4>{job.title}</h4>
            
          </div>
          <div className="card-body">
      
            <p className="card-text">Contract: {job.contract_time}</p>
            <p className="card-text">${job.salary_min} - ${job.salary_max}</p> 
            <p className="card-text">Location: {job.location.display_name}</p> 
            <p className="card-text">{job.description}</p>
            <a href={job.redirect_url} className="btn btn-primary">Read More</a>
          </div>
          <div className="card-footer text-muted">
            <p>Job created: {job.created}</p>
          </div>
        </div>
        
      </div>
    </div>
    
    
  )
}