'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {useEffect, useState} from "react";
import axios from "axios";


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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


export default function Testimonial() {
    const [reviews, setReviews] = useState([]);
    const apiKey = 'AIzaSyCmmVt9h1vtUBRYFJ9s_865LgLWftq4CiI'; // Wstaw swój klucz API tutaj
    const placeId = 'ChIJJ4qahSW8PEcR-N2mN4N1XwU'; // Zastąp swoim ID miejsca (Place ID)

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
                );
                setReviews(response.data.result.reviews);
            } catch (error) {
                console.error('Błąd pobierania opinii', error);
            }
        };

        fetchReviews();
    }, [apiKey, placeId]);

    console.log(reviews)
    return (
        <>

        {/*Testimonial One Start*/}
        <section className="testimonial-one" id="testimonial">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Opinii</span>
                    </div>
                    <h2 className="section-title__title">Dołącz do naszych zadowolonych klientów</h2>
                </div>
                <div className="reviews-container">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <h3>{review.author_name}</h3>
                                <p className="rating">Ocena: {review.rating}/5</p>
                                <p>{review.text}</p>
                            </div>
                        ))
                    ) : (
                        <p>Ładowanie opinii...</p>
                    )}
                </div>
            </div>
        </section>
        {/*Testimonial One End*/}
            
        </>
    )
}
