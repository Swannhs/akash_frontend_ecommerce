import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-column1">
                        <h3>Download Our App</h3>
                        <p> Download App for Android and ios mobile phone</p>
                        <div className="app-logo">
                            <img src="images/play-store.png" />
                            <img src="images/app-store.png" />
                        </div>
                    </div>
                    <div className="footer-column2">
                        <img src="images/logo1.png" />
                        <p> Our Purpose IS TO Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many
                        </p>
                    </div>
                    <div className="footer-column3">
                        <h3>Useful Link</h3>
                        <ul>
                            <li>Cupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-column4">
                        <h3>Follow</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="Copyright"> Copyright 2021 - Ebuy ecommerce website @akash</p>
            </div>
        </div>
    );
};

export default Footer;