import createDataPanel from "./dataPanel";

const createMain = function() {

  const main = document.createElement('main');
  const controlPanel = createControlPanel();
  main.appendChild(controlPanel);

  // Create Inbox section
  const inbox = createInbox();
  const inboxTitle = createInboxTitle();
  inbox.appendChild(inboxTitle);
  controlPanel.appendChild(inbox);
  
  // Create Projects list section
  const projects = createProjectsBlock();
  const projectsTitle = createProjectsTitle();
  const projectsList = createProjectsList();
  projects.appendChild(projectsTitle);
  projects.appendChild(projectsList);
  controlPanel.appendChild(projects);

  function createControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'controlPanel';
    return controlPanel;
  };
  function createInbox() {
    const inbox = document.createElement('div');
    inbox.classList.add('inbox');
    inbox.classList.add('border');
    inbox.addEventListener('click', createDataPanel);
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
  function createProjectsList(node) {
    const lists = JSON.parse(localStorage.getItem('Inbox'));
    const listContainer = document.createElement('ul');
    lists.forEach( list => {
      if (!list[0]) {
        return;
      } else {
        const el = document.createElement('li');
        el.textContent = list[0]['project'];
        el.classList.add('project');
        el.id = el.textContent;
        el.addEventListener('click', createDataPanel);
        listContainer.appendChild(el);
      }
    })
    return listContainer;
  }

  return main;

};

export default createMain;