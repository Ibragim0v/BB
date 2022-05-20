import { Link } from "react-router-dom";
import Err from "../../assets/images/error.svg";
import Arr from "../../assets/images/arrow.svg";
import "./Error.scss";

export function Error() {
  return (
    <div className='error container-m'>
      <div className='error__wrapper'>
        <img
          className='error__img'
          src={Err}
          alt='err'
          width={400}
          height={193}
        />

        <h6 className='error__found'>Page not found - 404</h6>

        <p className='error__mes'>
          This page not found (deleted or never exists).
          <br />
          Try a phrase in search box or back to home and start again.
        </p>

        <Link to={"/"} className='error__link'>
          <span>TAKE ME HOME!</span>
          <img
            className='error__arr'
            src={Arr}
            alt='arr'
            width={6}
            height={10}
          />
        </Link>
      </div>
    </div>
  );
}
