import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { createOpinion } from '@/helperFunctions/nextApiCalls';
import Opinion from '@/types/opinion';
import { Identity } from '@/types/identity';
import { OpinionType } from '@/types/opinionType';
import getEnumKeys from '@/helperFunctions/getEnumKeys';

export default function AddOpinionDialog({ propositionId }: { propositionId: Identity }) {
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
                <PanToolOutlinedIcon />
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
                        let newOpinion: Opinion = {
                            id: '',
                            text: formJson.text,
                            type: formJson.type,
                            propositionId: propositionId,
                        }
                        newOpinion = await createOpinion(newOpinion);
                        console.log(newOpinion)
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add proposition</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="opinion-text">New opinion</InputLabel>
                        <OutlinedInput
                            id="opinion-text"
                            type="text"
                            label="New opinion"
                            name="text"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="opinion-type">And its type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="opinion-type"
                            label="And its type"
                            name="type"
                            value=""
                        >
                            {getEnumKeys(OpinionType).map((key, index) =>
                                <MenuItem key={index} value={OpinionType[key]}>{key}</MenuItem>
                            )}
                        </Select>
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
