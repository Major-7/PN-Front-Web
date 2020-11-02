import React from "react";
import "./App.css";
import { useState } from "react";
import { TextField, Button, makeStyles, Container } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: { marginLeft: 20 },
});

function App() {
  const [queryCGPA, setQueryCGPA] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const classes = useStyles();

  const apiQuery = () => {
    fetch(
      `https://asia-east2-ait-application-suite.cloudfunctions.net/getEligible?cgpa=${queryCGPA}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.msg === "success") setStudents(json.data);
      })
      .catch((err) => {
        console.log("Error in fetching results: ", err);
        setError(err);
        alert(error);
      });
  };

  const inputHandler = (evt) => {
    setQueryCGPA(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    apiQuery();
  };

  return (
    <div className="App">
      <h1>Platinum Notifier</h1>
      <form onSubmit={submitHandler}>
        <Container className={classes.container}>
          <TextField
            id="cgpa-input"
            label="CGPA cutoff"
            value={queryCGPA}
            onChange={inputHandler}
          />
          <Button
            type="submit"
            color="primary"
            className={classes.btn}
            variant="contained"
            endIcon={<Search />}
          >
            Search
          </Button>
        </Container>
      </form>
      {students.email && (
        <p>
          <strong>Email : </strong> {students.email}
        </p>
      )}
    </div>
  );
}

export default App;
