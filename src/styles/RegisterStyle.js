import styled from "styled-components";

const Input = styled.input`
  color: #34846f;
  display: flex;
  border: 0px;
  border-bottom: 2px solid #324b4d;
  font-size: 20px;
  margin-top: 5%;
  margin-left: 44%;
  text-align: center;
  ::placeholder {
    color: #34846f;
  }
`;
const RegBtn = styled.button`
  margin-left: 45%;
  margin-top: 2%;
  width: 200px;
  font-size: 18px;
  border-radius: 10px;
  border: 2px solid #324b4d;
`;

const RegStyled = { Input, RegBtn };

export default RegStyled;
