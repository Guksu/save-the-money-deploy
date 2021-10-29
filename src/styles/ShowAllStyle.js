import styled from "styled-components";

const ChartDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 10%) minmax(20%, 40%) minmax(20%, 40%) minmax(
      0,
      10%
    );
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 10%) minmax(20%, 40%) minmax(20%, 40%) minmax(
      0,
      10%
    );
  margin-top: 2%;
`;

const Profit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00adc2;
  font-weight: 600;
  font-size: 20px;
`;

const Expense = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00adc2;
  font-weight: 600;
  font-size: 20px;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BackBtn = styled.button`
  font-size: 20px;
  color: #34846f;
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  font-weight: 900;
  width: 150px;
`;

const ShowAllStyle = { ChartDiv, ListDiv, Profit, Expense, BtnDiv, BackBtn };

export default ShowAllStyle;
