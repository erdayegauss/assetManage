import React, { useState } from "react";
import { AppBar, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { links, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import photo from "../data/avatar4.jpg"

import { UserProfile } from "../components";


const Navibar = () => {


  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { currentColor, handleClick, isClicked } = useStateContext();






  return (
    <>

      <div className="divnavibar flex" style={{ "align-items": "center", background: "#0b2233" }}>

        <Link to="/" className="items-center gap-3  flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" style={{ "padding": "10px" }}>
          <img className="rounded-lg h-14 w-18" src={iconData[4].image} alt="" /> <span>Metaharvest</span>
        </Link>

        <div class="dropdown">
          <div class="flex"><a class="dropbtn flex"><p>Trade</p><ArrowDropDownIcon /></a></div>
          <div class="dropdown-content">
            <Link to="/swap" href="/swap"><button className="flex" style={{ "align-items": "center", "padding": "5px" }} > <img src="/img/swap.png" width="20%" /><p>&nbsp;&nbsp;Swap</p></button></Link>
            <Link to="/margin" href="/spot"><button className="flex" style={{ "align-items": "center", "padding": "5px" }} > <img src="/img/spot.png" width="20%" /><p>&nbsp;&nbsp;Spot</p></button></Link>
            <Link to="/margin" href="/margin"><button className="flex" style={{ "align-items": "center", "padding": "5px" }} > <img src="/img/margin.png" width="20%" /><p>&nbsp;&nbsp;Margin</p></button></Link>

          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn" > <a href="/earn">Earn</a></button>
        </div>

        <div class="dropdown">
          <button class="dropbtn" > <a href="/dashboard">Dashboard</a></button>
        </div>

        <div class="dropdown">
          <button class="dropbtn flex"><p>Invest</p><ArrowDropDownIcon /></button>
          <div class="dropdown-content">
            <Link to="/dualcurrency" href="/dualcurrency"><button className="flex" style={{ "align-items": "center", "padding": "5px" }} > <img src="/img/dualcurrency.png" width="20%" /><p>&nbsp;&nbsp;DualCurrency</p></button></Link>
            <Link to="/staking" href="/staking"><button className="flex" style={{ "align-items": "center", "padding": "5px" }} > <img src="/img/staking.png" width="20%" /><p>&nbsp;&nbsp;Staking</p></button></Link>
          </div>
        </div>



        <div class="dropdown">
          <button class="dropbtn" > <a href="/loan">Loan</a></button>
        </div>



        <div className="flex" style={{"margin-left": "auto", "margin-right": "0",}}>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-6 h-8"
              src={photo}
              alt="user-profile"
              style={{
                objectFit: 'cover',
                width: '30px',
                height: '30px'
              }}


            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shuan
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>



          {isClicked.userProfile && (<UserProfile />)}

        </div>



      </div>

    </>
  );
}

export default Navibar;



