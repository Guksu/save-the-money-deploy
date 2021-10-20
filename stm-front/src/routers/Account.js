import React from "react";
import Base from "../components/Base";

const Account = ({ islogin }) => {
  return (
    <>
      <Base islogin={islogin}></Base>
      <form>
        <input type="date" placeholder="날짜를 선택하세요" required></input>
        <input
          type="number"
          placeholder="수입을 입력하세요"
          name="profit"
        ></input>
        <input
          type="number"
          placeholder="지출을 입력하세요"
          name="loss"
        ></input>
        <button>저장</button>
      </form>
    </>
  );
};

export default Account;
