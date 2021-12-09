import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ( {data} ) => {
    const price = data.prices.prices[0].amount;
    const title = data.title;
    const address = data.address.state_name;
    const thumbnail_id = data.thumbnail_id;
    const img = `https://http2.mlstatic.com/D_${thumbnail_id}-O.jpg`

    return ( 
        <>
            <div className="product-card">
                <div className="product-img">
                    <Link to={`/info-producto/${data.id}`}>
                        <img className="poster-img" src={img}/> 
                    </Link>                        
                </div>
                <div className="product-info">
                    <div className="card-description">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-price-address">
                        <h2>$ {price}</h2>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductItem;