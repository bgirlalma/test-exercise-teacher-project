import { useSelector } from "react-redux";

const FavoriteTeachers = () => {
  const favoritesIds = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log("Favorites", favoritesIds)
  const teachers = useSelector(state => state.teachers.teachers);
  console.log('teachers', teachers)

  const favoritesTeachers = teachers.filter(teacher => favoritesIds.includes(teacher.id))
  console.log('favorites', favoritesTeachers);

  return (
    <div>
      <h2>Favorite Page</h2>
      <ul>
        {favoritesTeachers.map(teacher => (
          <li key={teacher.id}>
            <h2>{teacher.name}</h2>
            <div>
              <div>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteTeachers;