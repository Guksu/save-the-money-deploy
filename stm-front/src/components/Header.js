import React from "react";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const onClickLogout = () => {
    sessionStorage.removeItem("id");
    history.push("/");
    window.location.reload();
  };
  return (
    <>
      <header>Save The Money</header>
      <button onClick={onClickLogout}>로그아웃</button>
    </>
  );
};

export default Header;
