import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

// const Title = styled.h1`
//   margin: 20px;
//   text-transform: capitalize;

//   ${mobile({
//     margin: "10px 10px 0 10px",
//   })}
// `;

const MainSelect = styled.select`
  border: none;
  font-size: 35px;
  font-weight: 700;
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

  ${mobile({
    margin: "10px",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;

  ${mobile({
    fontSize: "15px",
  })}
`;

const Select = styled.select`
  padding: 5px;
  margin: 0 3px;
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const [cat, setCat] = useState(location.pathname.split("/")[2]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      {/* <Title>{cat}</Title> */}
      <MainSelect onChange={(e) => setCat(e.target.value)}>
        <Option value="all" selected>
          Wszystko
        </Option>
        <Option value="men">Mężczyzna</Option>
        <Option value="women">Kobieta</Option>
        <Option value="tshirts">T-shirty</Option>
        <Option value="hoodies">Bluzy</Option>
        <Option value="pants">Spodnie</Option>
      </MainSelect>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj Produkty</FilterText>
          <Select name="collection" onChange={handleFilters}>
            <Option disabled selected>
              Kolekcja
            </Option>
            <Option value="basic">Basic</Option>
            <Option value="fancy">Fancy</Option>
            <Option value="casual">Casual</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Kolor
            </Option>
            <Option value="white">Biały</Option>
            <Option value="black">Czarny</Option>
            <Option value="green">Zielony</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj Produkty</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option selected disabled>
              Sortuj według
            </Option>
            <Option value="newest">Najnowsze</Option>
            <Option value="asc">Cena rosnąco</Option>
            <Option value="desc">Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};
export default ProductList;
