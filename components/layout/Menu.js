import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Strona główna </Link>
                </li>
                <li>
                    <Link href="#about">O nas</Link>
                </li>
                {/*<li>*/}
                {/*    <Link href="gallery">Gallery</Link>*/}
                {/*</li>*/}
                {/*<li className="dropdown">*/}
                {/*    <Link href="#">Pages</Link>*/}
                {/*    <ul>*/}
                {/*        <li><Link href="team">Team</Link></li>*/}
                {/*        <li><Link href="testimonials">Testimonials</Link></li>*/}
                {/*        <li><Link href="pricing">Pricing</Link></li>*/}
                {/*        <li><Link href="faq">Faq</Link></li>*/}
                {/*        <li><Link href="404">404 Error</Link></li>                        */}
                {/*    </ul>*/}
                {/*</li>*/}
                <li>
                    <Link href="#services">Usługi</Link>
                </li>
                <li>
                    <Link href="#testimonial">Opinii</Link>
                </li>
                <li>
                    <Link href="#contact">Kontakt</Link>
                </li>
            </ul>
        </>
    )
}
