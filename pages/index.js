import Head from 'next/head'
import Carousel from '../component/carousel/Carousel'

import ViewEverything from '../component/viewEverything/ViewEverything'
import NewsLetter from '../component/newsLetter/Newsletter'
import Hero from '../component/hero/Hero'
import SeparatingTxt from '../component/separatingTxt/SeparatingTxt'
import SimplePlan from '../component/simplePlan/SimplePlan'
import CircleCarousel from '../component/circleCarousel/CircleCarousel'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Hero/>
        <CircleCarousel/>
     
        <ViewEverything txt='VIEW EVERYTHING'/>
        <SeparatingTxt txt='LOOKING GOOD'/>
        <SimplePlan/>
    
        <NewsLetter/>
    </div>
  )
}
