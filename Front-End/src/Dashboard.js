import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Dashboard.css";
import { useDataLayerValue } from "./DataLayer";

function Dashboard() {
  return (
    <div className="player">
      <div className="player__body">
        {/* SideBar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
