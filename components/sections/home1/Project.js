'use client';
import { ImageList, ImageListItem } from "@mui/material";
import { useRef, useEffect } from "react";

const images = Array.from({ length: 51 }, (_, index) => ({
    img: `assets/images/gallery/${index + 1}.jpg`,
    title: `Project Image ${index + 1}`
}));

export default function Project() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        // Opcjonalnie: można dodać automatyczne przewijanie lub inne interakcje tutaj
    }, []);

    return (
        <>
            {/* project One Start */}
            <section className="project-one" id="shop">
                <div className="project-one__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="project-one__left">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <span className="section-title__tagline">Nasz sklep</span>
                                        </div>
                                        <h2 className="section-title__title">
                                            W naszym sklepie możecie znaleźć wszystko co potrzebujecie dla komfortnego życia
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="project-one__right">
                                    <p className="project-one__text">
                                        Od zaworów, armatury i elementów instalacyjnych, aż po kompleksowe systemy zgrzewane – oferujemy pełne wyposażenie, które spełni potrzeby każdego projektu hydraulicznego.
                                    </p>
                                </div>
                            </div>
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
            {/* project One End */}
        </>
    );
}
