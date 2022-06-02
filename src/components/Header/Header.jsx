import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import { NavLink } from "react-router-dom";
import burger from "../../assets/images/burger.svg";
import { useRef, useState } from "react";
import { useContext } from "react";
import { InputContext } from "../../context/Input";

export function Header() {
  const [burgerBtn, setBurgerBtn] = useState(false);
  const searchRef = useRef();
  const { setInputValue } = useContext(InputContext);

  const handleSearch = (e) => {
    e.preventDefault();

    setInputValue(searchRef.current.value);
  };

  const handleBurger = () => {
    if (burgerBtn === true) {
      setBurgerBtn(false);
    } else {
      setBurgerBtn(true);
    }
  };

  return (
    <header className='header header__container'>
      <div className='header__wrapper'>
        <div className='header__mobile'>
          <div className='header__logo'>
            <img
              className='header__logo-img'
              src={logo}
              alt='logo'
              width={210}
              height={58}
            />
          </div>
          <div className='header__menu'>
            <button onClick={handleBurger} className='header__burger'>
              <img className='header__on' src={burger} alt='burger' />
            </button>
          </div>
        </div>

        <nav className={`header__nav ${!burgerBtn && "header__lg-none"}`}>
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
        </nav>

        <form onSubmit={handleSearch} className='header__form'>
          <input
            ref={searchRef}
            className='header__input'
            type='text'
            placeholder='search'
          />
          <button className='header__btn' type='submit'>
            <img
              className='header__btn-img'
              src={search}
              alt='search'
              width={16}
              height={16}
            />
          </button>
        </form>
      </div>
    </header>
  );
}
