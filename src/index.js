import createHeader from "./header";
import createMain from "./main";
import createFooter from "./footer";
 
( function todoApp() {
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
  const content = document.getElementById('content');

  _init();

  function _init() {
    if (!localStorage.getItem('allProjects') || (localStorage.getItem('allProjects')) === null) {
      const newProject = new Project('default');
      const allProjects = [];
      allProjects.push(newProject);
      localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
    content.appendChild(createHeader('JustDoIt'));
    content.appendChild(createMain());
    content.appendChild(createFooter('Zachary Truong'));
  };

})();