import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Proposition from "@/types/proposition";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { createProposition, deleteOpinion, deleteProposition } from "@/helperFunctions/nextApiCalls";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext, useState } from "react";
import Context from "@/app/context";
import password from "@/types/password";
import assert from "assert";
import { disablePropagationHandler, getFormObject_PreventDefault_StopPropagation } from "@/helperFunctions/dialogHelpers";

export default function DeleteItemDialog( {buttonDisabled}:{buttonDisabled:boolean} ) {
    const [open, openSet] = useState(false);

    const handleClickOpen = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        openSet(true);
    };

    const handleClose = () => {
        openSet(false);
    };

    const { activeElementId, activeElementType } = useContext(Context);

    return (
        <React.Fragment>
            <Button disabled={buttonDisabled} onClick={handleClickOpen}>
                <DeleteOutlineOutlinedIcon />
            </Button>
            <Dialog
                onClick={disablePropagationHandler}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        const formObject = getFormObject_PreventDefault_StopPropagation(event);

                        const password = formObject.password;
                        assert(activeElementId!==undefined);

                        switch (activeElementType) {
                            case "proposition": {
                                deleteProposition(activeElementId, password);
                                break;
                            }
                            case "opinion": {
                                deleteOpinion(activeElementId, password);
                                break;
                            }
                            default: {
                                throw new Error("invalid element type");
                            }
                        }

                        handleClose();
                    },
                }}
            >
                <DialogTitle>Delete Item</DialogTitle>
                <DialogContent>
                     Do you want to permanently delete the highlighted item?
                     <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="delete-password">Password for that item</InputLabel>
                        <OutlinedInput
                            id="delete-password"
                            type="password"
                            label="password of item to be deleted"
                            name="password"
                        /></FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
