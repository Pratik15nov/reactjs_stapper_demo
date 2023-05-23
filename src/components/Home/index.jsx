import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  StepLabel,
  Step,
  Box,
  useMediaQuery,
  createTheme,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import * as yup from "yup";
import Header from "../Header";
import DrawerMenu from "../Drawer";
import { MainContainer, StepperDiv } from "../style/style";
const schema = yup.object().shape({
  option1: yup.string().required("Branch code is required"),
  option2: yup.string().required("Branch is required"),
  option3: yup.string().required("Brand is required"),
  option4: yup.string().required("Sales type is required"),
  option5: yup.string().required("Product type is required"),
});
const theme = createTheme();
const steps = ["Share Location", "Clock in", "Working On", "Clock Out"];
const initialValuesOfLocation = {
  option1: "Branch code",
  option2: "Branch",
  option3: "Brand",
  option4: "Sales Type",
  option5: "Product Type",
};

const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValuesOfLocation,
  });

  const onSubmit = (data) => {
    handleNext();
    console.log(data);
  };

  //Stepper
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const RefreshPage = () => {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
      const refreshPage = () => {
        window.location.reload();
      };

      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      const countdownTimeoutId = setTimeout(refreshPage, 60000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(countdownTimeoutId);
      };
    }, []);

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    return (
      <span>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  };
  return (
    <>
      <Header
        isSmallScreen={isSmallScreen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MainContainer elevation={2}>
        <StepperDiv activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </StepperDiv>
        <MainContainer style={{ textAlign: "center", fontSize: "14px" }}>
          After{" "}
          <span
            style={{
              color: "white",
              background: "red",
              fontWeight: 600,
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            {RefreshPage()}
          </span>
          This page will be refreshed.
        </MainContainer>
        {activeStep === 0 && (
          <Box
            style={{
              textAlign: "center",
              margin: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Box>
        )}
        {activeStep === 1 && (
          <Box
            style={{
              margin: "20px",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                margin: "20px",
                fontWeight: 700,
                color: "#cb4249",
              }}
            >
              Enter Clock in information
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, width: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Branch Code
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="option1"
                      {...register("option1")}
                      label="Branch Code"
                      error={!!errors.option1}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="initialValue1">Initial Value 1</MenuItem>
                      <MenuItem value="option1Value1">
                        Option 1 Value 1
                      </MenuItem>
                      <MenuItem value="option1Value2">
                        Option 1 Value 2
                      </MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: "#d32f2f" }}>
                      {errors.option1 && errors.option1.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    sx={{ m: 1, width: "100%" }}
                    size="small"
                    disabled
                  >
                    <InputLabel id="demo-select-small-label">Branch</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="option2"
                      {...register("option2")}
                      label="Store name"
                      error={!!errors.option2}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="initialValue1">Initial Value 1</MenuItem>
                      <MenuItem value="option1Value1">
                        Option 1 Value 1
                      </MenuItem>
                      <MenuItem value="option1Value2">
                        Option 1 Value 2
                      </MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: "#d32f2f" }}>
                      {errors.option2 && errors.option2.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl sx={{ m: 1, width: "100%" }} size="small">
                <InputLabel id="demo-select-small-label">Brand</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="option3"
                  {...register("option3")}
                  label="Brand"
                  error={!!errors.option3}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="initialValue1">Initial Value 1</MenuItem>
                  <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
                  <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {errors.option3 && errors.option3.message}
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }} size="small">
                <InputLabel id="demo-select-small-label">Sales Type</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="option4"
                  {...register("option4")}
                  label="Sales Type"
                  error={!!errors.option4}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="initialValue1">Initial Value 1</MenuItem>
                  <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
                  <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {errors.option4 && errors.option4.message}
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }} size="small">
                <InputLabel id="demo-select-small-label">
                  Product Type
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="option5"
                  {...register("option5")}
                  label="Product Type"
                  error={!!errors.option5}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="initialValue1">Initial Value 1</MenuItem>
                  <MenuItem value="option1Value1">Option 1 Value 1</MenuItem>
                  <MenuItem value="option1Value2">Option 1 Value 2</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {errors.option5 && errors.option5.message}
                </FormHelperText>
              </FormControl>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        )}
        {activeStep === 2 && (
          <Box
            style={{
              textAlign: "center",
              margin: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Box>
        )}
        {activeStep === 3 && (
          <Box
            style={{
              textAlign: "center",
              margin: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Box>
        )}
      </MainContainer>
      <DrawerMenu
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default Home;
