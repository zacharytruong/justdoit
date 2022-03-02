const data = ( function() {

  const myProject = [];
  const moving = [];
  class todoItem {
    constructor(projectName, description) {
      this.project = projectName || 'myProject';
      this.description = description;
    }
  }
  const todo1 = new todoItem('My Project', 'A sample todo list.');
  const todo2 = new todoItem('My Project', 'A sample todo list.');
  const todo3 = new todoItem('My Project', 'A sample todo list.');
  const todo4 = new todoItem('Moving', 'A sample todo list.');
  myProject.push(todo1);
  myProject.push(todo2);
  myProject.push(todo3);
  moving.push(todo4);
  const Inbox = [];
  Inbox.push(myProject);
  Inbox.push(moving);

  if (storageAvailable('localStorage')) {
    localStorage.setItem('myProject', JSON.stringify(myProject));
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