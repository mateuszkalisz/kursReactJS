import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return ( 
        <div>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/products" component={ProductsPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/admin" component={AdminPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </div>
     );
}
 
export default Page;