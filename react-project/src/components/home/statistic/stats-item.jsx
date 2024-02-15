import styled from 'styled-components';

const WrappStats = styled.div`
width: 100%;
padding: 40px 0 40px 0;
  border: 1px dashes #9fbaae;
  border-radius: 30px;
`;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListStats = styled.li`
  display: flex;
  align-items: center;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }
`;

const TitleStats = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  color: #121417;

  &::after {
    content: "+";
    margin-left: 5px;
  }
`;

const DescStats = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #121417;
  margin-left: 16px;
`;
const StatsItem = () => {
    return (
      <WrappStats>
        <ListContainer>
          <ListStats>
            <TitleStats>32,000</TitleStats>
            <DescStats>Experienced tutors</DescStats>
          </ListStats>
          <ListStats>
            <TitleStats>300,000</TitleStats>
            <DescStats>5-star tutor reviews</DescStats>
          </ListStats>
          <ListStats>
            <TitleStats>120</TitleStats>
            <DescStats>Subjects taught</DescStats>
          </ListStats>
          <ListStats>
            <TitleStats>200</TitleStats>
            <DescStats>Tutor nationalities</DescStats>
          </ListStats>
        </ListContainer>
      </WrappStats>
    );
}

export default StatsItem;