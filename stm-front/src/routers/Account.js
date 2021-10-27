import React, { useState } from "react";
import Base from "../components/Base";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Account = () => {
  const history = useHistory();

  const onClickBackHome = () => {
    history.push("/home");
  };

  const [date, setDate] = useState("");
  const [profit, setProfit] = useState("0");
  const [expense, setExpense] = useState("0");
  const [profitSelect, setProfitSelect] = useState("기타등등");
  const [expenseSelect, setExpenseSelect] = useState("기타등등");

  const onSubmitAccount = async (e) => {
    await Axios.post("http://localhost:4000/account", {
      date: date,
      profit: parseInt(profit.replace(/,/g, "")),
      expense: parseInt(expense.replace(/,/g, "")),
      profitSelect: profitSelect,
      expenseSelect: expenseSelect,
      userid: sessionStorage.getItem("id"),
    })
      .then((res) => {})
      .catch((err) => {
        alert("다시 입력하세요");
      });
  };

  //input값 콤마 입력코드
  const changNum = (e) => {
    const i = e.target;
    const startPosition = i.value.length - i.selectionEnd;
    i.value = i.value
      .replace(/^0+|\D+/g, "")
      .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    const len = Math.max(i.value.length - startPosition, 0);
    i.setSelectionRange(len, len);
  };

  return (
    <>
      <Base></Base>
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
            type="text"
            onInput={changNum}
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
            <option value="급여">급여</option>
            <option value="투자">투자</option>
            <option value="용돈">용돈</option>
            <option value="기타등등">기타등등</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            onInput={changNum}
            placeholder="지출을 입력하세요"
            name="expense"
            onChange={(event) => {
              setExpense(event.target.value.toLocaleString());
            }}
          ></input>
          <select
            onChange={(event) => {
              setExpenseSelect(event.target.value);
            }}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="식비">식비</option>
            <option value="의류비">의류비</option>
            <option value="투자">투자</option>
            <option value="세금">세금</option>
            <option value="기타등등">기타등등</option>
          </select>
        </div>
        <button>저장</button>
      </form>
      <button onClick={onClickBackHome}>돌아가기</button>
    </>
  );
};

export default Account;
