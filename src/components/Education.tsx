import type { Component } from "solid-js";
import Card from "@suid/material/Card";
import EducationCard from "./EducationCard";

let Education: Component = () => {
  let ssc = {
    grad: "SSC",
    institute: "Raju High School",
    year: "2015-16",
    grade_type: "CGPA",
    grade: "9.8",
    street: "NGO Colony",
    city: "Rayachoty",
    dist: "Annamaiah Dist.",
  };
  let inter = {
    grad: "Intermediate",
    institute: "Narayana Junior College",
    year: "2016-18",
    grade_type: "Marks",
    grade: "882",
    street: "Near Annamaiah Circle",
    city: "Tirupathi",
    dist: "Chittoor Dist.",
  };
  let college = {
    grad: "Bachelor of Technology",
    institute: "Sri Sai Institute of Technology & Science",
    year: "2018-22",
    grade_type: "Percentage",
    grade: "75%",
    street: "Masapeta",
    city: "Rayachoty",
    dist: "Annamaiah Dist.",
  };
  return (
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
      <div>
        <EducationCard {...ssc}></EducationCard>
      </div>
      <div>
        <EducationCard {...inter}></EducationCard>
      </div>
      <div>
        <EducationCard {...college}></EducationCard>
      </div>
    </div>
  );
};

export default Education;
