
import React from 'react'
import Header from '../components/DesktopOrLaptoparea/Header'
import Cardpart from '../components/DesktopOrLaptoparea/Cardpart'
import Searcharea from '../components/DesktopOrLaptoparea/Searcharea';
import Carousel from '../components/DesktopOrLaptoparea/Carousel';
import Sliderpart from '../components/DesktopOrLaptoparea/Sliderpart';
import Categorypart from '../components/DesktopOrLaptoparea/Categorypart';
import Footer from '../components/DesktopOrLaptoparea/Footer';
import Addproject from '../components/DesktopOrLaptoparea/Addproject';
import { useMediaQuery } from 'react-responsive'
import AddprojectMobile from '../components/TabletOrMobilearea/AddprojectMobile'
import ButtonhomeMobile from '../components/TabletOrMobilearea/ButtonhomeMobile'
import CardpartMobile from '../components/TabletOrMobilearea/CardpartMobile'
import CarouselMobile from '../components/TabletOrMobilearea/CarouselMobile'
import FooterMobile from '../components/TabletOrMobilearea/FooterMobile'
import HeaderMobile from '../components/TabletOrMobilearea/HeaderMobile'
import LoginareaMobile from '../components/TabletOrMobilearea/LoginareaMobile'
import LogoMobile from '../components/TabletOrMobilearea/LogoMobile'
import MapareaMobile from '../components/TabletOrMobilearea/MapareaMobile'
import NavbarMobile from '../components/TabletOrMobilearea/NavbarMobile'
import PricebarMobile from '../components/TabletOrMobilearea/PricebarMobile'
import SearchareaMobile from '../components/TabletOrMobilearea/SearchareaMobile'
import SinglehomeMobile from '../components/TabletOrMobilearea/SinglehomeMobile'
import SliderpartMobile from '../components/TabletOrMobilearea/SliderpartMobile'
import CategorypageMobile from '../components/TabletOrMobilearea/CategorypageMobile'
import AddprojectBig from '../components/BigScreenarea/AddprojectBig'
import ButtonhomeBig from '../components/BigScreenarea/ButtonhomeBig'
import CardpartBig from '../components/BigScreenarea/CardpartBig'
import CarouselBig from '../components/BigScreenarea/CarouselBig'
import CarouselsinglepageBig from '../components/BigScreenarea/CarouselsinglepageBig'
import CategorypageBig from '../components/BigScreenarea/CategorypageBig'
import CategorypartBig from '../components/BigScreenarea/CategorypartBig'
import FooterBig from '../components/BigScreenarea/FooterBig'
import HeaderBig from '../components/BigScreenarea/HeaderBig'
import LoginareaBig from '../components/BigScreenarea/LoginareaBig'
import LogoBig from '../components/BigScreenarea/LogoBig'
import NavbarBig from '../components/BigScreenarea/NavbarBig'
import PricebarBig from '../components/BigScreenarea/PricebarBig'
import SearchareaBig from '../components/BigScreenarea/SearchareaBig'
import SinglehomeBig from '../components/BigScreenarea/SinglehomeBig'
import SliderpartBig from '../components/BigScreenarea/SliderpartBig'




function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop &&
            <div>
                <Header/>
                <Carousel/>
                <Searcharea/>
                <Cardpart/>
                {/* <Sliderpart/>  */}
                {/* <Categorypart/> */}
                <Footer/>
                </div>
            }
            {/* {isBigScreen && 
            <div>
                <HeaderBig/>
                <CarouselBig/>
                <SearchareaBig/>
                <CardpartBig/>
               
                <CategorypartBig/>
                <FooterBig/>
            </div>
           } */}
            {isTabletOrMobile && 
            <div>
                
                <HeaderMobile/>
                <CarouselMobile/>
                <SearchareaMobile/>
                <CardpartMobile/>
                {/* <Sliderpart/>  */}
                {/* <CategorypageMobile/> */}
                <FooterMobile/>

            </div>
            }
            {/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
            {isRetina && <p>You are retina</p>} */}
      
        </div>
    )
}

export default Home
