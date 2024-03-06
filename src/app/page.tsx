"use client"

import { Box, Button, ButtonGroup, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionOverview from '@/components/propositionOverview';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Identity } from '@/types/identity';
import Context from './context';
import ActiveElement from '@/types/activeElement';
import DeleteItemDialog from '@/components/deleteItemDialog';
import { getPropositions, getOpinions } from '@/helperFunctions/nextApiCalls';
import AddPropositionDialog from '@/components/addPropositionDialog';

type PartialState = {
    showDetails: boolean,
    activeElementId: Identity | undefined,
    activeElementType: ActiveElement,
}

export default function Home() {
    const [propositions, propositionsSet] = useState<Proposition[]>([])
    const [opinions, opinionsSet] = useState<Opinion[]>([])

    const [partialState, partialStateSet] = useState<PartialState>({
        showDetails: false,
        activeElementId: undefined,
        activeElementType: undefined
    });

    // executes at page load
    useEffect(() => {
        (async () => {
            propositionsSet(await getPropositions());
            opinionsSet(await getOpinions());
        })()
    }, []);

    const handleDetailsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
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

    const [loading, loadingSet] = useState(true);
    useEffect(()=>{
        loadingSet(!!propositions && !!opinions);
    }, [opinions, propositions])

    useEffect(()=>{
        console.log("loading: " + loading)
    }, [loading])

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
                <Stack>
                    <Typography sx={{ background: 'yellow' }}>Active Id: {partialState.activeElementId} and type: {partialState.activeElementType}</Typography>
                </Stack>

                
                
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
                            propositions={propositions}
                            opinions={opinions}
                            showDetails={partialState.showDetails}
                            aria-label='proposition-display'
                        />
                    </Context.Provider>
                </Stack> 
                
            </Box>
        </main>

    )
}