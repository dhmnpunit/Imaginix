import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'


const BuyCredit = () => {

  const {user} = useContext(AppContext)

  return (
    <motion.div 
      className='min-h-[90vh] text-center py-14 mb-10'
      initial={{ opacity: 0.2, y: 100}}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true}}
    >
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose your Plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className={(index % 2 !== 0 ? 'bg-white drop-shadow-sm border-2 border-blue-600 rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' : 'bg-white drop-shadow-sm border border-gray-200 rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500')}>
            <img src={assets.logo} alt="" width={40} className='rounded-xl'/>
            <p className='text-xl text-gray-800 font-semibold mt-3 mb-1'>{item.id}</p>
            <p className='text-sm text-gray-500'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} credits
            </p>
            <button className='w-full bg-zinc-800 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>

          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit