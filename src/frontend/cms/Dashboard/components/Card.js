import React from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import {Link} from 'react-junctions';
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Icon from 'material-ui/Icon';
import FA from 'react-fontawesome';

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

const HomeContent = props => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h1" className={classes.title}>
            {props.Title}
          </Typography>
          <Typography>{props.Content}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="raised" color="primary" size="medium"  >
            <Link className={classes.link} href={props.MyLink}>{props.Title}を編集する</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(HomeContent);
