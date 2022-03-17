import {v4 as uuidv4} from 'uuid';
const data = ( function() {

  class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
    get uuid() {
      return this._uuid;
    }
    set uuid(uuid) {
      return this._uuid = 'project-' + uuid;
    }
  };
  class todo {
    constructor(content) {
      this.content = content;
      this.status = 'new';
    }
    get uuid() {
      return this._uuid;
    }
    set uuid(uuid) {
      return this._uuid = 'todo-' + uuid;
    }
    changeStatus = () => {
      if (this.status === 'new') {
        this.status = 'completed';
      } else if (this.status === 'completed') {
        this.status = 'new';
      }
    }
  };
  function createDemoData(arr) {
    const cleaning = new Project('Cleaning');
    const laundry = new Project('Laundry');
    const shopping = new Project('Shopping');
    cleaning.uuid = uuidv4();
    laundry.uuid = uuidv4();
    shopping.uuid = uuidv4();
    arr.push(cleaning);
    arr.push(laundry);
    arr.push(shopping);
  
    const sweeping = new todo('Sweeping the floor.');
    const vacuum = new todo('Vacuuming the floor.');
    const washing = new todo('Washing the filter.');
    const necklace = new todo('Buy new necklace.');
    const wash = new todo('Put clothes in washer machine.');
    const dry = new todo('Put clothes in dryer.');
    sweeping.uuid = uuidv4();
    vacuum.uuid = uuidv4();
    washing.uuid = uuidv4();
    necklace.uuid = uuidv4();
    wash.uuid = uuidv4();
    dry.uuid = uuidv4();
    cleaning.todos.push(sweeping);
    cleaning.todos.push(vacuum);
    cleaning.todos.push(washing);
    laundry.todos.push(wash);
    laundry.todos.push(dry);
    shopping.todos.push(necklace);
  
    if (storageAvailable('localStorage')) {
      localStorage.setItem('allProjects', JSON.stringify(arr));
    }
    else return;
  };
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
    };

  return {
    createDemoData,
  };
})();

export default data;