import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {

    const {user, setShowLogin } = useContext(AppContext)
    
    const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center py-4'>
        <Link to="/">
            <img src={assets.logo} alt="logo" className='w-10 rounded-xl sm:w-10 lg:w-12'/>
        </Link>

        <div>
            {user ? 
            <div className='flex items-center gap-2 sm:gap-5'>
                <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                    <img className='w-5' src={assets.credit_star} alt="" />
                    <p className='text-xs sm:text-sm font-md text-gray-600'>Credits left : 50</p>
                </button>
                <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Punit!</p>
                <div className='relative group'>
                    <img className='w-10 drop-shadow' src={assets.user} alt="" />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 drop-shadow text-black rounded-xl pt-12'>
                        <ul className='list-none m-0 p-2 bg-white rounded-xl border border-gray-300 test-sm'>
                            <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-5'>
                <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                <button onClick={() => setShowLogin(true)} className='cursor-pointer bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:scale-105 transition-all duration-700'>Login</button>
            </div>
            }
            

        </div>
    </div>
  )
}

export default Navbar