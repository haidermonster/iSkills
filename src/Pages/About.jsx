import React from 'react'
import Sabout from '../Components/Sabout';
import Hsection2 from '../Components/Hsection2';
import Lasthero from '../Components/Lasthero';
import Testinomials from '../Components/Testinomials';
import Team from '../Components/Team';

function About() {
  return (
    <>

<div class="bg-[url('hero2.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen overflow-y-hidden">

<div class=" relative object-cover h-screen overflow-y-hidden bg-black/60 ">


<div className='text-center mt-32'>
          <p className='text-3xl text-white font-bold'>About Us</p>
        </div>


</div>
</div>
        

      


      <Sabout />
      <Hsection2/>
<Team/>
<Testinomials/>
      <Lasthero/>

    </>
  )
}

export default About