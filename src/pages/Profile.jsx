import React from 'react';
import Navbar from '../components/NavBar';
import { Container } from '@mui/material';

export const Profile = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <Container maxWidth="md">
      <Navbar hideSearch />
      Profile
    </Container>
  );
};
