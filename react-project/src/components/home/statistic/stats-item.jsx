import BorderImg from "../../image/border.jpg";
import { WrappStats, BorderImage, ListContainer, ListStats, TitleStats, DescStats } from "./stats-item.styled";

const StatsItem = () => {
    return (
      <WrappStats>
        <BorderImage src={BorderImg} alt="Border" />
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