import React from 'react'
import {usedispatch} from 'react-redux'
import authService from '../../Appwrite/config'
import {logout} from '../../Store/authSlice'


function LogoutBtn() {
  
    const dispatch = usedispatch()
    const logoutHandle = () =>{                    // In appwrite most of return promise
        authService.logout().then(()=>{
            dispatch(logout())
        }).catch((err)=>{
          console.log("Error in Logout header",err);
        })
    }

  return (
    <div>
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
       onClick={logoutHandle}
      ></button>
    </div>
  )
}

export default LogoutBtn
