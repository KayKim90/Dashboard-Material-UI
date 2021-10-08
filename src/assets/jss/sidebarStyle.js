import {
  drawerWidth,
  grayColor,
  blackColor,
  hexToRgb,
} from "./commonStyles";

const sidebarStyle = (theme) => ({
  sidebarRadius: {
    borderRadius: "0 24px 24px 0",
  },
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
    },
  },
  avatar: {
    display: 'flex',
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
    },
  },
  labelWrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10
  },
  labelText: {
    fontSize: "0.95rem",
    textAlign: "left",
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundColor: grayColor,
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset",
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "5px 10px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "5px 10px",
    backgroundColor: "transparent",
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.7)",
  },
  itemText: {
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: blackColor,
  },
  active: {
    backgroundColor: grayColor[9],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(grayColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(grayColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: grayColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(grayColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(grayColor[0]) +
        ",.2)",
    },
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
  },
  logout: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
      bottom: "13px",
    },
  },
});

export default sidebarStyle;
