import React from "react";
import Base from "../components/Base";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const id = location.state;

  return (
    <>
      <Base></Base>
      <ul>
        <li>1월</li>
        <li>총 수입 : {id} </li>
        <li>총 지출 :</li>
      </ul>
      <button>가계부 입력</button>
      <button>상세내역 확인</button>
    </>
  );
};

export default Home;
