"use client"

import * as React from 'react';
import Switch from '@mui/material/Switch';

import { Box, FormControlLabel } from '@mui/material';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionRow from './propositionItem';
import PropositionWithOpinions from '@/types/propositionWithOpinions';
import PropositionLabel from './propositionLabel';
import PropositionItem from './propositionItem';



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
            }}
            aria-label="proposition-list"
        >
            <PropositionLabel />
            {propositionsWithOpinions.map(p => (
                <PropositionItem key={p.id} proposition={p} showDetails={showDetails} />
            ))}
        </Box>
    );
}


function getPropositionsWithOpinions(
    propositions: Proposition[],
    opinions: Opinion[]
): PropositionWithOpinions[] {
    return propositions.map(p => {

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