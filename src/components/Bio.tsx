import Card from "@suid/material/Card";
import type { Component } from "solid-js";
import vinod from "../assets/vinod.jpg";

let Bio: Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Yarrapureddy Vinod Kumar Reddy</h1>
          <h3>s/o Yarrapureddy Jaya Chandra Reddy</h3>
          <h5>Born on 29th April 1999</h5>
          <h2>Address</h2>
          <p>
            <span>Thatigunta palli</span>
            <br />
            <span>T. Sundupalli Mandal</span>
            <br />
            <span>Annamaiah Dist.</span>
            <br />
            <span>Andhra Pradesh</span>
          </p>
        </div>
        <div style={{ right: "5vw", position: "absolute" }}>
          <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
            <img
              src={vinod}
              alt="vinod"
              style={{ height: "200px", width: "200px" }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bio;
