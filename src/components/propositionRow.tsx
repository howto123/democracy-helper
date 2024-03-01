"use client"

import Proposition from "@/types/proposition"
import { TableRow, TableCell, Button, Typography, Box } from "@mui/material"
import OpinionRow from "./opinionRow"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PropositionWithOpinions from "@/types/propositionWithOpinions";




export default function PropositionRow(
    {
        proposition,
        showDetails,
    }: {
        proposition: PropositionWithOpinions,
        showDetails: boolean,
    }
){


    return <>
        <Box sx={{
            gridColumnStart: 1,
            gridColumnEnd: -1,
            margin: '5pt',
            padding: '2pt',
            border: '2pt solid gray',
            borderRadius: '5pt'
            
        }}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'auto',
            }}>
                <Box sx={{
                    gridColumnStart: 1,
                    gridColumnEnd: -2
                }}>
                    <Typography>{proposition.text}</Typography>
                </Box>
                <Box sx={{
                    gridColumnStart: -1,
                    gridColumnEnd: -1
                }}>
                    <Button variant="outlined">
                        <PanToolOutlinedIcon />
                    </Button>
                </Box>
            </Box>
            {showDetails ? 
                <Box sx={{
                    gridColumnStart: -1,
                    gridColumnEnd: -1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(10, 1fr)',
                    gridTemplateRows: 'auto',

                }}>
                    {proposition.opinions.map(o =>
                        <OpinionRow key={o.id} opinion={o} />
                    )}
                </Box> 
                :
            <></>}
        </Box>
    </>
}

