import React, { Component } from 'react'

export default class Aboutsus extends Component {
  render() {
    return (
      <div>
         <div className='row'>
          <div className="card">
            <div className='card-title'>
            <h1 className="display-1 text-primary fw-bold" >About me.</h1>
            </div>
            <div className="card-body">
              </div>

          </div>
        </div>

        
        <div className='row'>

<div className="card">
  <div className='card-title'><div className="fw-bold">Skills</div></div>
  <div className="card-body">
    <ul className="list-group">
      <li className="list-group-item">
      </li>
      <li className="list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">C#</div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" style={{width: "93%"}}  
              aria-valuenow="10" aria-valuemin="0" 
              aria-valuemax="100"></div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">MVC WEBAPI DOTNET CORE</div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" style={{width: "90%"}}  
              aria-valuenow="10" aria-valuemin="0" 
              aria-valuemax="100"></div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">DATABASE</div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" style={{width: "80%"}}  
              aria-valuenow="10" aria-valuemin="0" 
              aria-valuemax="100"></div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">HTML CSS JAVASCRIPT JQUERY</div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" style={{width: "75%"}}  
              aria-valuenow="10" aria-valuemin="0" 
              aria-valuemax="100"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

  
</div>

      </div>
    )
  }
}
