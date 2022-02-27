

const main = function() {

  const main = document.createElement('main');

  const controlPanel = document.createElement('div');
  controlPanel.id = 'controlPanel';

  const inbox = document.createElement('div');
  inbox.classList.add('inbox');
  inbox.classList.add('border');
  const projects = document.createElement('div');
  projects.classList.add('projects');
  controlPanel.appendChild(inbox);
  controlPanel.appendChild(projects);

  const inboxTitle = document.createElement('h3');
  inboxTitle.textContent = 'Inbox';
  inboxTitle.classList.add('projectHeader');
  inbox.appendChild(inboxTitle);

  const projectsTitle = document.createElement('h3');
  projectsTitle.textContent = 'Projects';
  projectsTitle.classList.add('projectHeader');
  projectsTitle.classList.add('border');
  projects.appendChild(projectsTitle);

  const dataPanel = document.createElement('div');
  dataPanel.id = 'dataPanel';
  const list = document.createElement('ul');
  const listItem = document.createElement('li');
  listItem.textContent = 'Todo';
  listItem.classList.add('todo');
  list.appendChild(listItem);
  dataPanel.appendChild(list);

  main.appendChild(controlPanel);
  main.appendChild(dataPanel);
  
  return main;
};

export default main;