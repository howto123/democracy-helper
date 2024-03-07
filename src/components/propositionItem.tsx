"use client"

import { Typography, Box } from "@mui/material"
import OpinionItem from "./opinionItem"
import PropositionWithOpinions from "@/types/propositionWithOpinions";
import { grid12SlotsStyles, propositionBorderStyles } from "@/styles/propositionItemStyles";
import { MouseEventHandler, useContext, useState } from "react";
import Context from "@/app/context";
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
    const { activeElementId, activeElementType, setPropositionToActiveElement } = useContext(Context)
    const [showsOpinions, showsOpinionsSet] = useState(false)
    const clickEventHandler: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation()
        showsOpinionsSet(o => !o)
        setPropositionToActiveElement(proposition.id)
    }
    const isActiveElement = () => proposition.id === activeElementId && activeElementType === "proposition"
    

    return <>
        <Box
            sx={{ ...propositionBorderStyles, ...grid12SlotsStyles }}
            onClick={clickEventHandler}
            className={isActiveElement() ? "active-element" : "passive-element"}
        >
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
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
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
                display: "flex",
                justifyContent: "center",
            }}>
                <AddOpinionDialog propositionId={proposition.id} />
            </Box>

            {showsOpinions ?
                <Box onClick={ e => e.stopPropagation() } sx={{
                    gridColumnStart: 1,
                    gridColumnEnd: -1,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "auto",
                }}>
                    {proposition.opinions?.map(o =>
                        <OpinionItem key={o.id} opinion={o}></OpinionItem>
                    )}
                </Box>
                : <></>
            }
        </Box>
    </>
}

