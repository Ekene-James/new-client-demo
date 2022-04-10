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
import OneSideCircleCarousel from '../component/circleCarousel/OneSideCircleCarousel'
import ImageAndTxt from '../component/imageAndTxt/ImageAndTxt'
import ImgGalery from '../component/imgGalery/ImgGalery'

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
        <OneSideCircleCarousel 
          imgSrc='https://svitch.bike/wp-content/uploads/2020/09/Accera-bike-2.png'
          header='The Power House'
          desc='Bikes have a large engine in the front, and you have a gearbox, which is cumbersome. Electric bikes do not have these problems, the motor is much smaller, and the battery is much more powerful. This will allow you to play with different shapes and dimensions of the roads. Svitch bike comes with various batter options. 1. MXE- 36 Volt, 8.7AH & 36 Volt, 9.6 AH 2. XE & XE+ – 48 Volt, 11.6 AH & 48 Volt, 14.5 Ah.'
        />
        <OneSideCircleCarousel 
          imgSrc='https://svitch.bike/wp-content/uploads/2020/09/Accera-bike-1.png'
          header='Dual Suspension'
          direction='row-reverse'
          desc='The Mozo Suspension used in the svitch bike makes the ride comfortable in the most bumpy rides. The lockable suspension can be tweaked as per the road you are riding on. The rear suspension makes it smooth for the rider and reduces the jerks on back.'
        />
        <ImageAndTxt 
          imgSrc='https://svitch.bike/wp-content/uploads/2020/09/Flexible-bike-2.png'
          header='Flexible'
          
          desc='We know it’s hard to carry cycles around, each time you go on a hike or a trip. But we’ve got you covered. Svitch is a completely foldable bike which can even fit in the trunk of your car.
          Flip it! Fold it! Take it!'
        />
        <ImageAndTxt 
          imgSrc='https://svitch.bike/wp-content/uploads/2020/09/Sturd1y.png'
          header='Sturdy'
          direction='row-reverse'
          desc='Made with premium quality Aluminum 6061, so that it can sustain the extremities which your adventure demands.'
        />
        
    
        <NewsLetter/>
    </div>
  )
}
