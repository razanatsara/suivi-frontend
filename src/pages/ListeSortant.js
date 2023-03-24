import React, { useState } from 'react';
import '../App.css';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListeSortant = () => {
  return (
    <div className="main">
      <form className="centre">
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Type de formation</InputLabel>
          <Select label="Age">
            <MenuItem value={'FC'}>FC</MenuItem>
            <MenuItem value={'FI'}>FI</MenuItem>
            <MenuItem value={'FOAD'}>FOAD</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ marginRight: '20px', minWidth: 200 }}
        >
          <InputLabel>Parcours</InputLabel>
          <Select label="Age">
            <MenuItem value={'TIM'}>TIM</MenuItem>
            <MenuItem value={'RT'}>RT</MenuItem>
            <MenuItem value={'BAT1'}>BAT1</MenuItem>
            <MenuItem value={'BAT2'}>BAT2</MenuItem>
            <MenuItem value={'TP1'}>TP1</MenuItem>
            <MenuItem value={'TP2'}>TP2</MenuItem>
            <MenuItem value={'CCI'}>CCI</MenuItem>
            <MenuItem value={'PCB'}>PCB</MenuItem>
            <MenuItem value={'GC1'}>GC1</MenuItem>
            <MenuItem value={'GC2'}>GC2</MenuItem>
            <MenuItem value={'UA'}>UA</MenuItem>
            <MenuItem value={'GIM1'}>GIM1</MenuItem>
            <MenuItem value={'GIM2'}>GIM2</MenuItem>
            <MenuItem value={'GIP1'}>GIP1</MenuItem>
            <MenuItem value={'GSI-MP1'}>GSI-MP1</MenuItem>
            <MenuItem value={'GSI-MP2'}>GSI-MP2</MenuItem>
            <MenuItem value={'GSR-ER1'}>GSR-ER1</MenuItem>
            <MenuItem value={'GSR-ER1'}>GSR-ER1</MenuItem>
            <MenuItem value={'GSA'}>GSA</MenuItem>
            <MenuItem value={'GER'}>GER</MenuItem>
            <MenuItem value={'MAC1'}>MAC1</MenuItem>
            <MenuItem value={'MAC2'}>MAC2</MenuItem>
            <MenuItem value={'FC1'}>FC1</MenuItem>
            <MenuItem value={'FC2'}>FC2</MenuItem>
            <MenuItem value={'MICE'}>MICE</MenuItem>
            <MenuItem value={'GTL1'}>GTL1</MenuItem>
            <MenuItem value={'GTL2'}>GTL2</MenuItem>
            <MenuItem value={'ELT'}>ELT</MenuItem>
            <MenuItem value={'GPME1'}>GPME1</MenuItem>
            <MenuItem value={'GPME2'}>GPME2</MenuItem>
            <MenuItem value={'MPCE'}>MPCE</MenuItem>
            <MenuItem value={'CAP1'}>CAP1</MenuItem>
            <MenuItem value={'CAP2'}>CAP2</MenuItem>
            <MenuItem value={'LOG1'}>LOG1</MenuItem>
            <MenuItem value={'LOG2'}>LOG2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          type={'number'}
          label="Année universitaire"
          variant="outlined"
        />{' '}
        <TextField
          id="outlined-basic"
          type={'text'}
          label="Promotion"
          variant="outlined"

          // onChange={(event) => {
          //   setPromotion(event.target.value);
          // }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          style={{ textTransform: 'none' }}
          sx={{
            width: '15%',
            marginTop: 3,
            backgroundColor: '#0081B4',
            padding: 1,
            fontSize: 19,
          }}
        >
          Recherche
        </Button>
      </form>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nom et Prénoms</TableCell>
              <TableCell align="left">Parcours</TableCell>
              <TableCell align="left">Type de formation</TableCell>
              <TableCell align="left">Année Universitaire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Nom
              </TableCell>
              <TableCell align="left">calorie</TableCell>
              <TableCell align="left">fat</TableCell>
              <TableCell align="left">Carbs</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListeSortant;
