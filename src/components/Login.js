import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  const handleBtnClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)

    //SignIn or Sign Up 
    if(message) return;
      //create a new user / sign in 
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/95167136?v=4&size=64"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({uid,email,displayName,photoURL}));
          navigate('/browse')
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message)
        });
        console.log(user);
                // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " : " + errorMessage)
        // ..
      });

    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
      });
    }

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-image'
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className=' my-36 mx-auto left-0 right-0 absolute p-12 w-4/12 bg-black bg-opacity-80 text-white' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input ref={name} className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Full Name'></input>
        )}
        <input ref={email} className='p-4 my-4 w-full bg-gray-600' type='text' placeholder='Email Address'></input>
        <input ref={password} className='p-4 my-4 w-full bg-gray-600' type='password' placeholder='Password'></input>
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : 'Already registere? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login