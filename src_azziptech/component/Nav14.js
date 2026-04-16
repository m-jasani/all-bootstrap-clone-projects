import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      {/* <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
      <img alt="Home" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"  src="/assets/img/dark-mode-logo-azziptech.png"></img>
    </a>
  </div> */}
  <div className="container-fluid">
    <span>
    <a className="navbar-brand" href="#">
      <img src="https://www.azziptech.com/assets/img/azzip-blue.png" alt="Bootstrap" width="25%" height="25%"/>
      {/* <img alt="Home" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"  src="/assets/img/dark-mode-logo-azziptech.png"></img> */}
    </a>
    </span>
    
  
    {/* <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="justify-content-end">
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="drp">
            About US
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item text-dark" href="#">About US</a></li>
            <li><a className="dropdown-item" href="#">CEO</a></li>
            <li><a className="dropdown-item" href="#">Social Actity</a></li>
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="drp">
          Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">E-Logbook & LMS</a></li>
            <li><a className="dropdown-item" href="#">Web Development</a></li>
            <li><a className="dropdown-item" href="#">App Development</a></li>
            <li><a className="dropdown-item" href="#">App Development</a></li>
            <li><a className="dropdown-item" href="#">Software Development</a></li>
            <li><a className="dropdown-item" href="#">Dedicated Developers</a></li>
            <li><a className="dropdown-item" href="#">Chatbot</a></li>
            <li><a className="dropdown-item" href="#">Bulk Whatsapp</a></li>
            <li><a className="dropdown-item" href="#">Web Hosting</a></li>
            <li><a className="dropdown-item" href="#">Video Marketing</a></li>
            <li><a className="dropdown-item" href="#">Internship</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="drp" className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Technologies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">React.js</a></li>
            <li><a className="dropdown-item" href="#">React Native</a></li>
            <li><a className="dropdown-item" href="#">Next.js</a></li>
            <li><a className="dropdown-item" href="#">Node.js</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}
