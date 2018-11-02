// node.remove() polyfill;
import 'element-remove';

// import styles
import "./scss/main.scss";

// import components
import { ready } from "./utils/helpers"; 
import DiaModal from "./components/DiaModal";

function appendScrollbarCompensateStyleToHead(isMobile) {
  if(!isMobile) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const css = `.diamodal-scrollbar-compensate{margin-right:${scrollbarWidth}px;}`
    const style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
}

ready(() => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  appendScrollbarCompensateStyleToHead(isMobile);

  // test
  // document.querySelector('.open-modal').addEventListener('click', () => {
  //   new DiaModal({
  //     title: "Hello world",
  //     content: "<p>Content test</p>"
  //   });
  // })
});

export { DiaModal };