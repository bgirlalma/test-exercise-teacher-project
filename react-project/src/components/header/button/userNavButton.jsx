import { useEffect, useRef, useState } from "react";
import { LoginSvg } from "../../image/login";
import { WrappNavButton, LogInButton, TitleButton, RegistrationNavButton, TitleRegButton } from "./userNavButton.styled";
import UserLogIn from '../../modal/login/login';
import UserRegistration from '../../modal/registration/registration';

const UserNavButton = () => {
  //state для відкриття та закриття модальних вікон
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  //створюємо лінку для елементу на який будемо встановлювати фокус після закриття модальних вікон
  const focusRef = useRef(null);

  //коли відкрити модальне вікно логінізаціїї, то вікно реєстрації зачинено
  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegistrationModalOpen(false);
  };

  //коли відкрити модальне вікно реєстрації, то вікно логінізаціїї зачинено
  const openRegistrationModal = () => {
    setRegistrationModalOpen(true);
    setLoginModalOpen(false);
  };


  //закриваємо модальне вікно по кліку на хрестит
  const closeModals = () => {

    setLoginModalOpen(false);
    setRegistrationModalOpen(false);

    // Встановлюємо фокус на елемент focusRef.current після закриття модальнних вікон
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  useEffect(() => {
    //закриваємо модальні вікна по кліку на кнопку ESC
    const handleKeyDown = event => {
      if (event.key === 'Esc' || event.key === 'Enter') {
        closeModals();
      }
    };

    //вішаємо слухача подій keydown для події handleKeyDown
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      //видаляємо слухача подій keydown для події handleKeyDown
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <WrappNavButton>
      <LogInButton onClick={openLoginModal}>
        <LoginSvg />
        <TitleButton>Log in</TitleButton>
      </LogInButton>

      <RegistrationNavButton onClick={openRegistrationModal}>
        <TitleRegButton>Registration</TitleRegButton>
      </RegistrationNavButton>

      {loginModalOpen && <UserLogIn closeModalLogin={closeModals} />}
      {registrationModalOpen && (
        <UserRegistration closeModalRegister={closeModals} />
      )}
      {/* створюємо невидимий елемент, на якому буде встановленний фокус після закриття модального вікна */}
      <div tabIndex={-1} ref={focusRef}></div>
    </WrappNavButton>
  );
};

export default UserNavButton;

