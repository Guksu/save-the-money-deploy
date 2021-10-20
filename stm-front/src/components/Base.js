import React from "react";
import Header from "./Header";
import SideMemo from "./SideMemo";
import { useHistory } from "react-router";

const Base = () => {
  const history = useHistory();

  const onClickLogout = () => {
    sessionStorage.removeItem("id");
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      <Header></Header>
      <SideMemo></SideMemo>
      <button onClick={onClickLogout}>로그아웃</button>
      <div>시간/온도 보여주기</div>
    </>
  );
};

export default Base;
