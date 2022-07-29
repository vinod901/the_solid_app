import type { Component } from "solid-js";
import Card from "@suid/material/Card";

const EducationCard = (data: {
  grad: string;
  institute: string;
  year: string;
  grade_type: string;
  grade: string;
  street: string;
  city: string;
  dist: string;
}) => {
  return (
    <Card>
      <div style="margin-left:10px;">
        <h1>{data.grad}</h1>
        <h2>Institute : {data.institute}</h2>
        <h3>years : {data.year}</h3>
        <h3>
          {data.grade_type} : {data.grade}
        </h3>
        <div style="display:flex;">
          <h3 style="padding-bottom:10px;">Address : </h3>
          <div>
            <h4 style="margin:0px;">{data.street}</h4>
            <h4 style="margin:0px;">{data.city}</h4>
            <h4 style="margin:0px;">{data.dist}</h4>
            <h4 style="margin:0px;">Andhra Pradesh</h4>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default EducationCard;
