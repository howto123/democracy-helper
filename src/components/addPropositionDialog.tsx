import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Proposition from '@/types/proposition';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { createProposition } from '@/helperFunctions/nextApiCalls';

export default function AddPropositionDialog() {
    const [open, openSet] = React.useState(false);

    const handleClickOpen = () => {
        openSet(true);
    };

    const handleClose = () => {
        openSet(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen}>
                <AddCircleOutlineOutlinedIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        event.stopPropagation();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        let newProposition: Proposition = {
                            id: '',
                            text: formJson.text,
                        }
                        newProposition = await createProposition(newProposition);
                        console.log(newProposition)
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add proposition</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="proposition-text">New proposition</InputLabel>
                        <OutlinedInput
                            id="proposition-text"
                            type="text"
                            label="New proposition"
                            name="text"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
