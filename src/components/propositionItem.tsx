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
        <Box sx={{ ...propositionBorderStyles, ...grid12SlotsStyles }}>
            <Box sx={{
                gridColumnStart: 1,
                gridColumnEnd: 7,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end'
            }}>
                <Typography>{proposition.text}</Typography>
            </Box>

            <Box sx={{
                gridColumnStart: 7,
                gridColumnEnd: 11,
            }}>
                {showDetails ? <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Box>
                        {proposition.opinionSum.hugeFan}
                    </Box>
                    <Box>
                        {proposition.opinionSum.soundsGood}
                    </Box>
                    <Box>
                        {proposition.opinionSum.iDontCare}
                    </Box>
                    <Box>
                        {proposition.opinionSum.againstButNoVeto}
                    </Box>
                    <Box>
                        {proposition.opinionSum.veto}
                    </Box>
                    <Box>
                        {proposition.opinionSum.needsDiscussion}
                    </Box>
                </Box> : <></>}
            </Box>

            <Box sx={{
                gridColumnStart: -2,
                gridColumnEnd: -1,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Button variant="outlined">
                    <PanToolOutlinedIcon />
                </Button>
            </Box>
        </Box>
    </>
}

