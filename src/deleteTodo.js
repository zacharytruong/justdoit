const deleteTodo = (function() {
  function deleteTodo() {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    allProjects.forEach( project => {
      _addFnToObj(project, 'project');
      project.todos.forEach( todo => _addFnToObj(todo, 'todo'))});
    const targetUUID = this.previousSibling.getAttribute('uuid');
    const active = document.querySelector('.active');
    if (active.id === 'Inbox') {
      for (let i = 0; i < allProjects.length; i++) {
        const todo = allProjects[i].todos.find(todo => todo.uuid === targetUUID);
        if (todo) {
          allProjects[i].todos.splice(allProjects[i].todos.indexOf(todo), 1);
          localStorage.setItem('allProjects', JSON.stringify(allProjects));
          this.closest('.todo').remove();
          break;
        };
      };
    } else {
      const project = allProjects.find(project => project.uuid === active.getAttribute('uuid'));
      const todo = project.todos.find( todo => todo.uuid === targetUUID);
      project.todos.splice(project.todos.indexOf(todo), 1);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
      this.closest('.todo').remove();
    };
  }
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
    deleteTodo,
  }
})();
export default deleteTodo;