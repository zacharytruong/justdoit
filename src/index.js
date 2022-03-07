import createHeader from "./header";
import createMain from "./main";
import createFooter from "./footer";
import data from "./data";

( function todoApp() {
  
  const content = document.getElementById('content');

  _init();

  function _init() {
    data.createDemoData();
    content.appendChild(createHeader('JustDoIt'));
    content.appendChild(createMain());
    content.appendChild(createFooter('Zachary Truong'));
  }

})();