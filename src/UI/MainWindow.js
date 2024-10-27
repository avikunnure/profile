import React, { Component } from 'react'
export default class MainWindow extends Component {
  constructor(props){
    super(props);
    this.state={
      webdata:{
        SilderMain:[]
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
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {this.state.webdata.SilderMain.map((item,index)=>{
              var clsnm= index===0? "carousel-item active":"carousel-item";
              return (
                <div className={clsnm} data-bs-interval="2000" key={item.id}>
                  <img  className="bd-placeholder-img" src={process.env.PUBLIC_URL + '/img/'+item.Image} alt='' />
                   <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>{item.SliderText}</h1>
                      <p>{item.Descriptions}</p>
                    </div>
                  </div>
                </div>)
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
      
    )
  }
}
