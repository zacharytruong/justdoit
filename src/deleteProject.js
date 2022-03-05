const deleteProject = ( function() {
  function createPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(createNotificationText());
    modal.appendChild(createActions());
    container.appendChild(modal);
    return container;
  }
  function createNotificationText() {
    const alert = document.createElement('p');
    alert.textContent = 'Are you sure? Deleting project will delete all todos belong to it!';
    return alert;
  }
  function createActions() {
    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.appendChild(createCancelBtn());
    actions.appendChild(createAgreeBtn());
    return actions;
  }
  function createCancelBtn() {
    const cancel = document.createElement('button');
    cancel.textContent = 'No';
    cancel.classList.add('cancel');
    return cancel;
  }
  function createAgreeBtn() {
    const agree = document.createElement('button');
    agree.textContent = 'Yes';
    agree.classList.add('agree');
    return agree;
  }
  function deleteProject() {
    dataPanel.appendChild(createPopup());
  }

  return {
    deleteProject,
  }
})();

export default deleteProject;