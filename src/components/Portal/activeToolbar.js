import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Toolbar, Button, Box, Paper } from "@mui/material";

export const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const { data } = props;

  const females = data.filter((user) => user.gender === "female");
  const males = data.filter((user) => user.gender === "male");
  const pro = data.filter((user) => user.plan === "Pro");
  const basic = data.filter((user) => user.plan === "Basic");
  const premium = data.filter((user) => user.plan === "Premium");
  const active = data.filter((user) => user.active === true);
  const inactive = data.filter((user) => user.active === false);

  console.log("FEMALES: ", females);

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
          backgroundColor: "#f2fffb",
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{
              flex: "1 1 100%",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "700",
              fontSize: "26px",
            }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Admin Portal
          </Typography>
        )}
        <Link to="/">
          <Button
            fullWidth
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundColor: "black",
              color: "white",
              fontSize: "0.9rem",
              marginRight: "4rem",
            }}
            variant="contained"
          >
            Home
          </Button>
        </Link>
      </Toolbar>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f2fffb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Registered Users' Summaries
        </Typography>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            margin: "2rem 0",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              No. Of Females
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {females.length}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              No. Of Males
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {males.length}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              No. Of Active Users
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {active.length}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              No. Of Inactive Users
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {inactive.length}
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexWrap: "wrap",
            margin: "2rem 0",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              Subscribed to Basic
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {basic.length}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              Subscribed to Pro
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {pro.length}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem" }}
              className="stroke-text__black"
            >
              Subscribed to Premium
            </Typography>
            <Typography
              sx={{
                fontSize: "3.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {premium.length}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
