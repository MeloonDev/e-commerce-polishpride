import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.555);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  /* justify-content: ${(props) => props.jc}; */
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  /* margin-left: ${(props) => props.marginleft}; */
`;

const Title = styled.h1`
  font-size: 35px;
  width: 80%;
`;

const Description = styled.p`
  width: 80%;
  margin: 15px 0 30px 0;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>KUP TERAZ</Button>
            </InfoContainer>
          </Slide>
        ))}
        {/* <Slide bg="#f5eedc">
          <InfoContainer marginleft="100px">
            <Title>Bluza WAKE BLUE</Title>
            <Description>
              100% Bawełna! <br /> Najwyższa jakość!
            </Description>
            <Button>KUP TERAZ</Button>
          </InfoContainer>
          <ImgContainer jc="flex-start">
            <Image src="https://i.postimg.cc/Tw8XQzD9/brock-wegner-v-Qoz-WTo8h-HM-unsplash.png" />
          </ImgContainer>
        </Slide>
        <Slide bg="#def5dc">
          <ImgContainer>
            <Image src="https://i.postimg.cc/9XyqP9S3/redd-j-C7n-VH-Sw8k-unsplash.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Spodnie REDD SAND</Title>
            <Description>
              Nowa kolekcja! <br /> Idealne dopasowanie!
            </Description>
            <Button>KUP TERAZ</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};
export default Slider;
