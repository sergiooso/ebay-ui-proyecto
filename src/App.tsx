import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Product from "./views/product";
import ProductCategory from "./views/product-category";
import CreateProduct from "./views/create-product";
import Categories from "./views/categories";

import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
          <Route path="/products" exact component={Product}/>
          <Route path="/products/new" exact component={CreateProduct}/>
          <Route path="/products/:id/edit" exact component={CreateProduct}/>
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/:id" exact component={ProductCategory} />
      </Switch>
  </BrowserRouter>
  
);

export default App;
