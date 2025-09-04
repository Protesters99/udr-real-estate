import React from 'react'
import Button from '../ui/my-button'
import Image from 'next/image'
import MaxWidthContainer from '../shared/max-width-container'

export default function Hero() {
  return (
    <section className='bg-amber-950'>
        <MaxWidthContainer className="flex md:py-30 md:items-center text-white">
        <div className='space-y-20'>
            <h1 className='font-bold text-6xl w-3/5 leading-16'>Find the right and best home for your family</h1>

            <Button text="Start Exploring" arrowDisplay amber/>
        </div>

        <div>
            <Image src="/heroImage.webp" alt="Woru's Household" width={800} height={950}/>
        </div>
        </MaxWidthContainer>
    </section>
  )
}
