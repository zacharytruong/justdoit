import createDataPanel from "./dataPanel";
import createMain from "./main";


const createControlPanel = function() {

  const controlPanel = document.createElement('div');
  controlPanel.id = 'controlPanel';

  const inbox = document.createElement('div');
  inbox.classList.add('inbox');
  inbox.classList.add('border');
  // inbox.id = 'Inbox';
  inbox.addEventListener('click', createTodosBlock);
  const projects = document.createElement('div');
  projects.classList.add('projects');
  controlPanel.appendChild(inbox);
  controlPanel.appendChild(projects);

  const inboxTitle = document.createElement('h3');
  inboxTitle.textContent = 'Inbox';
  inboxTitle.classList.add('project');
  inboxTitle.classList.add('active');
  inboxTitle.classList.add('projectHeader');
  inboxTitle.id = 'Inbox';
  inbox.appendChild(inboxTitle);
  
  const projectsTitle = document.createElement('h3');
  projectsTitle.textContent = 'Projects';
  projectsTitle.classList.add('projectHeader');
  projectsTitle.classList.add('border');
  projects.appendChild(projectsTitle);

  projects.appendChild(_createProjectsList());

  function _createProjectsList(node) {
    const lists = JSON.parse(localStorage.getItem('Inbox'));
    const listContainer = document.createElement('ul');
    lists.forEach( list => {
      const el = document.createElement('li');
      el.textContent = list[0]['project'];
      el.classList.add('project');
      el.id = el.textContent;
      el.addEventListener('click', createTodosBlock);
      listContainer.appendChild(el);
    })
    return listContainer;
  }
  function setActiveProject(e) {
    const projectsList = Array.from(document.getElementsByClassName('project'));
    projectsList.forEach( project => {
      project.classList.remove('active');
      if (e.target.id === project.id) {
        project.classList.add('active');
      } else return;
    })
  }
  function createTodosBlock(e) {
    setActiveProject(e);
    const todos = retrieveTodos(e);
    const list = document.createElement('ul');
    todos.forEach( todo => {
      const listItem = document.createElement('li');
      const span = document.createElement('span');
      span.classList.add('checkbox');
      span.addEventListener('click', (() => toggleCompleted(span)));
      listItem.appendChild(span);
      listItem.textContent = todo.description;
      const description = listItem.textContent;
      // description.classList.add('todoDescription');
      list.appendChild(listItem);
    })
    const dataPanel = document.createElement('div');
    dataPanel.appendChild(list);
    main.appendChild(dataPanel);
  }
  function retrieveTodos(e) {
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
  }
  function toggleCompleted(node) {
    node.classList.toggle('completed');
  }
  return {
    controlPanel,
    retrieveTodos,
    setActiveProject,
  }

};

export default createControlPanel;