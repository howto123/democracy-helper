"use client"

import { Box, Button, ButtonGroup, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionOverview from '@/components/propositionOverview';
import { MouseEventHandler, useState } from 'react';
import AddPropositionDialog from '@/components/addPropositionDialog';
import { Identity } from '@/types/identity';
import Context from './context';
import ActiveElement from '@/types/activeElement';

type ThisState = {
    showDetails: boolean,
    activeElementId: Identity | undefined,
    activeElementType: ActiveElement,
}

export default function Home() {
    const propositions = require("../data/propositions.json") as Proposition[];
    const opinions = require("../data/opinions.json") as Opinion[];

    const [thisState, thisStateSet] = useState<ThisState>({
        showDetails: false,
        activeElementId: undefined,
        activeElementType: undefined
    });

    const handleDetailsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        thisStateSet(old => {
            return {
                ...old,
                showDetails: !old.showDetails
            }
        })
    }

    const setPropositionToActiveElement = (id: Identity) => {
        thisStateSet({
            ...thisState,
            activeElementId: id,
            activeElementType: 'proposition'
        })
    }

    const setOpinionToActiveElement = (id: Identity) => {
        thisStateSet({
            ...thisState,
            activeElementId: id,
            activeElementType: 'opinion'
        })
    }

    return (

        <main>
            <Box onClick={e => thisStateSet({
                ...thisState,
                activeElementId: undefined,
                activeElementType: undefined
            })}

                sx={{
                    height: '100vh'
                }}>


                <Box m='5pt'>
                    <Typography variant="h3" component="h1" textAlign={'center'} gutterBottom>
                        Welcome to DemocracyHelper
                    </Typography>
                </Box>
                <Stack>
                    <Typography>Active Id: {thisState.activeElementId} and type: {thisState.activeElementType}</Typography>
                </Stack>

                <Stack
                    divider={<Divider orientation="vertical" />}
                    spacing={2}
                    aria-label='proposition-overview'
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
                                <Button disabled={!thisState.activeElementId}>
                                    <DeleteOutlineOutlinedIcon />
                                </Button>
                            </ButtonGroup>
                            <Button onClick={handleDetailsClick} variant='outlined' sx={{ width: '120pt' }}>
                                {thisState.showDetails ? 'hide details' : 'show details'}
                            </Button>
                        </Stack>
                    </Box>
                    <Context.Provider
                        value={{
                            activeElementId: thisState.activeElementId,
                            activeElementType: thisState.activeElementType,
                            setPropositionToActiveElement,
                            setOpinionToActiveElement,
                        }}
                    >
                        <PropositionOverview
                            propositions={propositions}
                            opinions={opinions}
                            showDetails={thisState.showDetails}
                            aria-label='proposition-display'
                        />
                    </Context.Provider>
                </Stack>
            </Box>
        </main>

    )
}