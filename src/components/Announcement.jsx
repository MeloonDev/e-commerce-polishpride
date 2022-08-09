import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 60px;
  height: 30px;
  background-color: #028082;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;

  ${mobile({
    marginTop: "50px",
    fontSize: "13px",
  })}
`;

const Announcement = () => {
  return (
    <Container>Nowa kolekcja dostępna! Darmowa dostawa już od 99zł!</Container>
  );
};

export default Announcement;
