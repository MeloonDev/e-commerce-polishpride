import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ec668e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Nowa kolekcja dostępna! Darmowa dostawa już od 99zł!</Container>
  );
};

export default Announcement;
