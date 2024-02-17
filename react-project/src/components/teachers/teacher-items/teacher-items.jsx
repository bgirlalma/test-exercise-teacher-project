import AvatarOne from "../../image/AvatarOne.jpg";
import AvatarTwo from "../../image/AvatarTwo.jpg";
import AvatarThree from "../../image/Avatarthree.jpg";
import RatingTeacher from "./rating/rating-teacher";

const TeachersItems = () => {
  return (
    <div>
      <ul>
        {/* Avatar one */}
        <li>
          <RatingTeacher />
          <img src={AvatarOne} alt="avatar" />
          <div>
            <p>Languages</p>
            <h2>Jane Smith</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </li>
        <button>Read more</button>
        {/* Avatar two */}
        <li>
          <RatingTeacher />
          <img src={AvatarTwo} alt="avatar" />
          <div>
            <p>Languages</p>
            <h2>David Johnson</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </li>
        <button>Read more</button>
        {/* Avatar three */}
        <li>
          <RatingTeacher />
          <img src={AvatarThree} alt="avatar" />
          <div>
            <p>Languages</p>
            <h2>Sarah Johnson</h2>
            <p>Speaks:</p>
            <p>Lesson Info:</p>
            <p>Conditions:</p>
          </div>
        </li>
        <button>Read more</button>
      </ul>
    </div>
  );
};

export default TeachersItems;
