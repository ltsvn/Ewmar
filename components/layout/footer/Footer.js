import Link from "next/link"

export default function Footer() {
    return (
        <>
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div className="site-footer__shape-1">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="/"><img src="assets/images/resources/footer-logo-1.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget__about-text"><strong>Dostarczamy części. Instalujemy pewność.</strong><br/>Zaufaj ekspertom – skontaktuj się z nami i zrealizuj swój projekt!</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Usługi</h3>
                                    </div>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li>
                                            <Link href="#services">Montaż i wymiana kotłów gazowych
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services">Instalacje pomp ciepła
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services">Montaż klimatyzacji
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services">Usługi wodno-kanalizacyjne i CO
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__contact">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Kontakt</h3>
                                    </div>
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <p><Link href="mailto:biuro@firmaewmar.pl">biuro@firmaewmar.pl</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <div className="content">
                                                <p>ul. Kazimierza Wielkiego 15,<br />37-530 Sieniawa</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="content">
                                                <p><Link href="tel:166227237">166-227-237</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*Site Footer End*/}

        </>
    )
}
