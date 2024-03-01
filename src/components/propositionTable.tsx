"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import { Button, FormControlLabel } from '@mui/material';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';




export default function PropositionTable({ propositions, opinions }:{ propositions: Proposition[], opinions: Opinion[]}) {
  const showDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Switch changed!")
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Proposition</TableCell>
            <TableCell>Huge fan</TableCell>
            <TableCell>Sounds good</TableCell>
            <TableCell>No opinoin</TableCell>
            <TableCell>Veto against</TableCell>
            <TableCell>Needs discussion</TableCell>
            <TableCell></TableCell>
            <TableCell>
              <FormControlLabel
                value="show details"
                control={<Switch color="primary" onChange={showDetailsChange}/>}
                label="details"
                labelPlacement="top"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propositions.map((p) => (
            <TableRow
              key={p.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {p.text}
              </TableCell>
              <TableCell>hugeFan</TableCell>
              <TableCell>soundsGood</TableCell>
              <TableCell>noOpinion</TableCell>
              <TableCell>iDontCare</TableCell>
              <TableCell>needsDiscussion</TableCell>
              <TableCell>veto</TableCell>
              <TableCell>
                <Button variant="outlined">
                  <PanToolOutlinedIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
