"use client"

import * as React from 'react';
import Switch from '@mui/material/Switch';

import { Box, FormControlLabel } from '@mui/material';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionRow from './propositionRow';
import PropositionWithOpinions from '@/types/propositionWithOpinions';



export default function PropositionOverview(
        {
            propositions,
            opinions,
            showDetails }: {
                propositions: Proposition[],
                opinions: Opinion[],
                showDetails: boolean
            }
    ) {
    const propositionsWithOpinions = getPropositionsWithOpinions(propositions, opinions);


    return (
        <Box
            sx={{
                width: '100%',
                minWidth: 650,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
            }}
            aria-label="proposition-list"
        >
            <Box sx={{
                gridColumnStart: 1,
                gridColumnEnd: -1
            }}>
                {propositionsWithOpinions.map( p => (
                    <PropositionRow key={p.id} proposition={p} showDetails={showDetails}></PropositionRow>
                ))}
            </Box>
        </Box>
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