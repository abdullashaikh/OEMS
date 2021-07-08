import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header({ profilePic }) {
  console.log(profilePic);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for.... " type="text" />
      </div>
      <div className="header__right">
        <Avatar src={profilePic} alt="Logo" />
        <h4>Logout</h4>
      </div>
    </div>
  );
}

export default Header;
