import Opinion from "@/types/opinion";
import OpinionRow from "./opinionRow";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";



export default function OpinionSubtable({ opinions }:{ opinions: Opinion[]}) {
    return (


        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Text </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {opinions.map((op) => (
                    <OpinionRow key={ op.id } opinion={ op } />
                ))}
            </TableBody>
        </Table>
    )
}