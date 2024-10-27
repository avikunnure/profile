import React, { Component } from 'react'

export default class Services extends Component {
  constructor(props){
    super(props);
    this.state={
      webdata:{
        Services:[]
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
     <>
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Call To Action</h3>
            <p>We deliver innovative digital solutions tailored to your unique needs.
               Our expertise spans multiple domains, ensuring we tackle any challenge you bring our way.
                From captivating designs to robust applications, we turn your vision into reality.
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#contact">Call To Action</a>
          </div>
        </div>

      </div>

    </section>
    <section id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>What we do offer</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {this.state.webdata.Services.map((item,index)=>{
            return (<div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className={item.IconClass} style={{color: "#df1529"}}></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>{item.Name}</h3>
                </a>
                <p>{item.Descriptions}</p>
              </div>
            </div>);
          })}
        </div>
      </div>
    </section>
    </>
        
    )
  }
}
