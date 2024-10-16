import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function Scr3() {
//   return (
//     <div className='container-fluid' id="scr3">
//        <h2 className='py-4'>we are happy to <span className='text-primary'>work with our clients</span></h2>


//        <div className='d-flex justify-content-evenly' id="cards">

            

//        </div>



//      </div>
//   )
// }

const Scr3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (

<div className='container-fluid' id="scr3">
       <h2 className='py-4'>we are happy to <span className='text-primary'>work with our clients</span></h2>


    <div className="container " id="cards">
      <h2>Simple React Slick Slider</h2>
      <Slider {...settings}>
        <div className='card '>
          <img  className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/1-GMCB-Azziptech.jpg" alt="Slide 1" />
        </div>
        <div className='card'>
          <img  className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/2-aj-institute.jpg" alt="Slide 2" />
        </div>
        <div className='card'>
          <img  className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/3-mcourse.png" alt="Slide 3" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/5-business-insider.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/6-ima-bhavnagar.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/7-orrery-drugs.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top'  src="https://www.azziptech.com/assets/img/clients/8-gjmedphc1.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/11-NHL.jpg" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/snmcbgk.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/ssccm.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top ' src="https://www.azziptech.com/assets/img/clients/PU_NAAC.jpg" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/zydus.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top' src="https://www.azziptech.com/assets/img/clients/12-cusmc.png" alt="Slide 4" />
        </div>
        <div className='card'>
          <img className='col-sm-8 card-img-top ' src="https://www.azziptech.com/assets/img/clients/devarshi-lms.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </div>

</div>
  );
};

export default Scr3;
