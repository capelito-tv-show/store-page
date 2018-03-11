import React, { Component } from "react";
import { firebaseDb } from "../../../shared/Firebase";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const MenuItem = (menus) => {
  const Item = Object.keys(menus).map(key => {
    return (
      <Grid item xs={6}>
      <Paper>
          <div className={menus[key].category}>
            <ul className="MenuDetail">
              <li>
                <span >{menus[key].title}</span>
                <span >{menus[key].price}</span>
              </li>
              <li>
                <span >{menus[key].detail}</span>
              </li>
            </ul>
          </div>
        </Paper>
      </Grid>
    );
  });
  return (
    <div>
      <Grid container>
        <div >
          <h4 >ブレンド珈琲</h4>
        </div>
        <Grid item xs={12}>
          <Grid container>
          {Item}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}


export default MenuItem;
