import createHeader from "./header";
import createMain from "./main";
import createFooter from "./footer";
import data from "./data";

const todoApp = ( function() {
  
  const content = document.getElementById('content');

  _init();

  function _init() {
    content.appendChild(createHeader('JustDoIt'));
    content.appendChild(createMain());
    content.appendChild(createFooter('Zachary Truong'));
  }

})();