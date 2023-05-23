import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="left"
      open={props.isDrawerOpen}
      onClose={props.handleDrawerToggle}
    >
      <List style={{ margin: "50px" }}>
        <ListItem button>
          <ListItemText primary="User Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Hi, Mark" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Set Password" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="LOG OUT" />
        </ListItem>
      </List>
    </Drawer>
  );
}
