import { LogoSvg } from "../image/logo";
import styled from "styled-components";
 

const WrappLogo = styled.div`
display: flex;
align-items: center;
`;

const TitleLogo = styled.h2`
  margin-left: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #121417;
`;
const Logo = () => {
    return (
      <WrappLogo>
        <LogoSvg />
        <TitleLogo>LearnLingo</TitleLogo>
      </WrappLogo>
    );
}

export default Logo;