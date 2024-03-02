import { StarSvg } from "../../../image/Star";
import {
  ContainerReadMore,
  ReadMoreDesc,
  ReadMoreName,
  ReadMoreratingContainer,
  ReadMoreStar,
  ReadMorerating,
  ReadMoreComment,
  StyledList,
  ListLevels,
  PositionButton,
  BookTrialLessonButton,
} from './readmore.styled';
const MenuReadMore = ({ teacher }) => {

  // перевиряємо чи дійсно існує reviews інформація про вчителя. Якщо ні - повертаємо null
  if (!teacher || !teacher.reviews) {
    return null;
  }

  return (
    <ContainerReadMore>
      <ReadMoreDesc>{teacher.experience}</ReadMoreDesc>
      <ul>
        {teacher.reviews.map((review, index) => (
          <li key={index}>
            <ReadMoreName>{review.reviewer_name}</ReadMoreName>
            <ReadMoreratingContainer>
              <ReadMoreStar>
                <StarSvg />
              </ReadMoreStar>
              <ReadMorerating>{review.reviewer_rating}</ReadMorerating>
            </ReadMoreratingContainer>
            <ReadMoreComment>{review.comment}</ReadMoreComment>
          </li>
        ))}

        <div>
          <StyledList>
            {teacher.levels.map((level, index) => (
              <ListLevels key={index} level={level}>
                {level}
              </ListLevels>
            ))}
          </StyledList>
        </div>
      </ul>

      <PositionButton>
        <BookTrialLessonButton type="button">
          Book trial lesson
        </BookTrialLessonButton>
      </PositionButton>
    </ContainerReadMore>
  );
};
export default MenuReadMore;
