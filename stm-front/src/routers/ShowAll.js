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

    const expenseRes = await axios.post("http://localhost:4000/showExpense", {
      userid: sessionStorage.getItem("id"),
    });

    setProfitList(profitRes.data);
    setExpenseList(expenseRes.data);
  }, []);

  return (
    <>
      <Base></Base>
      <div>
        <ul>
          {profitList.map((item) => {
            const onChangeClick = async () => {
              await axios.post("http://localhost:4000/modify", {
                profitNo: item.profitNo,
              });
            };

            return (
              <>
                <li key={item.profitNo}>
                  {item.date} : {item.category}[ {item.profit}원 ]
                  <button onClick={onChangeClick}>수정</button>
                  <button>❌</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {expenseList.map((item) => {
            const onChangeClick = async () => {
              await axios.post("http://localhost:4000/modify", {});
            };

            return (
              <>
                <li key={item.expenseNo}>
                  {item.date} : {item.category} [ {item.expense} ]원
                  <button onClick={onChangeClick}>수정</button>
                  <button>❌</button>
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
