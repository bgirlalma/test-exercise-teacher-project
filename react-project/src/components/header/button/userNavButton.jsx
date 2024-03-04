import { useState } from "react";
import { LoginSvg } from "../../image/login";
import { WrappNavButton, LogInButton, TitleButton, RegistrationNavButton, TitleRegButton } from "./userNavButton.styled";
import UserLogIn from '../../modal/login/login';
import UserRegistration from '../../modal/login/login';

const UserNavButton = () => {
 const [loginModalOpen, setLoginModalOpen] = useState(false);
 const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

 const openLoginModal = () => {
   setLoginModalOpen(true);
   setRegistrationModalOpen(false);
  };


 const openRegistrationModal = () => {
   setRegistrationModalOpen(true);
   setLoginModalOpen(false);
  };

     const closeLoginModal = () => {
       setLoginModalOpen(false);
     };

     const closeRegistrationModal = () => {
       setRegistrationModalOpen(false);
     };


  return (
    <WrappNavButton>
      <LogInButton onClick={openLoginModal}>
        <LoginSvg />
        <TitleButton>Log in</TitleButton>
      </LogInButton>

      <RegistrationNavButton onClick={openRegistrationModal}>
        <TitleRegButton>Registration</TitleRegButton>
      </RegistrationNavButton>

      {loginModalOpen && (<UserLogIn closeModal={closeLoginModal} />)}
      {registrationModalOpen && (
        <UserRegistration closeModal={closeRegistrationModal} />
      )}
    </WrappNavButton>
  );

  
};

export default UserNavButton;
