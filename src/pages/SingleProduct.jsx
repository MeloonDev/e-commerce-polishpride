import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts } from "../data";

const Container = styled.div``;

const Wrapper = styled.div`
  /* max-width: 80vw;
  margin: 0 auto; */
  padding: 20px;
  display: flex;
  align-items: center;

  ${mobile({
    flexDirection: "column",
    padding: "10px",
    borderBottom: "1px solid gray",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  background-color: #eee;

  ${mobile({
    height: "60vh",

    fontSize: "13px",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    margin: "14px 0",
    padding: "0 10px",
  })}
`;

const Title = styled.h1`
  /* font-weight: 500; */
  /* margin-top: 100px; */
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 300;

  ${mobile({
    fontSize: "18px",
  })}
`;

const Price = styled.span`
  /* font-weight: 300; */
  margin-top: 20px;
  display: inline-block;
  /* width: 30%; */
  font-size: 30px;
  /* text-align: end; */
`;

const Filter = styled.div`
  /* margin-top: 10px; */
  /* width: 70%; */
  display: inline-block;

  /* text-align: end; */

  ${mobile({
    display: "none",
  })}
`;

const FilterTitle = styled.span``;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px 5px;
  margin-right: 20px;
  font-weight: 800;
`;

const FilterSizeOption = styled.option``;

const BtnContainer = styled.div`
  width: 100%;
  /* text-align: end; */
  ${mobile({
    textAlign: "center",
  })}
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  margin-right: 40px;

  background-color: #fff;
  border: 2px solid #028082;
  color: #028082;
  padding: 15px 30px;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: #028082;
  }

  ${mobile({
    marginTop: "5px",
  })}
`;

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = allProducts.find((item) => item.id.toString() === id);

    setProduct(getProduct);
  }, [id]);

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>{product.price}zł</Price>
          <Desc>{product.desc}</Desc>

          <Filter>
            <FilterTitle>Dostępne rozmiary</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
          <BtnContainer>
            <Button href={product.link} target="_blank">
              Kup Teraz
            </Button>
          </BtnContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default SingleProduct;
