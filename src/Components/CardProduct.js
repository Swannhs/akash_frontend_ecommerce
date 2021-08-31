import React from 'react';

const CardProduct = ({name, price, imageUrl}) => {
    return (
          <div className="column4">
            <img src={imageUrl} />
            <h4>{name}</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
            </div>
            <p>TK {price}</p>
          </div>
    );
};

export default CardProduct;