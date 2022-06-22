import type { Component } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Alert from "@suid/material/Alert";
import Body from "./Body";
import vinod from "../assets/vinod.jpg";
import { createSignal, Show } from "solid-js";

let Home: Component = () => {
  let [show, setShow] = createSignal(false);
  const toggle = () => {
    return setShow(!show());
  };
  return (
    <div>
      <AppBar position="static">
        <div style="display:flex;">
          <h1 style="padding-left:20px;">Vinod Reddy YerrapuReddy</h1>
          <img
            onClick={toggle}
            style="height:50px;width:50px;position:absolute;right:20px;top:20px;border-radius:50%;"
            src={vinod}
            alt=""
          />
        </div>
        <Show
          when={show()}
          fallback={
            <Alert severity="warning">Waiting to click the button!</Alert>
          }
        >
          <Alert severity="success" onClick={toggle}>
            Success!
          </Alert>
        </Show>
      </AppBar>
      <Body />
    </div>
  );
};

export default Home;
