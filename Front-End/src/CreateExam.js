import React, { useState } from "react";
import "./CreateExam.css";
import Axios from "axios";
import { useDataLayerValue } from "./DataLayer";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

function CreateExam() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "70ch",
        marginTop: theme.spacing(3),

        // flexdirection: "row",
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const [{ token }] = useDataLayerValue();
  const [standard, setStandard] = useState([]);
  const [subject, setSubject] = useState([]);
  const [examName, setExamName] = useState("");
  const [examTotalScore, setExamTotalScore] = useState("");
  const [examPassingScore, setExamPassingScore] = useState("");
  const [selectStandard, setSelectStandard] = useState("");
  const [selectSubject, setSelectSubject] = useState(""); //
  const [selectedDate, setSelectedDate] = useState("");
  const [selectTeacher, setSelectTeacher] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3300/standard").then((data) => {
      if (data.status == 200) {
        setStandard(data.data.body.data);
        console.log(data.data.body.data);
      } else if (data.status == 400) {
        alert("Data Not Found");
      }
    });
    Axios.get(`http://localhost:3300/teacher?id=${token}`).then((data) => {
      if (data.status === 200) {
        // console.log(data.data.body.data);
        setSelectTeacher(data.data.body.data._id);
      }
      // console.log(username);
    });
  }, []);

  const handleChange = (event) => {
    setSelectStandard(event.target.value);
    Axios.get(`http://localhost:3300/subject?id=${event.target.value}`).then(
      (data) => {
        if (data.status == 200) {
          setSubject(data.data.body.data);
          // console.log(data.data.body.data);
        } else if (data.status == 400) {
          alert("Data Not Found");
        }
      }
    );
  };
  const handleChangeSubject = (event) => {
    setSelectSubject(event.target.value);
    console.log(event.target.value);
    // console.log("Standard" + selectStandard);
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    setSelectedDate(e.target.value);

    console.log(e.target.value);
  };

  const submit = () => {
    // console.log("ExamName", examName);
    // console.log("examTotalScore", examTotalScore);
    // console.log("examPassingScore", examPassingScore);
    // console.log("selectedDate", selectedDate);
    // console.log("Standard", selectStandard);
    // console.log("Subject", selectSubject);
    // console.log("TeacherId", selectTeacher);

    Axios.put("http://localhost:3300/exam", {
      examName: examName,
      examDateAndTime: selectedDate,
      examTotalScore: examTotalScore,
      examPassingScore: examPassingScore,
      standardId: selectStandard,
      subjectId: selectSubject,
      teacherId: selectTeacher,
    }).then((data) => {
      if (data.status == 200) {
        alert("Exam Created Successfully");
      } else if (data.status == 400) {
        alert("Data Not Found");
      }
    });
  };

  const classes = useStyles();

  return (
    <div>
      <h1>Create Exam</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Exam Name"
          variant="filled"
          className="txt"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Exam Total Score"
          variant="filled"
          className="txt"
          value={examTotalScore}
          onChange={(e) => setExamTotalScore(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Exam Passing Score"
          variant="filled"
          className="txt"
          value={examPassingScore}
          onChange={(e) => setExamPassingScore(e.target.value)}
        />
        <TextField
          id="datetime-local"
          label="Exam Date and Time"
          variant="filled"
          type="datetime-local"
          defaultValue="2021-06-07T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={selectedDate}
          onChange={handleDateChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Standard</InputLabel>
          <Select
            variant="filled"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectStandard}
            onChange={handleChange}
          >
            {standard.map((item) => (
              <MenuItem value={item._id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
          <Select
            variant="filled"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectSubject}
            onChange={handleChangeSubject}
          >
            {subject.map((item) => (
              <MenuItem value={item._id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" className="txt" onClick={submit}>
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateExam;
