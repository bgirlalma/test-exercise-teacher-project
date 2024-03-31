import { LogoSvg } from '../../image/logo';
import { WrappLogo, StyledNavlink, TitleLogo } from './logo.styled';

const Logo = () => {
  return (
    <WrappLogo>
      <StyledNavlink to="/">
        <LogoSvg />
        <TitleLogo>LearnLingo</TitleLogo>
      </StyledNavlink>
    </WrappLogo>
  );
};

export default Logo;
