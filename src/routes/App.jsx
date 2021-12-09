import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Layout from '@containers/Layout';
import Home from '@pages/Home/Home';
import ProductInfo from '@pages/ProductInfo/ProductInfo';
import NotFound from '@pages/NotFound/NotFound';
import getProducts from '../utils/getProducts';

const App = () => {

    const [ search, setSearch ] = useState([]);
    const [ data, setData] = useState([]);

    useEffect(() => {
        getProducts(search)
            .then((products) => {
                setData(products);
            })
            .catch((error)=> {
                console.error(error);
            })
    }, [search])

    return (
        <BrowserRouter>
            <Header 
                setSearch={setSearch}
            />
            <Layout>
            <Switch>
                    <Route exact path='/' >
                        <Home 
                            data={data}
                        />
                    </Route>
                    <Route exact path='/info-producto/:id' component={ProductInfo}/> 
                    <Route path='*' component={NotFound} />
            </Switch>
            </Layout>
            <Footer/>
        </BrowserRouter>
     );
}
 
export default App;