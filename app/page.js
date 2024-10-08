import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Services2 from "@/components/sections/home1/Services2"
import About from "@/components/sections/home1/About"
import Slidingtext from "@/components/sections/home1/Slidingtext"
import Project from "@/components/sections/home1/Project"
import Whychoose from "@/components/sections/home1/Whychoose"
import Counter from "@/components/sections/home1/Counter"
import Brand from "@/components/sections/home1/Brand"
import Faq from "@/components/sections/home1/Faq"
import Contact from "@/components/sections/home1/Contact"
import Testimonai from "@/components/sections/home1/Testimonial"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Services/>
                <About/>
                <Slidingtext/>
                <Project/>
                <Services2/>
                <Brand/>
                {/*<Pricing/>*/}
                <Whychoose/>
                <Counter/>
                {/*<Faq/>*/}
                <Testimonai/>
                <Contact/>

                
            </Layout>

        </>
    )
}