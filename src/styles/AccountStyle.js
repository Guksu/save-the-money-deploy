import styled from "styled-components";

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 5%;
`;

const Calender = styled.input`
  border: 2px solid #324b4d;
  color: #34846f;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 900;
`;
const ProfitDiv = styled.div`
  margin-top: 5%;
`;

const Profit = styled.input`
  border: 0px;
  border-bottom: 2px solid #324b4d;
  font-size: 20px;
  text-align: center;
  color: #34846f;
  margin-right: 10px;
  font-weight: 900;
  ::placeholder {
    color: #34846f;
  }
`;

const ProfitSelect = styled.select`
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  color: #34846f;
  font-weight: 900;
`;

const ExpenseDiv = styled.div`
  margin-top: 2%;
`;

const Expense = styled.input`
  border: 0px;
  border-bottom: 2px solid #324b4d;
  font-size: 20px;
  text-align: center;
  color: #34846f;
  margin-right: 10px;
  font-weight: 900;
  ::placeholder {
    color: #34846f;
  }
`;

const ExpenseSelect = styled.select`
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  color: #34846f;
  font-weight: 900;
`;

const SaveBtn = styled.button`
  margin-top: 2%;
  margin-left: 7%;
  font-size: 20px;
  color: #34846f;
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  font-weight: 900;
  width: 200px;
`;
const BackBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
`;

const BackBtn = styled.button`
  font-size: 20px;
  color: #34846f;
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  font-weight: 900;
  width: 200px;
`;

const AccountStyle = {
  AccountForm,
  Calender,
  ProfitDiv,
  Profit,
  ProfitSelect,
  ExpenseDiv,
  Expense,
  ExpenseSelect,
  SaveBtn,
  BackBtnDiv,
  BackBtn,
};

export default AccountStyle;
