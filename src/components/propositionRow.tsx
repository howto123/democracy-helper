"use client"

import Proposition from "@/types/proposition"
import { TableRow, TableCell, Button } from "@mui/material"
import OpinionRow from "./opinionRow"
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PropositionWithOpinions from "@/types/propositionWithOpinions";




export default function PropositionRow(
    { proposition }: { proposition: PropositionWithOpinions}
){



    return <>
        <TableRow
            key={proposition.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {proposition.text}
            </TableCell>
            <TableCell>hugeFan</TableCell>
            <TableCell>soundsGood</TableCell>
            <TableCell>noOpinion</TableCell>
            <TableCell>iDontCare</TableCell>
            <TableCell>needsDiscussion</TableCell>
            <TableCell>veto</TableCell>
            <TableCell>
                <Button variant="outlined">
                    <PanToolOutlinedIcon />
                </Button>
            </TableCell>
        </TableRow>
        {proposition.opinions.map(o => <>
            <OpinionRow opinion={o}></OpinionRow>
        </>)}
    </>
}