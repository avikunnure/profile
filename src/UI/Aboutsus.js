import React, { Component } from 'react';
export default class Aboutsus extends Component {
  constructor(props){
    super(props);
    this.state={
      webdata:{
        Aboutus:{
        Descriptions:"",
        MoreDescription:"",
        Specialities:[]
      }
    },
    };
  }
  async componentDidMount() {
    var response = await fetch('profile/webdata.json');
    const data = await response.json();
    this.setState({ webdata: data });
}
  render() {
    return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Who we are</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              {typeof this.state.webdata!="undefined" ? this.state.webdata.Aboutus.Descriptions:""}
            </p>
            <ul className='text-start' style={{listStyle: "none"}}>
            {this.state.webdata.Aboutus.Specialities.map((value, index) => {
              return <li key={index}><i className="bi bi-check2-circle"></i> <span><b>{value.Name}</b>:{value.Descriptions}</span></li>
            })}
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>{typeof this.state.webdata!="undefined" ? this.state.webdata.Aboutus.MoreDescription:""} </p>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
