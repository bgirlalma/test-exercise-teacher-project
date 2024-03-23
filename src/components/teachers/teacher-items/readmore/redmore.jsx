import BookTrialLessonModal from '../../../modal/book-trial-lesson/book-trial-lesson';
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
import { StarSvg } from '../../../image/Star';
import { useState } from 'react';

const MenuReadMore = ({ teacher }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
            {Array.isArray(teacher.levels) &&
              teacher.levels.map((level, index) => (
                <ListLevels key={index} level={level}>
                  {level}
                </ListLevels>
              ))}
          </StyledList>
        </div>
      </ul>

      <PositionButton>
        <BookTrialLessonButton type="button" onClick={openModal}>
          Book trial lesson
        </BookTrialLessonButton>
      </PositionButton>

      {isOpenModal && (
        <BookTrialLessonModal teacher={teacher} closeModal={closeModal} />
      )}
    </ContainerReadMore>
  );
};
export default MenuReadMore;
