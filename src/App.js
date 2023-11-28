import React from "react";
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

function App() {
  const steps = [
    {
      name: "Your Profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.",
      inputs: [
        {
          name: "firstName",
          type: "text",
          required: true,
          label: "First Name",
        },
        {
          name: "lastName",
          type: "text",
          required: true,
          label: "Last Name",
        },
        {
          name: "email",
          type: "email",
          required: true,
          label: "Email",
        },
        {
          name: "phoneNumber",
          type: "tel",
          required: true,
          label: "Phone Number",
        },
        {
          name: "password",
          type: "password",
          required: true,
          label: "Password",
        },
        {
          name: "confirmPassword",
          type: "password",
          required: true,
          label: "Confirm password",
        },
      ],
      additionalInputs: [],
    },
    {
      name: "Business Information",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.",
      sectionName: "GENERAL INFORMATION",
      inputs: [
        {
          name: "brandName",
          type: "text",
          required: true,
          label: "Brand Name",
        },
        {
          name: "brandType",
          type: "text",
          required: true,
          label: "Brand Type",
          toolTip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "streetAddr",
          type: "text",
          required: true,
          label: "Street Address",
        },
        {
          name: "city",
          type: "text",
          required: true,
          label: "City",
        },
        {
          name: "zipCode",
          type: "text",
          required: true,
          label: "Zip Code",
        },
        {
          name: "taxIdNumber",
          type: "text",
          required: true,
          label: "Tax Id Number",
        },
      ],
      additionalInputs: [
        {
          sectionName: "DOCUMENTS",
          description:
            "Once the following docuemtns are signed, You'll be ready to get started",
          inputs: [
            {
              name: "esignature",
              type: "file",
              required: false,
              placeholder: "Electronically sign the agreement(s)",
            },
            {
              name: "adultBrevage",
              type: "file",
              required: false,
              placeholder:
                "Non adult breverage Kroger market supplier waiver and release",
            },
          ],
        },
        {
          sectionName: "COI PDF UPLOAD",
          description:
            "Once the following docuemtns are signed, You'll be ready to get started",
          inputs: [
            {
              name: "esignature",
              type: "file",
              required: false,
              placeholder:
                "Once the following documents are signed, you'll be ready to get started",
            },
          ],
        },
      ],
    },
    {
      name: "Additional Users",
      inputs: [
        {
          name: "brandName",
          type: "text",
          required: true,
          label: "Brand Name",
        },
        {
          name: "brandType",
          type: "text",
          required: true,
          label: "Brand Type",
          toolTip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },

        {
          name: "brandType",
          type: "text",
          required: true,
          label: "Brand Type",
        },
      ],
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);
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
                  {steps[activeStep].inputs.map((indivi) => {
                    return (
                      <Grid item xl={4} lg={6} sm={6} xs={12}>
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
                                <Tooltip title="Sdsdsdsdsd">
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
                            sx={{ borderColor: "red" }}
                            fullWidth
                            variant="outlined"
                            size="small"
                            id={indivi.name}
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
                  {steps[activeStep].additionalInputs?.map((additional) => {
                    return (
                      <Grid xs={12} lg={12} sm={12} xl={12}>
                        <Typography style={{ marginLeft: "8px" }}>
                          {additional.sectionName}
                        </Typography>
                        {additional.inputs.map((one) => {
                          return (
                            <Grid container gap={9}>
                              <Grid item xs={10} lg={10} sm={10} xl={10}>
                                <div style={{ margin: "10px" }}>
                                  <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    id={one.name}
                                    required={one.required}
                                    type="text"
                                    placeholder={one.placeholder}
                                    disabled
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
                                  }}
                                >
                                  <IoIosArrowForward color="white" size={30} />
                                </div>
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <button type="submit">Submit</button>
              ) : (
                <button onClick={handleNext} type="button">
                  Next
                </button>
              )}
            </Box>
          </React.Fragment>
        </form>
      </Modal>
    </div>
  );
}

export default App;
