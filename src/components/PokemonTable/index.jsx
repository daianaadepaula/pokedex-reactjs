import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from '../../utils';

export default function PokemonTable({ pokemonData }) {
  const { height, weight, types } = pokemonData;
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400, boxShadow: 'none' }}>
      <Table sx={{ maxWidth: 400 }} aria-label="a dense table">
        <TableBody sx={{ width: '25%' }}>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Altura
            </TableCell>
            <TableCell component="th" scope="row">
              {height + 'cm'}
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Peso
            </TableCell>
            <TableCell component="th" scope="row">
              {weight + 'g'}
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Tipo
            </TableCell>
            <TableCell component="th" scope="row">
              {typeHandler(types)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
