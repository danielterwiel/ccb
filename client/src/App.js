import React, { Component } from "react";
import logo from "./logo.svg";
import { Stepper } from "./Stepper";
import { Tastes } from "./Tastes";
import { Summary } from "./Summary";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  },
  hide: {
    display: "none"
  },
  smaakContainer: {
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 2
  },
  title: {
    fontSize: 28,
    textTransform: "uppercase"
  },
  resetContainer: {
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 2
  }
});

const DEFAULT_SMAKEN = {
  zoet: "niet",
  zuur: "niet",
  bitter: "niet",
  zout: "niet",
  umami: "niet"
};
const STERKTES = ["niet", "amper", "bietje", "best", "heul", "fucking"];

class Customizer extends Component {
  state = {
    activeStep: 0,
    smaken: DEFAULT_SMAKEN
  };

  handleSmaakChange = (smaak, sterkte) =>
    this.setState({
      smaken: { ...this.state.smaken, [smaak]: sterkte }
    });

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      smaken: DEFAULT_SMAKEN
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <header className="App-header">
              <img src={logo} className="ccb-logo" alt="ccb logo" />
            </header>
            <h1>Ravaniël Piece Customizer</h1>
            <Stepper
              activeStep={this.state.activeStep}
              classes={this.props.classes}
              handleNext={this.handleNext}
              handleBack={this.handleBack}
              theme={this.props.theme}
            />
            <Tastes
              activeStep={this.state.activeStep}
              classes={this.props.classes}
              DEFAULT_SMAKEN={DEFAULT_SMAKEN}
              smaken={this.state.smaken}
              handleSmaakChange={this.handleSmaakChange}
              STERKTES={STERKTES}
            />
            <Summary
              activeStep={this.state.activeStep}
              classes={this.props.classes}
              DEFAULT_SMAKEN={DEFAULT_SMAKEN}
              smaken={this.state.smaken}
              handleReset={this.handleReset}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const App = withStyles(styles, { withTheme: true })(Customizer);
