import Image from 'next/image'

import savageRiverMax from './_assets/IMG_2665.jpg'
import mccarthyJumboTrailMax from './_assets/IMG-8085.jpg'
import ocarinaMan from './_assets/IMG-4081.jpeg'
import airborneDiseaseEstimatoriOS from './_assets/img_1b95dba9b742-1-4.jpeg'

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm Max!</h1>
      <Image 
        src={savageRiverMax}
        height={1000}
        alt='Max next to one of the Savage River offshoots in Denali National Park'
      />
      <h1>I'm an Alaskan with a love for the outdoors</h1>
      <Image 
        src={mccarthyJumboTrailMax}
        height={1000}
        alt='Max on W. ridge at the end of the Jumbo Mine Trail'
      />
      <h1>You might have heard me tooting my ocarina if you've ever hiked the chugach!</h1>
      <Image 
        src={ocarinaMan}
        height={500}
        alt='Ocarina Man Arctic Valley'
      />
      <h1>I'm also a software eningeer with a love for learning new technologies</h1>
      <Image 
        src={airborneDiseaseEstimatoriOS}
        height={500}
        alt="Airhounds' Airborne Disease Estimator iOS App"
      />
      <h1>Continue on if you want to follow my (mis)adventures in the world!</h1>
    </div>
  )
}
