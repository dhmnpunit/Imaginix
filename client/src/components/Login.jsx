import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Login = () => {

    const [state, setState] = useState('Sign Up')
    const { setShowLogin } = useContext(AppContext)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return() => {
            document.body.style.overflow = 'unset'
        }
    }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form 
            className='relative bg-white p-10 rounded-xl text-slate-500'
            initial={{ opacity: 0.2, y: 50}}
            transition={{ duration: 0.3}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
        >
            <h1 className='text-center text-2xl text-neutral-700 mb-2'>{state}</h1>
            {
                state === 'Login' ? <p className='text-sm mb-5 text-center'>Welcome back! Please sign in to continue</p>
                : 
                <p className='text-sm mb-5 text-center'>Let's create your Account and start Imagining</p>
            }

            {/* name */}
            { state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.user} alt="" width={24}/>
                <input className='outline-none text-sm' type="text" placeholder='Full Name' required/>
            </div>}

            {/* email */}
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" width={16}/>
                <input className='outline-none text-sm' type="email" placeholder='Email Address' required/>
            </div>

            {/* password */}
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" width={12}/>
                <input className='outline-none text-sm' type="password" placeholder='Password' required/>
            </div>

            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

            <button className='bg-zinc-800 rounded-full text-white py-2 w-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

            { state === 'Login' ? <p className='mt-5 text-center text-sm'>Don't have an account? <span className='text-blue-600 underline font-medium cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
            : <p className='mt-5 text-center text-sm'>Already have an account? <span className='text-blue-600 underline font-medium cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
            }
            <img onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        </motion.form>
    </div>
  )
}

export default Login