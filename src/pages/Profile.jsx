import React from 'react';
import Navbar from '../components/NavBar';
import { Box, Container, Paper, Typography } from '@mui/material';
import PokemonTable from '../components/PokemonTable';
import { firstUppercase } from '../helper';

export const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData;
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" p={5}>
            <Box display="flex" justifyContent="space-between" m={5}>
              <Typography variant="h3">{firstUppercase(name)}</Typography>
              <Box
                component="img"
                src={sprites.other.dream_world.front_default}
                width="25%"
              />
            </Box>
            <PokemonTable pokemonData={pokemonData} />
          </Box>
        </Paper>
      </Container>
    </>
  );
};
