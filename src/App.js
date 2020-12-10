import React from "react";
import "./App.css";
import { useState } from "react";
import { TextField, Button, makeStyles, Container, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
  },
  
  inputField: {
    width: "200px",
    margin: "8px 0"
  },

	btn: {
    margin: "18px 0"
  },

  formControl: {
    margin: theme.spacing(1),
    width: "200px",
    textAlign: "left"
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
	const [queryCGPA, setQueryCGPA] = useState("");
	const [queryYEAR, setQueryYEAR] = useState("");
	const [queryBRANCH, setQueryBRANCH] = useState("");
	const [querySPEC, setQuerySPEC] = useState("");

	const classes = useStyles();

	const apiQuery = () => {
		if (!queryCGPA && !queryYEAR && !queryBRANCH && !querySPEC) {
			alert("select atleast one filter");
			return;
    }
    window.location.assign(`http://localhost:5001/ait-application-suite/asia-east2/getEligibleP1B?cgpa=${queryCGPA}&year=${queryYEAR}&branch=${queryBRANCH}&spec=${querySPEC}`);
	};

	const handleCgpaChange = (evt) => {
		setQueryCGPA(evt.target.value);
	};

  const handleYearChange = (evt) => {
		setQueryYEAR(evt.target.value);
	};
  
  const handleBranchChange = (evt) => {
    setQueryBRANCH(evt.target.value);
	};
  
  const handleSpecChange = (evt) => {
		setQuerySPEC(evt.target.value);
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
            className={classes.inputField}
						id="cgpa-input"
						label="CGPA cutoff"
						value={queryCGPA}
						onChange={handleCgpaChange}
					/>
					<TextField
            className={classes.inputField}
						id="year-input"
						label="Year of Grad."
						value={queryYEAR}
						onChange={handleYearChange}
					/>
          <FormControl className={classes.formControl}>
            <InputLabel id="branch-select-label">Branch</InputLabel>
            <Select
              labelId="branch-select-label"
              id="branch-select"
              value={queryBRANCH}
              onChange={handleBranchChange}
            >
              <MenuItem value={"cse"}>CSE</MenuItem>
              <MenuItem value={"cse_ibm"}>CSE IBM</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="spec-select-label">Specialization</InputLabel>
            <Select
              labelId="spec-select-label"
              id="spec-select"
              value={querySPEC}
              onChange={handleSpecChange}
            >
              <MenuItem value={"is"}>IS</MenuItem>
              <MenuItem value={"bd"}>BD</MenuItem>
              <MenuItem value={"cc"}>CC</MenuItem>
              <MenuItem value={"iot"}>IoT</MenuItem>
              <MenuItem value={"aiml"}>AIML</MenuItem>
            </Select>
          </FormControl>
					<Button
						type="submit"
						color="primary"
						className={classes.btn}
						variant="contained"
						endIcon={<Search />}
					>
						Download
					</Button>
				</Container>
			</form>
		</div>
	);
}

export default App;
