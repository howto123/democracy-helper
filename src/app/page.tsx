"use client"

import styles from './page.module.css'
import BasicTable from '@/components/propositionOverview'
import { Box, Button, FormControlLabel, Stack, Switch, Typography } from '@mui/material'
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
        <main className={styles.main}>
            <Typography variant="h3" component="h1" textAlign={'center'} gutterBottom>
                Welcome to DemocracyHelper
            </Typography>
            <Box width='100%'>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction='row'
                    useFlexGap
                    justifyContent='space-around'
                    alignItems='stretch'
                    flexWrap='wrap'
                >
                    <div>
                        <Button variant='outlined'><InfoOutlinedIcon /></Button>
                    </div>
                    <div>
                        <Button variant='outlined'><AddCircleOutlineOutlinedIcon /></Button>
                        <Button variant='outlined' disabled><DeleteOutlineOutlinedIcon /></Button>
                        <Button variant='outlined' onClick={handleDetailsClick}>
                            {thisState.showDetails ? 'hide details' : 'show details'}
                        </Button>
                    </div>
                </Stack>
            </Box>
            <PropositionOverview
                propositions={propositions}
                opinions={opinions}
                showDetails={thisState.showDetails}
            />
        </main>
    )
}
