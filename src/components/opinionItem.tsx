

import Context from "@/app/context";
import Opinion from "@/types/opinion";
import { Box } from "@mui/material";
import { MouseEventHandler, useContext } from "react";


export default function OpinionItem({ opinion } : { opinion : Opinion }) {
    const clickEventHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        console.log(opinion)
        setOpinionToActiveElement(opinion.id)
    }

    const { activeElementId, activeElementType, setOpinionToActiveElement } = useContext(Context)

    const isActiveElement = () => opinion.id === activeElementId && activeElementType === "opinion"
    
    return (
        <Box
            onClick={clickEventHandler}
            sx={{
                display: "grid",
                gridColumn: "1/-1",
                gridTemplateColumns: "subgrid",
                padding: "1pt",
                margin: "2pt",
                border: "1px solid black",
                borderRadius: "5pt",
            }}
            className={isActiveElement() ? "active-element" : "passive-element"}
        >
            <Box sx={{
                gridColumn: "1/2",
            }}>
                {opinion.type}
            </Box>
            <Box sx={{
                gridColumn: "2/-1",
            }}>
                {opinion.text}
            </Box>
        </Box>        
    );
  }