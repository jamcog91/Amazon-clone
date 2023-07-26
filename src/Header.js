import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const myCheckout = () => {
        navigate('/checkout')
    };

    const goHome = () => {
        navigate('/')
    };

    const LogIn = () => {
        navigate('/login')
    }

    return(
        <div className='header'>
            <img 
                className="header_logo"
                onClick={goHome}
                alt="amazon-logo"
                src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"/>
            <div className="header_search">
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineTwo'>Select your address</span>
                </div>
                <input 
                    className="header_searchInput"
                    type="text" 
                    placeholder="Search Amazon..."/>
                <SearchIcon 
                    className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option" onClick={LogIn}>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className="header_option" onClick={myCheckout}>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <div className='header_optionBasket'onClick={myCheckout}>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;