import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='w-full height-1/2 overflow-hidden'>
        <Image src={'/images/banner.jpg'} alt='Banner' width={900} height={400} className='w-full'/>
    </div>
  )
}
