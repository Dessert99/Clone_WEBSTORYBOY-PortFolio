import React from 'react';
import port01 from '../assets/img/port01.jpg';
import port02 from '../assets/img/port02.jpg';
import port03 from '../assets/img/port03.jpg';

const portText = [
  {
    num: '01.',
    title: '어워드에도 올라간 포트폴리오',
    desc: '라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것같습니다.',
    img: port01,
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    view: 'https://blog.naver.com/lsjh1234',
    name: '김상* 포트폴리오',
  },
  {
    num: '02.',
    title: '빛나는 밤에 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다.디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다.',
    img: port02,
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    view: 'https://blog.naver.com/lsjh1234',
    name: '천설* 포트폴리오',
  },
  {
    num: '03.',
    title: '열정이 넘치는 포트폴리오',
    desc: '깔끔하고 발랄한 느낌이 묻어나는 장난꾸러기 같은 사이트입니다. 배치와 색상 선택이 조화롭고 사용자를 환영하는 분위기를 조성하고 있습니다. 또한, 가로 모드에서의 디자인도 매우 멋집니다. GSAP와 React.js를 이용한 부드러운 효과들이 사이트에서 눈에 띄며, 페이지 전환과 요소의 움직임이 매끄러운 포트폴리오입니다.',
    img: port03,
    code: 'https://github.com/Dessert99/Clone_WEBSTORYBOY-PortFolio',
    view: 'https://blog.naver.com/lsjh1234',
    name: '여다* 포트폴리오',
  },
];

function Port() {
  return (
    <section id="port">
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}</span>
              <a href={port.code} target="_blank" className="img" rel="noreferrer">
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site" rel="noreferrer">
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Port;
