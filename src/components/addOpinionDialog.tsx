import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { createOpinion } from "@/helperFunctions/nextApiCalls";
import Opinion from "@/types/opinion";
import { Identity } from "@/types/identity";
import { OpinionType } from "@/types/opinionType";
import getEnumKeys from "@/helperFunctions/getEnumKeys";
import { disablePropagationHandler, getFormObject_PreventDefault_StopPropagation } from "@/helperFunctions/dialogHelpers";

export default function AddOpinionDialog({ propositionId }: { propositionId: Identity }) {
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
                <PanToolOutlinedIcon />
            </Button>
            <Dialog
                onClick={disablePropagationHandler}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        const formObject = getFormObject_PreventDefault_StopPropagation(event)

                        let newOpinion: Opinion = {
                            id: "",
                            text: formObject.text,
                            type: formObject.type,
                            propositionId: propositionId,
                        }
                        newOpinion = await createOpinion(newOpinion, formObject.password);
                        console.log(newOpinion);

                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add proposition</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="opinion-text">New opinion</InputLabel>
                        <OutlinedInput
                            id="opinion-text"
                            type="text"
                            label="New opinion"
                            name="text"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                        <InputLabel htmlFor="opinion-password">Password</InputLabel>
                        <OutlinedInput
                            id="opinion-password"
                            type="password"
                            label="Password"
                            name="password"
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
