const createDataPanel = function() {

  const dataPanel = document.createElement('div');
  dataPanel.id = 'dataPanel';
  const list = document.createElement('ul');
  const listItem = document.createElement('li');
  listItem.textContent = 'Todo';
  listItem.classList.add('todo');
  list.appendChild(listItem);
  dataPanel.appendChild(list);

  return dataPanel;
  
};

export default createDataPanel;