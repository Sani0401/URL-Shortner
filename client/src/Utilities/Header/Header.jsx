import React from 'react'
import './Header.css'
import shortnerIcon from '../../Assets/Images/url-shortner-icon.png'
function Header() {
  return (
    <div className='Header__mainContainer'>
        <div className='Header__logoContainer'> 
            <img className='Header__logo_icon' src={shortnerIcon}/>
        </div>
        <div className='Header__ButtonContainer'>
            <h4>Pricing</h4>
            <h4>Domains</h4>
            <h4>Platforms</h4>
        </div>
        <div className='Header__loginButtonContainer'>
            <button>Login</button>
            <button>Signup</button>
        </div>
    </div>
  )
}

export default Header