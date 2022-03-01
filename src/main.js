import createControlPanel from "./controlPanel";
import createDataPanel from "./dataPanel";

const createMain = function() {

  const main = document.createElement('main');

  main.appendChild(createControlPanel().controlPanel);
  main.appendChild(createDataPanel());
  
  
  return main;
};

export default createMain;