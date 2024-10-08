'use client';
import Link from "next/link"
import { useRef, useEffect } from "react";

const images = Array.from({ length: 12 }, (_, index) => ({
    img: `assets/images/services-gallery/${index + 1}.webp`,
    title: `Project Image ${index + 1}`
}));
export default function Services2() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        // Opcjonalnie: można dodać automatyczne przewijanie lub inne interakcje tutaj
    }, []);
    return (
        <>

        {/*Services Two Start */}
        <section className="services-two" id="services">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Nasza oferta</span>
                    </div>
                    <h2 className="section-title__title">Profesjonalne usługi instalacyjne<br/> dla Twojego komfortu</h2>
                </div>
                <div>
                    <div className="row justify-content-around">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/services-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Montaż i wymiana kotłów gazowych</Link></h3>
                                <p className="services-two__text">Zaufaj naszym ekspertom w montażu i wymianie kotłów gazowych, zapewniając wydajne, bezpieczne i efektywne ogrzewanie w Twoim domu.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/services-2-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Usługi wodno-kanalizacyjne i CO</Link></h3>
                                <p className="services-two__text">Świadczymy kompleksowe usługi w zakresie instalacji wodno-kanalizacyjnych oraz centralnego ogrzewania, gwarantując najwyższą jakość wykonania.</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    </div>
                    <div className="row justify-content-around">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/services-2-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Instalacje pomp ciepła</Link>
                                </h3>
                                <p className="services-two__text">Specjalizujemy się w instalacji pomp ciepła, które stanowią ekologiczne i energooszczędne rozwiązanie dla każdego rodzaju budynku.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/services/services-2-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="service-details">Montaż klimatyzacji</Link>
                                </h3>
                                <p className="services-two__text">Oferujemy profesjonalny montaż klimatyzacji, abyś mógł cieszyć się idealną temperaturą i komfortem przez cały rok, niezależnie od pogody.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="project-one__carousel-container" ref={containerRef}>
                    <div className="gallery-container">
                        {images.map((image, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={image.img} alt={image.title} />
                            </div>
                        ))}
                    </div>
                    {/*<ImageList variant="masonry" cols={4} gap={8}>*/}
                    {/*    {images.map((item) => (*/}
                    {/*        <ImageListItem key={item.img}>*/}
                    {/*            <img*/}
                    {/*                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                    {/*                src={`${item.img}?w=248&fit=crop&auto=format`}*/}
                    {/*                alt={item.title}*/}
                    {/*                loading="lazy"*/}
                    {/*            />*/}
                    {/*        </ImageListItem>*/}
                    {/*    ))}*/}
                    {/*</ImageList>*/}
                </div>
            </div>
        </section>
        {/*Services Two End */}
            

        </>
    )
}
