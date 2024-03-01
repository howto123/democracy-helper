

import Opinion from '@/types/opinion';
import { Box, TableCell, TableRow, Typography } from '@mui/material';


export default function OpinionRow({ opinion } : { opinion : Opinion }) {
    return (
        <Box
            sx={{
                gridColumnStart: 1,
                gridColumnEnd: -1,
                padding: '1pt',
                margin: '2pt',
                border: '1px solid black',
                borderRadius: '5pt',
            }}
        >
            <Box sx={{
                gridColumnStart: 1,
                gridColumnEnd: 1,
            }}>
                {opinion.type}
            </Box>
            <Box sx={{
                gridColumnStart: 2,
                gridColumnEnd: -1,
            }}>
                {opinion.text}
            </Box>
        </Box>        
    );
  }