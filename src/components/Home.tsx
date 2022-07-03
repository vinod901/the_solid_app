import type { Component } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Avatar from "@suid/material/Avatar";
import Body from "./Body";
import vinod from "../assets/vinod.jpg";

let Home: Component = () => {
  return (
    <div>
      <AppBar position="static">
        <div style="display:flex;">
          <h1 style="padding-left:20px;">Vinod Reddy YerrapuReddy</h1>
          <div style="right:20px;top:20px;position:absolute;">
            <Avatar
              alt="vinod reddy"
              src={vinod}
              sx={{
                width: 50,
                height: 50,
              }}
            />
          </div>
        </div>
      </AppBar>
      <Body />
    </div>
  );
};

export default Home;
