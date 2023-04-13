import React from 'react'
import Background from './Background.png'

export default function Page1() {
  return (
    <div className='w-full h-screen relative'>
      <img className='object-cover' src={Background} alt="There is an background" />
    </div>
  )
}
