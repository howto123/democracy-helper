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
import OpinionRow from './opinionRow';
import PropositionRow from './propositionRow';
import PropositionWithOpinions from '@/types/propositionWithOpinions';



export default function PropositionTable(
    { propositions, opinions }: { propositions: Proposition[], opinions: Opinion[] }
    ) {
    const propositionsWithOpinions = getPropositionsWithOpinions(propositions, opinions);


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
                        <TableCell>I don't care</TableCell>
                        <TableCell>Needs discussion</TableCell>
                        <TableCell>Veto against</TableCell>
                        <TableCell>
                            <FormControlLabel
                                value="show details"
                                control={
                                    <Switch
                                        color="primary"
                                        onChange={showDetailsChange}
                                    />}
                                label="details"
                                labelPlacement="top"
                            />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {propositionsWithOpinions.map( p => (
                        <PropositionRow key={p.id} proposition={p}></PropositionRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


function getPropositionsWithOpinions(
    propositions: Proposition[],
    opinions: Opinion[]
): PropositionWithOpinions[] {
    return propositions.map( p => {

        const matchingOpinions = opinions.filter(
            o => p.opinionIds.includes(o.id)
        )

        return {
            id: p.id,
            text: p.text,
            opinions: matchingOpinions
        }
    })
}