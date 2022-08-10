import Product from "./Product";
import styled from "styled-components";
import { allProducts } from "../data";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    cat === "all"
      ? setProducts(allProducts)
      : setProducts(allProducts.filter((product) => product.cat === cat));
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev.sort((a, b) => b.id - a.id)]);
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [
        ...prev.sort((a, b) => a.price - b.price),
      ]);
    } else {
      setFilteredProducts((prev) => [
        ...prev.sort((a, b) => b.price - a.price),
      ]);
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};
export default Products;
