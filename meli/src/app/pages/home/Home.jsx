import React from 'react';
//Styles
import './Home.css';

//Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Header } from './../../components/header/Header';

export const Home = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            <p>asdasdadas</p>
          </Grid>
          <Grid container spacing={5} >
            <p>Grid</p>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  )
}

export default Home;

