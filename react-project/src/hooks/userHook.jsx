import { useSelector } from "react-redux"
import {
  selectedUser,
  selectedIsLoggIn,
} from '../redux/user-autorization/userSelector';

export const useAuth = () => {
  const isLoggIn = useSelector(selectedIsLoggIn);
    console.log(isLoggIn);
  return {
    isLoggIn,
    user: useSelector(selectedUser),
  };
};