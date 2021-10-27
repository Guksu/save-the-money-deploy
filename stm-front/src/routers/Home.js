import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../components/Base";

const Home = () => {
  const [selectMonth, setSelectMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );
  const [allProfit, setAllProfit] = useState([]);
  const [allExpense, setAllExpense] = useState([]);

  const getProfit = async () => {
    await axios
      .get("http://localhost:4000/allProfit", {
        params: {
          date: selectMonth,
          userid: sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        setAllProfit(res.data);
      });
  };

  const getExpense = async () => {
    await axios
      .get("http://localhost:4000/allExpense", {
        params: {
          date: selectMonth,
          userid: sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        setAllExpense(res.data);
      });
  };

  useEffect(() => {
    getProfit();
    getExpense();
  }, [selectMonth]);

  const checkNull = () => {};
  return (
    <>
      <Base></Base>
      <input
        type="month"
        onChange={(e) => {
          setSelectMonth(e.target.value);
        }}
        defaultValue={new Date().toISOString().slice(0, 7)}
      ></input>
      <ul>
        {allProfit.map((item) => {
          if (item.profit !== null) {
            return <li>총 수입 : [ {item.profit.toLocaleString()}원 ] </li>;
          } else {
            return <li>총 수입 : [ 0원 ]</li>;
          }
        })}
        {allExpense.map((item) => {
          if (item.expense !== null) {
            return <li>총 지출 : [ {item.expense.toLocaleString()}원 ]</li>;
          } else {
            return <li>총 수입 : [ 0원 ]</li>;
          }
        })}
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
