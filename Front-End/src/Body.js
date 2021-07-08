import React, { useState } from "react";
import Axios from "axios";

import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import CreateExam from "./CreateExam";
function Body() {
  const [{ token }, dispatch] = useDataLayerValue();
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  Axios.get(`http://localhost:3300/teacher?id=${token}`).then((data) => {
    if (data.status === 200) {
      // console.log(data.data.body.data);
      setUsername(data.data.body.data.name);
      setProfilePic(data.data.body.data.profilePic);
    }
    // console.log(username);
  });
  return (
    <div className="body">
      <Header profilePic={profilePic} />
      <div className="body__info">
        <div className="body__infoText">
          <CreateExam />
        </div>
        <div className="body__details"></div>
      </div>
    </div>
  );
}

export default Body;
