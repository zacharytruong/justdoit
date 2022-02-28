const createControlPanel = function() {

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
  inboxTitle.addEventListener('click', loadInboxTodo);
  inbox.appendChild(inboxTitle);

  const projectsTitle = document.createElement('h3');
  projectsTitle.textContent = 'Projects';
  projectsTitle.classList.add('projectHeader');
  projectsTitle.classList.add('border');
  projects.appendChild(projectsTitle);

  function loadInboxTodo() {
    
  }
  return controlPanel

};

export default createControlPanel;