import React from "react";
import Header from "./Header";
import SideMemo from "./SideMemo";

const Base = () => {
  return (
    <>
      <Header></Header>
      <SideMemo></SideMemo>
      <div>시간/온도 보여주기</div>
    </>
  );
};

export default Base;
