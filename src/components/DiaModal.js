import { createElementFromHTML, addClass, removeClass, addDelegatedEventListener } from "../utils/helpers";

export default class DiaModal {
  constructor({
    template = require("../templates/diamodal.art"), // template function
    title = "",
    content = "",
    boxSize = "small", // small | medium | large
    root = (document) ? document.body : null,
    isOpenClass = "diamodal--is-open",
    isCloseClass = "diamodal--is-close",
    isClosingClass = "diamodal--is-closing",
    triggerBtnSelector = null,
    openOnInit = false,
    destroyOnClose = false,
    transitionDuration = 480,
    onInit = f=>f,
    onDestroy = f=>f,
    onRender = f=>f,
    onOpen = f=>f,
    onClose = f=>f,
  }) {
    this._transitionDuration = transitionDuration;
    this._classes = {
      isOpenClass,
      isCloseClass,
      isClosingClass,
    }
    this._root = root;
    this._template = template;
    this._title = title;
    this._content = content;
    this._boxSize = boxSize;
    this._openOnInit = openOnInit;
    this._destroyOnClose = destroyOnClose;
    this._triggerBtnSelector = triggerBtnSelector;

    this._onInit = onInit;
    this._onDestroy = onDestroy;
    this._onRender = onRender;
    this._onOpen = onOpen;
    this._onClose = onClose;

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
    this._onInit();
  }

  _attachHandlers() {
    this._box = this._element.querySelector('.diamodal-box');
    if (this._box) {
      var closeButtons = this._box.querySelectorAll("[data-diamodal-close]");

      for (let i = 0; i < closeButtons.length; ++i) {
        closeButtons[i].addEventListener('click', (event) => this.close());
      }
  
      this._box.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

    if (this._element) {
      this._element.addEventListener('click', (event) => this.close());
    }

    if (this._triggerBtnSelector) {
      addDelegatedEventListener(document, 'click', this._triggerBtnSelector, () => {
        this.open();
      })
    }
  }

  destroy() {
    this._element.parentNode.removeChild(this._element);
    this._onDestroy();
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
      this._onOpen();
    }, 10);
  }

  close = (destroyOnClose = this._destroyOnClose) => {
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
      this._onClose();
    }, this._transitionDuration);
  }

  compile(title = this._title,
          content = this._content,
          boxSize = this._boxSize,
          transitionDuration = this._transitionDuration) {
    return this._template({
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
      this._onRender();
    }
  }
}