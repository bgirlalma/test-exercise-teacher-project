import HomeImage from '../image/block.jpg';
import {
  WrappHomeContainer,
  TitleContainer,
  HomeTitle,
  TitleSpan,
  HomeDesc,
  HomeButton,
  StyledPhoto,
} from './home.styled';

const Home = () => {
    return (
      <WrappHomeContainer>
        <TitleContainer>
          <HomeTitle>
            Unlock your potential with the best <TitleSpan>language</TitleSpan>{' '}
            tutors
          </HomeTitle>
          <HomeDesc>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </HomeDesc>
          <HomeButton type="submit">Get started</HomeButton>
        </TitleContainer>

        <StyledPhoto src={HomeImage} alt="Girl and Computer" />
      </WrappHomeContainer>
    );
}

export default Home;