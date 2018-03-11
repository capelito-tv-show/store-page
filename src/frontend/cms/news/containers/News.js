import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-junctions';
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import AddNews from "../components/AddNews";
import Preview from '../components/Preview';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const News = ({ Description, date, Title, SubTitle, Submit }) => {
    // const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <AddNews
            Description={Description}
            date={date}
            Title={Title}
            SubTitle={SubTitle}
            Submit={Submit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Preview
            Description={Description}
            date={date}
            Title={Title}
            SubTitle={SubTitle}
          />
        </Grid>
      </Grid>
    );
  }


export default withStyles(styles)(News);
