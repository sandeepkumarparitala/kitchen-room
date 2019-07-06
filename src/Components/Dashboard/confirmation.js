import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ConfirmationDailog = props => {
  return (
    <Dialog
      open={props.openDailog}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"please confirm to receive a call"}
      </DialogTitle>
      <DialogContent />
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={props.handleConfirm} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
