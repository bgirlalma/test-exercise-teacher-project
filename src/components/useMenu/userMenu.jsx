import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/userHook';
import { logoutUser } from '../../redux/user-autorization/authOperation';
import { LogoutContainer, TitleLogout, ButtonLogout } from './userMenu.styled';

const UserMenu = () => {
  const { userName } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
  };
  return (
    <LogoutContainer>
      <TitleLogout>{userName}</TitleLogout>
      <ButtonLogout type="button" onClick={handleLogout}>
        log out
      </ButtonLogout>
    </LogoutContainer>
  );
};

export default UserMenu;
