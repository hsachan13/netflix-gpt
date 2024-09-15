import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='flex justify-between absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full'>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
          alt='logo'
        />
        {user &&
        <div className='flex p-2'>
          {/* <img className='w-12 h-12' src='https://occ-0-2039-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e' alt='userIcon' /> */}
          <img className='w-12 h-12' src={user?.photoURL} alt='userIcon' />

          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
}
    </div>
  )
}

export default Header