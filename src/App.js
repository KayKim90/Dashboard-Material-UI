import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import styles from "./assets/jss/layoutStyles";
import routes from './routes'

const useStyles = makeStyles(styles);
function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
        />
        <div className={classes.mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
        />
        <div
          className={classes.content}
        >
          <div className={classes.container}>
            <Switch>
              {routes.map((prop, key) => {
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                )
              })}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
