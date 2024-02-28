import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/userHook';
import { logoutUser } from '../../redux/user-autorization/authOperation';
import { LogoutContainer, TitleLogout, SpanLogout, ButtonLogout } from './userMenu.styled';

const UserMenu = () => {
  const { userName } = useAuth()
  const dispatch = useDispatch()

   const handleLogout = async () => {
     dispatch(logoutUser());
   };
  return (
    <LogoutContainer>
      <TitleLogout>
        Welcome <SpanLogout>{userName}</SpanLogout>!
      </TitleLogout>
      <ButtonLogout type="button" onClick={handleLogout}>
        log out
      </ButtonLogout>
    </LogoutContainer>
  );
};

export default UserMenu;
