import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  top: 0;
  border-bottom: 1px solid gray;

  ${mobile({
    height: "50px",
    width: "100vw",
  })}
`;

const Wrapper = styled.div`
  /* max-width: 80vw;
  margin: 0 auto; */

  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "5px 10px",
    height: "80%",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({
    display: "none",
  })}
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

  ${mobile({
    textAlign: "left",
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  cursor: pointer;

  ${mobile({
    fontSize: "25px",
  })}
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

  &:first-of-type {
    ${mobile({
      display: "none",
    })}
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
