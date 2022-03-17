const crossTodo = ( function() {
  
  function crossTodo(e) {
    _addCheckedBox.call(this);
    _crossContent.call(this);
    _updateStatus.call(this);
  };
  function _addCheckedBox(e) {
    this.classList.toggle('fa-square');
    this.classList.toggle('fa-square-check');
  };
  function _crossContent(e) {
    const parent = this.parentElement;
    parent.childNodes[1].classList.toggle('crossed');
  };
  function _updateStatus(e) {
    const clickedTargetUUID = this.nextElementSibling.getAttribute('uuid');
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach(project => {
      _addFnToObj(project, 'project');
      project.todos.forEach(todo => _addFnToObj(todo, 'todo'));
    });
    const active = document.querySelector('.active');
    if (active.id === 'Inbox') {
      for (let i = 0; i < allProjects.length; i++) {
        const todo = allProjects[i].todos.find(todo => todo.uuid === clickedTargetUUID);
        if (todo) {
          todo.changeStatus();
          localStorage.setItem('allProjects', JSON.stringify(allProjects));
          break;
        };
      };
    } else {
      const project = allProjects.find(project => project.name === active.id);
      const todo = project.todos.find( todo => todo.uuid === clickedTargetUUID);
      todo.changeStatus();
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
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
    crossTodo,
  };
})();

export default crossTodo;