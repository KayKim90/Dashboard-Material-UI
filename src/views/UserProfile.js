import React from "react";
import { Card, CardContent, Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/userProfileStyles";
import avatar from "../assets/images/profile.png";
const useStyles = makeStyles(styles);

export default function UserProfile() {
const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box component="div" sx={{ my: 4, px: 1 }}>
        <Typography className={classes.bold} variant="h4" gutterBottom component="div">
          Profile
        </Typography>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={4}>
                <center>
                  <img className={classes.cardAvatar} src={avatar} alt="..." />
                </center>
              </Grid>
              <Grid className={classes.cardWrapper} item xs={12} sm={12} md={8}>
                <div>
                  <Typography className={classes.bold} variant="h5" gutterBottom component="div">
                    Jessica Smith
                  </Typography>
                  <Typography className={classes.subText} variant="body1" gutterBottom component="div">
                    <strong>Type of User:</strong> Super Admin
                  </Typography>
                  <Typography className={classes.subText} variant="body1" gutterBottom component="div">
                    <strong>Email:</strong> jessicasmith@email.com
                  </Typography>
                  <Typography className={classes.subText} variant="body1" gutterBottom component="div">
                     <strong>City:</strong> Berilin
                  </Typography>
                  <Typography className={classes.subText} variant="body1" gutterBottom component="div">
                    <strong>Account created at:</strong> 18:00 on the 18th of October 2021
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
          </Card>
      </Box>
    </Container>
  );
}
