import React from 'react';
import about from '../assets/img/hufs.jpg';

const introText = {
  title: 'port developer',
  desc: ['talent is', 'found at the end of the', 'effort'],
};
function Intro() {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{introText.title}</h1>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div class="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
