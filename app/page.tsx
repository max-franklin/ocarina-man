"use client"
import Image from 'next/image'

import savageRiverMax from './_assets/IMG_2665.jpg'
import mccarthyJumboTrailMax from './_assets/IMG-8085.jpg'
import ocarinaMan from './_assets/IMG-4081.jpeg'
import airborneDiseaseEstimatoriOS from './_assets/img_1b95dba9b742-1-4.jpeg'

import FadeInDiv from '@/components/FadeInDiv'

export default function Home() {

  return (
    <main className='bg-slate-100 px-4'>
    {/* <main className='bg-gradient-to-t from-slate-100 px-4'> */}
      <div className='sm:container sm:mx-auto flex flex-col items-center antialiased text-center text-4xl'>
        <FadeInDiv className='pt-12'>
          <h1 className='pb-4'>Hi, I'm Max!</h1>
          <Image 
            className='rounded-md border border-gray-500'
            src={savageRiverMax}
            alt='Max next to one of the Savage River offshoots in Denali National Park'
            height={480}
          />
        </FadeInDiv>
        <FadeInDiv className='pt-12'>
          <h1 className='pb-4'>I'm an Alaskan with a love for the outdoors.</h1>
          <Image 
            className='rounded-md border border-gray-500'
            src={mccarthyJumboTrailMax}
            alt='Max on W. ridge at the end of the Jumbo Mine Trail'
            height={480}
          />
        </FadeInDiv>
        <FadeInDiv className='pt-12'>
          <h1 className='pb-4'>You might have heard me tooting my ocarina if you've ever hiked the chugach!</h1>
          <Image 
            className='rounded-md border border-gray-500'
            src={ocarinaMan}
            alt='Ocarina Man Arctic Valley'
            height={360}
          />
        </FadeInDiv>
        <FadeInDiv className='pt-12'>
          <h1 className='pb-4'>I'm also a software eningeer with a love for learning new technologies.</h1>
          <Image 
            className='rounded-md border border-gray-500'
            src={airborneDiseaseEstimatoriOS}
            alt="Airhounds' Airborne Disease Estimator iOS App"
            height={480}
          />
        </FadeInDiv>
        <FadeInDiv className='py-12'>
          <h1>Scroll down if you want to follow my (mis)adventures in the world!</h1>
        </FadeInDiv>
      </div>
    </main>
  )
}

