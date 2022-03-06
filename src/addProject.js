import data from './data';
import deleteProject from './deleteProject';
import showTodos from './showTodos';
const addProject = (function () {
  function addProject(e) {
    this.parentElement.appendChild(createPopup());
  }
  function createPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    container.appendChild(createNewProjectForm());
    return container;
  }
  function createNewProjectForm() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('flex');
    const label = document.createElement('label');
    label.setAttribute('for', 'newProjectName');
    label.classList.add('label');
    label.textContent = 'Enter the name for the project:';
    const input = document.createElement('input');
    input.id = 'newProjectName';
    input.type = 'text';
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = 'Submit';
    submit.addEventListener('click', addNewProject);
    modal.appendChild(label);
    modal.appendChild(input);
    modal.appendChild(submit);

    return modal;
  }
  function addNewProject(e) {
    let input = document.getElementById('newProjectName');
    const newProject = new data.Project(input.value);
    const allProjects = retrieveLocalStorage('allProjects');
    const projectsDiv = this.closest('.projects');
    const parent = this.closest('.projects');
    const projectsContainer = parent.children[1];
    parent.removeChild(projectsContainer);
    allProjects.push(newProject);
    updateLocalStorage(allProjects);
    clear(dataPanel);
    projectsContainer.remove();
    setActive('Inbox');
    projectsDiv.insertBefore(deleteProject.createProjectsList(), projectsDiv.lastChild);
    dataPanel.appendChild(showTodos.createInboxTodos());
    this.closest('.modalContainer').remove();
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
  return {
    addProject,
  }
})();

export default addProject;