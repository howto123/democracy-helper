"use client"

import { Box, Button, ButtonGroup, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';
import PropositionOverview from '@/components/propositionOverview';
import { MouseEventHandler, useState } from 'react';


type ThisState = {
    showDetails: boolean,
}



export default function Home() {
    const propositions = require("../data/propositions.json") as Proposition[];
    const opinions = require("../data/opinions.json") as Opinion[];

    const [thisState, thisStateSet] = useState<ThisState>({
        showDetails: false,
    });

    const [myBool, myBoolSet] = useState<string>('lalala');


    const handleDetailsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        thisStateSet(old => {
            return {
                ...old,
                showDetails: !old.showDetails
            }
        })
    }

    return (
        <main>
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
                <Box display='flex' flexDirection='row' justifyContent='center'>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction='row'
                        flexWrap='wrap'
                        aria-label='proposition-general-controls'
                    >
                        <Button variant='outlined'><InfoOutlinedIcon /></Button>
                        <ButtonGroup variant='outlined'>
                            <Button >
                                <AddCircleOutlineOutlinedIcon />
                            </Button>
                            <Button disabled>
                                <DeleteOutlineOutlinedIcon />
                            </Button>
                        </ButtonGroup>
                        <Button onClick={handleDetailsClick} variant='outlined' sx={{ width: '120pt' }}>
                            {thisState.showDetails ? 'hide details' : 'show details'}
                        </Button>
                    </Stack>
                </Box>

                <PropositionOverview
                    propositions={propositions}
                    opinions={opinions}
                    showDetails={thisState.showDetails}
                    aria-label='proposition-display'
                />
            </Stack>
        </main>
    )
}
