import React from 'react'
import { FEATURED_HOUSE } from '@/constants/data'
import Image from 'next/image'

export default function page({params}) {
    const property = FEATURED_HOUSE.find((house) => house.title.toLowerCase() === params.slug.split("-").join(" "))

  return (
    <div>
        <h1>This is our {params.slug} page</h1>
        <Image src={`/${property.imgSrc}`} alt={property.title} height={600} width={500}/>
        <h2>{property.price}</h2>
    </div>
  )
}
