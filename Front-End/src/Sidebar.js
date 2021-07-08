import React, { useState } from "react";
import Axios from "axios";
import "./Sidebar.css";
import { useDataLayerValue } from "./DataLayer";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Sidebar() {
  const [username, setUsername] = useState("");
  const [{ token }, dispatch] = useDataLayerValue();
  // console.log(token);
  Axios.get(`http://localhost:3300/teacher?id=${token}`).then((data) => {
    if (data.status === 200) {
      // console.log(data.data.body.data);
      setUsername(data.data.body.data.name);
    }
    // console.log(username);
  });
  return (
    <div className="sidebar">
      <h2>
        <span>{username ? username : "Teacher"}</span>
      </h2>
      <h3>
        <span className="round">
          <FiberManualRecordIcon style={{ color: "green" }} />
        </span>
        Admin
      </h3>
      <hr />
      <div className="sidebar_option">
        {/* <Icon className="sidebar__icon" /> */}
        <h4>Update Profile</h4>
        <h4>Create Exam</h4>
        <h4 className="updateExam">Update Exam</h4>
        <hr />
        <p>Add Question</p>
        <p>Remove Question</p>
        <p>Update Exam Details</p>
        <h4>Delete Exam</h4>
        <h4>Show Exams</h4>
        <h4>Show Results</h4>
      </div>
    </div>
  );
}

export default Sidebar;
