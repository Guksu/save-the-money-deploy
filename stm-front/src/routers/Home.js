import React from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";

const Home = () => {
  return (
    <>
      <Base></Base>
      <ul>
        <li>1월</li>
        <li>총 수입 :</li>
        <li>총 지출 :</li>
      </ul>
      <Link to="/account">
        <button>가계부 입력</button>
      </Link>
      <Link to="/showall">
        <button>상세내역 확인</button>
      </Link>
    </>
  );
};

export default Home;
