import addTodo from './addTodo';
import crossTodo from './crossTodo';
import deleteTodo from './deleteTodo';
const showTodos = (function() {
  
  function setActiveProject(e) {
    const allProjects = Array.from(document.getElementsByClassName('project'));
    const target = document.getElementById(`${e.target.id}`);
    allProjects.forEach( project => {
      project.classList.remove('active');
    });
    target.classList.add('active');
  };
  function clear(node) {
    node.innerHTML = '';
  };
  function displayTodos(e) {
    setActiveProject(e);
    clear(dataPanel);
    if (e.target.id === 'Inbox') {
      dataPanel.appendChild(createInboxTodos());
    } else {
      dataPanel.appendChild(_createProjectTodos(e));
      dataPanel.appendChild(_createAddTodoBtn());
    };
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
  function createInboxTodos() {
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
    displayTodos, 
    createInboxTodos,
  };
})();

export default showTodos;