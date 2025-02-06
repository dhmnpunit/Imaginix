import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="" width={50} className='rounded-xl'/>
        <p className='text-sm text-gray-500 pl-4  max-sm:hidden'>Copyright @Imaginix | All right reserved.</p>

    </div>
  )
}

export default Footer