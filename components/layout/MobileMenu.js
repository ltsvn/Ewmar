'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="assets/images/resources/footer-logo-1.png" width="150" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Strona główna</Link></li>
                                <li><Link href="#about">O nas</Link></li>
                                {/*<li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>*/}
                                {/*    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 */}
                                {/*        <li><Link href="team">Team</Link></li>*/}
                                {/*        <li><Link href="testimonials">Testimonials</Link></li>*/}
                                {/*        <li><Link href="pricing">Pricing</Link></li>*/}
                                {/*        <li><Link href="gallery">Gallery</Link></li>*/}
                                {/*        <li><Link href="faq">Faq</Link></li>*/}
                                {/*        <li><Link href="404">404 Error</Link></li>*/}
                                {/*    </ul>*/}
                                {/*    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>*/}
                                {/*</li>*/}
                                <li><Link href="#services">Usługi</Link></li>
                                <li><Link href="#testimonial">Opinii</Link></li>
                                <li><Link href="#contact">Kontakt</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:biuro@firmaewmar.pl">biuro@firmaewmar.pl</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:166227237">166-227-237</Link>
                        </li>
                    </ul>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
