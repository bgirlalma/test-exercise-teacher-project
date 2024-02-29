import { useState } from "react";
import InfoTeacher from '../teachers/teacher-items/info/info-teacher'
import {Image, FlexContainer, DescLanguage, MainTitle, StyledDescInfo, ReadMoreContainer, ReadMore} from '../teachers/teacher-items/teachet.styled'

const FavoriteTeachers = () => {
    const [favoriteTeachers, setFavoriteTeachers] = useState([]);
    
    const deleteTeacher = (teacherId) => {
        setFavoriteTeachers(
          favoriteTeachers.filter(teacher => teacher.id === teacherId)
        );
    }
    return (
      <div>
        <ul>
          {favoriteTeachers.map(teacher => (
            <li key={teacher.id}>
              <Image src={teacher.avatar_url} alt={teacher.name} />
                  <div>
                <FlexContainer>
                  <DescLanguage>Languages</DescLanguage>
                  <InfoTeacher teacher={teacher} />
                </FlexContainer>
                <MainTitle>
                  {teacher.name} {teacher.surname}
                </MainTitle>
                <StyledDescInfo>Speaks: {teacher.languages}</StyledDescInfo>
                <StyledDescInfo>
                  Lesson Info: {teacher.lesson_info}
                </StyledDescInfo>
                <StyledDescInfo>
                  Conditions: {teacher.conditions}
                </StyledDescInfo>

                <ReadMoreContainer>
                  <ReadMore to="">Read more</ReadMore>
                </ReadMoreContainer>

                <div>
                  <ul>
                    <li>{teacher.levels}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default FavoriteTeachers;