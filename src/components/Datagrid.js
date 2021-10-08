import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

export default function Datagrid() {
  const [rows, setRows] = useState([]);
  const columns = [
    { name: "name", label: "Full Name" },
    { name: "city", label: "City" },
    { name: "dateRegistered", label: "Date Registered" }
  ];

 const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: false,
    selectableRowsHideCheckboxes: true,
    selectableRowsOnClick: true,
    download: false,
    print: false,
    viewColumns: false
  };

  React.useEffect(() => {
    fetch("https://6155a05293e3550017b08b11.mockapi.io/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res.map((dataObj) => {
          let date = dataObj.createdAt
          return dataObj.dateRegistered = date.split('T')[0]
        })
        setRows(res)
      })
      .catch((err) => console.log(err.message));
  }, []);
  //   React.useEffect(() => {
  //   let array = []
  //   fetch("https://6155a05293e3550017b08b11.mockapi.io/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // res.data.map((dataObj) => {
  //       //   dataObj.createdAt
  //       // })
  //       setRows(res);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);
  return (
    <>
      <MUIDataTable
        data={rows}
        columns={columns}
        options={options}
        title={'Users'}
      />
    </>
  );
}
