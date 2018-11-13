function generateUID() {
  return '_' + Math.random().toString(14).substr(2, 6);
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild; 
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function addDelegatedEventListener(element, eventName, selector, handler, useCapture = false) {
  element.addEventListener(eventName, function (e) {
    for (var target = e.target; target && target != this; target = target.parentNode) {
      // loop parent nodes from the target to the delegation node
      if (target.matches(selector)) {
        handler.call(target, e);
        break;
      }
    }
  }, useCapture);
}

export {
  generateUID,
  createElementFromHTML,
  addClass,
  removeClass,
  addDelegatedEventListener
};