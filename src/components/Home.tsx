import type { Component } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Body from "./Body";
import vinod from "../assets/vinod.jpg";

let Home: Component = () => {
  return (
    <div>
      <AppBar position="static">
        <div style="display:flex;">
          <h1 style="padding-left:20px;">Vinod Reddy YerrapuReddy</h1>
          <img
            onClick={() => {
              alert("button clicked!");
            }}
            style="height:50px;width:50px;position:absolute;right:20px;top:20px;border-radius:50%;"
            src={vinod}
            alt=""
          />
        </div>
      </AppBar>
      <Body />
    </div>
  );
};

export default Home;
