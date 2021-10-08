import React, { useState, useEffect } from "react";
import { Card, CardContent, Box, Container, Typography } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Datagrid from "../components/Datagrid"
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/dashboardStyles";
const useStyles = makeStyles(styles);
const options = {
  borderColor: "#2979ff",
  pointBackgroundColor: "#2979ff",
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return value + "K";
        }
      }
    }
  },
  plugins: {
    legend: {
    display: false
    }
  },
}
export default function Dashboard() {
  const classes = useStyles();
  const [chartData, setChartData] = useState({});
    useEffect(() => {
      chart();
    }, []);
    const chart = () => {
      let labels = ["3 am", "6 am", "9 am", "12 am", "3 pm", "6 pm", "9 pm", "12 pm"]
      let sales = [0, 0, 0, 0, 0, 0, 0, 0]
      axios
        .get("https://6155a05293e3550017b08b11.mockapi.io/sales")
        .then((res) => {
          res.data.map(dataObj => {
            let time = (dataObj.createdAt.substring(11, 13)) * 1
            switch (time) {
              case 1:
              case 2:
              case 3:
                sales[0] += time
                break;
              case 4:
              case 5:
              case 6:
                 sales[1] += time
                break;
              case 7:
              case 8:
              case 9:
                sales[2] += time
                break;
              case 10:
              case 11:
              case 12:
                sales[3] += time
                break;
              case 13:
              case 14:
              case 15:
                sales[4] += time
                break;
              case 16:
              case 17:
              case 18:
                sales[5]+=time
                break;
              case 19:
              case 20:
              case 21:
                sales[6] += time
                break;
              case 22:
              case 23:
              case 24:
                sales[7] += time
                break;
              default:
                break;
            }
            return sales;
          });
          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Sales",
                data: sales,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <Container maxWidth="md">
        <Box component="div" sx={{ my: 4, px: 1 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle1" component="div">
                Total Sales
              </Typography>
              <Typography className={classes.bold} variant="h4" gutterBottom component="div">
                $5K
              </Typography>
              <div className={classes.cardWrapper}>
                <Line
                  data={chartData}
                  options={options}
              />
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box component="div" sx={{ my: 4, px: 1 }}>
        <Datagrid />
      </Box>
    </Container>
  );
}
