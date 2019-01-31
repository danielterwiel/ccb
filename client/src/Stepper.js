import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export const Stepper = props => {
  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={props.activeStep}
      nextButton={
        <Button
          size="small"
          onClick={props.handleNext}
          disabled={props.activeStep === 5}
        >
          Volgende
          {props.theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={props.handleBack}
          disabled={props.activeStep === 0}
        >
          {props.theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Terug
        </Button>
      }
    />
  );
};
