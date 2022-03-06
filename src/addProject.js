const addProject = (function () {
  function addProject(e) {
    this.parentElement.appendChild(createPopup());
  }
  function createPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const info = document.createElement('p');
    modal.appendChild(createNewProjectForm());
    container.appendChild(modal);
    return container;
  }
  function createNewProjectForm() {
    const form = document.createElement('form');
    form.id = 'newProjectForm';
    const label = document.createElement('label');
    label.setAttribute('for', 'newProjectName');
    label.classList.add('label');
    label.textContent = 'Enter the name for the project:';
    const input = document.createElement('input');
    input.id = 'newProjectName';
    input.type = 'text';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.classList.add('submit');
    submit.addEventListener('click', addNewProject);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);

    return form;
  }
  function addNewProject() {
    
  }
  return {
    addProject,
  }
})();

export default addProject;