import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { themes } from "../../assets/themes/themes";
import { AuthClient } from "../../api/authClient";
import { Spinner } from "../Spinner/Spinner";


import './styles.css';
import { setAlert } from "../../context/alert";

export const AuthPage = ({ type }: {
  type: "login" | "registration"
}) => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = React.useState<boolean>(false)

  const loginAZ: string = "Giriş";
  const registrationAZ: string = "Qeydiyyat";

  const loginClue: string = "Adınızı daxil edin";
  const passwordClue: string = "Parol daxil edin";

  const currentAuthTitle = type === "login"
    ? loginAZ
    : registrationAZ

  const usernameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passswordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) return;
    const result = await AuthClient.login(username, password);
    console.log(result)
    if (!result) {
      setSpinner(false);
      return;
    }
    setSpinner(false);
    navigate('/costs');

    setAlert({
      alertText: 'daxil oldu',
      alertStatus: 'success'
    })
  }

  const handleRegistration = async (username: string, password: string) => {
    if (!username || !password) return;
    if (password.length < 4) return;

    const result = await AuthClient.registration(username, password);
    console.log(result)

    if (!result) {
      setSpinner(false);
      return;
    }
    setSpinner(false);
    navigate('/login');

    setAlert({
      alertText: 'qeydiyyat tamamlandı',
      alertStatus: 'success'
    })
  };

  const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpinner(true);

    switch (type) {
      case "login":
        handleLogin(usernameRef.current.value, passswordRef.current.value);
        break;
      case "registration":
        handleRegistration(usernameRef.current.value, passswordRef.current.value);
        break;

      default: break;
    }
  }

  // buttom component 
  interface IHelpText {
    login: string;
    registration: string;
  }

  const helpText: IHelpText = {
    login: "Hələ hesab yoxdur ?",
    registration: "Hesabıniz var ?"
  }

  const AuthHelpText = (
    { link, helpText, btnText }
      : { link: string, helpText: string, btnText: string }) => {
    return (
      <div className="auth__help" >
        <span className="question__text">
          {helpText}
        </span>
        <Link to={link} className="text-white">
          <button className={`btn bg-${themes.primary} auth-btn`}>
            {btnText}
          </button>
        </Link>
      </div>
    )
  }

  const switchHelpText = type === "login"
    ? <AuthHelpText link='/registration' helpText={helpText.login} btnText={registrationAZ} />
    : <AuthHelpText link='/login' helpText={helpText.registration} btnText={loginAZ} />

  return (
    <div className='container auth__form'>
      <h1 className='auth__title'>
        {currentAuthTitle}
      </h1>
      <form onSubmit={handleAuth} className='form-group'>
        <label className="auth-label">
          {loginClue}
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            placeholder={"login".toUpperCase()}
          />
        </label>
        <label className="auth-label">
          {passwordClue}
          <input
            ref={passswordRef}
            type="text"
            className="form-control"
            placeholder={"password".toUpperCase()}
          />
        </label>
        <label className="auth-label">
          <button className={`btn btn-${themes.success} auth-btn`}>
            {
              spinner
                ? <Spinner top={5} left={20} />
                : currentAuthTitle
            }
          </button>
        </label>
        {switchHelpText}
      </form>
    </div>
  )
}


