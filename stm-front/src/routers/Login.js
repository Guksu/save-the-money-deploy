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

  // const { Kakao } = window;
  // const onKaKaoLogin = async () => {
  // await Kakao.Auth.authorize({
  //   redirectUri: "http://localhost:3000/oauth/kakao",
  // });
  // let code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  // await Axios.post("http://localhost:4000/kakaologin", {
  //   code: code,
  // })
  //   .then((res) => {
  //     sessionStorage.setItem("id", code);
  //   })
  //   .catch((err) => {
  //     alert("다시 로그인하세요");
  //   });
  // setIslogin(true);
  // Kakao.Auth.login({
  //   success: function (authObj) {
  //     console.log(authObj);
  //   },
  //   fail: function (err) {
  //     console.log(err);
  //     alert("다시 로그인해주세요");
  //   },
  // });
  // };

  // const onGitHubLogin = () => {};

  useEffect(() => {
    if (islogin) {
      history.push("/home");
      window.location.reload();
    }
  });

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
      {/* <div>
        <button onClick={onGitHubLogin} name="github">
          깃허브 로그인
        </button>
        <button onClick={onKaKaoLogin} name="kakao">
          카카오 로그인
        </button>
      </div> */}
    </>
  );
};

export default Login;
