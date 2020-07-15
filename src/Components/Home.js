import React from "react";
import shoe1 from "../images/shoe1.png";
import shoe2 from '../images/shoe2.png'
function Home() {
  return (
    <div style={{backgroundColor: "black"}}>
      <img style={{ width: "100%" }} src={shoe1} alt="" />
      <div style={{margin: "1% 0"}}
            id="carouselExampleIndicators"
            className="carousel slide carousel-container"
            data-ride="carousel"
            data-interval="2500"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 carousel-img"
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/06e5efae-59f0-4c9f-a926-dc7b189fab1b/air-foamposite-1-mens-shoe-vp919X.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carousel-img"
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/917b3c88-aa0b-4104-ac6f-1a9ae96aa49d/air-foamposite-pro-mens-shoe-74dxT0.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carousel-img"
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f9bc71f6-ccb8-4bea-a6f2-6b4555959c4c/air-foamposite-1-mens-shoe-LYG2Xg.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div>
            <img style={{width: "100%"}} src={shoe2} alt="" />
          </div>
      </div>
          
  );
}

export default Home;
