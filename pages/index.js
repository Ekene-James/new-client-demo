import Head from 'next/head'


import ViewEverything from '../component/viewEverything/ViewEverything'
import NewsLetter from '../component/newsLetter/Newsletter'
import Hero from '../component/hero/Hero'
import SeparatingTxt from '../component/separatingTxt/SeparatingTxt'
import SimplePlan from '../component/simplePlan/SimplePlan'
import CircleCarousel from '../component/circleCarousel/CircleCarousel'
import ProgressBarContainer from '../component/ProgressBar/ProgressBarContainer'
import PrimeMovers from '../component/primeMovers/PrimeMovers'
import UltimateComfort from '../component/ultimateComfort/UltimateComfort'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Hero/>
        <CircleCarousel/>
     
        <ViewEverything />
        <ProgressBarContainer/>
        <PrimeMovers/>
        <UltimateComfort/>
        <SimplePlan/>
    
        <NewsLetter/>
    </div>
  )
}
