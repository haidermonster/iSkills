import React from 'react'
import Hsection from '../Components/Hsection'
import Hsection2 from '../Components/Hsection2'
import Pricing from '../Components/Pricing'
import Portfolio from './Portfolio'
import Sabout from '../Components/Sabout'
import Testinomials from '../Components/Testinomials'
import Lasthero from '../Components/Lasthero'
import Sercard from '../Components/Sercard'

function Hero() {
  return (
    <>

<Hsection/>
<Sabout/>
<Hsection2/>
<Sercard/>

<Pricing/>
<Portfolio/>
<Testinomials/>
<Lasthero/>

    </>
  )
}

export default Hero