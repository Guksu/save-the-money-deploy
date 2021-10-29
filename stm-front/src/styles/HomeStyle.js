import styled from "styled-components";

const CalDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Calender = styled.input`
  border: 2px solid #324b4d;
  color: #34846f;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 900;
`;

const ChartDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 20%) minmax(30%, 30%) minmax(30%, 30%) minmax(
      0px,
      20%
    );
  margin-top: 3%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  margin-bottom: 20px;
`;

const Li = styled.li`
  color: #34846f;
  font-weight: 900;
  padding: 10px;
`;

const AccountDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const AccountBtn = styled.button`
  color: #34846f;
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  font-weight: 900;
  width: 200px;
  margin-right: 15px;
`;

const LogOutDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const LogOutBtn = styled.button`
  color: #34846f;
  border: 2px solid #324b4d;
  border-radius: 10px;
  text-align: center;
  font-weight: 900;
  width: 200px;
  margin-top: 20px;
`;

const HomeStyle = {
  LogOutBtn,
  LogOutDiv,
  AccountBtn,
  AccountDiv,
  CalDiv,
  Calender,
  ChartDiv,
  Ul,
  Li,
};

export default HomeStyle;
