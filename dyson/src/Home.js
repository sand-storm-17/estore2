import React from 'react';
import './home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <din className="home__container">
                {/* <img className="home__banner" src="https://knowprepinsite.000webhostapp.com/resources/banner2.jpg" /> */}
                {/* <img className="home__banner" src="https://knowprepinsite.000webhostapp.com/resources/banner5.jpg" /> */}
                <img className="home__banner" src="https://knowprepinsite.000webhostapp.com/resources/banner6.jpg" />
            </din>

            <div className="home_row">
                <Product 
                id="120856"
                title='the lean startup' 
                price={29.99} 
                image="https://img1 .jpg" 
                rating={5}
                />
                <Product />
            </div>

            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            
            <div className="home_row">
                <Product />
            </div>
        </div>
    )
}

export default Home;
