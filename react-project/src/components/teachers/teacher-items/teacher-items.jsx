import AvatarOne from "../../image/AvatarOne.jpg";
import AvatarTwo from "../../image/AvatarTwo.jpg";
import AvatarThree from "../../image/Avatarthree.jpg";
import InfoTeacher from "./info/info-teacher";
import {
  WrappContainer,
  TeacherList,
  Image,
  FlexContainer,
  DescLanguage,
  MainTitle,
  StyledDescInfo,
  ReadMoreContainer,
  ReadMore,
  ButtonElement,
  ButtonWrapp,
  LoadMoreButton,
} from "./teachet.styled";

const TeachersItems = () => {
  return (
    <WrappContainer>
      <ul>
        {/* Avatar one */}
        <TeacherList>
          <Image src={AvatarOne} alt="avatar" />
          <div>
            <FlexContainer>
              <DescLanguage>Languages</DescLanguage>
              <InfoTeacher />
            </FlexContainer>
            <MainTitle>Jane Smith</MainTitle>
            <StyledDescInfo>Speaks:</StyledDescInfo>
            <StyledDescInfo>Lesson Info:</StyledDescInfo>
            <StyledDescInfo>Conditions:</StyledDescInfo>

            <ReadMoreContainer>
              <ReadMore to="">Read more</ReadMore>
            </ReadMoreContainer>

            <div>
              <div>
                <ButtonElement type="button">#A1 Beginner</ButtonElement>
                <ButtonElement type="button">#A2 Elementary</ButtonElement>
                <ButtonElement type="button">#B1 Intermediate</ButtonElement>
                <ButtonElement type="button">
                  #B2 Upper-Intermediate
                </ButtonElement>
              </div>
            </div>
          </div>
        </TeacherList>

        {/* Avatar two */}
        <TeacherList>
          <Image src={AvatarTwo} alt="avatar" />
          <div>
            <FlexContainer>
              <DescLanguage>Languages</DescLanguage>
              <InfoTeacher />
            </FlexContainer>
            <MainTitle>David Johnson</MainTitle>
            <StyledDescInfo>Speaks:</StyledDescInfo>
            <StyledDescInfo>Lesson Info:</StyledDescInfo>
            <StyledDescInfo>Conditions:</StyledDescInfo>

            <ReadMoreContainer>
              <ReadMore to="">Read more</ReadMore>
            </ReadMoreContainer>

            <div>
              <div>
                <ButtonElement type="button">#A1 Beginner</ButtonElement>
                <ButtonElement type="button">#A2 Elementary</ButtonElement>
                <ButtonElement type="button">#B1 Intermediate</ButtonElement>
                <ButtonElement type="button">
                  #B2 Upper-Intermediate
                </ButtonElement>
              </div>
            </div>
          </div>
        </TeacherList>

        {/* Avatar three */}
        <TeacherList>
          <Image src={AvatarThree} alt="avatar" />
          <div>
            <FlexContainer>
              <DescLanguage>Languages</DescLanguage>
              <InfoTeacher />
            </FlexContainer>
            <MainTitle>Sarah Johnson</MainTitle>
            <StyledDescInfo>Speaks:</StyledDescInfo>
            <StyledDescInfo>Lesson Info:</StyledDescInfo>
            <StyledDescInfo>Conditions:</StyledDescInfo>

            <ReadMoreContainer>
              <ReadMore to="">Read more</ReadMore>
            </ReadMoreContainer>

            <div>
              <div>
                <ButtonElement type="button">#A1 Beginner</ButtonElement>
                <ButtonElement type="button">#A2 Elementary</ButtonElement>
                <ButtonElement type="button">#B1 Intermediate</ButtonElement>
                <ButtonElement type="button">
                  #B2 Upper-Intermediate
                </ButtonElement>
              </div>
            </div>
          </div>
        </TeacherList>
      </ul>

      <ButtonWrapp>
        <LoadMoreButton type="button">Load more</LoadMoreButton>
      </ButtonWrapp>
    </WrappContainer>
  );
};

export default TeachersItems;
