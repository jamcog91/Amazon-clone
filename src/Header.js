import './Header.css';

function Header() {
    return(
        <div className='header'>
            <img 
                className="header_logo"
                src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"/>
            <div className="header_search">
                <input 
                    className="header_searchInput"
                    type="text" />
            </div>
            <div className="header_nav">
                <div className="header_option">

                </div>
                <div className="header_option">

                </div>
                <div className="header_option">

                </div>
            </div>
        </div>
    );
};

export default Header;