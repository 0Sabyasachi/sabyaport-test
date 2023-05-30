import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Nav = () => {
  return (
    <>
        <div className = "nav__bar">
            <img src={ require('./images/s.png') } width={"230px"} alt='logo'/>
            <div className='nav__items'>
                <NavLink activeClassName='active' className='nav__item' exact to='/'><HomeRoundedIcon className='nav_icons'></HomeRoundedIcon><span className='icon-text'>Home</span></NavLink>
                <NavLink activeClassName='active' className='nav__item' exact to='/service' ><BusinessCenterRoundedIcon className='nav_icons' ></BusinessCenterRoundedIcon><span className='icon-text'>Services</span></NavLink>
                <NavLink activeClassName='active' className='nav__item' exact to='/about' ><SchoolRoundedIcon className='nav_icons'></SchoolRoundedIcon><span className='icon-text'>About</span></NavLink>
                <NavLink activeClassName='active' className='nav__item' exact to='/contact' ><EmailRoundedIcon className='nav_icons'></EmailRoundedIcon><span className='icon-text'>Contact</span></NavLink>
            </div>
        </div>
    </>
  )
}

export default Nav