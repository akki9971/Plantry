import Link from 'next/link'
import React from 'react'
import { Footer, SectionBox, UpperFooter, ZoomedImage } from '../Shared'
import { Banner, International, Reviews, FactsWhyUs } from './sections'


export const HomePage = () => {
  return (
    <>
      <Banner src="Images/banners/plants_banner.jpg" />
      <div className="page-title">
        <h1 className="text-center my-2">
          Explore Plants for Home &amp; Office
        </h1>
        <p className="text-center">
          reviews <a href="#reviewsSection" className="td-none">10278 reviews</a>
        </p>
      </div>
      <SectionBox>
        <div className="title">
          <h2>Best Selling Plants</h2>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide d-block d-sm-none" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <ZoomedImage src="Images/categories/indoor.jpg" />
            </div>
            <div className="carousel-item">
              <ZoomedImage src="Images/categories/bestseller.jpg" />
            </div>
            <div className="carousel-item">
              <ZoomedImage src="Images/categories/airpurify.jpg" />
            </div>
          </div>
        </div>
        <div className="row d-none d-sm-flex">
          <div className="col-6 col-sm-4 mt-2 mx-sm-0">
            <ZoomedImage src="Images/categories/indoor.jpg" />
          </div>
          <div className="col-6 col-sm-4 mt-2 mx-sm-0">
            <ZoomedImage src="Images/categories/bestseller.jpg" />
          </div>
          <div className="col-6 col-sm-4 mt-2 mx-sm-0">
            <ZoomedImage src="Images/categories/airpurify.jpg" />
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>Plants by Occasion</h2>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/birthday.jpg" />
                  <h6 className="c-name">
                    Birthday
                  </h6>
                </a>
              </Link>
            </div>

          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/birthday.jpg" />
                  <h6 className="c-name">
                    Anneversery
                  </h6>
                </a>
              </Link>
            </div>

          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/birthday.jpg" />
                  <h6 className="c-name">
                    House Warming
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/birthday.jpg" />
                  <h6 className="c-name">
                    Love N Romance
                  </h6>
                </a>
              </Link>
            </div>

          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>Plants by Placement</h2>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Outdoor
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Indoor
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Bedroom
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Office Desk
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Living Room
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Terrace &amp; Balcony
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Bathroom
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Outdoor.jpg" />
                  <h6 className="c-name">
                    Vastu
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>

      </SectionBox>

      <SectionBox>
        <div className="row">
          <div className="col-sm-6 mt-2 mx-sm-0">
            <ZoomedImage src="Images/banners/Plant-Sets.jpg" name="banner image" />
          </div>
          <div className="col-sm-6 mt-2 mx-sm-0 d-none d-sm-block">
            <ZoomedImage src="Images/banners/Plant-Sets.jpg" name="banner image" />
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>Plants by Types</h2>
        </div>
        <div className="row">
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Terrariums
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Air Purifying Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Bonsai Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Flowering Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Cactus &amp; succulents
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Foliage Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Ornamental Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Herbs &amp; Medicinal Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 mt-2 mx-sm-0 d-block d-sm-none">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={true} />
                  <h6 className="c-name hide_over_text">
                    Plant Sets
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="row">
          <div className="col-12 col-sm-4 mt-2 mx-sm-0">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
          <div className="col-12 col-sm-4 mt-2 mx-sm-0 d-none d-sm-block">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
          <div className="col-12 col-sm-4 mt-2 mx-sm-0 d-none d-sm-block">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>Plants by Names</h2>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Lucky Bamboo
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Money Plants
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Syngonium
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Piece Lily
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Ficus
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Jade
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Syngonium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Snake
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Terrarium.jpg" rounded={false} />
                  <h6 className="c-name">
                    Hibiscus
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>New Launches</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 mt-2 mx-sm-0">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
          <div className="col-12 col-sm-4 mt-2 mx-sm-0 d-none d-sm-block">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
          <div className="col-12 col-sm-4 mt-2 mx-sm-0 d-none d-sm-block">
            <ZoomedImage src="Images/banners/New-Arrivals.jpg" name="banner image" />
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>Planter Types</h2>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Cork.jpg" />
                  <h6 className="c-name">
                    Lucky Bamboo
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Cork.jpg" />
                  <h6 className="c-name">
                    Glass
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Cork.jpg" />
                  <h6 className="c-name">
                    Egyptian Art
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/flowers/Cork.jpg" />
                  <h6 className="c-name">
                    Folk Art Planters
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>


      <SectionBox>
        <div className="title">
          <h2>Planter Combos</h2>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Plant-n-Cake.jpg" />
                  <h6 className="c-name hide_over_text">
                    Plants With Cake
                  </h6>
                </a>
              </Link>
            </div>

          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Plant-n-Cake.jpg" />
                  <h6 className="c-name hide_over_text">
                    Plants With Chocolates
                  </h6>
                </a>
              </Link>
            </div>

          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Plant-n-Cake.jpg" />
                  <h6 className="c-name hide_over_text">
                    Plants with Flowers
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Plant-n-Cake.jpg" />
                  <h6 className="c-name hide_over_text">
                    Plants with Personalies Gifts
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>

      <SectionBox>
        <div className="title">
          <h2>More Happy Corners</h2>
        </div>
        <div className="row">
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Gardening Tools
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Terrace Gardens
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Seeds
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Vertical Gardens
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Landscaping Gardens
                  </h6>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 mt-2 mx-sm-0">
            <div className="smd_card">
              <Link href="/newpage" >
                <a className="td-none">
                  <ZoomedImage src="Images/Categories/Gardening-Tools.jpg" />
                  <h6 className="c-name hide_over_text">
                    Corporate enquires
                  </h6>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SectionBox>

      <International />

      <SectionBox>
        <Reviews />
      </SectionBox>

      <FactsWhyUs />
      <UpperFooter />
      <Footer />
    </>
  )
}
