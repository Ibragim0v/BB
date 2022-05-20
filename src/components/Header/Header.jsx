import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import { NavLink } from "react-router-dom";
import close from "../../assets/images/close.svg";
import burger from "../../assets/images/burger.svg";

export function Header() {
  return (
    <header className='header header__container'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <img
            className='header__logo-img'
            src={logo}
            alt='logo'
            width={210}
            height={58}
          />
        </div>

        <ul className='header__list'>
          <li className='header__item'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "header__item-link header__item-link--active"
                  : "header__item-link"
              }>
              All
            </NavLink>
          </li>

          <li className='header__item'>
            <NavLink
              to={"/design"}
              className={({ isActive }) =>
                isActive
                  ? "header__item-link header__item-link--active"
                  : "header__item-link"
              }>
              Design Theory
            </NavLink>
          </li>

          <li className='header__item'>
            <NavLink
              to={"/ux"}
              className={({ isActive }) =>
                isActive
                  ? "header__item-link header__item-link--active"
                  : "header__item-link"
              }>
              UX
            </NavLink>
          </li>

          <li className='header__item'>
            <NavLink
              to={"/ui"}
              className={({ isActive }) =>
                isActive
                  ? "header__item-link header__item-link--active"
                  : "header__item-link"
              }>
              UI
            </NavLink>
          </li>

          <li className='header__item'>
            <NavLink
              to={"/typography"}
              className={({ isActive }) =>
                isActive
                  ? "header__item-link header__item-link--active"
                  : "header__item-link"
              }>
              Typography
            </NavLink>
          </li>
        </ul>

        <form className='header__form'>
          <input className='header__input' type='text' placeholder='search' />
          <button className='header__btn'>
            <img
              className='header__btn-img'
              src={search}
              alt='search'
              width={16}
              height={16}
            />
          </button>
        </form>

        <div className='header__menu'>
          <button className='header__burger'>
            <img className='header__on' src={close} alt='close' />
            <img className='header__off' src={burger} alt='burger' />
          </button>
        </div>
      </div>
    </header>
  );
}
