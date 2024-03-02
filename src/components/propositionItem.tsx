"use client"

import Proposition from "@/types/proposition"
import { TableRow, TableCell, Button, Typography, Box, Grid } from "@mui/material"
import OpinionRow from "./opinionRow"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PropositionWithOpinions from "@/types/propositionWithOpinions";
import { grid12SlotsStyles, propositionBorderStyles } from "@/styles/propositionItemStyles";
import { Boy } from "@mui/icons-material";




export default function PropositionItem(
    {
        proposition,
        showDetails,
    }: {
        proposition: PropositionWithOpinions,
        showDetails: boolean,
    }
) {



    return <>
        <Box sx={{...propositionBorderStyles, ...grid12SlotsStyles}}>
                <Box sx={{
                    gridColumnStart: 1,
                    gridColumnEnd: 7,
                }}>
                    <Typography>{proposition.text}</Typography>
                </Box>

                <Box sx={{
                    gridColumnStart: -1,
                    gridColumnEnd: -1,
                }}>
                    <Button variant="outlined">
                        <PanToolOutlinedIcon />
                    </Button>
                </Box>

                {showDetails ?
                    <Box sx={{
                        gridColumnStart: 1,
                        gridColumnEnd: 13,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
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

