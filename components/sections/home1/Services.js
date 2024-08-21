import Link from "next/link"
export default function Services() {
    return (
        <>

        {/*Services One Start */}
        <section className="services-one">
            <div className="container">
                <div className="row">
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-swift-cargo"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Kompleksowa oferta instalacyjna</Link></h3>
                                <p className="services-one__text">Szeroki asortyment materiałów do realizacji każdego projektu.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-proconstruct"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Wysoka jakość i niezawodność</Link></h3>
                                <p className="services-one__text">Produkty od renomowanych producentów, gwarantujące trwałość.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-constructo-pro"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Fachowe doradztwo i wsparcie</Link></h3>
                                <p className="services-one__text">Pomoc na każdym etapie, od wyboru produktów po instalację.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <span className="icon-renovate"></span>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="service-details">Szybka realizacja zamówień</Link></h3>
                                <p className="services-one__text">Sprawna dostawa dzięki dobrze zorganizowanej logistyce.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                </div>
            </div>
        </section>
        {/*Services One Start */}
            

        </>
    )
}
