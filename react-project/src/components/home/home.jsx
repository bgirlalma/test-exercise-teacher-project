import HomeImage from '../image/block.jpg';
import styled from 'styled-components';

const WrappHomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 568px;
  gap: 24px;
  margin-bottom: 24px;
`;

const TitleContainer = styled.div`
  background-color: #F8F8F8;
  border-radius: 30px;
  padding: 98px 64px 0 64px;
`;

const HomeTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  color: #121417;
  margin-bottom: 32px;
`;

const TitleSpan = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 48px;
  background-color: #9fbaae;
  border-radius: 5px;
`;

const HomeDesc = styled.p`
width: 460px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #121417;
  margin-bottom: 64px;
`;

const HomeButton = styled.button`
  width: 267px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  background-color: #9fbaae;
  color: #121417;
  padding: 0;
  margin: 0;
`;

const Home = () => {
    return (
      <WrappHomeContainer>
        <TitleContainer>
          <HomeTitle>
            Unlock your potential with the best <TitleSpan>language</TitleSpan> tutors
          </HomeTitle>
          <HomeDesc>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </HomeDesc>
          <HomeButton type="submit">Get started</HomeButton>
        </TitleContainer>

        <img src={HomeImage} alt="Girl and Computer" />
      </WrappHomeContainer>
    );
}

export default Home;