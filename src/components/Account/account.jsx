import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { Button } from "@mui/material";

import { getInitials, getFirstLetter } from "../../utils/getInitials";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState([]);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const auth = getAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // After successful sign-out .
        localStorage.clear();
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        // an error happened.
        console.log("Error while logging out!", error);
      });
  };

  console.log("user: ", user);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <Tooltip title="Account Information" arrow>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, mt: 1 }}
            textAlign="right"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 41, height: 40, display: "flex" }}>
              <Typography
                sx={{
                  backgroundColor: "black",
                  padding: "0.5rem",
                  borderRadius: "50pc",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {user?.displayName
                  ? getInitials(user?.displayName)
                  : getFirstLetter(user?.user?.email)}
              </Typography>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Typography
            sx={{
              backgroundColor: "black",
              padding: "0.5rem",
              borderRadius: "50pc",
              fontFamily: "Rubik, sans-serif",
              fontWeight: "700",
              color: "white",
            }}
          >
            {user?.displayName
              ? getInitials(user?.displayName)
              : getFirstLetter(user?.user?.email)}
          </Typography>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Rubik, sans-serif",
                fontWeight: "700",
                fontSize: "14px",
                textAlign: "right",
              }}
            >
              {user?.displayName
                ? user?.displayName
                : user?.user?.email.split("@").shift()}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Rubik, sans-serif",
                fontWeight: "400",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              {user?.email ? user?.email : user?.user?.email}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        {user.email === "bwambura3314@gmail.com" ? (
          <MenuItem>
            <Button fullWidth color="primary" variant="outlined">
              <Link
                to="admin-portal"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Portal
              </Link>
            </Button>
          </MenuItem>
        ) : (
          ""
        )}
        <MenuItem>
          <Button fullWidth color="error" variant="contained" onClick={logout}>
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
