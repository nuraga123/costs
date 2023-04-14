import { themes, useTheme } from '../../hooks';
import { icon } from '../../assets/icon/icon';
import './styles.css';

export const Header = () => {
  const headerTitle: string = "xərc proqramı".toLocaleUpperCase();
  const { switchTheme, theme } = useTheme();

  return (
    <header className={`navbar navbar-dark bg-${theme === themes.dark ? themes.dark : themes.primary} header`}>
      <div className='container logo__content'>
        <img
          className="icon"
          src={theme === themes.dark ? icon.logoWhite : icon.logoBlack}
          alt="money"
        />
        <h1 className={`title ${theme === themes.dark ? themes.dark : themes.light}`}>
          {headerTitle}
        </h1>
        <img
          className="icon theme"
          src={theme === themes.dark ? icon.sun : icon.moon}
          alt="money"
          onClick={switchTheme}
        />
      </div>
    </header>
  )
}

