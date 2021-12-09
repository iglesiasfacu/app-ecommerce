import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductInfo.css';

const ProductInfo = ( ) => {
    
    const { id } = useParams();

    const [item, setItem] = useState({});
    const [description, setDescription] = useState({})

    useEffect(() => {
        const getItem = async (id) => {
            const url = `https://api.mercadolibre.com/items/${id}`
            const resp = await fetch(url);
            const result = await resp.json();
            setItem(result)
            
            const url2 = `https://api.mercadolibre.com/items/${id}/description`
            const resp2 = await fetch(url2);
            const result2 = await resp2.json();
            setDescription(result2);
        }
        getItem(id);
    }, [])

    const thumbnail_id = item.thumbnail_id;
    const img = `https://http2.mlstatic.com/D_${thumbnail_id}-O.jpg`

    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
      })

    return ( 
        <>
            <div className="container">
                <div className="product-one">
                    <div className="product-img">
                        <img className="poster-img" src={img}/>
                    </div>
                    <div className="product-info">
                        <h2>{item.title}</h2>
                        <h3>{formatter.format(item.price)}</h3>
                        <button>Comprar</button>
                    </div> 
                </div>
                <div className="product-two">
                    <div className="product-desc">
                        <h3>Descripción del producto:</h3>
                        <p>{description.plain_text}</p>
                    </div>
                </div>            
            </div>
        </>
     );
}
 
export default ProductInfo;