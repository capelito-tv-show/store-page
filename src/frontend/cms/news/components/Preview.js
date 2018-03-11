import React from 'react';
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";


const styles = theme => ({
  root: {
    textAlign: "left",
    padding: "10px"
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "white",

  }
});


const Preview = ({ Description, date, Title, SubTitle }) => {
  return (
    <div className={root}>
      <Card>
        <CardContent>
          <p>日付：{date}</p>
          <Typography variant="headline" component="h1" >
            {Title}
          </Typography>
          <Typography>{SubTitle}</Typography>
          <Typography>{Description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};


export default withStyles(styles)(Preview);
