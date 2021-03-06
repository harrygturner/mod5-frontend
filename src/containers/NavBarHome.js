import React, { Component } from 'react';
import NavLink from '../components/NavLink';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

export default class NavBarHome extends Component {

   renderSearchOption = () => (
      <div className='search' onClick={this.props.handleSearchBtnClick}>
         <div className='search-btn'>
            <i className="fas fa-search"></i>
            Search
         </div>
      </div>
   )
   
   render() {
      return (
         <div id='Navbar'>
            {this.renderSearchOption()}
            <div className='logo'>
               <img src={Logo} alt='AccessAbled logo' />
            </div>
            <div className='nav-links right'>
               <div style={{ fontWeight: '900' }}>
                  ARE YOU A MEMBER?    
               </div>
               <div className='login'>
                  <Link to='/login'>< NavLink name={'Login'} /></Link>
               </div>
               <div className='login'>
                  <Link to='/create_account'>< NavLink name={'Register'} /></Link>
               </div>
            </div>
            
         </div>
      )
   }
}