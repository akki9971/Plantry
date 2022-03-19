import { Footer, MainHeader, ProductDetail, SectionBox , Reviews, TopHeader, UpperFooter, MobileFooter, MobileHeader, Navbar } from "../components"


export default function proDetail() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Navbar />
      <MobileHeader />
      <ProductDetail />
      <SectionBox>
        <Reviews />
      </SectionBox>
      <MobileFooter />
      <UpperFooter />
      <Footer />
    </>
  )
}
