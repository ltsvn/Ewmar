'use client'
import Link from "next/link"
 

export default function Contact() {
    
    return (
        <>
        {/*Contact And Team Start*/}
        <section className="contact-and-team" id="contact">
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1473.0884989590943!2d22.60839235606413!3d50.18040434024791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cbc25859a8a27%3A0x55f758337a6ddf8!2zRmlybWEgIkVXTUFSIiBNYXJpdXN6IMWad2nEhWRlcg!5e1!3m2!1spl!2spl!4v1726060046454!5m2!1spl!2spl"
                    width="800" height="600" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className="google-map__one"></iframe>

            </section>
        </section>
        {/*Contact And Team End*/}
            
        </>
    )
}
