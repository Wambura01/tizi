import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Toolbar, Button } from "@mui/material";

export const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
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
          Registered Users
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
  );
};
