import React, { useState } from "react";
import Base from "../components/Base";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Account = ({ islogin }) => {
  const history = useHistory();

  const onClickBackHome = () => {
    history.push("/home");
  };

  const [date, setDate] = useState("");
  const [profit, setProfit] = useState(0);
  const [expense, setExpense] = useState(0);
  const [profitSelect, setProfitSelect] = useState("profit_etc");
  const [expenseSelect, setExpenseSelect] = useState("expense_etc");

  const onSubmitAccount = async (e) => {
    await Axios.post("http://localhost:4000/account", {
      date: date,
      profit: profit,
      expense: expense,
      profitSelect: profitSelect,
      expenseSelect: expenseSelect,
      userid: sessionStorage.getItem("id"),
    })
      .then((res) => {})
      .catch((err) => {
        alert("다시 입력하세요");
      });
  };

  return (
    <>
      <Base islogin={islogin}></Base>
      <form onSubmit={onSubmitAccount}>
        <input
          type="date"
          placeholder="날짜를 선택하세요"
          required
          onChange={(event) => {
            setDate(event.target.value);
          }}
        ></input>
        <div>
          <input
            type="number"
            min="0"
            placeholder="수입을 입력하세요"
            name="profit"
            onChange={(event) => {
              setProfit(event.target.value);
            }}
          ></input>
          <select
            onChange={(event) => {
              setProfitSelect(event.target.value);
            }}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="wage">급여</option>
            <option value="profit_investment">투자</option>
            <option value="pocketmoney">용돈</option>
            <option value="profit_etc">기타등등</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            min="0"
            placeholder="지출을 입력하세요"
            name="expense"
            onChange={(event) => {
              setExpense(event.target.value);
            }}
          ></input>
          <select
            onChange={(event) => {
              setExpenseSelect(event.target.value);
            }}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="food">식비</option>
            <option value="clothes">의류비</option>
            <option value="expense_investment">투자</option>
            <option value="tax">세금</option>
            <option value="expense_etc">기타등등</option>
          </select>
        </div>
        <button>저장</button>
      </form>
      <button onClick={onClickBackHome}>돌아가기</button>
    </>
  );
};

export default Account;
