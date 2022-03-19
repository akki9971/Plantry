import React from 'react'
import { TopHeader, MainHeader, MobileFooter, Navbar, UpperFooter, Footer, FaqComp, MobileHeader } from '../../components'

const Faq = () => {
  return (
    <>
        <TopHeader />
        <MainHeader />
        <Navbar />
        <MobileHeader />

        <FaqComp />
        <MobileFooter />
        <UpperFooter />
        <Footer />
    </>
  )
}

export default Faq