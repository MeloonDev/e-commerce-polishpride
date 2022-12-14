import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: #f6f6f6;
  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  /* width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute; */
`;
const Image = styled.img`
  height: 80%;
  z-index: 2;
`;

const Name = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
`;

const Price = styled.p`
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-size: 19px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f6f6f6;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Name>{item.title}</Name>
      <Price>{item.price} zł</Price>
      <Info>
        <Link
          to={`/product/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
export default Product;
