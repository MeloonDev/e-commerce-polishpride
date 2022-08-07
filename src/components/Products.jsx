import Product from "./Product";
import styled from "styled-components";
import { popularProducts } from "../data";

const Title = styled.h1`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Title>
      Bestsellery:
      <Container>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </Title>
  );
};
export default Products;
