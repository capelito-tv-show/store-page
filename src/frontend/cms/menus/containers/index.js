import React, {Component} from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import AddMenu from './Enhance';
import MenuCard from '../../../client/menu/components/menuCard';

class Menu extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <AddMenu />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent >
                <MenuCard />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Menu;
