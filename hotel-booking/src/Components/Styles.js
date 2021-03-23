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
  top: 417%;
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
export const ProductWrapper = styled.div`
  display: inline;
`;
export const DetailWrapper = styled.div``;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
