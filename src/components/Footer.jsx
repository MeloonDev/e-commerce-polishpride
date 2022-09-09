import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile, medium } from "../responsive";

const Container = styled.div`
  display: flex;

  ${medium({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  /* text-align: center; */

  ${medium({
    textAlign: "center",
  })}

  ${mobile({
    marginBottom: "15px",
  })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  ${medium({
    textAlign: "center",
  })}
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 9px;
  cursor: pointer;

  &:hover {
    color: #028082;
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#eee",
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: #028082;
  }

  ${mobile({
    marginBottom: "10px",
  })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>POLISHPRIDE</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          maiores cupiditate! Harum, voluptatum dicta. Excepturi quam, eum esse
          sequi fugit illo qui architecto, nam praesentium minus assumenda animi
          dolorem molestias!
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#FF7B33">
            <ShoppingBagIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Przydatne Linki</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Moda Męska</ListItem>
          <ListItem>Moda Damska</ListItem>
          <ListItem>Akcesoria</ListItem>
          <ListItem>Lista życzeń</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Kontakt</ListItem>
          <ListItem>Regulamin</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Adres</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> Złota 1, 00-000
          Warszawa
        </ContactItem>
        <ContactItem>
          <PhoneEnabledIcon style={{ marginRight: "10px" }} /> +48 000 000 000
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />{" "}
          kontakt@polishpride.pl
        </ContactItem>
      </Right>
    </Container>
  );
};
export default Footer;
