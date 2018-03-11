import React from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import AddCoffeeList from './Enhance';

const CoffeeList = ({ }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent >
              <AddCoffeeList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent >
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoffeeList;
