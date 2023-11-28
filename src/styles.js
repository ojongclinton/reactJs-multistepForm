export const stepStyles = {
  backgroundColor: "#E7E6F5",
  borderTopRightRadius: "38px",
  padding: "0px",
  "& .MuiStep-root": {
    padding: "0px", // Removes padding from each step
    "& .MuiStepConnector-line": {
      display: "none", // Removes the connector lines
    },
    "&.MuiStep-horizontal": {
      "&.css-1bw0nnu-MuiStep-root": { padding: "0px" },
    },
  },
  // "& .MuiStep-root": {
  //   "&.MuiStep-horizontal": {
  //     "&.css-1bw0nnu-MuiStep-root": { padding: "0px" },
  //   },
  // },
  // "& .MuiStepper-root": {
  //   "&.MuiStepper-horizontal": {
  //     "&.css-11kkgqb-MuiStepper-root": { backgroundColor: "red" },
  //     backgroundColor: "red",
  //   },
  // },
  "& .MuiStepLabel-root": {
    padding: "0px",
    "& .MuiStepLabel-label": {
      color: "white",
      fontSize: "1rem",
    },
    "&.MuiStepLabel-horizontal": {
      "&.css-ascpo7-MuiStepLabel-root": {
        height: "50px",
        padding: "10px",
      },
      "&.css-ascpo7-MuiStepLabel-root:has(>.Mui-active)": {
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        backgroundColor: "#8CCAFD",
      },
      "&.css-ascpo7-MuiStepLabel-root:has(>.Mui-completed)": {
        backgroundColor: "#8CCAFD",
        color: "red",
        "& svg": {
          color: "white",
        },
      },
    },
    // "&.MuiStepLabel-horizontal:has(> .Mui-active)": {
    //   backgroundColor: "red",
    // },
  },
  "& .MuiStepConnector-line": {
    "&.MuiStepConnector-lineHorizontal": {
      "&.css-z7uhs0-MuiStepConnector-line": { display: "none", width: "0%" },
    },
  },
  "& .MuiStepConnector-root": {
    "&.MuiStepConnector-horizontal": {
      "&.css-j5w0w9-MuiStepConnector-root:has(>.Mui-active)": {
        backgroundColor: "red",
      },
    },
  },
};
