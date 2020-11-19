import React, {useEffect, useState} from 'react';

//Styles
import './Header.scss';
import logo from '../../assets/logo_ml.png';

//Components
import axios from 'axios';
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

export const Header = props => {

  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    console.log("USE EFFECT")
  })

  const updateInput = (e) => {
    let value = e.target.value;
    setSearchInput(value);
  }

  const searchData = (e) => {
    e.preventDefault()
    console.log("Data para buscar", searchInput)
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+searchInput)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  return (
    <React.Fragment>
      <Toolbar className={'header'}>
          <Grid 
            container 
            className={'header--gridContainer'} 
            justify="center"
            alignItems="center"
          >
            <Grid item xs={1} className={'headerLogoContainer'}>
              <img className={'headerLogo'} alt={'logo ML'} src={logo} />
            </Grid>
            <Grid item xs={9}>
              <form className={'searchListForm'} noValidate autoComplete="off" onSubmit={searchData}>
                <input className={'searchListForm--input'} type={'text'} onChange={updateInput}/>
                <IconButton className={'searchListForm--button'} type={'submit'}>
                  <SearchIcon />
                </IconButton>
              </form>
            </Grid>
          </Grid>
      </Toolbar>
    </React.Fragment>
  )
}

export default Header;

