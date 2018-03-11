import React from "react";

import List,{ListItem,ListItemText} from "material-ui/List";

export const HeaderList = (classes) => (
  <div className={classes}>
    <List>
      <ListItem button component="a" href="/Admin/menu">
        <ListItemText  primary="メニュー"  />
      </ListItem>
      <ListItem button component="a" href="/Admin/news">
        <ListItemText  primary="お知らせの追加/編集" />
      </ListItem>
      <ListItem button component="a" href="/Admin/coffeeList">
        <ListItemText  primary="珈琲リストの追加/編集" />
      </ListItem>
    </List>
  </div>
);
