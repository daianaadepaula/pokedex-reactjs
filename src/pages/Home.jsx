import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
