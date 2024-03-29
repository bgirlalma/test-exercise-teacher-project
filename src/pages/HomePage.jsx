import Home from "../components/home/home";
import StatisticBlock from "../components/home/statistic/stats-block";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  padding: 20px 64px 32px 64px;

  @media screen and (max-width: 1300px) {
    max-width: 1300px;
    padding: 20px 40px 20px 40px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 1200px;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 320px) {
    min-width: 320px;
    padding: 20px;
  }
`;
const HomePage = () => {

  return (
 
        <Container>
          <Home />
          <StatisticBlock />
        </Container>
  );
}

export default HomePage;