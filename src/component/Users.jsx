import React, { useState, useEffect } from "react";
import { Table, Alert } from "react-bootstrap";
const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        response.json().then((res) => {
          console.warn(res);
          setData(res);
          localStorage.setItem("users", JSON.stringify(res));
        });
      })
      .catch((err) => {
        console.warn(err);
        setMode("offline");
        setData(JSON.parse(localStorage.getItem("users")));
      });
  }, []);

  return (
    <div>
      {mode === "offline" ? (
        <Alert key="" variant="danger">
          <Alert.Link href="#">You are offline!</Alert.Link>
        </Alert>
      ) : null}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curval, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{curval.name}</td>
              <td>{curval.email}</td>
              <td>{curval.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
