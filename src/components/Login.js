import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-image'
        />
      </div>
      <form className=' my-36 mx-auto left-0 right-0 absolute p-12 w-4/12 bg-black bg-opacity-80 text-white' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Full Name'></input>
        )}
        <input className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Email Address'></input>
        <input className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Password'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : 'Already registere? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login