import { TopHeader, MainHeader, MobileFooter, Navbar, UpperFooter, Footer, MobileHeader } from '../components'

const Nopage = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <Navbar />
            <MobileHeader />
            <div className="nopage img-Wrapper">
                <h5 className="">
                    Maybe Page is Under Construction
                </h5>
                <span>
                    {/* <img src="/Images/cons.jpg" className="" /> */}
                </span>
            </div>

            <MobileFooter />
            <UpperFooter />
            <Footer />
        </>
    )
}

export default Nopage