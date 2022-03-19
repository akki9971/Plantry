import React from 'react'
import { Footer, MainHeader, MobileFooter, MobileHeader, Navbar, ProductCard, TopHeader, UpperFooter } from '../components'

const Newpage = () => {
    const images = [
        'flowers/Birthday.jpg',
        'flowers/Syngonium.jpg',
        'flowers/Terrarium.jpg',
        'flowers/Cork.jpg',
    ]
  return (
      <>
        <TopHeader />
        <MainHeader />
        <Navbar />
        <MobileHeader />
        <div className="bg-light">
          <div className="d-sm-flex justify-content-evenly">
            <ProductCard images={images} />
            <ProductCard images={images} price="450" rating='5' name="abra ca dabra plant for kids" />
            <ProductCard images={images} price="529" rating='4.0' name="Money Plant Red & Tiger Eye Stones Face Pot"/>
            <ProductCard images={images} />
          </div>
          <div className="d-sm-flex d-flex justify-content-evenly">
            <ProductCard images={images} price="529" rating='4.0' name="Money Plant Red & Tiger Eye Stones Face Pot"/>
            <ProductCard images={images} />
            <ProductCard images={images} price="450" rating='5' name="abra ca dabra plant for kids" />
            <ProductCard images={images} />
          </div>
          <div className="d-sm-flex d-flex justify-content-evenly">
            <ProductCard images={images} price="450" rating='5' name="abra ca dabra plant for kids" />
            <ProductCard images={images} price="529" rating='4.0' name="Money Plant Red & Tiger Eye Stones Face Pot"/>
            <ProductCard images={images} />
            <ProductCard images={images} />
          </div>
        </div>
        <MobileFooter />
        <UpperFooter />
        <Footer />

      </>
    )
}

export default Newpage