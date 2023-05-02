import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainWindow from './UI/MainWindow'
import SideBar from './UI/SideBar';
import { Route,Routes,Link } from 'react-router-dom';
import { Contacts } from './UI/Contacts';
import Aboutsus from './UI/Aboutsus';
function App() {
  return (
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Avinash Kunnure <span className='Cursor-Anim'>|</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" to="/" aria-current="page">Home</Link>
                <Link className="nav-link active" to="/aboutus" >About</Link>
                
              </div>
            </div>
          </div>
        </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-12'>
          <div className='row'>
              <div className='container'>
              <SideBar></SideBar>
              </div>
            </div>
         
          </div>
          <div className='col-lg-10 col-md-10 col-sm-12'>
            <div className='row'>
              <div className='container pb-2'>
                <Routes>
                  <Route path='/' element={<MainWindow/>} />
                  <Route path='/aboutus' element={<Aboutsus/>} />
                  <Route path='/contactus' element={<Contacts/>} />
                </Routes>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
