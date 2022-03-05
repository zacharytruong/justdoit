const data = ( function() {

  const allProjects = [];
  class Project {
    constructor(name, todos) {
      this.name = name;
      this.todos = todos;
    }
  }
  class todo {
    constructor(content) {
      this.content = content;
    }
  }
  const cleaning = new Project('Cleaning', []);
  const laundry = new Project('Laundry', []);
  const shopping = new Project('Shopping', []);
  allProjects.push(cleaning);
  allProjects.push(laundry);
  allProjects.push(shopping);

  const sweeping = new todo('Sweeping the floor.');
  const vacuum = new todo('Vacuuming the floor.');
  const washing = new todo('Washing the filter.');
  const necklace = new todo('Buy new necklace.');
  const wash = new todo('Put clothes in washer machine.');
  const dry = new todo('Put clothes in dryer.');
  cleaning.todos.push(sweeping);
  cleaning.todos.push(vacuum);
  cleaning.todos.push(washing);
  laundry.todos.push(wash);
  laundry.todos.push(dry);
  shopping.todos.push(necklace);

  if (storageAvailable('localStorage')) {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
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