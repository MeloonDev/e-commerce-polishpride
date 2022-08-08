import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  top: 0;
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  /* max-width: 80vw;
  margin: 0 auto; */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    color: #028082;
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Szukaj" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>POLISHPRIDE</Logo>
        </Center>
        <Right>
          <MenuItem>HOME</MenuItem>
          <MenuItem>PRODUKTY</MenuItem>
          <MenuItem>KONTAKT</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
