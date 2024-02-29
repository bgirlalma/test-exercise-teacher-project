import { StarSvg } from "../../../image/Star";
import { BookSvg } from "../../../image/book-open";
import styled from "styled-components";
import { HeartSvg } from "../../../image/heart";
import { Container, Wrapp, IconContainer, Title  } from "./info-teacher.styled";

const HeartContainer = styled.div`
margin-left: 64px;
`;

const InfoTeacher = ({teacher}) => {
  return (
          <Container>
            <Wrapp>
              <IconContainer>
                <BookSvg />
              </IconContainer>
              <Title>Lessons online</Title>

              <Title>Lessons done: {teacher.lessons_done}</Title>

              <IconContainer>
                <StarSvg />
              </IconContainer>
              <Title>Rating: {teacher.rating} </Title>

              <Title>Price / 1 hour: {teacher.price_per_hour}</Title>
            </Wrapp>

            <HeartContainer>
              <HeartSvg />
            </HeartContainer>
          </Container>
  );
};

export default InfoTeacher;
