import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StatusOnlineSvg } from "../image/Ellipse";
import InfoTeacher from "../teachers/teacher-items/info/info-teacher";
import MenuReadMore from "../teachers/teacher-items/readmore/redmore";
import { ReadMore } from "./favorite.styled";
import LoadMoreButton from "../teachers/teacher-items/loadmore/loadmore";

const FavoriteTeachers = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const allTeachers = useSelector(state => state.teachers.teachers);
  // state кнопки read more
  const [showReadMore, setShowReadMore] = useState({});

  // функция для зміни state read more
  const toggleReadMore = id => {
    // відновлює state за допомогою коллбєку, видаляє або додає елемент з ключем [id]. Якщо елемент вжє иснує-видаляємо.
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // відображення карток на сторінці
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadmore = () => {
    setVisibleItems(prevVisibItems => prevVisibItems + itemsPerPage);
  };

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
        {favoriteTeachers.map(teacher => (
          <li key={teacher.id}>
            <div>
              <img src={teacher.avatar_url} alt={teacher.name} />

              <div>
                <StatusOnlineSvg />
              </div>
            </div>

            <div>
              <div>
                <p>Languages</p>
                <InfoTeacher />
              </div>

              <div>
                {teacher.name} {teacher.surname}
              </div>

              <p>Speaks: {teacher.languages}</p>
              <p>Lesson Info: {teacher.lesson_info}</p>
              <p>Conditions: {teacher.conditions}</p>

              {/* {якщо showReadMore = true, показуємо компонент меню} */}
              {showReadMore[teacher.id] ? (
                <MenuReadMore teacher={teacher} />
              ) : (
                <ReadMore onClick={() => toggleReadMore(teacher.id)}>
                  Read more
                </ReadMore>
              )}

              {/* {якщо showReadMore[id] неактивне, то відображаємо кнопки, якщо активно ні} */}
              {!showReadMore[teacher.id] && (
                <div>
                  <ul>
                    {teacher.levels.map((level, index) => (
                      <li key={index} level={level}>
                        {level}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {visibleItems < allTeachers.length && (
        <LoadMoreButton loadmore={loadmore} />
      )}
    </div>
  );
};
export default FavoriteTeachers;