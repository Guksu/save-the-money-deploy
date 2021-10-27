import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Base from "../components/Base";

const ShowAll = () => {
  const history = useHistory();
  const onClickBackHome = () => {
    history.push("/home");
  };

  const [profitList, setProfitList] = useState([]);

  const [expenseList, setExpenseList] = useState([]);

  useEffect(async () => {
    const profitRes = await axios.post("http://localhost:4000/showProfit", {
      userid: sessionStorage.getItem("id"),
    });

    setProfitList(profitRes.data);
  }, []);

  useEffect(async () => {
    const expenseRes = await axios.post("http://localhost:4000/showExpense", {
      userid: sessionStorage.getItem("id"),
    });
    setExpenseList(expenseRes.data);
  }, []);

  return (
    <>
      <Base></Base>
      <div>
        수익내역
        <ul>
          {profitList.map((item) => {
            const onRemoveClick = async () => {
              window.location.reload();
              await axios.post("http://localhost:4000/deleteProfit", {
                profitNo: item.profitNo,
              });
            };

            return (
              <>
                <li key={item.profitNo}>
                  {item.date} : {item.category} [ {item.profit.toLocaleString()}
                  원 ]<button onClick={onRemoveClick}>❌</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div>
        지출내역
        <ul>
          {expenseList.map((item) => {
            const onRemoveClick = async () => {
              window.location.reload();
              await axios.post("http://localhost:4000/deleteExpense", {
                expenseNo: item.expenseNo,
              });
            };

            return (
              <>
                <li key={item.expenseNo}>
                  {item.date} : {item.category} [{" "}
                  {item.expense.toLocaleString()}원 ]
                  <button onClick={onRemoveClick}>❌</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <button onClick={onClickBackHome}>돌아가기</button>
    </>
  );
};

export default ShowAll;
