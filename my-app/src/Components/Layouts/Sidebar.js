import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Translate from "@material-ui/icons/Translate";
import FlightLand from "@material-ui/icons/FlightLand";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import SettingsRemote from "@material-ui/icons/SettingsRemote";
import "bootstrap/dist/css/bootstrap.min.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      top: false,
      left: false,
      bottom: false,
      right: false
    };
  }

  useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }
  });

  classes = this.useStyles;

  updateModal(isVisible) {
    this.isVisible = isVisible;
    this.forceUpdate();
  }
  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  list1 = [
    { key: "F18 Application", index: 0, priority: 0 },
    { key: "F19 Application", index: 1, priority: 0 },
    { key: "F20 Application", index: 2, priority: 0 },
    { key: "F22 Application", index: 3, priority: 0 }
  ];

  sideList = side => (
    <div
      className={this.classes.list}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {this.list1.map(obj => (
          <ListItem
            button
            key={obj.key}
            onClick={() => this.props.handleToUpdateFromSidebar(obj)}
          >
            <ListItemIcon>
              {obj.index % 2 === 0 ? <FlightLand /> : <SettingsRemote />}
            </ListItemIcon>
            <ListItemText primary={obj.key} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Help", "Contact", "Assistance"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FlightTakeoff /> : <Translate />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render() {
    var handleToUpdateFromSidebar = this.props.handleToUpdateFromSidebar;
    return (
      <div id="header">
        <Button onClick={this.toggleDrawer("left", true)}>
          <img
            width="30px"
            src="data:image/png;base64,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"
            alt="Northrop Logo"
          />
          <div id="header-brand" padding-left="10px">
            applications
          </div>
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          {this.sideList("left")}
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
