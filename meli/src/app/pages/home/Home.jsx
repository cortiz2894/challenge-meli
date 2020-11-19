import React from 'react';
//Styles
import './Home.css';

//Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Header } from './../../components/header/Header';
import { ProductList } from './../../components/productList/ProductList';

export const Home = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <ProductList/>
    </React.Fragment>
  )
}

export default Home;

