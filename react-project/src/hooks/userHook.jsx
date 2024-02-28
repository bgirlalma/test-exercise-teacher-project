import { useSelector } from "react-redux"
import {
  selectedIsLoggIn,
  selectedUserName,
  selectedUserEmail,
} from '../redux/user-autorization/userSelector';

export const useAuth = () => {
  const isLoggIn = useSelector(selectedIsLoggIn);
  console.log(isLoggIn);
  const userName = useSelector(selectedUserName);
  console.log(userName);
  const userEmail = useSelector(selectedUserEmail);
   console.log(userEmail);
  return {
    isLoggIn,
    userName,
    userEmail,
  };
};