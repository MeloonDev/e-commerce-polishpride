import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;

  ${mobile({
    height: "30vh",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: "25vh",
  })}
`;

const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);

  ${mobile({
    height: "98%",
  })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  /* text-shadow: 0 0 4px black; */
`;

const Button = styled.button`
  border: none;
  /* box-shadow: 0 0 4px black; */
  padding: 10px;
  background-color: #fff;
  color: black;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Shadow />
      <Info>
        <Title>{item.title}</Title>
        <Button>SPRAWDŹ</Button>
      </Info>
    </Container>
  );
};
export default CategoryItem;
