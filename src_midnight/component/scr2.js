import React from 'react'

export default function Scr2() {
  return (
    <div className='text-start my-5' id="scr1">
      <div className='mb-5'>
      <h2 className='ind'>Industries We Serve</h2>
      <h5 className=''>What we best at</h5>
      </div>

      <div className="container row">

      <div className="col-sm-3">
      <h3>We provide smart
      and best
       digital services</h3>
      </div>
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h6>education</h6>
        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div id="pro1" class="progress-bar progress-bar-striped  bg-dark">88%</div>
</div>
<h6>Healthcare</h6>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div id="pro2" class="progress-bar progress-bar-striped bg-dark">92%</div>
</div>
<h6>Real Estate</h6>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div id="pro3" class="progress-bar progress-bar-striped bg-dark">80%</div>
</div>
<h6>Others</h6>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div id="pro4" class="progress-bar progress-bar-striped bg-warning bg-dark">70%</div>
</div>

      </div>
      
</div>


    </div>
  )
}
