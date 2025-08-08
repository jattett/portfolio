import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  :root {

  /* font-size */
  --font-sm: 14px;
  --font-md: 16px;
  --font-lg: 18px;
  --font-xl: 21px;
  --font-xxl: 24px;

  /* Color */
  --skyblue-color: #00c6fb;
  --blue-color: #1976d2;
  --white-color: #ffffff;
  --black-color: #1c1c1c;
  --gray-color: #cdcdcd;
  --green-color: #44c489;
  } 



  
  /* Google Fonts import */
  @import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


  

body:not(.fp-responsive) .fp-overflow {
  overflow: hidden !important; /* 필요하면 직접 수정 */
}

#fp-nav{
    span {
      color: #fff;
    }
  }

  /* 마우스 커서 효과 애니메이션 */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-3px) scale(1.1);
    }
  }

  @keyframes trail {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
    100% {
      transform: translate(10px, -10px) scale(0.5);
      opacity: 0;
    }
  }

  .small-droplet {
    animation: float 2s ease-in-out infinite;
  }

  .droplet-0 {
    animation-delay: 0s;
  }

  .droplet-1 {
    animation-delay: 0.5s;
  }

  .droplet-2 {
    animation-delay: 1s;
  }

  .trail-droplet {
    animation: trail 1s ease-out infinite;
  }

  .trail-0 {
    animation-delay: 0s;
  }

  .trail-1 {
    animation-delay: 0.2s;
  }

  .trail-2 {
    animation-delay: 0.4s;
  }

  .trail-3 {
    animation-delay: 0.6s;
  }

  .trail-4 {
    animation-delay: 0.8s;
  }

  /* 기본 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* 포커스 아웃라인 제거 */
  *:focus {
    outline: none;
  }

  /* 선택 텍스트 스타일 */
  ::selection {
    background: var(--green-color);
    color: var(--black-color);
  }

  /* 스무스 스크롤 */
  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
