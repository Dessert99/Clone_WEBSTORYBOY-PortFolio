import React from 'react';

const siteText = [
  {
    text: ['Make', 'site compliant with', 'react.js'],
    title: '리액트를 이용한 사이트 제작',
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    info: ['site coding', 'production period : two days', 'use stack : THML5/CSS3, CSS Variable, Vite'],
  },
  {
    text: ['Make', 'site compliant with', 'spring'],
    title: '스프링을 이용한 서버 구축',
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    info: ['site coding', 'production period : two days', 'use stack : JAVA, Spring Boot'],
  },
  {
    text: ['Make', 'site compliant with', 'node.js'],
    title: '노드를를 이용한 서버 구축',
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    info: ['site coding', 'production period : two days', 'use stack : JS'],
  },
];

function Site() {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding<em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
              </div>
              <div className="info">
                <span>site.info[0]</span>
                <span>site.info[1]</span>
                <span>site.info[2]</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Site;
