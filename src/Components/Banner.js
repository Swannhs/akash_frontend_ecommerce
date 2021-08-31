import React from 'react';

const Banner = () => {
    return (
        <div className="row">
            <div className="column-2">
                <h1>Find, Discover, Choose<br/> And Buy Anything Online!</h1>
                <p>Give Your Workout A New Style</p>
                <a href className="btn"> Explore Now →</a>
            </div>
            <div className="column-2">
                <img src="images/image1.png"/>
            </div>
        </div>
    );
};

export default Banner;