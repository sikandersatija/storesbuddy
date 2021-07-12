import { useMediaQuery, useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import WarningIcon from '@material-ui/icons/Warning';
import {
    Button,
} from "@material-ui/core";
const MesssageDailog = (props) => {
    console.log(props)
    useEffect(() => {
        setOpen(true);
    }, [])

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {props.alert}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.status === '1' ?
                            <CheckBoxIcon variant="contained" color="primary" fontSize="large" /> : null}
                       
                        {props.status === "0" ?
                            <WarningIcon variant="contained" color="secondary" fontSize="large" /> : null}
                       
                        {props.message}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                        OK
    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MesssageDailog;