import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const formatRadioLabel = (smaak, sterkte) => {
  const label = sterkte;
  return `${label.substring(0, 1).toUpperCase()}${label.substring(
    1,
    label.length
  )} ${smaak}`;
};

export const Tastes = props => {
  const smaken = Object.keys(props.DEFAULT_SMAKEN);
  return (
    <>
      {smaken.map((smaak, index) => (
        <Paper
          square
          key={smaak}
          elevation={3}
          className={[
            props.classes.smaakContainer,
            smaken.indexOf(smaak) === props.activeStep
              ? "" /* show */
              : props.classes.hide
          ].join(" ")}
        >
          <h2 className={props.classes.title}>{smaak}</h2>
          <Typography>
            Selecteer hoe {smaken[index].toLowerCase()} je je gerecht wilt:
          </Typography>
          <FormControl
            component="fieldset"
            className={props.classes.formControl}
          >
            <RadioGroup
              aria-label={smaak}
              name={smaak}
              className={props.classes.group}
              value={props.smaken[smaak]}
              onChange={(event, sterkte) =>
                props.handleSmaakChange(smaak, sterkte)
              }
            >
              {props.STERKTES.map(sterkte => (
                <FormControlLabel
                  key={smaak + sterkte}
                  value={sterkte.toString()}
                  control={<Radio />}
                  label={formatRadioLabel(smaak, sterkte)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
      ))}
    </>
  );
};
