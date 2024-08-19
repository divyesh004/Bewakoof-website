import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Home_m = () => {
  return (
    <div style={{ paddingTop: "10px" }} className="p-2">
      <div className="d-block d-lg-none">
        <div className="mb-3">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/HC-1X1-classic-fit-T-common-1721715642.jpg"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link> <img src="https://images.bewakoof.com/uploads/grid/app/HC-1X1-bottoms-ezgif-com-optimize-1721822023.gif"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/Deadpool-1x1-launch-02--1--1721983919.jpg"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-DPW-03-1721891430.jpg"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/Oversize-tshirts-Buy2at999-Common-1x1-Banner--1--1721971803.jpg"></img></Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="container-fluid m-0 mb-3">
          <div className="row">
            <div className="col-12 p-0">
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-deadpool-1721970853.jpg" style={{ width: "100%", height: "100%" }}></img></Link>
            </div>

          </div>

        </div>

        <div>
          <h1 className="text-center" style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "2px", textAlign: "center" }}>Shop by Category- Men
          </h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 d-flex flex-column">
              <ul className="list-unstyled">
                <Link className="col-6"> <li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Os-Tshirts-Men-1718891518.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Classic-fit-T-shirts--1--1719561701.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-3-1717767102.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-4-1717767102.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-5-1717767103.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-6-1717767103.jpg" style={{ width: "100%" }}></img></li></Link>
              </ul>
            </div>

          </div>

        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 d-flex flex-column">
              <ul className="list-unstyled">
                <Link className="col-6"> <li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-7-1717767103.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-8-1717767104.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-9-1717767104.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-10-1717767105.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-11-1717767105.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Men-12-1717767105.jpg" style={{ width: "100%" }}></img></li></Link>
              </ul>
            </div>

          </div>

        </div>
        <div>
          <h1 className="text-center" style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "2px", textAlign: "center" }}>Shop by Category- Women
          </h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 d-flex flex-column">
              <ul className="list-unstyled">
                <Link className="col-6"> <li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Oversized-T-Shirts-Women-1719825670.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Boyfriend-T-Shirts-Women-1719825670.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-3-1717767106.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Cargos-Women-1719835750.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Joggers-1718888705.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-6-1717767108.jpg" style={{ width: "100%" }}></img></li></Link>
              </ul>
            </div>

          </div>

        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 d-flex flex-column">
              <ul className="list-unstyled">
                <Link className="col-6"> <li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-7-1717767108.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Dresses-1718888706.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-9-1717767109.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Co-Ords-1718888706.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-Shirts-1718888707.jpg" style={{ width: "100%" }}></img></li></Link>
                <Link className="col-6"><li className="mb-2"><img src="https://images.bewakoof.com/uploads/grid/app/TrendingCategory-Carousel-600x750-new-Women-12-1717767111.jpg" style={{ width: "100%" }}></img></li></Link>
              </ul>
            </div>

          </div>

        </div>
        <div>
          <h1 className="text-center" style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "2px", textAlign: "center" }}>Bewakoof Originals
          </h1>
        </div>

        <div className="mb-3">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-HEAVYDUTY-common-ezgif-com-optimize-1719843541.gif"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-PIMA-men--1--1719843539.jpg"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link> <img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link> <img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-HEAVYDUTY-common-ezgif-com-optimize-1719843541.gif"></img></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link><img src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-PIMA-men--1--1719843539.jpg"></img></Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="widget ">
                <ul className="list-unstyled d-flex flex-column justify-content-between text-center">
                  <li className="col-12">
                    <div
                      class="widgetSliderInner" style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/IK-148x222--1--1721292599.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/RM-148x222--1721293189.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p >Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/Men-148x222--1--1721292600.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/Plus-size-148x222--2--1721292600.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/Customisation-148x222-1721292601.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/Vote-for-design-148x222-1721292601.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                  <li className="col-12">
                    <div
                      class="widgetSliderInner"
                      style={{ margin: "0px 25px 0px 0px" }}
                    >
                      <Link style={{ textDecoration: "none", fontSize: "13px", color: "black", fontWeight: "bold" }}>
                        <div class="widgetImg">
                          <img
                            src="https://images.bewakoof.com/uploads/grid/app/Last-sizes-left-148x222-1721292602.jpg"
                            alt="Bestsellersimage"
                            style={{ borderRadius: "10px" }}></img>
                        </div>
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home_m
