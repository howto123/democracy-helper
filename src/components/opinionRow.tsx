

import Opinion from '@/types/opinion';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';


export default function OpinionRow({ opinion } : { opinion : Opinion }) {
    const clickEventHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        console.log(opinion)
    }

    
    return (
        <Box
            onClick={clickEventHandler}
            sx={{
                display: 'grid',
                gridColumn: '1/-1',
                gridTemplateColumns: 'subgrid',
                padding: '1pt',
                margin: '2pt',
                border: '1px solid black',
                borderRadius: '5pt',
            }}
        >
            <Box sx={{
                gridColumn: '1/2',
            }}>
                {opinion.type}
            </Box>
            <Box sx={{
                gridColumn: '2/-1',
            }}>
                {opinion.text}
            </Box>
        </Box>        
    );
  }