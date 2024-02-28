import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/userHook';
import { logoutUser } from '../../redux/user-autorization/authOperation';

const UserMenu = ({ logout }) => {
  const { userName } = useAuth()
  const dispatch = useDispatch()

   const handleLogout = async () => {
     console.log('Выход из учетной записи');
     dispatch(logoutUser());
   };
  return (
    <div>
      <h2>Welcome {userName && userName.name}!</h2>
      <button type="button" onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};

export default UserMenu;
