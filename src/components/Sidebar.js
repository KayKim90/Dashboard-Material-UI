/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Hidden, List, ListItem,ListItemText, Avatar } from "@material-ui/core";
import styles from "./../assets/jss/sidebarStyle";
import avatar from "../assets/images/profile.png";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var logout = " ";
        var listItemClasses;
        if (prop.name === "Logout") {
          logout = classes.logout + " ";
          listItemClasses = classNames({
            [" " + classes["active"]]: false,
          });
        } else {
          listItemClasses = classNames({
            [" " + classes["active"]]: activeRoute(prop.path),
          });
        }
        return (
          <NavLink
            to={prop.path}
            className={logout + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <prop.icon
                  className={classNames(classes.itemIcon)}
                />
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.avatar}>
      <Avatar alt="Jessica Smith" src={avatar} />
      <div className={classes.labelWrapper}>
        <span className={classes.labelText}>
          <strong>Jessica Smith</strong>
        </span>
        <span className={classes.labelText}>
          Super admin
        </span>
      </div>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        {/* Mobile */}
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
          </div>
          <div
              className={classes.background}
           />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        {/* Desktop */}
        <Drawer
          className={classes.sidebarRadius}
          anchor={"left"}
          variant="permanent"
          open
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div
              className={classes.background}
           />
        </Drawer>
      </Hidden>
    </div>
  );
}
Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
