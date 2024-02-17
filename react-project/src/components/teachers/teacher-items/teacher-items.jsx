import AvatarOne from "../../image/AvatarOne.jpg";
import AvatarTwo from "../../image/AvatarTwo.jpg";
import AvatarThree from "../../image/Avatarthree.jpg";
import InfoTeacher from "./info/info-teacher";
import { WrappContainer, TeacherList } from "./teachet.styled";

const TeachersItems = () => {
  return (
    <WrappContainer>
      <ul>
        {/* Avatar one */}
        <TeacherList>
          <img src={AvatarOne} alt="avatar" />
          <div>
            <div>
              <p>Languages</p>
              <InfoTeacher />
            </div>
            <h2>Jane Smith</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </TeacherList>
        <button>Read more</button>

        <div>
          <div>
            <button type="button">#A1 Beginner</button>
            <button type="button">#A2 Elementary</button>
            <button type="button">#B1 Intermediate</button>
            <button type="button">#B2 Upper-Intermediate</button>
          </div>
        </div>
        {/* Avatar two */}
        <TeacherList>
          <img src={AvatarTwo} alt="avatar" />
          <div>
            <div>
              <p>Languages</p>
              <InfoTeacher />
            </div>
            <h2>David Johnson</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </TeacherList>
        <button>Read more</button>

        <div>
          <div>
            <button type="button">#A1 Beginner</button>
            <button type="button">#A2 Elementary</button>
            <button type="button">#B1 Intermediate</button>
          </div>
        </div>
        {/* Avatar three */}
        <TeacherList>
          <img src={AvatarThree} alt="avatar" />
          <div>
            <div>
              <p>Languages</p>
              <InfoTeacher />
            </div>
            <h2>Sarah Johnson</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </TeacherList>
        <button>Read more</button>

        <div>
          <div>
            <button type="button">#A1 Beginner</button>
            <button type="button">#A2 Elementary</button>
            <button type="button">#B1 Intermediate</button>
          </div>
        </div>
      </ul>
    </WrappContainer>
  );
};

export default TeachersItems;
