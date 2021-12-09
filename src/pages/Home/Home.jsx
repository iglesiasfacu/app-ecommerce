import React from 'react';
import ProductList from '@pages/ProductList/ProductList';

const Home = ({data}) => {
    return (
        <>
            <ProductList 
                data = {data}
            />
        </>
     );
}

 
export default Home;