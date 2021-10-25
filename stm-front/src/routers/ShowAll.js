import React from "react";
import { useHistory } from "react-router";
import Base from "../components/Base";

const ShowAll = ({ islogin }) => {
  const history = useHistory();
  const onClickBackHome = () => {
    history.push("/home");
  };
  return (
    <>
      <Base islogin={islogin}></Base>
      <ul>
        <li>
          09/10 지출 0원
          <button>수정</button>
          <button>❌</button>
        </li>
      </ul>
      <button onClick={onClickBackHome}>돌아가기</button>
    </>
  );
};

export default ShowAll;
