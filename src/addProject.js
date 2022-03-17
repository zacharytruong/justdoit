import deleteProject from './deleteProject';
import {v4 as uuidv4} from 'uuid';
import crossTodo from './crossTodo';
import addTodo from './addTodo';

const addProject = (function () {
  class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
    get uuid() {
      return this._uuid;
    }
    set uuid(uuid) {
      return this._uuid = 'project-' + uuid;
    }
  };
  function addProject(e) {
    this.parentElement.appendChild(_createAddPopup());
  };
  function _createAddPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    container.appendChild(_createNewProjectForm());
    return container;
  };
  function _createNewProjectForm() {
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
    submit.addEventListener('click', _addNewProject);
    modal.appendChild(label);
    modal.appendChild(input);
    modal.appendChild(submit);

    return modal;
  };
  function _addNewProject(e) {
    let input = document.getElementById('newProjectName');
    const newProject = new Project(input.value);
    newProject.uuid = 'project-' + uuidv4();
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const projectsDiv = this.closest('.projects');
    const parent = this.closest('.projects');
    const projectsContainer = parent.children[1];
    parent.removeChild(projectsContainer);
    allProjects.push(newProject);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    _clear(dataPanel);
    projectsContainer.remove();
    _setActive('Inbox');
    projectsDiv.insertBefore(_createProjectsList(), projectsDiv.lastChild);
    dataPanel.appendChild(_createInboxTodos());
    this.closest('.modalContainer').remove();
  };
  function _displayTodos(e) {
    _setActiveProject(e);
    _clear(dataPanel);
    if (e.target.id === 'Inbox') {
      dataPanel.appendChild(_createInboxTodos());
    } else {
      dataPanel.appendChild(_createProjectTodos(e));
      dataPanel.appendChild(_createAddTodoBtn());
    };
  };
  function _createProjectsList() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach( project => _addFnToObj(project, 'project'));
    const projectsContainer = document.createElement('ul');
    projectsContainer.classList.add('projectsContainer');
    allProjects.forEach( project => {
      if (project.name === 'default') {
        return;
      } else {
        const list = document.createElement('li');
        list.classList.add('listContainer');
        const content = document.createElement('span');
        content.textContent = project['name'];
        content.classList.add('project');
        content.id = project.name;
        content.setAttribute('uuid', project.uuid);
        content.addEventListener('click', _displayTodos);
        const deleteProjectBtn = document.createElement('i');
        deleteProjectBtn.classList.add('fa-solid');
        deleteProjectBtn.classList.add('fa-circle-minus');
        deleteProjectBtn.addEventListener('click', deleteProject.deleteProject);
        projectsContainer.appendChild(list);
        list.appendChild(content);
        list.appendChild(deleteProjectBtn);
      }
    });
    return projectsContainer;
  };
  function _setActive(id) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(id);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function _clear(node) {
    node.innerHTML = '';
  };
  function _createInboxTodos() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const dataBlock = document.createElement('ul');
    dataBlock.classList.add('todos');
    allProjects.forEach( project => {
        project.todos.forEach( todo => {
          _addFnToObj(todo, 'todo');
          _createTodosBlock(dataBlock, todo)});
    });
    return dataBlock;
  };
  function _setActiveProject(e) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(`${e.target.id}`);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function _createTodosBlock(node, obj) {
    const icon = document.createElement('i');
    const content = document.createElement('span');
    content.classList.add('todoContent');
    content.textContent = obj.content;
    content.setAttribute('uuid', obj.uuid);
    icon.classList.add('fa-solid');
    icon.addEventListener('click', crossTodo.crossTodo);
    const list = document.createElement('li');
    list.classList.add('todo');
    list.appendChild(icon);
    list.appendChild(content);
    if (obj.status === 'new') {
      icon.classList.add('fa-square');
      content.classList.remove('crossed');
    } else if (obj.status === 'completed') {
      icon.classList.add('fa-square-check');
      content.classList.add('crossed');
    }
    const deleteTodoBtn = document.createElement('i');
    deleteTodoBtn.classList.add('fa-solid');
    deleteTodoBtn.classList.add('fa-circle-minus');
    deleteTodoBtn.addEventListener('click', deleteTodo.deleteTodo);
    list.appendChild(deleteTodoBtn);

    node.appendChild(list);
  };
  function _createProjectTodos(e) {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const dataBlock = document.createElement('ul');
    dataBlock.classList.add('todos');
    allProjects.forEach( project => {
      _addFnToObj(project, 'project');
      project.todos.forEach( todo => _addFnToObj(todo, 'todo'));
    });
    const project = allProjects.find( project => project.uuid === e.target.getAttribute('uuid'));
    project.todos.forEach( todo => _createTodosBlock(dataBlock, todo));
    return dataBlock;
  };
  function _createAddTodoBtn() {
    const div = document.createElement('div');
    div.classList.add('addTodoContainer');
    const btn = document.createElement('button');
    btn.textContent = 'ADD';
    btn.classList.add('addTodoBtn');
    btn.addEventListener('click', addTodo.addTodo);
    div.appendChild(btn);
    return div;
  };
  function _addFnToObj(obj, type) {
    if (obj.status) {
      Object.assign(obj, {
        changeStatus() {
          if (this.status === 'new') {
            this.status = 'completed';
          } else if (this.status === 'completed') {
            this.status = 'new';
          };
        },
      });
    };
    Object.defineProperty(obj, 'uuid', {
      // Using shorthand method names (ES2015 feature).
      // This is equivalent to:
      // get: function() { return bValue; },
      // set: function(newValue) { bValue = newValue; },
      get() { return this._uuid },
      set(uuid) { this._uuid = `${type}-` + uuid },
      enumerable: true,
      configurable: true
    });
  };
  return {
    addProject,
  };
})();

export default addProject;