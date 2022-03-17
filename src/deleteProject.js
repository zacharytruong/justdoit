import crossTodo from "./crossTodo";
const deleteProject = ( function() {
  function deleteProject(e) {
    this.parentElement.appendChild(_createPopup());
  };
  function _createPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(_createNotificationText());
    modal.appendChild(_createActions());
    container.appendChild(modal);
    return container;
  };
  function _createNotificationText() {
    const alert = document.createElement('p');
    alert.classList.add('alert');
    alert.textContent = 'Are you sure? Deleting project will delete all todos belong to it!';
    return alert;
  };
  function _createActions() {
    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.appendChild(_createCancelBtn());
    actions.appendChild(_createAgreeBtn());
    return actions;
  };
  function _createCancelBtn() {
    const cancel = document.createElement('button');
    cancel.textContent = 'No';
    cancel.classList.add('cancel');
    cancel.addEventListener('click', _cancelBtnAction);
    return cancel;
  };
  function _createAgreeBtn() {
    const agree = document.createElement('button');
    agree.textContent = 'Yes';
    agree.classList.add('agree');
    agree.addEventListener('click', _agreeBtnAction);
    return agree;
  };
  function _cancelBtnAction(e) {
    const modalContainer = this.closest('.modalContainer')
    modalContainer.classList.remove('fadeIn');
    modalContainer.classList.add('fadeOut');
    modalContainer.addEventListener('animationend', () => modalContainer.remove());
  };
  function _agreeBtnAction(e) {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach( project => _addFnToObj(project, 'project'));
    const parent = this.closest('.listContainer');
    const projectsDiv = this.closest('.projects');
    const projectsContainer = this.closest('.projectsContainer');
    const targetIndex = allProjects.findIndex( project => project.uuid === parent.firstChild.getAttribute('uuid'));
    allProjects.splice(targetIndex, 1);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    _setActive('Inbox');
    _clear(dataPanel);
    projectsContainer.remove();
    projectsDiv.insertBefore(_createProjectsList(), projectsDiv.lastChild);
    dataPanel.appendChild(_createInboxTodos());
    (_cancelBtnAction.bind(this))();
  };
  function _setActive(id) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(id);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function _setActiveProject(e) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(`${e.target.id}`);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function _clear(node) {
    return node.innerHTML = '';
  };
  function _createProjectsList() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach( project => _addFnToObj(project, 'project'))
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
        deleteProjectBtn.addEventListener('click', deleteProject);
        projectsContainer.appendChild(list);
        list.appendChild(content);
        list.appendChild(deleteProjectBtn);
      }
    });
    return projectsContainer;
  };
  function _createInboxTodos() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const dataBlock = document.createElement('ul');
    dataBlock.classList.add('todos');
    if (allProjects.length < 2) {
      return _createUserGuide();
    } else {
      allProjects.forEach( project => {
        project.todos.forEach( todo => {
          _addFnToObj(todo, 'todo');
          _createTodosBlock(dataBlock, todo)});
      });
    }
    return dataBlock;
  };
  function _createUserGuide() {
    const guide = document.createElement('p');
    guide.classList.add('guide');
    guide.textContent = 'Create a new project to get started.';
    return guide;
  }
  function _createTodosBlock(node, obj) {
    const icon = document.createElement('i');
    const content = document.createElement('span');
    content.classList.add('todoContent');
    content.textContent = obj.content;
    content.setAttribute('uuid', obj.uuid);
    icon.classList.add('fa-solid');
    icon.addEventListener('click', crossTodo.crossTodo);
    const list = document.createElement('li');
    list.appendChild(icon);
    list.appendChild(content);
    
    if (obj.status === 'new') {
      icon.classList.add('fa-square');
      content.classList.remove('crossed');
    } else if (obj.status === 'completed') {
      icon.classList.add('fa-square-check');
      content.classList.add('crossed');
    }

    node.appendChild(list);
  };
  function __createProjectTodos(e) {
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
  function _displayTodos(e) {
    _setActiveProject(e);
    _clear(dataPanel);
    if (e.target.id === 'Inbox') {
      dataPanel.appendChild(_createInboxTodos());
    } else {
      dataPanel.appendChild(__createProjectTodos(e));
    };
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
    deleteProject,
  };
})();

export default deleteProject;