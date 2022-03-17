import {v4 as uuidv4} from 'uuid';
import crossTodo from './crossTodo';
import deleteTodo from './deleteTodo';
const addTodo = (function() {
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
  function addTodo() {
    this.parentElement.appendChild(_createAddPopup());
  };
  function _createAddPopup() {
    const container = document.createElement('div');
    container.classList.add('modalContainer');
    container.classList.add('fadeIn');
    container.appendChild(_createAddTodoForm());
    return container;
  };
  function _createAddTodoForm() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('flex');
    const label = document.createElement('label');
    label.setAttribute('for', 'newTodoContent');
    label.classList.add('label');
    label.textContent = 'Add your new task:';
    const input = document.createElement('input');
    input.id = 'newTodoContent';
    input.type = 'text';
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = 'Submit';
    submit.addEventListener('click', _addNewTodo);
    modal.appendChild(label);
    modal.appendChild(input);
    modal.appendChild(submit);

    return modal;
  };
  function _addNewTodo(e) {
    let input = document.getElementById('newTodoContent');
    const newTodo = new todo(input.value);
    newTodo.uuid = 'todo-' + uuidv4();
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const active = document.querySelector('.active');
    const project = allProjects.find(project => project.name === active.id);
    project.todos.push(newTodo);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    const todosContainer = dataPanel.querySelector('.todos');
    todosContainer.appendChild(_appendNewTodo(newTodo));
    const modal = this.closest('.modalContainer');
    modal.remove();
  };
  function _appendNewTodo(obj) {
    const icon = document.createElement('i');
    const content = document.createElement('span');
    content.classList.add('todoContent');
    content.textContent = obj.content;
    content.setAttribute('uuid', obj.uuid);
    icon.classList.add('fa-solid');
    icon.addEventListener('click', crossTodo.crossTodo);
    const list = document.createElement('li');
    list.classList.add('todo');
    list.appendChild(icon);
    list.appendChild(content);
    if (obj.status === 'new') {
      icon.classList.add('fa-square');
      content.classList.remove('crossed');
    } else if (obj.status === 'completed') {
      icon.classList.add('fa-square-check');
      content.classList.add('crossed');
    }
    const deleteTodoBtn = document.createElement('i');
    deleteTodoBtn.classList.add('fa-solid');
    deleteTodoBtn.classList.add('fa-circle-minus');
    deleteTodoBtn.addEventListener('click', deleteTodo.deleteTodo);
    list.appendChild(deleteTodoBtn);
    return list;
  };
  return {
    addTodo,
  }
})();

export default addTodo;