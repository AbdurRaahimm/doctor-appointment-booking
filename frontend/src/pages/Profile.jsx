import React from 'react'
import {  getCookie, setCookie } from '../utilis/getCookie';

export default function Profile() {
    let user = getCookie("token");
    
    // console.log(user);
  return (
    <div>
         {user}
    </div>
  )
}
