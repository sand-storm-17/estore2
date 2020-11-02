//Header // Capital H for a the file name of a component.

import React from 'react'
import './header.css'
// import logo from 'resources/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" 
            src="https://knowprepinsite.000webhostapp.com/resources/dyson-logo.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/*Search Icon*/}
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest!
                    </span>
                    <span className="header__optionLineTwo">
                        Sign-In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns 
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <din className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </din>
            </div>

        </div>
    )
}

export default Header
