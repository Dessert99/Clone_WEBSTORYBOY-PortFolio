import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__text">
          <span>webstoryboy</span>
          <span>© webs</span>
        </div>

        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="https://www.youtube.com/@sunghajung">youtube</a>
              </li>
              <li>
                <a href="https://github.com/Dessert99">github</a>
              </li>
              <li>
                <a href="https://blog.naver.com/lsjh1234">naver</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          © 2025 dessert99
          <br />이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
