import React from 'react'

import './Main.css'

import user from "../../Images/images.jpg"
import { IoBulbOutline } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

import { HiOutlineMicrophone } from "react-icons/hi2";
import { BiImageAdd } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

function Main() {
  return (
    <>
      <div className='main'>
         <div className='nav'>
            <p>Gemini</p>
            <img src={user} alt="" />
         </div>

         <div className='main-container'>

          <div className='greet'>
             <p><span>Hello , Dev.</span></p>
             <p>How can I help you Today ?</p>
          </div>

          <div className='cards'>
            <div className='card'>
              <p>suggest beautiful place to see on an upcomming road trip </p>
              <div className='card-icon'><GiCompass /></div>
            </div>

            <div className='card'>
              <p>Briefly summarizethis concept :urban planning </p>
              <div className='card-icon'><IoBulbOutline /></div>
            </div>

            <div className='card'>
              <p> Brainstrom team bounding activities for our work retreat </p>
              <div className='card-icon'><FaRegMessage /></div>
            </div>

            
            <div className='card'>
              <p>Imporve the readability of the following code</p> 
              <div className='card-icon'><FaCode /></div>
            </div>

          </div>
          
          <div className='main-bottom'>
             <div className='search-box'>
                <input type="text" placeholder='Enter a prompt here'/>
                <div>
                   <span><BiImageAdd /></span>
                   <span><HiOutlineMicrophone /></span>
                   <span><LuSend /></span>
                </div>
             </div>
             <p className='bottom-info'>Gemini may display inaccurateinfo, including about people ,so double check it's responses.Your privacy and Gemini Apps</p>
          </div>



         </div>
      </div>
    </>
  )
}

export default Main