import React from 'react'
import { TopHeader, MainHeader, MobileFooter, Navbar, UpperFooter, Footer, ContactComp, MobileHeader } from '../../components'


function Contact() {
  return (
    <>
          <TopHeader />
          <MainHeader />
          <Navbar />
          <MobileHeader />

          <ContactComp />
          <MobileFooter />
          <UpperFooter />
          <Footer />
    </>
  )
}

export default Contact