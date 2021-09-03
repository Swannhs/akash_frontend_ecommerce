import React from 'react';
import {Link} from "react-router-dom";

const CardProduct = ({id, name, price, imageUrl}) => {
    return (

        <div className="column4" key={id}>
            <Link to={`/product/${id}`}>
                <img src={imageUrl}/>
                <h4>{name}</h4>
                <div className="rating">
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="far fa-star"/>
                </div>
                <p>TK {price}</p>
            </Link>

        </div>
    );
};

export default CardProduct;
