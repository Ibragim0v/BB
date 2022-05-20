import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-fr.svg";
import "./Footer.scss";

export function Footer() {
  return (
    <div className='footer container-m'>
      <div className='footer__substract'>
        <div className='footer__wrapper'>
          <div className='footer__logo'>
            <Link to={"/"}>
              <img
                src={logo}
                alt='logo'
                className='footer__logo-img'
                width={182}
                height={70}
              />
            </Link>
          </div>
          <ul className='footer__list'>
            <li className='footer__item-main'>FIGHT WITH ME ON:</li>
            <li className='footer__item'>Twitter</li>
            <li className='footer__item footer__item--active'>Instagram</li>
            <li className='footer__item'>Telegram</li>
            <li className='footer__item'>YouTube</li>
            <li className='footer__item'>Figma</li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__item-main'>WHAT I HAVE DONE:</li>
            <li className='footer__item'>Xalq Kutubxonasi</li>
            <li className='footer__item footer__item--active'>Websitee</li>
            <li className='footer__item'>Website</li>
            <li className='footer__item'>Play Market</li>
            <li className='footer__item'>App Store</li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__item'>Contact</li>
            <li className='footer__item footer__item--active'>Blog</li>
            <li className='footer__item'>Dribbble</li>
            <li className='footer__item'>Behance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
