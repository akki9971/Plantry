import { HomePage, MainHeader, TopHeader,Navbar, UpperFooter, Footer, MobileFooter, MobileHeader } from '../components' 

export default function Home() {
  const nodeList = ['abc','bcd','cde','def'];
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Navbar />
      <MobileHeader />
      <HomePage />
      <MobileFooter />
      <UpperFooter />
      <Footer />
    </>
  )
}
