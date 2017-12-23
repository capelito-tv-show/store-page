import React, { Component } from 'react';
//Material-ui
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';
import Drawer from '../components/MenuDrawers';

//image
import coffee from '../images/coffee.jpg';

const styles = {
  Menu: {
    background: '#f8f8f7',
  },
  MenuBox: {
    margin: '10px',
    // height: '200px',
  },
  Card: {
    boxShadow: 'none',
  },
  CardContent: {

  },
  drawer: {
    position: 'absolute',
    right: '20px',
    background: 'white',
    zIndex: '1',
  }
}

class Menu extends Component {
  render() {
    return (
      <div className={this.props.classes.Menu}>
        <Header />
        <div className="wrapper">
          <Grid container spacing={0} justify="left" >
            <Grid item xs={12} md={9}  >
              <div className={this.props.classes.MenuBox} >
                <Card className={this.props.classes.Card}>
                  <CardContent className={this.props.classes.CardContent}>
                    <Typography
                      type="headline"
                      component="h1"
                    >
                      珈琲
                    </Typography><Divider />
                    {/* <img src={coffee} alt="珈琲"  /> */}
                    <Typography
                      component="p"
                    >
                      ここにメニューの詳細が出てきます
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <div className={this.props.classes.MenuBox} >
                <Card className={this.props.classes.Card}>
                  <CardContent className={this.props.classes.CardContent}>
                    <Typography
                      type="headline"
                      component="h1"
                    >
                      珈琲
                    </Typography><Divider />
                    <Table >
                      <TableRow>
                        <TableCell> 珈琲 </TableCell>
                        <TableCell> 410円 </TableCell>
                      </TableRow>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className={this.props.classes.MenuBox} >
                <Card className={this.props.classes.Card}>
                  <CardContent className={this.props.classes.CardContent}>
                    <Typography
                      type="headline"
                      component="h1"
                    >
                      珈琲
                    </Typography><Divider />
                    <Typography
                      component="p"
                    >
                      ここにメニューの詳細が出てきます
                    </Typography>
                  </CardContent>
                </Card>
              </div>

            </Grid>

            <Hidden mdDown>
              <Grid item  md={2}>
                  <ListCard />
              </Grid>
            </Hidden>

            <Hidden mdUp>
              <Grid item xs={2} md={3} className={this.props.classes.drawer}>
                  <Drawer  />
              </Grid>
            </Hidden>

          </Grid>
        </div>
        <Footer />
      </div>
    )}
};

export default withStyles(styles)(Menu);
