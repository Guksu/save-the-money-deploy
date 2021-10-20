import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {
    await Axios.post("http://localhost:4000/adduser", {
      id: id,
      password: password,
    })
      .then((res) => {})
      .catch((err) => {
        alert("중복된 아이디입니다.");
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        required
        onChange={(event) => {
          setId(event.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <Link to="/" onClick={addUser}>
        가입하기
      </Link>
    </>
  );
};

export default RegisterUser;
