import React, { Component } from "react";
import './../App.css';
import './SideBar.js.css';
import picback from '../images/computer.jpg'
import profilepic from '../images/avinashk.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default class SideBar extends Component {
  render() {
    return (
      <>
     
      <div className="sidebar">

        <div className="card" >
          <img src={picback} className="card-img-top" height={100} alt="..."/>
          <div className="text-center">
            <img src={profilepic} className="card-img-profile" alt="" />
          </div>
         
          <div className="card-body">
            <h5 className="card-title">Avinash Kunnure</h5>
            <p className="card-text">Senior Software Engineer | MVC .Net | .Net Core | REST API | Web API | Microservices | MSSQL | PGSQL | JavaScript | jQuery | C# | Web developer | Software Developer</p>
          </div>
        </div>
        <div className="row">
          <div className="text-center"> 
            <a href="https://www.c-sharpcorner.com/members/avinash-kunnure" 
              alt="csharpcorner profile">
                <FontAwesomeIcon color="black" className="linkIcons" icon={faCode} />
            </a>
          
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/avinash-kunnure-908520111/" 
              alt="linked profile">
                
                <FontAwesomeIcon color="blue" className="linkIcons" icon={faLinkedin} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/avikunnure" 
              alt="csharpcorner profile">
               <FontAwesomeIcon color="black" className="linkIcons" icon={faGithub} />
            </a>
          
          </div>
        </div>
      </div>
      </>
    );
  }
}
