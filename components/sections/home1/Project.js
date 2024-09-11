'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Project() {
    
    return (
        <>
        {/* project One Start*/}
        <section className="project-one">
            <div className="project-one__top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="project-one__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Nasz sklep</span>
                                    </div>
                                    <h2 className="section-title__title">W naszym sklepie możecie znaleźć wszystko co potrzebujecie dla komfortnego życia
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="project-one__right">
                                <p className="project-one__text">Od zaworów, armatury i elementów instalacyjnych, aż po kompleksowe systemy zgrzewane – oferujemy pełne wyposażenie, które spełni potrzeby każdego projektu hydraulicznego. Nasze produkty to synonim trwałości i funkcjonalności, niezależnie od tego, czy budujesz od podstaw, czy modernizujesz istniejące systemy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="project-one__carousel-container">
                    <Swiper {...swiperOptions} className="project-one__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1">

                        {/*project Two Single Start*/}
                        <div className="project-one__single-box">
                            <ul className="project-one__box list-unstyled">
                                <SwiperSlide>
                                <li>
                                    <div className="project-one__box-content">
                                        <div className="single-project-one__bg"
                                            style={{ backgroundImage: 'url(assets/images/backgrounds/project-1-1.png' }} >
                                        </div>
                                    </div>
                                </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                <li className="active">
                                    <div className="project-one__box-content">
                                        <div className="single-project-one__bg"
                                            style={{ backgroundImage: 'url(assets/images/backgrounds/project-1-2.png' }} >
                                        </div>
                                    </div>
                                </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                <li>
                                    <div className="project-one__box-content">
                                        <div className="single-project-one__bg"
                                            style={{ backgroundImage: 'url(assets/images/backgrounds/project-1-3.png' }} >
                                        </div>
                                    </div>
                                </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                <li className="active">
                                    <div className="project-one__box-content">
                                        <div className="single-project-one__bg"
                                            style={{ backgroundImage: 'url(assets/images/backgrounds/project-1-2.png' }} >
                                        </div>
                                    </div>
                                </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                <li>
                                    <div className="project-one__box-content">
                                        <div className="single-project-one__bg"
                                            style={{ backgroundImage: 'url(assets/images/backgrounds/project-1-3.png' }} >
                                        </div>
                                    </div>
                                </li>
                                </SwiperSlide>
                            </ul>
                        </div>
                        {/*project Two Single End*/}
                    </Swiper>
                </div>
                <div className="swiper-pagination" id="main-slider-pagination"></div>
            </div>
        </section>
        {/* project One End */}
        </>
    )
}
