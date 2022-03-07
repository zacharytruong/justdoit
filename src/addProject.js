import data from './data';
import deleteProject from './deleteProject';
const addProject = (function () {
  function addProject(e) {
    this.parentElement.appendChild(createAddPopup());
  }
  function createAddPopup() {
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
    const allProjects = deleteProject.retrieveLocalStorage('allProjects');
    const projectsDiv = this.closest('.projects');
    const parent = this.closest('.projects');
    const projectsContainer = parent.children[1];
    parent.removeChild(projectsContainer);
    allProjects.push(newProject);
    deleteProject.updateLocalStorage(allProjects);
    deleteProject.clear(dataPanel);
    projectsContainer.remove();
    deleteProject.setActive('Inbox');
    projectsDiv.insertBefore(createProjectsList(), projectsDiv.lastChild);
    dataPanel.appendChild(deleteProject.createInboxTodos());
    this.closest('.modalContainer').remove();
  }
  function displayTodos(e) {
    deleteProject.setActiveProject(e);
    deleteProject.clear(dataPanel);
    if (e.target.id === 'Inbox') {
      dataPanel.appendChild(deleteProject.createInboxTodos());
    } else {
      dataPanel.appendChild(deleteProject.createProjectTodos(e));
    }
  };
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
      content.addEventListener('click', displayTodos);
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
  return {
    addProject,
  }
})();

export default addProject;