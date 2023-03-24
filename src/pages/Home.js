import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import { Button, TextField, Grid, Link } from '@mui/material';
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
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const [globleSearch, setGlobalSearch] = useState(false);
  const [particularSearch, setParticularSearch] = useState(true);

  const handlingGlobal = () => {
    setGlobalSearch(true);
    setParticularSearch(false);
  };
  const handlingParticular = () => {
    setGlobalSearch(false);
    setParticularSearch(true);
  };
  const [query, setQuery] = useState();
  const [etudiant, setEtudiant] = useState('');
  useEffect(() => {
    const getAllStudent = async () => {
      await axios({
        method: 'get',
        url: `http://localhost:5000/api/etudiant/`,
      })
        .then((res) => {
          setEtudiant(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllStudent();
  }, []);
  return (
    <div className="main">
      <div className="centre">
        <Button
          variant="contained"
          sx={{
            marginRight: '20px',
            width: '20%',
            marginBottom: 3,
            backgroundColor: '#0081B4',
            padding: 2,
            fontSize: 19,
          }}
          onClick={handlingParticular}
          style={{ textTransform: 'none' }}
        >
          Recherche particulière
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: '20px',
            width: '20%',
            marginBottom: 3,
            backgroundColor: '#0081B4',
            padding: 2,
            fontSize: 19,
          }}
          onClick={handlingGlobal}
          style={{ textTransform: 'none' }}
        >
          Recherche globale
        </Button>
      </div>

      {particularSearch && (
        <div>
          <form className="centre">
            <TextField
              id="outlined-basic"
              type={'text'}
              label="Entrer nom ou prenom"
              variant="outlined"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </form>
          <br />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Nom et Prénoms</TableCell>
                          <TableCell align="left">Parcours</TableCell>
                          <TableCell align="left">Type de formation</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {etudiant && query !== ' '
                          ? etudiant
                              .filter(
                                (val) =>
                                  val.nom.toLowerCase().includes(query) ||
                                  val.prenom.toLowerCase().includes(query)
                              )
                              .map((val) => {
                                return (
                                  <TableRow
                                    sx={{
                                      '&:last-child td, &:last-child th': {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell component="th" scope="row">
                                      <Link
                                        href={`/detail/${val._id}`}
                                        sx={{
                                          color: 'black',
                                          fontSize: 15,
                                        }}
                                        underline="none"
                                      >
                                        {val.nom} {val.prenom}
                                      </Link>
                                    </TableCell>
                                    <TableCell align="left">
                                      <Link
                                        href={`/detail/${val._id}`}
                                        sx={{
                                          color: 'black',
                                          fontSize: 15,
                                        }}
                                        underline="none"
                                      >
                                        {val.parcours}
                                      </Link>
                                    </TableCell>
                                    <TableCell align="left">
                                      <Link
                                        href={`/detail/${val._id}`}
                                        sx={{
                                          color: 'black',
                                          fontSize: 15,
                                        }}
                                        underline="none"
                                      >
                                        {val.typeFormation}
                                      </Link>
                                    </TableCell>
                                  </TableRow>
                                );
                              })
                          : ''}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      )}

      {globleSearch && (
        <div>
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
            <br />
            <Button variant="contained" sx={{ marginTop: '20px' }}>
              Recherche
            </Button>
          </form>
          <br />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Nom et Prénoms</TableCell>
                          <TableCell align="left">Parcours</TableCell>
                          <TableCell align="left">Type de formation</TableCell>
                          <TableCell align="left">
                            Année Universitaire
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link
                              href="/detail/12"
                              sx={{
                                color: 'black',
                                fontSize: 15,
                              }}
                              underline="none"
                            >
                              RATSARAVINTANA
                            </Link>
                          </TableCell>
                          <TableCell align="left">
                            <Link
                              href="/detail/12"
                              sx={{
                                color: 'black',
                                fontSize: 15,
                              }}
                              underline="none"
                            >
                              GFC
                            </Link>
                          </TableCell>
                          <TableCell align="left">
                            <Link
                              href="/detail/12"
                              sx={{
                                color: 'black',
                                fontSize: 15,
                              }}
                              underline="none"
                            >
                              FC
                            </Link>
                          </TableCell>
                          <TableCell align="left">
                            <Link
                              href="/detail/12"
                              sx={{
                                color: 'black',
                                fontSize: 15,
                              }}
                              underline="none"
                            >
                              2013
                            </Link>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Home;
