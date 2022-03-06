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
    this.closest('.modalContainer').classList.remove('fadeIn');
    this.closest('.modalContainer').classList.add('fadeOut');
    // (removePopUp.bind(this))();
    this.closest('.modalContainer').addEventListener('transitionend', () => {
      (removePopUp.bind(this))();
    })
  }
  function agreeBtnAction(e) {
    const allProjects = retrieveLocalStorage('allProjects');
    const parent = this.closest('.listContainer');
    const targetIndex = allProjects.findIndex( project => project.name === parent.firstChild.id);
    allProjects.splice(targetIndex, 1);
    updateLocalStorage(allProjects);
    
    (removePopUp.bind(this))();
  }
  function removePopUp(e) {
    const parent = this.closest('.listContainer');
    parent.removeChild(parent.lastChild);
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
  return {
    deleteProject,
  }
})();

export default deleteProject;