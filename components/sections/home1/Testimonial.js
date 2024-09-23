'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react";
import {Avatar, Card, CardContent, Rating, Typography} from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 2,
    navigation: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
};

export default function Testimonial() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('/api/google-reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Błąd pobierania opinii', error);
            }
        };

        fetchReviews();
    }, []);

    console.log(reviews)

    return (
        <>
            <section className="testimonial-one" id="testimonial">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Opinie</span>
                        </div>
                        <h2 className="section-title__title">Dołącz do naszych zadowolonych klientów</h2>
                    </div>
                    <div className="reviews-container">
                        {reviews.length > 0 ? (
                            <Swiper {...swiperOptions} className="swiper">
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <ReviewCard review={review} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p>Ładowanie opinii...</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

const ReviewCard = ({ review }) => {
    return (
        <Card sx={{
            width: '90%',
            margin: '0 auto',
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
            borderRadius: '16px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{
                    width: 80,
                    height: 80,
                    marginBottom: 2,
                    backgroundColor: '#ff9800',
                    fontSize: '32px',
                    color: 'white'
                }}>
                    {review.author_name[0]}
                </Avatar>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333' }}>
                    {review.author_name}
                </Typography>
                <Rating
                    name="read-only"
                    value={review.rating}
                    readOnly
                    precision={0.5}
                    sx={{ marginBottom: 1 }}
                />
                <Typography variant="body1" sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                    "{review.text}"
                </Typography>
            </CardContent>
        </Card>
    );
};

