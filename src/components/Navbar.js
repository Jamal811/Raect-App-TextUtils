import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 rtl">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          </div>
          </div>

          <div className="d-flex justify-content-sm-end my-2">
          <div className='bg-primary rounded-circle mx-2' onClick={()=>{props.toogleMode('primary')}} style={{height: '20px', width: '20px'}}> </div>

          <div className='bg-danger rounded-circle mx-2' onClick={()=>{props.toogleMode('danger')}} style={{height: '20px', width: '20px'}}> </div>

          <div className='bg-success rounded-circle mx-2' onClick={()=>{props.toogleMode('success')}} style={{height: '20px', width: '20px'}}> </div>

          <div className='bg-warning rounded-circle mx-2' onClick={()=>{props.toogleMode('warning')}} style={{height: '20px', width: '20px'}}> </div>

          <div className='bg-dark rounded-circle mx-2' onClick={()=>{props.toogleMode('dark')}} style={{height: '20px', width: '20px'}}> </div>

          <div className='bg-light rounded-circle mx-2' onClick={()=>{props.toogleMode('light')}} style={{height: '20px', width: '20px'}}> </div>
          </div>

          {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div> */}
          
          <form className="d-flex my-1" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
    </nav>
  )
}
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}


Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'set about text'
};