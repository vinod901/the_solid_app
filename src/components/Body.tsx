import type { Component } from "solid-js";
import Paper from "@suid/material/Paper";
import Card from "@suid/material/Card";
import Tabs from "./Tabs";
import Bio from "./Bio";
import Education from "./Education";
import Career from "./Career";

const data = [
  { value: "item-1", label: "Bio", content: Bio },
  { value: "item-2", label: "Education", content: Education },
  { value: "item-3", label: "Career", content: Career },
];

let Body: Component = () => {
  return (
    <div style="padding:10px;">
      <Paper elevation={4}>
        <div style="height:80vh;">
          <div style="padding:10px;">
            <Tabs {...data} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Body;
