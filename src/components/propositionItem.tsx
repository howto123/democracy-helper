"use client"

import Proposition from "@/types/proposition"
import { TableRow, TableCell, Button, Typography, Box, Grid } from "@mui/material"
import OpinionRow from "./opinionRow"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PropositionWithOpinions from "@/types/propositionWithOpinions";
import { grid12SlotsStyles, propositionBorderStyles } from "@/styles/propositionItemStyles";
import { Boy } from "@mui/icons-material";
import { MouseEventHandler, useState } from "react";
import AddOpinionDialog from "./addOpinionDialog";




export default function PropositionItem(
    {
        proposition,
        showDetails,
    }: {
        proposition: PropositionWithOpinions,
        showDetails: boolean,
    }
) {
    const [showsOpinions, showsOpinionsSet] = useState(false)
    const clickEventHandler: MouseEventHandler<HTMLDivElement> = () => showsOpinionsSet(o => !o)


    return <>
        <Box sx={{ ...propositionBorderStyles, ...grid12SlotsStyles }} onClick={clickEventHandler}>
            <Box sx={{
                gridColumnStart: 1,
                gridColumnEnd: 7,
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
                <AddOpinionDialog propositionId={proposition.id} />
            </Box>

            {showsOpinions ?
                <Box sx={{
                    gridColumnStart: 1,
                    gridColumnEnd: -1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'auto',
                }}>
                    {proposition.opinions.map(o =>
                        <OpinionRow key={o.id} opinion={o}></OpinionRow>
                    )}
                </Box>
                : <></>
            }
        </Box>
    </>
}

