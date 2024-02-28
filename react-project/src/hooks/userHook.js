import { useSelector } from "react-redux"
import {
  selectedIsLoggIn,
  selectedUserName,
  selectedUserEmail,
} from '../redux/user-autorization/userSelector';

export const useAuth = () => {
  const isLoggIn = useSelector(selectedIsLoggIn);
  const userName = useSelector(selectedUserName);
  const userEmail = useSelector(selectedUserEmail);
  return {
    isLoggIn,
    userName,
    userEmail,
  };
};