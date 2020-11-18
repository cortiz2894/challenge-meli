import React from 'react';
//Styles
//import './Header.css';

//Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export const Header = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <p>Header</p>
      </Container>
    </React.Fragment>
  )
}

export default Header;

