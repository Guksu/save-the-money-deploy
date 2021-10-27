import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";

const Home = () => {
  const [allProfit, setAllProfit] = useState([]);
  const [allExpense, setAllExpense] = useState([]);
  const [selectMonth, setSelectMonth] = useState("");

  const onChangeMonth = async (e) => {
    setSelectMonth(e.target.value);

    const profitRes = await Axios.post("http://localhost:4000/allProfit", {
      date: selectMonth,
      userid: sessionStorage.getItem("id"),
    });

    setAllProfit(profitRes.data);
    console.log(allProfit[0]);
    console.log(selectMonth);

    const expenseRes = await Axios.post("http://localhost:4000/allExpense", {
      date: selectMonth,
      userid: sessionStorage.getItem("id"),
    });

    setAllExpense(expenseRes.data);
  };

  return (
    <>
      <Base></Base>
      <input
        type="month"
        onChange={onChangeMonth}
        // defaultValue={new Date().toISOString().slice(0, 7)}
      ></input>
      <ul>
        <li>총 수입 : </li>
        <li>총 지출 : </li>
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
