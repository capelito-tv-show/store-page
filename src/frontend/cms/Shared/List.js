import React from "react";

export const List = () => {
  return(
    <div>
      <Card>
        <CardContent>
          <Typography>{Title}</Typography>
          <Typography>{Price}</Typography>
          <Typography>{Detail}</Typography>
          <Typography>{Title}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const menu = Object.keys(menus).map(key => {
  return (
    <div>
        <Grid item xs={6} md={6} lg={6} xl={6} key={key}>
          <Paper className={classes.menuPaper}>
            <div className={menus[key].category}>
              <ul className="MenuDetail">
                <li className={classes.menuList}>
                  <span className={classes.title}>{menus[key].title}</span>
                  <span className={classes.price}>{menus[key].price}</span>
                </li>
                <li>
                  <span className={classes.detail}>
                    {menus[key].detail}
                  </span>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
    </div>
  );
});
