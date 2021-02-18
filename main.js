
'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = prompt('Напишите ".<ваше слово>" или "#<ваше слово>"');
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {
  if (this.selector.startsWith('.')) {
      this.selector = this.selector.substring(1);
      let divElement = document.createElement('div');
      document.body.append(divElement);
      divElement.classList.add(`${this.selector}`);
      divElement.textContent = 'Я - блок';
      this.selector = `.${this.selector}`;
  } else if (this.selector.startsWith('#')) {
      this.selector = this.selector.substring(1);
      let pElement = document.createElement('p');
      document.body.append(pElement);
      pElement.classList.add(`${this.selector}`);
      pElement.textContent = 'Я - параграф';
      this.selector = `#${this.selector}`;
  }
};

DomElement.prototype.cssText = function () {
  let styleForElement = document.querySelector(`${this.selector}`);
styleForElement.style.cssText = `
height: ${this.height};
width: ${this.width};
background-color: ${this.bg};
font-size: ${this.fontSize};
`;
};

const newElement = new DomElement ('.block', '200px', '200px', 'red', '20px');

newElement.createElement();
newElement.cssText();




