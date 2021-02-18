
'use strict';

function DomElement(selector, height = '250px', width = '250px', bg = 'blue', fontSize = '20px') {
  this.selector = prompt('Напишите ".<ваше слово>" или "#<ваше слово>"');
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {
  const _this = this;
  let element = document.createElement('div');

  function createElement () {
    _this.selector = _this.selector.substring(1);
    document.body.append(element);
    
  }
  function createDiv () {
    element.classList.add(`${_this.selector}`);
    element.textContent = 'Я - блок';
  }
  function createId () {
    element.setAttribute('id', `${_this.selector}`);
    element.textContent = 'Я - параграф'; 
  }
  
  this.selector[0] === '.' ? (createElement(), createDiv()) :
  this.selector[0] === '#' ? (createElement(), createId()) : '';

  this.selector = `.${this.selector}`;
  
  DomElement.prototype.cssText = function () {
    let styleForElement = document.querySelector(`${this.selector}`);
    styleForElement.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background-color: ${this.bg};
    font-size: ${this.fontSize};
    `;
  };
};
  
const newElement = new DomElement ('.block', '200px', '200px', 'red', '16px');

newElement.createElement();

newElement.cssText();




