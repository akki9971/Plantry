import React from 'react'
import { Footer, MainHeader, MobileFooter, MobileHeader, Navbar, TabSec, TopHeader, UpperFooter } from '../../components'

const Manage = ({ query}) => {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <Navbar />
            <MobileHeader />
            <TabSec query={query}/>
            <MobileFooter />
            <UpperFooter />
            <Footer />
        </>
    )
}

Manage.getInitialProps = ({ query }) => {
    return { query };
};
export default Manage