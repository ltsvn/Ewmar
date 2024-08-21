
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
    <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Kontakt">
        
        {/*Contact Page Start*/}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <div className="contact-page__img">
                                <img src="assets/images/resources/contact-page-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <h3 className="contact-page__title">Masz pytania? Skontaktuj się z nami!</h3>
                            <ul className="contact-page__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-location"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Lokalizacja</h3>
                                        <p>ul. Kazimierza Wielkiego 15 <br/>37-530 Sieniawa</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Telefon</h3>
                                        <p><Link href="tel:166227237">166-227-237</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Email</h3>
                                        <p><Link href="mailto:info@exampleyourmail.com">biuro@firmaewmar.pl</Link></p>
                                    </div>
                                </li>
                            </ul>
                            {/*<div className="contact-page__social">*/}
                            {/*    <Link href="#"><i className="icon-facebook"></i></Link>*/}
                            {/*    <Link href="#"><i className="icon-twitter"></i></Link>*/}
                            {/*    <Link href="#"><i className="icon-instagram"></i></Link>*/}
                            {/*    <Link href="#"><i className="icon-link-in"></i></Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.981864902464!2d22.608165199999995!3d50.180175399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cbc258f029bdf%3A0x58ad0d40844ac85e!2sKazimierza%20Wielkiego%2015%2C%2037-530%20Sieniawa!5e0!3m2!1suk!2spl!4v1723805541376!5m2!1suk!2spl"
                width="800" height="600"  allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="google-map__one"></iframe>

        </section>
        {/*Google Map End*/}

        {/*/!*Contact Three Start*!/*/}
        {/*<section className="contact-three">*/}
        {/*    <div className="container">*/}
        {/*        <div className="row">*/}
        {/*            <div className="section-title text-center">*/}
        {/*                <div className="section-title__tagline-box">*/}
        {/*                    <span className="section-title__tagline">Get in touch</span>*/}
        {/*                </div>*/}
        {/*                <h2 className="section-title__title">Send us a message</h2>*/}
        {/*            </div>*/}
        {/*            <form action="assets/inc/sendemail.php" className="contact-three__form contact-form-validated">*/}
        {/*                <div className="row">*/}
        {/*                    <div className="col-xl-3 col-lg-6">*/}
        {/*                        <div className="contact-three__input-box">*/}
        {/*                            <input type="text" placeholder="Your Name" name="name"/>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="col-xl-3 col-lg-6">*/}
        {/*                        <div className="contact-three__input-box">*/}
        {/*                            <input type="email" placeholder="Your Email" name="email"/>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="col-xl-3 col-lg-6">*/}
        {/*                        <div className="contact-three__input-box">*/}
        {/*                            <input type="text" placeholder="Phone Number" name="Phone"/>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="col-xl-3 col-lg-6">*/}
        {/*                        <div className="contact-three__input-box">*/}
        {/*                            <input type="text" placeholder="Your Subject" name="Subject"/>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="row">*/}
        {/*                    <div className="col-xl-12 col-lg-12">*/}
        {/*                        <div className="contact-three__input-box text-message-box">*/}
        {/*                            <textarea name="message" placeholder="Write your Message"></textarea>*/}
        {/*                        </div>*/}
        {/*                        <div className="contact-three__btn-box">*/}
        {/*                            <button type="submit" className="thm-btn contact-three__btn">Send message<span*/}
        {/*                                    className="icon-dabble-arrow-right"></span></button>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </form>*/}
        {/*            <div className="result"></div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*/!*Contact Three End*!/*/}

        {/*/!*CTA One Start*!/*/}
        {/*<section className="cta-one">*/}
        {/*    <div className="container">*/}
        {/*        <div className="cta-one__inner">*/}
        {/*            <div className="cta-one__shape-1">*/}
        {/*                <img src="assets/images/shapes/cta-one-shape-1.png" alt=""/>*/}
        {/*            </div>*/}
        {/*            <div className="cta-one__img">*/}
        {/*                <img src="assets/images/resources/cta-one-img.png" alt=""/>*/}
        {/*            </div>*/}
        {/*            <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>*/}
        {/*            <div className="cta-one__from-box">*/}
        {/*                <form className="cta-one__form">*/}
        {/*                    <div className="cta-one__input-box">*/}
        {/*                        <input type="email" placeholder="Your E-mail" name="email"/>*/}
        {/*                    </div>*/}
        {/*                    <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>*/}
        {/*                </form>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*/!*CTA One End*!/*/}

    </Layout>
    </>
    )
}