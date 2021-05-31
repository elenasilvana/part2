import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div style={{ width: "70%" }}>
      <Header title={course.name} />
      <Content courseContent={course.parts} />
      <Total courseContent={course.parts} />
    </div>
  );
};

export default Course;
