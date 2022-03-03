function setActiveProject(e) {
  const projectsList = Array.from(document.getElementsByClassName('project'));
  projectsList.forEach( project => {
    project.classList.remove('active');
    if (e.target.id === project.id) {
      project.classList.add('active');
    } else return;
  })
};
function retrieveTodos(e) {
  const todosBlock = document.createElement('ul');
  todosBlock.classList.add('todos');
  const projects = JSON.parse(localStorage.getItem('Inbox'));
  if (e.target.id === 'Inbox') {
    projects.forEach( project => {
      project.forEach( todo => {
        const list = document.createElement('li');
        if (todo.description) {
          list.textContent = todo.description;
        }
        todosBlock.appendChild(list);
      });
    })
  } else {
    projects.forEach( project => {
      const filteredData = project.filter( todo => todo.projectName === e.target.id);
    });
  }
  
  return todosBlock;
};
function clear(node) {
  node.innerHTML = '';
}
function displayTodos(e) {
  setActiveProject(e);
  const todosBlock = retrieveTodos(e);
  clear(dataPanel);
  dataPanel.appendChild(todosBlock);
}
  
export default displayTodos;