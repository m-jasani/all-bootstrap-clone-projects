// import React from 'react'

// export default function Scr4() {
//   return (
//     <div className='container-fluid' id="scr2">
//       <h2 className='pt-4'>What clients <span className='text-primary'>saying</span></h2>
      
//       <div id="carouselExampleFade" class="carousel slide carousel-fade">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img  className="col-md-5" src="https://www.azziptech.com/assets/img/clients/mcourse%20azziptech.png" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item ">
//       <img src="..." class="d-block w-100" alt="..."/>
      
//       <div class="card d-block w-90 col-md-2">
//   <img src="https://www.azziptech.com/assets/img/clients/mcourse%20azziptech.png" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//   </div>
// </div>
      
//     </div>
//     <div class="carousel-item ">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>




//     </div>
//   )
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DefaultArrowSlider = () => {
  const settings = {
    dots: false,            // Shows dots navigation at the bottom
    infinite: true,        // Loop the slides infinitely
    speed: 500,            // Transition speed in milliseconds
    slidesToShow: 1,       // Number of slides to show
    slidesToScroll: 1,     // Number of slides to scroll at once
    arrows: true,          // Enable default arrow buttons
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mt-5 bg-primary">
      <h2>React Slick with Default Arrow Buttons</h2>
      <Slider {...settings}>


        <div>
          {/* <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" /> */}
          <div class="card mb-3 container-fluid w-100 ">
           
             <img src="https://www.azziptech.com/assets/img/clients/GMCB%20Azziptech.png" class="card-img-top w-25  align-self-center" alt="..."/>
  
                <div class="card-body">
                  <h5 class="card-title">Web Development / App Development</h5>
                  <p class="card-text">AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!.</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
          </div>

        </div>


        <div>
          {/* <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" /> */}
          <div class="card mb-3 container-fluid w-100 ">
           
             <img src="https://www.azziptech.com/assets/img/clients/AJ%20Institue%20Azziptech.jpg"   class="card-img-top w-25 justify-content-centre align-self-center" alt="..."/>
  
                <div class="card-body">
                  <h5 class="card-title">Web Development / App Development</h5>
                  <p class="card-text">AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!.</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
          </div>
        </div>



        <div>
          {/* <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" /> */}
          <div class="card mb-3 container-fluid w-100 ">
           
             <img src="https://www.azziptech.com/assets/img/clients/mcourse%20azziptech.png"   class="card-img-top w-25 justify-content-centre align-self-center" alt="..."/>
  
                <div class="card-body">
                  <h5 class="card-title">Web Development / App Development</h5>
                  <p class="card-text">AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!.</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
          </div>
        </div>



        <div>
          {/* <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" /> */}
          <div class="card mb-3 container-fluid w-100 ">
           
             <img src="https://www.azziptech.com/assets/img/clients/AJ%20Institue%20Azziptech.jpg"   class="card-img-top w-25 justify-content-centre align-self-center" alt="..."/>
  
                <div class="card-body">
                  <h5 class="card-title">Web Development / App Development</h5>
                  <p class="card-text">AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!.</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
          </div>
        </div>



      </Slider>
    </div>
  );
};

export default DefaultArrowSlider;
