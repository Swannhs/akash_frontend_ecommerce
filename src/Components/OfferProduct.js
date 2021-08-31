import React from 'react';

const OfferProduct = () => {
    return (
        <div className="offer">
            <div className="smalloffer">
                <div className="row">
                    <div className="column2">
                        <img src="images/exclusive.png"/>
                    </div>
                    <div className="column2">
                        <p>Exclusive Available on Ebuy Online Store</p>
                        <small>If you are smart than buy it ASAP</small><br/>
                        <a href className="btn">Buy Now →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferProduct;