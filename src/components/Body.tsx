import type { Component } from "solid-js";
import Paper from "@suid/material/Paper";
import Card from "@suid/material/Card";

let Body: Component = () => {
  return (
    <div style="padding:10px;">
      <Paper elevation={4}>
        <div style="height:80vh;">
          <div style="padding:10px;">
            <Card sx={{ maxWidth: 275, minHeight: 275 }}>This is the body</Card>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Body;
