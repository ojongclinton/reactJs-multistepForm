import React, { useState } from "react";
import "./App.css";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {
  Box,
  Button,
  Modal,
  Step,
  TextField,
  StepLabel,
  Stepper,
  Grid,
  Typography,
  InputLabel,
  Tooltip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { stepStyles } from "./styles";
import { steps } from "./steps";

function App() {
  const [inputValues, setInputValues] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (propertyName, newValue) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [propertyName]: newValue,
    }));
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => ++prevActiveStep);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => --prevActiveStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correct submit");

    console.log(inputValues);
  };

  return (
    <div className="App">
      <Modal
        open={true}
        style={{
          height: "fit-content",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
            outline: "none",
            borderTopRightRadius: "35px",
          }}
        >
          <Stepper activeStep={activeStep} sx={stepStyles} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label.name} {...stepProps}>
                  <StepLabel {...labelProps}>{label.name}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <React.Fragment>
            <div style={{ maxWidth: "1000px" }}>
              <div
                style={{
                  width: "fit-content",
                  margin: "20px auto",
                  textAlign: "center",
                  maxWidth: "600px",
                }}
              >
                <Typography
                  style={{ color: "#5C6A85" }}
                  variant="h5"
                  color={"grey"}
                >
                  Step {activeStep + 1}
                </Typography>
                <Typography style={{ color: "#5C6A85" }} variant="h4">
                  {steps[activeStep].name}
                </Typography>
                <Typography variant="body1" style={{ color: "#5C6A85" }}>
                  {steps[activeStep].description}
                </Typography>
              </div>
              <div style={{ margin: "1rem 2.5rem" }}>
                <Typography style={{ marginLeft: "8px" }}>
                  {steps[activeStep].sectionName}
                </Typography>
                <Grid container gap={0}>
                  {steps[activeStep].inputs.map((indivi, index) => {
                    return (
                      <Grid item xl={4} lg={6} sm={6} xs={12} key={index}>
                        <div style={{ margin: "10px" }}>
                          <div style={{ display: "flex", gap: "1px" }}>
                            <InputLabel
                              shrink
                              htmlFor={indivi.name}
                              sx={{
                                fontSize: "20px",
                                color: "#5C6A85",
                                margin: "0px",
                                marginTop: "4px",
                              }}
                            >
                              {indivi.label}
                            </InputLabel>
                            {indivi.toolTip && (
                              <div>
                                <Tooltip
                                  arrow
                                  placement="right"
                                  title={indivi.toolTip}
                                >
                                  <IconButton
                                    style={{ padding: "0px" }}
                                    size="small"
                                  >
                                    <AiTwotoneQuestionCircle />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            )}
                          </div>
                          <TextField
                            value={inputValues[indivi.name] || ""}
                            onChange={(e) =>
                              handleChange(indivi.name, e.target.value)
                            }
                            sx={{ borderColor: "red" }}
                            fullWidth
                            variant="outlined"
                            size="small"
                            id={indivi.name}
                            placeholder={indivi.label}
                            required={indivi.required}
                            type={indivi.type}
                            name={indivi.name}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </Grid>
                    );
                  })}
                  {steps[activeStep].additionalInputs?.map(
                    (additional, index) => {
                      return (
                        <Grid item xs={12} lg={12} sm={12} xl={12} key={index}>
                          <Typography style={{ marginLeft: "8px" }}>
                            {additional.sectionName}
                          </Typography>
                          {additional.inputs.map((one, index) => {
                            return (
                              <Grid container gap={9} key={index}>
                                <Grid item xs={10} lg={10} sm={10} xl={10}>
                                  <div style={{ margin: "10px" }}>
                                    <TextField
                                      fullWidth
                                      variant="outlined"
                                      size="small"
                                      id={one.name}
                                      required={one.required}
                                      type="text"
                                      value={one.placeholder}
                                      name={one.name}
                                      InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <RxCross1
                                              size={20}
                                              color="red"
                                              style={{ fontWeight: "700px" }}
                                            />
                                          </InputAdornment>
                                        ),
                                      }}
                                      InputLabelProps={{
                                        shrink: true,
                                        style: { color: "blue" }, // Adjust the color as needed
                                      }}
                                    />
                                  </div>
                                </Grid>
                                <Grid item xs={1} lg={1} sm={1} xl={1}>
                                  <div
                                    style={{
                                      backgroundColor: "#7C86EE",
                                      padding: "5px",
                                      borderRadius: "10px",
                                      width: "fit-content",
                                      margin: "10px auto",
                                      marginRight: "0px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <IoIosArrowForward
                                      color="white"
                                      size={30}
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                            );
                          })}
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" type="submit">
                  Finish
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
        </form>
      </Modal>
    </div>
  );
}

export default App;
