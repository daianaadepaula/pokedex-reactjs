import React from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

export default function Home() {
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
