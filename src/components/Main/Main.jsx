import React from 'react'

import './Main.css'

import user from "../../Images/images.jpg"

function Main() {
  return (
    <>
      <div className='main'>
         <div className='nav'>
            <p>Gemini</p>
            <img src={user} alt="" />
         </div>
      </div>
    </>
  )
}

export default Main