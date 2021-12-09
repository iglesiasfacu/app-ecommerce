import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';
import './ProductList.css';

const ProductList = ( { data, setItem } ) => {
    return ( 
        <>
        {data.results 
            ? data.results.map( item => (
                <div>
                    <div className="home-cards">
                        <ProductItem 
                            key={item.id}
                            data={item}
                        />
                    </div>
                    <hr />
                </div>
            ))
            : <p>No data</p>
        }
        </>
     );
}
 
export default ProductList;