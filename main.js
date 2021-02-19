
'use strict';

function DomElement(selector, height = '250px', width = '250px', bg = 'blue', fontSize = '20px') {
  this.selector = prompt('Напишите ".<ваше слово>" или "#<ваше слово>"');
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {

  let element = document.createElement('div');

  const createElement = () => {
    this.selector = this.selector.substring(1);
    document.body.append(element);
    
  };
  const createDiv = () => {
    element.classList.add(`${this.selector}`);
    element.textContent = 'Я - блок';
    this.selector = `.${this.selector}`;
  };
  const createId = () => {
    element.setAttribute('id', `${this.selector}`);
    element.textContent = 'Я - параграф';
    this.selector = `#${this.selector}`; 
  };
  
  this.selector[0] === '.' ? (createElement(), createDiv()) :
  this.selector[0] === '#' ? (createElement(), createId()) : '';

  
  
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
  
const newElement = new DomElement ('.block', '200px', '200px', 'tomato', '16px');

newElement.createElement();

newElement.cssText();




