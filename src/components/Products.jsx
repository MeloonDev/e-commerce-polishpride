import styled from "styled-components";
import { popularProducts } from "../data";

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};
export default Products;
