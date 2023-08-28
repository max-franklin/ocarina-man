"use client"
import Image from 'next/image'

import savageRiverMax from './_assets/IMG_2665.jpg'
import mccarthyJumboTrailMax from './_assets/IMG-8085.jpg'
import ocarinaMan from './_assets/IMG-4081.jpeg'
import airborneDiseaseEstimatoriOS from './_assets/img_1b95dba9b742-1-4.jpeg'

import FadeInDiv from '@/components/FadeInDiv'

export default function Home() {

  return (
    <main className='bg-gradient-to-t from-green-100'>
      <div className='sm:container sm:mx-auto flex flex-col items-center'>
        <FadeInDiv>
          <h1>Hi, I'm Max!</h1>
          <Image 
            src={savageRiverMax}
            alt='Max next to one of the Savage River offshoots in Denali National Park'
            width={640}
          />
        </FadeInDiv>
        <FadeInDiv>
          <h1>I'm an Alaskan with a love for the outdoors</h1>
          <Image 
            src={mccarthyJumboTrailMax}
            alt='Max on W. ridge at the end of the Jumbo Mine Trail'
            width={640}
          />
        </FadeInDiv>
        <FadeInDiv>
          <h1>You might have heard me tooting my ocarina if you've ever hiked the chugach!</h1>
          <Image 
            src={ocarinaMan}
            alt='Ocarina Man Arctic Valley'
            width={640}
          />
        </FadeInDiv>
        <FadeInDiv>
          <h1>I'm also a software eningeer with a love for learning new technologies</h1>
          <Image 
            src={airborneDiseaseEstimatoriOS}
            alt="Airhounds' Airborne Disease Estimator iOS App"
            width={640}
          />
          <h1>Scroll down if you want to follow my (mis)adventures in the world!</h1>
        </FadeInDiv>
      </div>
    </main>
  )
}

