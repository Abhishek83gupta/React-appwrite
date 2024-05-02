import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/Auth'
import {login, logout} from './Store/authSlice'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, SetLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()       // current user
    .then((userdata)=>{         
     if (userdata) {                     
       dispatch(login({userdata}))
     } else {
       dispatch(logout())
     }
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=> SetLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

      <div className='w-full block'>
        <Header/>

        <div>
          <main>
           Todo : {/* <Outlet/> */}
          </main>
        </div>  

        <Footer/>
      </div>

    </div>
  ) : null
}

export default App
