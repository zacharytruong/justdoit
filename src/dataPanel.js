
function createDataPanel(e) {
  const main = document.querySelector('main');
  setActiveProject(e);
  const dataPanel = document.querySelector('#dataPanel');
  if (dataPanel) {
    main.removeChild(main.lastChild);
    main.appendChild(newDataPanelDiv());
  } else {
    main.appendChild(newDataPanelDiv());
  }
}
function setActiveProject(e) {
  const projectsList = Array.from(document.getElementsByClassName('project'));
  projectsList.forEach( project => {
    project.classList.remove('active');
    if (e.target.id === project.id) {
      project.classList.add('active');
    } else return;
  })
};
function newDataPanelDiv() {
    const dataPanel = document.createElement('div');
    dataPanel.id = 'dataPanel';
    return dataPanel;
};
function displayTodos(e) {
  const container = [];
  const projects = JSON.parse(localStorage.getItem('Inbox'));
  projects.forEach(project => {
    if (e.target.id === 'Inbox') {
      project.forEach( todo => {
        container.push(todo);
      })
    } else return;
  })
  return container;
};

  
export default createDataPanel;