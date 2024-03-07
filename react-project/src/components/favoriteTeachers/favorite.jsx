import { useSelector } from "react-redux";
import InfoTeacher from "../teachers/teacher-items/info/info-teacher";
import TeachersItems from "../teachers/teacher-items/teacher-items";

const FavoriteTeachers = ({ teachers }) => {
    const favorites = useSelector(state => {
      console.log('Favorites from Redux state:', state.favorites);
      return state.favorites.favorites;
    });
  
   console.log('Teachers from props:', teachers);

 return (
   <div>
     {favorites.length > 0 ? (
       <ul>
         {favorites.map(teacherId => (
           <li key={teacherId}>
             <TeachersItems teacherId={ teacherId} />
      
           </li>
         ))}
       </ul>
     ) : (
       <div>No favorite teachers yet!</div>
     )}
   </div>
 );
};

export default FavoriteTeachers;