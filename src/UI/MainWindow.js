import React, { Component } from 'react'
import './MainWindow.js.css'
import picback from '../images/computer.jpg'
export default class MainWindow extends Component {
  render() {
    return (
      <>
      
        <div className='container'>
        <div className='row'> 
        <div className='Content-container'>
         
          <div className='row'>
            <div className='card'>
            <img src={picback} className="card-img" width="100%" height="490px" alt="..."/>
              <div className='card-img-overlay'>
              
              <div className='row clearfix'>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </div>
              </div>
            </div>
            <div className='row'>
            <div className='card'>
              <h1 className="display-1 text-primary fw-bold" >Welcome! <br></br>I am software engineer.<span className='Cursor-Anim'>|</span></h1>
              <h2 className="display-2">I build windows, web applications </h2>
              
              <p className="h-5">I’m a software engineer specializing in building (and occasionally designing)
               digital experiences.</p>
              </div>
            </div>
          </div>
          <div className='row clearfix'><br />

          <br />
          <br />
          <br />
          </div>

       

        </div>
        </div>
      </div>
      </>
      
    )
  }
}
