import { Link } from "react-router-dom";
import arr from "../../assets/images/arrow.svg";
import fk from "../../assets/images/facebook.svg";
import gb from "../../assets/images/github.svg";
import tr from "../../assets/images/twitter.svg";
import ln from "../../assets/images/linkedin.svg";
import clock from "../../assets/images/clock.svg";
import "./Posts.scss";
import { useEffect, useRef, useState } from "react";

export function Posts() {
  const limit = 10;
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    const lastPage = Math.ceil(posts.length / limit);
    if (page === 1) {
      prevRef.current.disabled = true;
    } else {
      prevRef.current.disabled = false;
    }

    if (page === lastPage) {
      nextRef.current.disabled = true;
    } else {
      nextRef.current.disabled = false;
    }
  }, [page, posts.length]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='post container-m'>
      <div className='post__mes'>
        <h3 className='post__heading-left'>What I do ?</h3>
        <p className='post__txt'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>

        <Link to={"/"}>
          <span className='post__link-txt'>EXPLORE ME</span>
          <button className='post__link-btn'>
            <img src={arr} alt='explore' />
          </button>
        </Link>

        <ul className='post__list-icon'>
          <li className='post__item-icon'>
            <Link to={"/"}>
              <img width={20} height={20} src={fk} alt='facebook' />
            </Link>
          </li>

          <li className='post__item-icon'>
            <Link to={"/"}>
              <img width={20} height={20} src={gb} alt='github' />
            </Link>
          </li>

          <li className='post__item-icon'>
            <Link to={"/"}>
              <img width={20} height={20} src={tr} alt='twitter' />
            </Link>
          </li>

          <li className='post__item-icon'>
            <Link to={"/"}>
              <img width={20} height={20} src={ln} alt='linkedin' />
            </Link>
          </li>
        </ul>
      </div>

      <div className='post__wrapper'>
        <h4 className='post__heading-right'>Recent Posts</h4>

        {posts.length > 0 && (
          <ul className='post__list-posts'>
            {posts.slice((page - 1) * limit, limit * page).map((post) => (
              <li className='post__item-posts' key={post.id}>
                <div className='post__params'>
                  <span className='post__data'>September 24.2020</span>
                  <span className='post__category'>Typography</span>
                </div>
                <Link to={`/posts/${post.id}`}>
                  <h5 className='post__link'>{post.title}</h5>
                </Link>

                <div className='post__view'>
                  <img className='post__view-img' src={clock} alt='clock' />
                  <span className='post__view-time'>3 minutes read</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className='btn__group'>
          <button
            className='prevBtn btn btn-primary'
            ref={prevRef}
            onClick={handlePrev}>
            prev
          </button>
          <button
            className='nextBtn btn btn-primary'
            ref={nextRef}
            onClick={handleNext}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
