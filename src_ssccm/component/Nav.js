import React from 'react'

export default function Nav() {
  return (
    <div  id="nav1">
       <>
      <nav className="navbar navbar-expand-lg p-0  ">
  <div className="container-fluid">
    <a id="navimg" className="navbar-brand navbar nav-left text-light" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='d-flex justify-content-end'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-0 ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Students Section</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Staff Section</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">News & Updates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">College Tour</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact Us</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul> 
    </div>
    </div>
  </div>
</nav>
      </>
    </div>
  )
}
