"use client"

import Proposition from "@/types/proposition"
import { TableRow, TableCell, Button, Typography, Box, Stack } from "@mui/material"
import OpinionRow from "./opinionRow"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PropositionWithOpinions from "@/types/propositionWithOpinions";
import { grid12SlotsStyles, propositionBorderNoneStyles } from "@/styles/propositionItemStyles";
import { OpinionType } from "@/types/opinionType";




export default function PropositionItem({
    showDetails,
}: {
    showDetails: boolean
}) {


    return <>
        <Box sx={{ ...propositionBorderNoneStyles, ...grid12SlotsStyles }}>
            <Box sx={{
                gridColumnStart: 1,
                gridColumnEnd: 7,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end'
            }}>
                <Typography display='inline'>Proposition</Typography>
            </Box>

            <Box sx={{
                gridColumnStart: 7,
                gridColumnEnd: 11,
            }}>
                {showDetails ? <Box sx={{
                    writingMode: 'tb-rl',
                    transform: 'rotate(-180deg)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <Box>
                        {OpinionType.HugeFan.toString()}
                    </Box>
                    <Box>
                        {OpinionType.SoundsGood.toString()}
                    </Box>
                    <Box>
                        {OpinionType.IDontCare.toString()}
                    </Box>
                    <Box>
                        {OpinionType.AgainstButNoVeto.toString()}
                    </Box>
                    <Box>
                        {OpinionType.Veto.toString()}
                    </Box>
                    <Box>
                        {OpinionType.NeedsDiscussion.toString()}
                    </Box>

                </Box> : <></>}
            </Box>
        </Box>
    </>
}

