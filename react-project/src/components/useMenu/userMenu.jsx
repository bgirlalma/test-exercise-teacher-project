import { useAuth } from '../../hooks/userHook';

const UserMenu = ({ logout }) => {
  const user = useAuth()
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
