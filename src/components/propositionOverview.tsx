"use client"

import * as React from 'react';
import { Box } from '@mui/material';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionWithOpinions from '@/types/propositionWithOpinions';
import PropositionLabel from './propositionLabel';
import PropositionItem from './propositionItem';
import { OpinionSum, OpinionType } from '@/types/opinionType';
import getPropositionsWithOpinions from '@/helperFunctions/getPropositionsWithOpinions';



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
            <PropositionLabel showDetails={showDetails} />
            {(propositionsWithOpinions.length>0) && propositionsWithOpinions.map(p => (
                <PropositionItem key={p.id} proposition={p} showDetails={showDetails} />
            ))}
        </Box>
    );
}
