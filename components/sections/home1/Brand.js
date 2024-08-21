'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}

export default function Brand() {
    return (
        <>

        {/*Brand One Start*/}
        <section className="brand-one">
            <div className="container">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                        <div className="swiper-slide align-items-center">
                            <img src="assets/images/brand/brand-1-1.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-2.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-3.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-4.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-5.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-6.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-7.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-8.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-9.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-10.svg" alt="" width={172} height={100}/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
        {/*Brand One End*/}
            
        </>
    )
}
