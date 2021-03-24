import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const Textblock = styled.div`
  position: absolute;
  top: 357%;
  left: 65%;
  background-color: #000000db;
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 253px;
  padding-bottom: 243px;
`;
export const CardsContainer = styled.div`
  margin-top: 15%;
  margin-left: 15%;
`;

export const CardsContainer2 = styled.div`
  margin-top: 2%;
  margin-left: 0%;
`;
export const Gallery = styled.div`
  margin-top: 2%;
`;

export const Banner = styled.div`
  margin-top: 0;
  margin-left: 0;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const H11 = styled.h1`
  text-align: center;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-right: 20%;
`;

export const DetailWrapper = styled.div`
  width: 100%;
  margin-left: 45%;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ActorCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  width: 25%;
  padding: 0 10px;
  display: inline-flex;
  margin: 20px;
  text-align: center;
  align-items: center;
  color: ${(props) => props.theme.ahmad};
  filter: ${(props) => props.theme.pink};
  :root {
    @media (min-width: 768px) {
    }

    @media (max-width: 2560px) {
      width: 25%;
      padding: 0 10px;
      display: inline-flex;
      margin: 20px;
      text-align: center;
    }
  }
`;
export const Moviestext = styled.p`
  display: contents;
  font-family: "Revalia", cursive;
  font-size: x-small;
  font-size: 1vw;
  font-weight: bolder;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ProductWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
