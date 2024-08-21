'use client'
import Link from "next/link"

export default function Slidingtext() {
    
    return (
        <>

        {/* Sliding Text Start */}
        <section className="sliding-text">
            <div className="sliding-text__inner">
                <ul className="sliding-text__list marquee_mode d-flex">
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-renovate"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Profesjonalna instalacja</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-hammer"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Gwarancja bezpieczeństwa</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-under-construction"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Komfort i ciepło</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-paint-roller"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Wysoka jakość</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-renovate"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Pewność i spokój</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-hammer"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Centralne ogrzewanie</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-under-construction"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Niezawodny montaż</Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__icon"><span className="icon-paint-roller"></span></Link>
                    </li>
                    <li>
                        <Link href="" className="sliding-text__text">Zaufaj ekspertom</Link>
                    </li>
                </ul>
            </div>
        </section>
        {/* Sliding Text End */}
        
        </>
    )
}
