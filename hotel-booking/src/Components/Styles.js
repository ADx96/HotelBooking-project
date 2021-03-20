import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const BigImage = styled.image``;

export const Textblock = styled.div`
  position: absolute;
  top: 72%;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 250px;
  padding-bottom: 250px;
`;
export const CardsContainer = styled.div`
  margin-top: 55%;
  margin-left: 15%;
`;

export const CardsContainer2 = styled.div`
  margin-top: 2%;
  margin-left: 0%;
`;
export const Gallery = styled.div`
  margin-top: 2%;
`;
