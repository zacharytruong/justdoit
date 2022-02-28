const data = ( function() {

  const defaultProject = [];
  class todoItem {
    constructor(projectName, description) {
      this.project = projectName || 'defaultProject';
      this.description = description;
    }
  }
  const todo1 = new todoItem('', 'A sample todo list.');
  const todo2 = new todoItem('', 'A sample todo list.');
  const todo3 = new todoItem('', 'A sample todo list.');
  
  defaultProject.push(todo1);
  defaultProject.push(todo2);
  defaultProject.push(todo3);

  const Inbox = [];
  Inbox.push(defaultProject);

  if (storageAvailable('localStorage')) {
    localStorage.setItem('defaultProject', JSON.stringify(defaultProject));
    localStorage.setItem('Inbox', JSON.stringify(Inbox));
  }
  else return;

  function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
        }
    }

})();