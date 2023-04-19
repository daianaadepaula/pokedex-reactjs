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
    let endpoints = [];
    for (let i = 1; i < 25; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    let response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
    return response;
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
