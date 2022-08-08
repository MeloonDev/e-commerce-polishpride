import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Select = styled.select`
  padding: 5px;
  margin: 0 3px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>T-shirty</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj Produkty</FilterText>
          <Select>
            <Option disabled selected>
              Kolekcja
            </Option>
            <Option>Basic</Option>
            <Option>Fancy</Option>
            <Option>Casual</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Kolor
            </Option>
            <Option>Biały</Option>
            <Option>Czarny</Option>
            <Option>Zielony</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj Produkty</FilterText>
          <Select>
            <Option selected>Najnowsze</Option>
            <Option>Cena rosnąco</Option>
            <Option>Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};
export default ProductList;
