import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline, IoIosSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";

import "./SideNav.css";

function SideNav() {
  const [extended, setExtended] = useState(true);

  return (
    <div className={`sidebar ${extended ? 'expanded' : 'collapsed'}`}>
      <div className='top'>
        <p onClick={() => setExtended(prev => !prev)} className='menu'>
          <IoMenu />
        </p>

        <div className='new-chat'>
          <GoPlus />
          {extended && <p>New Chat</p>}
        </div>
      </div>

      <div className='middle'>
        {extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            <div className='recent-entry'>
              <FaRegMessage />
              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>

      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <IoIosHelpCircleOutline style={{ fontSize: "20px" }} />
          {extended && <p>Help</p>}
        </div>
        <div className='bottom-item recent-entry'>
          <MdHistory style={{ fontSize: "20px" }} />
          {extended && <p>Activity</p>}
        </div>
        <div className='bottom-item recent-entry'>
          <IoIosSettings style={{ fontSize: "20px" }} />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default SideNav;
