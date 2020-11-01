//Header // Capital H for a the file name of a component.

import React from 'react'
import './header.css'
// import logo from 'resources/logo.png'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" 
            src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1461954713/gbwjj0tpa6a6wgvcjndq.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/*Search Icon*/}
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLine1">
                        Hello Guest!
                    </span>
                    <span className="header__optionLine2">
                        Sign-In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">
                        Returns 
                    </span>
                    <span className="header__optionLine2">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLine1">
                        Your
                    </span>
                    <span className="header__optionLine2">
                        Prime
                    </span>
                </div> 
            </div>
        </div>
    )
}

export default Header
