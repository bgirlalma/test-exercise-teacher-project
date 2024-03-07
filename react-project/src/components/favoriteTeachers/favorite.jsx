import { useSelector } from "react-redux";

const FavoriteTeachers = () => {
  const favoritesIds = JSON.parse(localStorage.getItem('favorites'));
  const teachers = useSelector(state => state.teachers.teachers);

  return (
    <div>
      <h2>Favorite Page</h2>
      <ul>
       <li></li>
      </ul>
    </div>
  );
};

export default FavoriteTeachers;