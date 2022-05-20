import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clock from "../../assets/images/clock.svg";
import hero from "../../assets/images/hero.png";
import clap from "../../assets/images/clap.svg";
import share from "../../assets/images/share.svg";
import "./Posts-Single.scss";

export function PostSingle() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + userId)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [userId]);
  return (
    <div className='post-single container-m'>
      <div className='post-single__icon'>
        <ul>
          <li>
            <img src={clap} alt='clap' />
            <p>125</p>
          </li>

          <li>
            <img src={share} alt='clap' />
            <p>70</p>
          </li>
        </ul>
      </div>
      <div className='post-single__wrapper'>
        <h6 className='post-single__heading'>User Interface</h6>

        <p className='post-single__title'>{posts.title}</p>

        <div className='post-single__params'>
          <span className='post-single__data'>October 24, 2020 |</span>
          <span className='post-single__view'>
            <img className='post-single__view-img' src={clock} alt='clock' />3
            minutes read
          </span>
        </div>

        <div className='post-single__body'>
          <img
            className='post-single__hero'
            src={hero}
            alt='hero'
            width={736}
            height={352}
          />
          <p className='post-single__txt'>{posts.body}</p>
        </div>
      </div>
    </div>
  );
}
