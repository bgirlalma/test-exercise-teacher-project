import { StarSvg } from "../../../image/Star";
import { BookSvg } from "../../../image/book-open";

const InfoTeacher = () => {
    return (
      <div>
        <ul>
          <li>
            <BookSvg />
            <h3>Lessons online</h3>
          </li>
          <li>
            <h3>Lessons done:</h3>
          </li>
          <li>
            <StarSvg />
            <h3>Rating: </h3>
          </li>
          <li>
            <h3>Price / 1 hour:</h3>
          </li>
        </ul>
      </div>
    );
}

export default InfoTeacher;