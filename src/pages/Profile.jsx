import React from 'react';
import Navbar from '../components/NavBar';
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import PokemonTable from '../components/PokemonTable';
import { firstUppercase } from '../helper';

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData;
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="row"
            p={5}
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column" m={5}>
              <Typography variant="h3" marginBottom={10}>
                {firstUppercase(name)}
              </Typography>
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box
              component="img"
              src={sprites.other.dream_world.front_default}
              width="45%"
            />
          </Box>
          <Box width="100%" p={5}>
            <Divider>Variações</Divider>
            <Box component="img" src={sprites.front_female} width="31%" />
            <Box component="img" src={sprites.front_shiny} width="31%" />
            <Box component="img" src={sprites.front_shiny_female} width="31%" />
          </Box>
          <Box width="100%" p={5} textAlign="center">
            <Divider>Ataques</Divider>
            <Box marginTop={5}>
              {moves.map((moveData, key) => (
                <Chip key={key} sx={{ m: '5px' }} label={moveData.move.name} />
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
