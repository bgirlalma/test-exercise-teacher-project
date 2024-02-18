import { StarSvg } from "../../../image/Star";
import { BookSvg } from "../../../image/book-open";
import styled from "styled-components";
import { HeartSvg } from "../../../image/heart";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const IconContainer = styled.div`
margin-right: 8px;
`;

const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #121417;
  margin-right: 32px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 1px;
    background-color: #121417;
  }

  &:last-child::after{
    display: none;
  }
`;

const HeartContainer = styled.div`
margin-left: 64px;
`;

const InfoTeacher = () => {
  return (
    <Container>
      <Wrapp>
        <IconContainer>
          <BookSvg />
        </IconContainer>
        <Title>Lessons online</Title>

        <Title>Lessons done:</Title>

        <IconContainer>
          <StarSvg />
        </IconContainer>
        <Title>Rating: </Title>

        <Title>Price / 1 hour:</Title>
      </Wrapp>

      <HeartContainer>
        <HeartSvg />
      </HeartContainer>
    </Container>
  );
};

export default InfoTeacher;
