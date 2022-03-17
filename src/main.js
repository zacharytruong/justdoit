import renderTodos from "./renderTodos";
import deleteProject from "./deleteProject";
import addProject from './addProject.js';

const createMain = function() {
  const main = document.createElement('main');
  const controlPanel = _createControlPanel();
  const dataPanel = _createDataPanel();
  main.appendChild(controlPanel);
  main.appendChild(dataPanel);

  const inbox = _createInbox();
  inbox.appendChild(_createInboxTitle());
  controlPanel.appendChild(inbox);
  
  const projectsBlock = _createProjectsBlock();
  projectsBlock.appendChild(_createProjectsTitle());
  projectsBlock.appendChild(_createProjectsList());
  projectsBlock.appendChild(_createNewProjectBtn());

  controlPanel.appendChild(projectsBlock);

  dataPanel.appendChild(renderTodos.createInboxTodos());

  function _createControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'controlPanel';
    return controlPanel;
  };
  function _createDataPanel() {
    const dataPanel = document.createElement('div');
    dataPanel.id = 'dataPanel';
    return dataPanel;
  };
  function _createInbox() {
    const inbox = document.createElement('div');
    inbox.classList.add('inbox');
    inbox.classList.add('border');
    inbox.addEventListener('click', renderTodos.displayTodos);
    return inbox;
  };
  function _createInboxTitle() {
    const inboxTitle = document.createElement('h3');
    inboxTitle.textContent = 'Inbox';
    inboxTitle.classList.add('project');
    inboxTitle.classList.add('active');
    inboxTitle.classList.add('projectHeader');
    inboxTitle.id = 'Inbox';
    return inboxTitle;
  };
  function _createProjectsBlock() {
    const projects = document.createElement('div');
    projects.classList.add('projects');
    return projects;
  };
  function _createProjectsTitle() {
    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = 'Projects';
    projectsTitle.classList.add('projectHeader');
    projectsTitle.classList.add('border');
    return projectsTitle;
  };
  function _createProjectsList() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach( project => _addFnToObj(project, 'project'))
    const projectsContainer = document.createElement('ul');
    projectsContainer.classList.add('projectsContainer');
    allProjects.forEach( project => {
      if (project.name === 'default') {
        return;
      } else {
        const list = document.createElement('li');
        list.classList.add('listContainer');
        const content = document.createElement('span');
        content.textContent = project['name'];
        content.classList.add('project');
        content.id = project.name;
        content.setAttribute('uuid', project.uuid);
        content.addEventListener('click', renderTodos.displayTodos);
        const deleteProjectBtn = document.createElement('i');
        deleteProjectBtn.classList.add('fa-solid');
        deleteProjectBtn.classList.add('fa-circle-minus');
        deleteProjectBtn.addEventListener('click', deleteProject.deleteProject);
        projectsContainer.appendChild(list);
        list.appendChild(content);
        list.appendChild(deleteProjectBtn);
      }
    });
    return projectsContainer;
  };
  function _createNewProjectBtn() {
    const div = document.createElement('div');
    div.classList.add('newProjectContainer');
    const btn = document.createElement('button');
    btn.textContent = 'NEW PROJECT';
    btn.classList.add('newProjectBtn');
    btn.addEventListener('click', addProject.addProject);
    div.appendChild(btn);
    return div;
  };
  function _addFnToObj(obj, type) {
    if (obj.status) {
      Object.assign(obj, {
        changeStatus() {
          if (this.status === 'new') {
            this.status = 'completed';
          } else if (this.status === 'completed') {
            this.status = 'new';
          };
        },
      });
    };
    Object.defineProperty(obj, 'uuid', {
      // Using shorthand method names (ES2015 feature).
      // This is equivalent to:
      // get: function() { return bValue; },
      // set: function(newValue) { bValue = newValue; },
      get() { return this._uuid },
      set(uuid) { this._uuid = `${type}-` + uuid },
      enumerable: true,
      configurable: true
    });
  };
  return main;

};

export default createMain;