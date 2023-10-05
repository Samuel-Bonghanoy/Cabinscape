import styled from "styled-components";
import logolight from "../data/img/logo-lightmode.png";

const StyledLogo = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

const Img = styled.img`
  height: 10.6rem;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logolight} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
