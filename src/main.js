import showTodos from "./showTodos";
import deleteProject from "./deleteProject";
import addProject from './addProject.js';

const createMain = function() {

  const main = document.createElement('main');
  const controlPanel = createControlPanel();
  const dataPanel = createDataPanel();
  main.appendChild(controlPanel);
  main.appendChild(dataPanel);

  const inbox = createInbox();
  inbox.appendChild(createInboxTitle());
  controlPanel.appendChild(inbox);
  
  const projectsBlock = createProjectsBlock();
  projectsBlock.appendChild(createProjectsTitle());
  projectsBlock.appendChild(createProjectsList());
  projectsBlock.appendChild(createNewProjectBtn());

  controlPanel.appendChild(projectsBlock);

  dataPanel.appendChild(showTodos.createInboxTodos());
  
  function createControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'controlPanel';
    return controlPanel;
  };
  function createDataPanel() {
    const dataPanel = document.createElement('div');
    dataPanel.id = 'dataPanel';
    return dataPanel;
  };
  function createInbox() {
    const inbox = document.createElement('div');
    inbox.classList.add('inbox');
    inbox.classList.add('border');
    inbox.addEventListener('click', showTodos.displayTodos);
    return inbox;
  }
  function createInboxTitle() {
    const inboxTitle = document.createElement('h3');
    inboxTitle.textContent = 'Inbox';
    inboxTitle.classList.add('project');
    inboxTitle.classList.add('active');
    inboxTitle.classList.add('projectHeader');
    inboxTitle.id = 'Inbox';
    return inboxTitle;
  }
  function createProjectsBlock() {
    const projects = document.createElement('div');
    projects.classList.add('projects');
    return projects;
  }
  function createProjectsTitle() {
    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = 'Projects';
    projectsTitle.classList.add('projectHeader');
    projectsTitle.classList.add('border');
    return projectsTitle;
  }
  function createProjectsList() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const projectsContainer = document.createElement('ul');
    projectsContainer.classList.add('projectsContainer');
    allProjects.forEach( project => {
      const list = document.createElement('li');
      list.classList.add('listContainer');
      const content = document.createElement('span');
      content.textContent = project['name'];
      content.classList.add('project');
      content.id = project.name;
      content.addEventListener('click', showTodos.displayTodos);
      const deleteProjectBtn = document.createElement('i');
      deleteProjectBtn.classList.add('fa-solid');
      deleteProjectBtn.classList.add('fa-circle-minus');
      deleteProjectBtn.addEventListener('click', deleteProject.deleteProject);
      projectsContainer.appendChild(list);
      list.appendChild(content);
      list.appendChild(deleteProjectBtn);
    });
    return projectsContainer;
  }
  function createNewProjectBtn() {
    const div = document.createElement('div');
    div.classList.add('newProjectContainer');
    const btn = document.createElement('button');
    btn.textContent = 'NEW PROJECT';
    btn.classList.add('newProjectBtn');
    btn.addEventListener('click', addProject.addProject);
    div.appendChild(btn);
    return div;
  }
  return main;

};

export default createMain;