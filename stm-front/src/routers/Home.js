import React from "react";
import Base from "../components/Base";

const Home = () => {
  return (
    <>
      <Base></Base>
      <div>
        <div>1월</div>
        <div>총 수입 :</div>
        <div>총 지출 :</div>
      </div>
      <button>가계부 입력</button>
      <button>상세내역 확인</button>
    </>
  );
};

export default Home;
