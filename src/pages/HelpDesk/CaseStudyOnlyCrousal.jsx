import React from "react";
// import img1 from "../assets/carouselimg/image1.png";
// import "./ninth.css";
import Slider from "react-slick";
// import ImageWithHP from "../../SubComponent/ImageWithHP";
import CaseStudy from './CaseStudy'
const Ninth = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
    };

    return (

        // <div className="col-sm-12 col-md-6 col-lg-6 py-5 my-5">
        //     <div className="container-fluid p-0 m-0 row g-4">
        //         <div className="col-lg-12 col-md-12 col-12">
                    <Slider {...settings}>
                        {[0, 1, 2].map((e) => (
                                <CaseStudy />
                        ))}
                    </Slider>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Ninth