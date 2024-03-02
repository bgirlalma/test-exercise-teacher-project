import Home from "../components/home/home";
import StatisticBlock from "../components/home/statistic/stats-block";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  padding: 20px 64px 32px 64px;
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