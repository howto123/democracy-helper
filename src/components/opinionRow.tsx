

import Opinion from '@/types/opinion';
import { TableCell, TableRow } from '@mui/material';


export default function OpinionRow({ opinion } : { opinion : Opinion }) {
    return (
        <TableRow>
            <TableCell align="right">{opinion.type}</TableCell>
            <TableCell align="right">{opinion.text}</TableCell>
        </TableRow>
    );
  }