import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState('Login')
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if(state === 'Login') {
                const response = await axios.post(backendUrl + '/api/user/login', {email, password})
                const data = response.data

                if(data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                    toast.success('Logged In Successfully')
                } else {
                    toast.error(data.message)
                }
            } else {
                const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
                const data = response.data
                
                if(data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                    toast.success('Account Creation Successful')
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return() => {
            document.body.style.overflow = 'unset'
        }
    }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form onSubmit={onSubmitHandler}
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
                <input onChange={e => setName(e.target.value)} value={name} className='outline-none text-sm' type="text" placeholder='Full Name' required/>
            </div>}

            {/* email */}
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" width={16}/>
                <input onChange={e => setEmail(e.target.value)} value={email} className='outline-none text-sm' type="email" placeholder='Email Address' required/>
            </div>

            {/* password */}
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" width={12}/>
                <input onChange={e => setPassword(e.target.value)} value={password} className='outline-none text-sm' type="password" placeholder='Password' required/>
            </div>

            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

            <button type='submit' className='bg-zinc-800 cursor-pointer rounded-full text-white py-2 w-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

            { state === 'Login' ? <p className='mt-5 text-center text-sm'>Don't have an account? <span className='text-blue-600 underline font-medium cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
            : <p className='mt-5 text-center text-sm'>Already have an account? <span className='text-blue-600 underline font-medium cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
            }
            <img onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        </motion.form>
    </div>
  )
}

export default Login