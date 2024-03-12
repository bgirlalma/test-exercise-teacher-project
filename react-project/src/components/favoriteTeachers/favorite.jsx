import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FavoriteTeachers = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const allTeachers = useSelector(state => state.teachers.teachers);

  useEffect(() => {
    // Получаем данные из локального хранилища
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Находим объекты учителей по их идентификаторам
    const favoriteTeacherObjects = allTeachers.filter(teacher =>
      favorites.includes(teacher.id)
    );

    // Устанавливаем данные в состояние
    setFavoriteTeachers(favoriteTeacherObjects);
  }, [allTeachers]);

  return (
    <div>
      <h2>Favorite Page</h2>
      <ul>
        {favoriteTeachers.map((teacher) => (
          <li key={teacher.id}>
            <h2>{teacher.name}</h2>
            <div>
              <div></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoriteTeachers;