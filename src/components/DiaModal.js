import dot from "dot"; // dot.compile(template, data)
import { createElementFromHTML, addClass, removeClass } from "../utils/helpers";

export default class DiaModal {
  constructor({
    template = require("html-loader!../views/diamodal.dot"), // dot template
    title = "",
    content = "",
    boxSize = "small", // small | medium | large
    root = (document) ? document.body : null,
    isOpenClass = "diamodal--is-open",
    isCloseClass = "diamodal--is-close",
    isClosingClass = "diamodal--is-closing",
    openOnInit = true,
    destroyOnClose = true,
    transitionDuration = 480,
  }) {
    this._transitionDuration = transitionDuration;
    this._classes = {
      isOpenClass,
      isCloseClass,
      isClosingClass,
    }
    this._root = root;
    this._template = template;
    this._compileTemplate = dot.template(this._template);
    this._title = title;
    this._content = content;
    this._boxSize = boxSize;
    this._openOnInit = openOnInit;
    this._destroyOnClose = destroyOnClose;

    this.init(openOnInit);
  }

  init(openOnInit) {
    this.render();
    if (this._element) {
      this._attachHandlers();
      if (openOnInit) {
        this.open();
      }
    }
  }

  _attachHandlers() {
    this._box = this._element.querySelector('.diamodal-box');
    if (this._box) {
      this._box.addEventListener('click', (event) => {
        var clickedEl = event.target;
        if(clickedEl.hasAttribute("data-diamodal-close")) {
          this.close();
        }
      });
  
      this._box.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

    if (this._element) {
      this._element.addEventListener('click', (event) => {
        this.close();
      });
    }
  }

  destroy() {
    this._element.remove();
  }

  open = () => {
    clearTimeout(this._currentTimeout);
    removeClass(this._element, this._classes.isCloseClass);
    removeClass(this._element, this._classes.isClosingClass);
    removeClass(this._element, this._classes.isOpenClass);
    addClass(this._root, 'diamodal-active');
    addClass(this._root, 'diamodal-scrollbar-compensate');

    this._currentTimeout = setTimeout(() => {
      addClass(this._element, this._classes.isOpenClass);
    }, 10);
  }

  close = (destroyOnClose = this._destroyOnClose) => {
    clearTimeout(this._currentTimeout);
    removeClass(this._element, this._classes.isOpenClass);
    removeClass(this._element, this._classes.isCloseClass);
    addClass(this._element, this._classes.isClosingClass);
    
    this._currentTimeout = setTimeout(() => {
      if (destroyOnClose) {
        this.destroy();
      }
      removeClass(this._element, this._classes.isClosingClass);
      addClass(this._element, this._classes.isCloseClass);
      removeClass(this._root, 'diamodal-active');
      removeClass(this._root, 'diamodal-scrollbar-compensate');
    }, this._transitionDuration);
  }

  compile(title = this._title,
          content = this._content,
          boxSize = this._boxSize,
          transitionDuration = this._transitionDuration) {
    return this._compileTemplate({
      title,
      content,
      boxSize,
      transitionDuration
    });
  }

  render(root = this._root) {
    if (root) {
      const htmlString = this.compile();
      this._element = createElementFromHTML(htmlString);
      this._root.appendChild(this._element);
    }
  }
}