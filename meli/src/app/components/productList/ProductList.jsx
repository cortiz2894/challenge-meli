import React from 'react';

//Styles
import './ProductList.scss';

//Components
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export const ProductList = props => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={'containerBody'}>
        <main>
          <Grid container spacing={4}>
            <p>PRODUCT LIST</p>
          </Grid>
          <Grid container spacing={5} >
            <p>Grid</p>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  )
}

export default ProductList;

