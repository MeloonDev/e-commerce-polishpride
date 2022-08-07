import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.377);
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
  text-shadow: 0 0 4px black;
`;

const Button = styled.button`
  border: none;
  box-shadow: 0 0 4px black;
  padding: 10px;
  background-color: #fff;
  color: gray;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: gray;
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
        <Button>KUP TERAZ</Button>
      </Info>
    </Container>
  );
};
export default CategoryItem;
