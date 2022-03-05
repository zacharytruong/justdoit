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
  }
  function displayTodos(e) {
    setActiveProject(e);
    clear(dataPanel);
    if (e.target.id === 'Inbox') {
      dataPanel.appendChild(createInboxTodos(e));
    } else {
      dataPanel.appendChild(createProjectTodos(e));
    }
  };
  function createInboxTodos(e) {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const dataBlock = document.createElement('ul');
    dataBlock.classList.add('todos');
    allProjects.forEach( project => {
      project.todos.forEach( todo => {
        const list = document.createElement('li');
        list.textContent = todo.content;
        dataBlock.appendChild(list);
      })
    })
    return dataBlock
  }
  function createProjectTodos(e) {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const dataBlock = document.createElement('ul');
    dataBlock.classList.add('todos');
    const target = allProjects.find( project => project['name'] === e.target.id);
    target.todos.forEach( todo => {
      const list = document.createElement('li');
      list.textContent = todo.content;
      dataBlock.appendChild(list);
    })
    return dataBlock;
  }
  return {
    displayTodos, 
    createInboxTodos
  }
})();

export default showTodos;