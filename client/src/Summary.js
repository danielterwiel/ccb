import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const Summary = props => {
  const smaken = Object.keys(props.DEFAULT_SMAKEN);
  return (
    <>
      {props.activeStep === smaken.length && (
        <Paper square elevation={3} className={props.classes.resetContainer}>
          <Typography>
            Je hebt de volgende smaken met corresponderende stertes
            geselecteerd:
          </Typography>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Smaak</TableCell>
                  <TableCell align="left">Sterkte</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {smaken.map(smaak => (
                  <TableRow key={`result-${smaak}`}>
                    <TableCell align="right" scope="row">
                      {smaak.substring(0, 1).toUpperCase() +
                        smaak.substring(1, smaak.length)}
                    </TableCell>
                    <TableCell align="left">
                      {`${props.smaken[smaak].substring(0, 1).toUpperCase() +
                        props.smaken[smaak].substring(
                          1,
                          props.smaken[smaak].length
                        )} ${smaak}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button onClick={props.handleReset}>Reset</Button>
        </Paper>
      )}
    </>
  );
};
