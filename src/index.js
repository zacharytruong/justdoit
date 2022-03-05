import createHeader from "./header";
import createMain from "./main";
import showTodos from "./showTodos";
import createFooter from "./footer";
import data from "./data";

( function todoApp() {
  
  const content = document.getElementById('content');

  _init();

  function _init() {
    content.appendChild(createHeader('JustDoIt'));
    content.appendChild(createMain());
    dataPanel.appendChild(showTodos.createInboxTodos());
    content.appendChild(createFooter('Zachary Truong'));
  }

})();