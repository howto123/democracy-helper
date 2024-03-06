"use client"

import { Box, Button, ButtonGroup, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionOverview from '@/components/propositionOverview';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Identity } from '@/types/identity';
import Context from './context';
import ActiveElement from '@/types/activeElement';
import DeleteItemDialog from '@/components/deleteItemDialog';
import AddPropositionDialog from '@/components/addPropositionDialog';
import { opinionsSample } from '@/data/opinionsSample';
import { propositionsSample } from '@/data/propositionsSample';
import PropositionWithOpinions from '@/types/propositionWithOpinions';
import getPropositionsWithOpinions from '@/helperFunctions/getPropositionsWithOpinions';
import assert from 'assert';
import { getPropositions, getOpinions } from '@/helperFunctions/nextApiCalls';



type PartialState = {
    showDetails: boolean,
    activeElementId: Identity | undefined,
    activeElementType: ActiveElement,
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const [propositionsWithOpinions, propositionsWithOpinionsSet] = useState<PropositionWithOpinions[]>([]);

    const [partialState, partialStateSet] = useState<PartialState>({
        showDetails: false,
        activeElementId: undefined,
        activeElementType: undefined
    });

    // executes at page load
    useEffect(() => {
        const todo = async () => {
            const propositions = await getPropositions();
            const opinions = await getOpinions();
            propositionsWithOpinionsSet(getPropositionsWithOpinions(propositions, opinions))
        };
        todo();
    }, []);

    const handleDetailsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        partialStateSet(old => {
            return {
                ...old,
                showDetails: !old.showDetails
            }
        })
    }

    const setPropositionToActiveElement = (id: Identity) => {
        partialStateSet({
            ...partialState,
            activeElementId: id,
            activeElementType: 'proposition'
        })
    }

    const setOpinionToActiveElement = (id: Identity) => {
        partialStateSet({
            ...partialState,
            activeElementId: id,
            activeElementType: 'opinion'
        })
    }

    return (
        <main>
            <Box
                onClick={e => partialStateSet({
                    ...partialState,
                    activeElementId: undefined,
                    activeElementType: undefined
                })}
                sx={{
                    height: '100vh'
                }}
            >
                <Box m='5pt'>
                    <Typography variant="h3" component="h1" textAlign={'center'} gutterBottom>
                        Welcome to DemocracyHelper
                    </Typography>
                </Box>

                <Stack
                    divider={<Divider orientation="vertical" />}
                    spacing={2}
                    aria-label='proposition-overview'
                >
                    <Context.Provider
                        value={{
                            activeElementId: partialState.activeElementId,
                            activeElementType: partialState.activeElementType,
                            setPropositionToActiveElement,
                            setOpinionToActiveElement,
                        }}
                    >
                        <Box display='flex' flexDirection='row' justifyContent='center'>
                            <Stack
                                spacing={{ xs: 1, sm: 2 }}
                                direction='row'
                                flexWrap='wrap'
                                aria-label='proposition-general-controls'
                            >
                                <Button variant='outlined'><InfoOutlinedIcon /></Button>
                                <ButtonGroup variant='outlined'>
                                    <AddPropositionDialog />
                                    <DeleteItemDialog buttonDisabled={!partialState.activeElementId} />
                                </ButtonGroup>
                                <Button onClick={handleDetailsClick} variant='outlined' sx={{ width: '120pt' }}>
                                    {partialState.showDetails ? 'hide details' : 'show details'}
                                </Button>
                            </Stack>
                        </Box>

                        <PropositionOverview
                            propositionsWithOpinions={propositionsWithOpinions}
                            showDetails={partialState.showDetails}
                            aria-label='proposition-display'
                        />
                    </Context.Provider>
                </Stack>

            </Box>
        </main>

    )
}