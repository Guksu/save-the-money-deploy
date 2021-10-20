import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const history = useHistory();

  const onLoginClick = async () => {
    await Axios.post("http://localhost:4000/login", {
      id: id,
      password: password,
    })
      .then((res) => {
        setIslogin(true);
        sessionStorage.setItem("id", id);
      })
      .catch((err) => {
        alert("다시 로그인하세요");
      });
  };

  useEffect(() => {
    if (islogin) {
      history.push("/home");
      window.location.reload();
    }
  });

  const onSocialLogin = () => {};

  return (
    <>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        required
        name="id"
        onChange={(event) => {
          setId(event.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        required
        name="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button onClick={onLoginClick}>로그인</button>
      <Link to="/register">
        <button>회원가입</button>
      </Link>
      <div>
        <button onClick={onSocialLogin} name="github">
          깃허브 로그인
        </button>
        <button onClick={onSocialLogin} name="kakao">
          카카오 로그인
        </button>
      </div>
    </>
  );
};

export default Login;
