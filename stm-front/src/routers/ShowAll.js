import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ExpenseChart from "../components/ExpenseChart";
import Header from "../components/Header";
import ProfitChart from "../components/ProfitChart";

const ShowAll = () => {
  const history = useHistory();
  const onClickBackHome = () => history.push("/home");
  const [profitList, setProfitList] = useState([]);

  const [expenseList, setExpenseList] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:4000/showProfit", {
        params: {
          userid: sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        setProfitList(res.data);
      });
  }, []);

  useEffect(async () => {
    await axios
      .get("http://localhost:4000/showExpense", {
        params: {
          userid: sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        setExpenseList(res.data);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <ProfitChart profitList={profitList}></ProfitChart>
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
      <ExpenseChart expenseList={expenseList}></ExpenseChart>
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
