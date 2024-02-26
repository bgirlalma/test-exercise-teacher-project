import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/userHook';
import { userLogout } from '../../redux/user-autorization/authOperation';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const logout = async () => {
     console.log('Выход из учетной записи');
    dispatch(userLogout());
  };
  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <button type="button" onClick={logout}>
        log out
      </button>
    </div>
  );
};

export default UserMenu;
