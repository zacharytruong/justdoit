import showTodos from "./showTodos";
const deleteProject = ( function() {
  function createPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(createNotificationText());
    modal.appendChild(createActions());
    container.appendChild(modal);
    return container;
  }
  function createNotificationText() {
    const alert = document.createElement('p');
    alert.classList.add('alert');
    alert.textContent = 'Are you sure? Deleting project will delete all todos belong to it!';
    return alert;
  }
  function createActions() {
    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.appendChild(createCancelBtn());
    actions.appendChild(createAgreeBtn());
    return actions;
  }
  function createCancelBtn() {
    const cancel = document.createElement('button');
    cancel.textContent = 'No';
    cancel.classList.add('cancel');
    cancel.addEventListener('click', cancelBtnAction);
    return cancel;
  }
  function createAgreeBtn() {
    const agree = document.createElement('button');
    agree.textContent = 'Yes';
    agree.classList.add('agree');
    agree.addEventListener('click', agreeBtnAction);
    return agree;
  }
  function cancelBtnAction(e) {
    const modalContainer = this.closest('.modalContainer')
    modalContainer.classList.remove('fadeIn');
    modalContainer.classList.add('fadeOut');
    modalContainer.addEventListener('animationend', () => {
      modalContainer.remove();
    })
  }
  function agreeBtnAction(e) {
    const allProjects = retrieveLocalStorage('allProjects');
    const parent = this.closest('.listContainer');
    const projectsDiv = this.closest('.projects');
    const projectsContainer = this.closest('.projectsContainer');
    const targetIndex = allProjects.findIndex( project => project.name === parent.firstChild.id);
    allProjects.splice(targetIndex, 1);
    updateLocalStorage(allProjects);
    setActive('Inbox');
    clear(dataPanel);
    projectsContainer.remove();
    projectsDiv.insertBefore(createProjectsList(), projectsDiv.lastChild);
    dataPanel.appendChild(showTodos.createInboxTodos());
    (cancelBtnAction.bind(this))();
  }
  function deleteProject(e) {
    this.parentElement.appendChild(createPopup());
  }
  function updateLocalStorage(data) {
    return localStorage.setItem('allProjects', JSON.stringify(data));
  }
  function retrieveLocalStorage(data) {
    return JSON.parse(localStorage.getItem(data));
  }
  function setActive(id) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(id);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function clear(node) {
    return node.innerHTML = '';
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
      deleteProjectBtn.addEventListener('click', deleteProject);
      projectsContainer.appendChild(list);
      list.appendChild(content);
      list.appendChild(deleteProjectBtn);
    });
    return projectsContainer;
  }
  return {
    deleteProject,
    createProjectsList,
  }
})();

export default deleteProject;