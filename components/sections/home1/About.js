import Link from "next/link"


export default function About() {
    return (
        <>
        {/*About One Start */}
        <section className="about-one" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">O NAS</span>
                                </div>
                                <h2 className="section-title__title">Rodzinna firma zaufania i jakości</h2>
                            </div>
                            <p className="about-one__text">Jesteśmy rodzinną firmą, która od pokoleń dostarcza najwyższej jakości rozwiązania instalacyjne. Nasza pasja do perfekcji i zaangażowanie w niezawodność sprawiają, że jesteśmy liderem w branży, na którego możesz zawsze liczyć.
                            </p>
                            <ul className="about-one__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Niezawodność i Jakość</Link></h3>
                                        <p>Nasze produkty i usługi są synonimem trwałości <br/> i niezawodności, na której możesz polegać.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-prestige"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Rodzinna Tradycja</Link></h3>
                                        <p>Z dumą kontynuujemy tradycje rodzinne, <br/> budując markę opartą na zaufaniu i doświadczeniu.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        </>
    )
}
