import React from 'react';
import logo from '../../assests/graphics/logo.png'
import './styles.scss'

const Header = props =>{
    return (
    
        <div className='header' data-test='header'>
            <div className='logo'>
                <img data-test="logoIMG" src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;