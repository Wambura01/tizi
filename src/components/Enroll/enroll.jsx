import React, { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";

import logo from "../../assets/logo.png";

//styles
import {
  LeftDiv,
  LoginPage,
  LogoStyles,
  RightDiv,
  RightContent,
  Heading,
} from "../Login/loginStyles";
import { UsersOperations } from "../../firebase/operations";

function Enroll() {
  const [isEnrolled, setIsEnrolled] = useState(false); // logged in state
  const [open, setOpen] = useState(false); // open and close alert
  let navigate = useNavigate();

  // customizable alert
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // handle closing of alert
  const handleClose = () => {
    setOpen(false);
  };

  const InputFeedback = ({ error }) =>
    error ? (
      <Typography
        color="error"
        sx={{ fontSize: "0.8rem", fontFamily: "Rubik, sans-serif" }}
      >
        {error}
      </Typography>
    ) : null;

  // validating form inputs
  const EnrollSchema = Yup.object().shape({
    displayName: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required!"),
    phoneNumber: Yup.number().required("Phone Number is required!"),
    gender: Yup.string().required("Gender is required!"),
    weight: Yup.number().required("Weight is required!"),
    height: Yup.number().required("Height is required!"),
    plan: Yup.string().required("Plan is required!"),
  });

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      weight: "",
      height: "",
      plan: "",
    },
    validationSchema: EnrollSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await UsersOperations.enrollUser(values);

      if (response.isCreated) {
        setIsEnrolled(true);
        setOpen(true);
        resetForm();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else {
        setOpen(true);
        console.log(response.err);
      }
    },
  });

  const { values, errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <LoginPage>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isEnrolled ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isEnrolled ? "Enrolled successfully!!!" : "Failed to Enroll!!!"}
        </Alert>
      </Snackbar>
      <LeftDiv className="left">
        <Box sx={{ width: "90%" }}>
          <Box>
            <LogoStyles className="logo-img">
              <img src={logo} alt="logo" />
            </LogoStyles>
          </Box>
        </Box>
      </LeftDiv>
      <RightDiv className="right">
        <RightContent>
          <Heading>Kindly provide the details below to enroll:</Heading>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField
                fullWidth
                autoComplete="displayName"
                type="text"
                margin="normal"
                label="Display Name"
                {...getFieldProps("displayName")}
                error={Boolean(touched.displayName && errors.displayName)}
                helperText={touched.displayName && errors.displayName}
              />
              <TextField
                fullWidth
                autoComplete="email"
                type="email"
                margin="normal"
                label="Email"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                autoComplete="phoneNumber"
                type="text"
                margin="normal"
                label="Phone Number"
                {...getFieldProps("phoneNumber")}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
              <FormControl
                sx={{ marginTop: "1rem" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  {...getFieldProps("gender")}
                  name="gender"
                  value={values.gender}
                  label="Gender"
                  error={Boolean(touched.gender && errors.gender)}
                  helperText={touched.gender && errors.gender}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              {touched.gender && <InputFeedback error={errors.gender} />}
              <TextField
                fullWidth
                autoComplete="weight"
                type="number"
                margin="normal"
                label="Weight"
                {...getFieldProps("weight")}
                error={Boolean(touched.weight && errors.weight)}
                helperText={touched.weight && errors.weight}
              />
              <TextField
                fullWidth
                autoComplete="height"
                type="number"
                margin="normal"
                label="Height"
                {...getFieldProps("height")}
                error={Boolean(touched.height && errors.height)}
                helperText={touched.height && errors.height}
              />
              <FormControl
                sx={{ marginTop: "1rem" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Plan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  {...getFieldProps("plan")}
                  name="plan"
                  value={values.plan}
                  label="Plan"
                  error={Boolean(touched.plan && errors.plan)}
                  helperText={touched.plan && errors.plan}
                >
                  <MenuItem value="Basic">Basic</MenuItem>
                  <MenuItem value="Platinum">Platinum</MenuItem>
                  <MenuItem value="Pro">Pro</MenuItem>
                </Select>
              </FormControl>
              {touched.plan && <InputFeedback error={errors.plan} />}
              <Box
                sx={{
                  mt: "1.5rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="reset"
                  variant="outlined"
                  color="error"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{ marginLeft: "2rem" }}
                  variant="contained"
                  color="success"
                >
                  Enroll
                </Button>
              </Box>
            </Form>
          </FormikProvider>
        </RightContent>
      </RightDiv>
    </LoginPage>
  );
}

export default Enroll;
