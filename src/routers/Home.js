import axios from "axios";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MonthExpenseCharts from "../components/MonthExpenseCharts";
import MonthProfitCharts from "../components/MonthProfitCharts";
import HomeStyle from "../styles/HomeStyle";

const {
  LogOutBtn,
  LogOutDiv,
  AccountBtn,
  AccountDiv,
  CalDiv,
  Calender,
  ChartDiv,
  Ul,
  Li,
} = HomeStyle;
const Home = () => {
  const [selectMonth, setSelectMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );
  const [allProfit, setAllProfit] = useState([]);
  const [allExpense, setAllExpense] = useState([]);

  const getProfit = async () => {
    await axios
      .get("https://save-money-back.herokuapp.com/allProfit", {
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
      .get("https://save-money-back.herokuapp.com/allExpense", {
        params: {
          date: selectMonth,
          userid: sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        setAllExpense(res.data);
      });
  };

  const history = useHistory();

  const onClickLogout = () => {
    sessionStorage.removeItem("id");
    history.push("/");
    window.location.reload();
  };

  useEffect(() => {
    getProfit();
    getExpense();
  }, [selectMonth]);

  return (
    <>
      <CalDiv>
        <Calender
          type="month"
          onChange={(e) => {
            setSelectMonth(e.target.value);
          }}
          defaultValue={new Date().toISOString().slice(0, 7)}
        ></Calender>
      </CalDiv>
      <ChartDiv>
        <div />
        <MonthProfitCharts selectMonth={selectMonth}></MonthProfitCharts>
        <MonthExpenseCharts selectMonth={selectMonth}></MonthExpenseCharts>
      </ChartDiv>
      <Ul>
        {allProfit.map((item) => {
          if (item.profit !== null) {
            return <Li>??? ?????? : [ {item.profit.toLocaleString()}??? ] </Li>;
          } else {
            return <Li>??? ?????? : [ 0??? ]</Li>;
          }
        })}
        {allExpense.map((item) => {
          if (item.expense !== null) {
            return <Li>??? ?????? : [ {item.expense.toLocaleString()}??? ]</Li>;
          } else {
            return <Li>??? ?????? : [ 0??? ]</Li>;
          }
        })}
      </Ul>
      <AccountDiv>
        <Link to="/account">
          <AccountBtn>????????? ??????</AccountBtn>
        </Link>
        <Link to="/showall">
          <AccountBtn>???????????? ??????</AccountBtn>
        </Link>
      </AccountDiv>
      <LogOutDiv>
        <LogOutBtn onClick={onClickLogout}>????????????</LogOutBtn>
      </LogOutDiv>
    </>
  );
};

export default Home;
