import React, { useState, forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { UsersOperations } from "../../firebase/operations";

export default function UpdateUser({ userId, userData }) {
  const [open, setOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // customizable alert
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { active } = userData;

  console.log("USER ID: ", userId);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    const response = await UsersOperations.deactivateUser(userId, active);
    console.log("response: ", response);
    if (response === true) {
      setIsUpdated(true);
      setOpenSnackbar(true);
      handleClose();
      window.location.reload();
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleClose}
          severity={isUpdated ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isUpdated ? "User Updated successfully!!!" : "Cannot Update!!!"}
        </Alert>
      </Snackbar>
      <MenuItem
        component={RouterLink}
        to="#"
        sx={{ color: "text.secondary" }}
        onClick={handleClickOpen}
      >
        <ListItemIcon>
          <ModeEditOutlineOutlinedIcon width={24} height={24} />
        </ListItemIcon>
        <ListItemText
          primary={active ? "Deactivate User" : "Activate User"}
          primaryTypographyProps={{ variant: "body2" }}
        />
      </MenuItem>
      <Dialog open={open} onClose={handleClose} onBackdropClick="false">
        <DialogTitle
          sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "bold" }}
        >
          {active ? "Deactivate User" : "Activate User"}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontFamily: "Rubik, sans-serif" }}>
            {active ? `Deactivating ` : `Activating `}
            <span
              style={{ fontWeight: "bold" }}
            >{`${userData.displayName}`}</span>{" "}
            from the system! <br />
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Are you sure you want to{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: active ? "red" : "green",
                  textDecoration: "underline",
                }}
              >
                {active ? `deactivate` : `activate`}
              </span>{" "}
              this user?
            </span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ fontFamily: "Rubik, sans-serif" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            color={active ? "error" : "success"}
            sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "bold" }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
