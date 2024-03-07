import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Proposition from "@/types/proposition";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { createProposition } from "@/helperFunctions/nextApiCalls";
import { disablePropagationHandler, getFormObject_PreventDefault_StopPropagation } from "@/helperFunctions/dialogHelpers";


export default function AddPropositionDialog() {
    const [open, openSet] = React.useState(false);

    const handleClickOpen = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
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
                onClick={disablePropagationHandler}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        const formObject = getFormObject_PreventDefault_StopPropagation(event);

                        let newProposition: Proposition = {
                            id: "",
                            text: formObject.text,
                        };
                        newProposition = await createProposition(newProposition, formObject.password);
                        console.log(newProposition);

                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add proposition</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="proposition-text">New proposition</InputLabel>
                        <OutlinedInput
                            id="proposition-text"
                            type="text"
                            label="New proposition"
                            name="text" />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="proposition-password">Password</InputLabel>
                        <OutlinedInput
                            id="proposition-password"
                            type="password"
                            label="Password"
                            name="password" />
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
