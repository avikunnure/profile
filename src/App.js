import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainWindow from './UI/MainWindow';
import { Contacts } from './UI/Contacts';
import imagelogo from './images/favicon.png';
import Aboutsus from './UI/Aboutsus';
import Services from './UI/Services';
import { useEffect,useState } from 'react';
function App() {
  const [webdata, setWebdata] = useState({Services:[]});

  useEffect(() => {
    fetch('profile/webdata.json')
    .then(response=>response.json())
    .then(data=>setWebdata(data));
  }, []);

  return (
    
    <div className="App">
    <header id="header" className="header d-flex align-items-center bg-blue fixed-top">
      <nav className="navbar navbar-expand-md bg-blue fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="/" >
            <img src={imagelogo} alt='' height="30px" width="76px" />
            Avinash Kunnure
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="#header" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" >About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" >Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" >Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  <main> 
  <MainWindow/>
  <Aboutsus/> 
  <Services/>
  <Contacts/>
    </main>
  <footer id="footer" className="footer position-relative sticky-bottom bg-blue">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="footer-contact pt-3">
            <p>Kolhapur</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+91 90218 53892</span></p>
            <p><strong>Email:</strong> <span>avinash.kunnure@outlook.com</span></p>
          </div>
          <div className="social-links d-flex justify-content-center mt-4">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div> 
        </div>
        <div className="col-lg-4 col-md-3 footer-links">
          <h4 className='text-start'>Useful Links</h4>
          <ul className='justify-content-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-3 footer-links">
          <h4 className='text-start'>Our Services</h4>
          <ul>
            {webdata.Services.map((item,index)=>{
              return (<li key={item.id}><a href="#">{item.Name}</a></li>)

            })}
          </ul>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Avinash Kunnure</strong><span>All Rights Reserved</span></p>
    </div>
  </footer>
    </div>
  );
}

export default App;
