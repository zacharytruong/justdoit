(()=>{var t={471:()=>{!function(){const t=[];class e{constructor(t,e){this.name=t,this.todos=e}}class n{constructor(t){this.content=t}}const o=new e("Cleaning",[]),s=new e("Laundry",[]),a=new e("Shopping",[]);t.push(o),t.push(s),t.push(a);const c=new n("Sweeping the floor."),d=new n("Vacuuming the floor."),i=new n("Washing the filter."),r=new n("Buy new necklace."),l=new n("Put clothes in washer machine."),u=new n("Put clothes in dryer.");o.todos.push(c),o.todos.push(d),o.todos.push(i),s.todos.push(l),s.todos.push(u),a.todos.push(r),function(t){var e;try{e=window.localStorage;var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}()&&localStorage.setItem("allProjects",JSON.stringify(t))}()}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";const t=function(){function t(t){const e=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("todos"),e.forEach((t=>{t.todos.forEach((t=>{const e=document.createElement("li");e.textContent=t.content,n.appendChild(e)}))})),n}function e(t){const e=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("todos"),e.find((e=>e.name===t.target.id)).todos.forEach((t=>{const e=document.createElement("li");e.textContent=t.content,n.appendChild(e)})),n}return{displayTodos:function(n){!function(t){const e=Array.from(document.getElementsByClassName("project")),n=document.getElementById(`${t.target.id}`);e.forEach((t=>{t.classList.remove("active")})),n.classList.add("active")}(n),dataPanel.innerHTML="","Inbox"===n.target.id?dataPanel.appendChild(t()):dataPanel.appendChild(e(n))},createInboxTodos:t,createProjectTodos:e}}(),e=function(){function t(t){this.closest(".modalContainer").classList.remove("fadeIn"),this.closest(".modalContainer").classList.add("fadeOut"),this.closest(".modalContainer").addEventListener("transitionend",(()=>{n.bind(this)()}))}function e(t){const e=JSON.parse(localStorage.getItem("allProjects")),o=this.closest(".listContainer"),s=e.findIndex((t=>t.name===o.firstChild.id));var a;e.splice(s,1),a=e,localStorage.setItem("allProjects",JSON.stringify(a)),n.bind(this)()}function n(t){const e=this.closest(".listContainer");e.removeChild(e.lastChild)}return{deleteProject:function(n){this.parentElement.appendChild(function(){const n=document.createElement("div");n.classList.add("modalContainer"),n.classList.add("fadeIn");const o=document.createElement("div");return o.classList.add("modal"),o.appendChild(function(){const t=document.createElement("p");return t.classList.add("alert"),t.textContent="Are you sure? Deleting project will delete all todos belong to it!",t}()),o.appendChild(function(){const n=document.createElement("div");return n.classList.add("actions"),n.appendChild(function(){const e=document.createElement("button");return e.textContent="No",e.classList.add("cancel"),e.addEventListener("click",t),e}()),n.appendChild(function(){const t=document.createElement("button");return t.textContent="Yes",t.classList.add("agree"),t.addEventListener("click",e),t}()),n}()),n.appendChild(o),n}())}}}();n(471),function(){const n=document.getElementById("content");n.appendChild(function(t){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h2");return n.textContent=t,n.classList.add("siteTitle"),e.appendChild(n),e}("JustDoIt")),n.appendChild(function(){const n=document.createElement("main"),o=function(){const t=document.createElement("div");return t.id="controlPanel",t}(),s=function(){const t=document.createElement("div");return t.id="dataPanel",t}();n.appendChild(o),n.appendChild(s);const a=function(){const e=document.createElement("div");return e.classList.add("inbox"),e.classList.add("border"),e.addEventListener("click",t.displayTodos),e}(),c=function(){const t=document.createElement("h3");return t.textContent="Inbox",t.classList.add("project"),t.classList.add("active"),t.classList.add("projectHeader"),t.id="Inbox",t}();a.appendChild(c),o.appendChild(a);const d=function(){const t=document.createElement("div");return t.classList.add("projects"),t}(),i=function(){const t=document.createElement("h3");return t.textContent="Projects",t.classList.add("projectHeader"),t.classList.add("border"),t}(),r=function(){const n=JSON.parse(localStorage.getItem("allProjects")),o=document.createElement("ul");return o.classList.add("projectsContainer"),n.forEach((n=>{const s=document.createElement("li");s.classList.add("listContainer");const a=document.createElement("span");a.textContent=n.name,a.classList.add("project"),a.id=n.name,a.addEventListener("click",t.displayTodos);const c=document.createElement("i");c.classList.add("fa-solid"),c.classList.add("fa-circle-minus"),c.addEventListener("click",e.deleteProject),o.appendChild(s),s.appendChild(a),s.appendChild(c)})),o}();return d.appendChild(i),d.appendChild(r),o.appendChild(d),n}()),dataPanel.appendChild(t.createInboxTodos()),n.appendChild(function(t){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p");return n.textContent=`© by ${t}`,n.classList.add("copyright"),e.appendChild(n),e}("Zachary Truong"))}()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNQyxFQUFPTixTQUFTQyxjQUFjLE1BQ3BDSyxFQUFLSixVQUFVQyxJQUFJLGlCQUNuQixNQUFNeEMsRUFBVXFDLFNBQVNDLGNBQWMsUUFDdkN0QyxFQUFRNEMsWUFBY0YsRUFBYyxLQUNwQzFDLEVBQVF1QyxVQUFVQyxJQUFJLFdBQ3RCeEMsRUFBUWlELEdBQUtQLEVBQVE5QyxLQUNyQkksRUFBUTZELGlCQUFpQixRQUFTLGdCQUNsQyxNQUFNMEMsRUFBbUJsRSxTQUFTQyxjQUFjLEtBQ2hEaUUsRUFBaUJoRSxVQUFVQyxJQUFJLFlBQy9CK0QsRUFBaUJoRSxVQUFVQyxJQUFJLG1CQUMvQitELEVBQWlCMUMsaUJBQWlCLFFBQVMsRUFBQVksZUFDM0M2QixFQUFrQnpELFlBQVlGLEdBQzlCQSxFQUFLRSxZQUFZN0MsR0FDakIyQyxFQUFLRSxZQUFZMEQsTUFHWkQsRUFqRVdFLEdBb0VwQixPQW5FQVAsRUFBY3BELFlBQVl1RCxHQUMxQkgsRUFBY3BELFlBQVlwRCxHQUUxQmlHLEVBQWE3QyxZQUFZb0QsR0FnRWxCUixFRHhFZSxJQUNwQmhDLFVBQVVaLFlBQVksc0JBQ3RCN0MsRUFBUTZDLFlFaEJTLFNBQVM0RCxHQUM1QixNQUFNQyxFQUFTckUsU0FBU0MsY0FBYyxVQUN0Q29FLEVBQU9uRSxVQUFVQyxJQUFJLFVBRXJCLE1BQU1tRSxFQUFPdEUsU0FBU0MsY0FBYyxLQUtwQyxPQUpBcUUsRUFBSy9ELFlBQWMsUUFBUTZELElBQzNCRSxFQUFLcEUsVUFBVUMsSUFBSSxhQUVuQmtFLEVBQU83RCxZQUFZOEQsR0FDWkQsRUZPZSxDQUFhLG1CQVZyQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9qdXN0ZG9pdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0ZG9pdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvc2hvd1RvZG9zLmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9qdXN0ZG9pdC8uL3NyYy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9ICggZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcbiAgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfVxuICB9XG4gIGNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsZWFuaW5nID0gbmV3IFByb2plY3QoJ0NsZWFuaW5nJywgW10pO1xuICBjb25zdCBsYXVuZHJ5ID0gbmV3IFByb2plY3QoJ0xhdW5kcnknLCBbXSk7XG4gIGNvbnN0IHNob3BwaW5nID0gbmV3IFByb2plY3QoJ1Nob3BwaW5nJywgW10pO1xuICBhbGxQcm9qZWN0cy5wdXNoKGNsZWFuaW5nKTtcbiAgYWxsUHJvamVjdHMucHVzaChsYXVuZHJ5KTtcbiAgYWxsUHJvamVjdHMucHVzaChzaG9wcGluZyk7XG5cbiAgY29uc3Qgc3dlZXBpbmcgPSBuZXcgdG9kbygnU3dlZXBpbmcgdGhlIGZsb29yLicpO1xuICBjb25zdCB2YWN1dW0gPSBuZXcgdG9kbygnVmFjdXVtaW5nIHRoZSBmbG9vci4nKTtcbiAgY29uc3Qgd2FzaGluZyA9IG5ldyB0b2RvKCdXYXNoaW5nIHRoZSBmaWx0ZXIuJyk7XG4gIGNvbnN0IG5lY2tsYWNlID0gbmV3IHRvZG8oJ0J1eSBuZXcgbmVja2xhY2UuJyk7XG4gIGNvbnN0IHdhc2ggPSBuZXcgdG9kbygnUHV0IGNsb3RoZXMgaW4gd2FzaGVyIG1hY2hpbmUuJyk7XG4gIGNvbnN0IGRyeSA9IG5ldyB0b2RvKCdQdXQgY2xvdGhlcyBpbiBkcnllci4nKTtcbiAgY2xlYW5pbmcudG9kb3MucHVzaChzd2VlcGluZyk7XG4gIGNsZWFuaW5nLnRvZG9zLnB1c2godmFjdXVtKTtcbiAgY2xlYW5pbmcudG9kb3MucHVzaCh3YXNoaW5nKTtcbiAgbGF1bmRyeS50b2Rvcy5wdXNoKHdhc2gpO1xuICBsYXVuZHJ5LnRvZG9zLnB1c2goZHJ5KTtcbiAgc2hvcHBpbmcudG9kb3MucHVzaChuZWNrbGFjZSk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgfVxuICBlbHNlIHJldHVybjtcblxuICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgICAgICB9XG4gICAgfVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbihzaXRlVGl0bGUpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc2l0ZVRpdGxlO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzaXRlVGl0bGUnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImNvbnN0IHNob3dUb2RvcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS50YXJnZXQuaWR9YCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfTtcbiAgZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICAgIG5vZGUuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheVRvZG9zKGUpIHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGUpO1xuICAgIGNsZWFyKGRhdGFQYW5lbCk7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnSW5ib3gnKSB7XG4gICAgICBkYXRhUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlSW5ib3hUb2RvcyhlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0VG9kb3MoZSkpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlSW5ib3hUb2RvcyhlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRhdGFCbG9jay5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCB0b2RvID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSB0b2RvLmNvbnRlbnQ7XG4gICAgICAgIGRhdGFCbG9jay5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gZGF0YUJsb2NrXG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRvZG9zKGUpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykpO1xuICAgIGNvbnN0IGRhdGFCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZGF0YUJsb2NrLmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XG4gICAgY29uc3QgdGFyZ2V0ID0gYWxsUHJvamVjdHMuZmluZCggcHJvamVjdCA9PiBwcm9qZWN0WyduYW1lJ10gPT09IGUudGFyZ2V0LmlkKTtcbiAgICB0YXJnZXQudG9kb3MuZm9yRWFjaCggdG9kbyA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3QudGV4dENvbnRlbnQgPSB0b2RvLmNvbnRlbnQ7XG4gICAgICBkYXRhQmxvY2suYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgfSlcbiAgICByZXR1cm4gZGF0YUJsb2NrO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRvZG9zLCBcbiAgICBjcmVhdGVJbmJveFRvZG9zLFxuICAgIGNyZWF0ZVByb2plY3RUb2Rvc1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93VG9kb3M7IiwiaW1wb3J0IHNob3dUb2RvcyBmcm9tIFwiLi9zaG93VG9kb3NcIjtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9ICggZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTm90aWZpY2F0aW9uVGV4dCgpKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVBY3Rpb25zKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25UZXh0KCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0Jyk7XG4gICAgYWxlcnQudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlPyBEZWxldGluZyBwcm9qZWN0IHdpbGwgZGVsZXRlIGFsbCB0b2RvcyBiZWxvbmcgdG8gaXQhJztcbiAgICByZXR1cm4gYWxlcnQ7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQWN0aW9ucygpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVDYW5jZWxCdG4oKSk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVBZ3JlZUJ0bigpKTtcbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVDYW5jZWxCdG4oKSB7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ05vJztcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQnRuQWN0aW9uKTtcbiAgICByZXR1cm4gY2FuY2VsO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUFncmVlQnRuKCkge1xuICAgIGNvbnN0IGFncmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWdyZWUudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgICBhZ3JlZS5jbGFzc0xpc3QuYWRkKCdhZ3JlZScpO1xuICAgIGFncmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWdyZWVCdG5BY3Rpb24pO1xuICAgIHJldHVybiBhZ3JlZTtcbiAgfVxuICBmdW5jdGlvbiBjYW5jZWxCdG5BY3Rpb24oZSkge1xuICAgIHRoaXMuY2xvc2VzdCgnLm1vZGFsQ29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluJyk7XG4gICAgdGhpcy5jbG9zZXN0KCcubW9kYWxDb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0Jyk7XG4gICAgLy8gKHJlbW92ZVBvcFVwLmJpbmQodGhpcykpKCk7XG4gICAgdGhpcy5jbG9zZXN0KCcubW9kYWxDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgKHJlbW92ZVBvcFVwLmJpbmQodGhpcykpKCk7XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBhZ3JlZUJ0bkFjdGlvbihlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSByZXRyaWV2ZUxvY2FsU3RvcmFnZSgnYWxsUHJvamVjdHMnKTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNsb3Nlc3QoJy5saXN0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwYXJlbnQuZmlyc3RDaGlsZC5pZCk7XG4gICAgYWxsUHJvamVjdHMuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpO1xuICAgIFxuICAgIChyZW1vdmVQb3BVcC5iaW5kKHRoaXMpKSgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVBvcFVwKGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNsb3Nlc3QoJy5saXN0Q29udGFpbmVyJyk7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cCgpKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmV0cmlldmVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZVByb2plY3QsXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBzaG93VG9kb3MgZnJvbSBcIi4vc2hvd1RvZG9zXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG4oIGZ1bmN0aW9uIHRvZG9BcHAoKSB7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBfaW5pdCgpO1xuXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCdKdXN0RG9JdCcpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgZGF0YVBhbmVsLmFwcGVuZENoaWxkKHNob3dUb2Rvcy5jcmVhdGVJbmJveFRvZG9zKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCdaYWNoYXJ5IFRydW9uZycpKTtcbiAgfVxuXG59KSgpOyIsImltcG9ydCBzaG93VG9kb3MgZnJvbSBcIi4vc2hvd1RvZG9zXCI7XG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tIFwiLi9kZWxldGVQcm9qZWN0XCI7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSBmdW5jdGlvbigpIHtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBjb250cm9sUGFuZWwgPSBjcmVhdGVDb250cm9sUGFuZWwoKTtcbiAgY29uc3QgZGF0YVBhbmVsID0gY3JlYXRlRGF0YVBhbmVsKCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkYXRhUGFuZWwpO1xuXG4gIGNvbnN0IGluYm94ID0gY3JlYXRlSW5ib3goKTtcbiAgY29uc3QgaW5ib3hUaXRsZSA9IGNyZWF0ZUluYm94VGl0bGUoKTtcbiAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG4gIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChpbmJveCk7XG4gIFxuICBjb25zdCBwcm9qZWN0c0Jsb2NrID0gY3JlYXRlUHJvamVjdHNCbG9jaygpO1xuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gY3JlYXRlUHJvamVjdHNUaXRsZSgpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RzTGlzdCgpO1xuICBwcm9qZWN0c0Jsb2NrLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICBwcm9qZWN0c0Jsb2NrLmFwcGVuZENoaWxkKGFsbFByb2plY3RzKTtcblxuICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdHNCbG9jayk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29udHJvbFBhbmVsKCkge1xuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xQYW5lbC5pZCA9ICdjb250cm9sUGFuZWwnO1xuICAgIHJldHVybiBjb250cm9sUGFuZWw7XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZURhdGFQYW5lbCgpIHtcbiAgICBjb25zdCBkYXRhUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRhUGFuZWwuaWQgPSAnZGF0YVBhbmVsJztcbiAgICByZXR1cm4gZGF0YVBhbmVsO1xuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVJbmJveCgpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmNsYXNzTGlzdC5hZGQoJ2luYm94Jyk7XG4gICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb3MuZGlzcGxheVRvZG9zKTtcbiAgICByZXR1cm4gaW5ib3g7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSW5ib3hUaXRsZSgpIHtcbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGluYm94VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICAgIGluYm94VGl0bGUuaWQgPSAnSW5ib3gnO1xuICAgIHJldHVybiBpbmJveFRpdGxlO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzQmxvY2soKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c1RpdGxlKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XG4gICAgcmV0dXJuIHByb2plY3RzVGl0bGU7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNMaXN0KCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0WyduYW1lJ107XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIGNvbnRlbnQuaWQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG9zLmRpc3BsYXlUb2Rvcyk7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1jaXJjbGUtbWludXMnKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0LmRlbGV0ZVByb2plY3QpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbiAgfVxuXG4gIHJldHVybiBtYWluO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluOyIsImNvbnN0IGNyZWF0ZUZvb3RlciA9IGZ1bmN0aW9uKGF1dGhvcikge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBgwqkgYnkgJHthdXRob3J9YDtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7Il0sIm5hbWVzIjpbImFsbFByb2plY3RzIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvZG9zIiwidGhpcyIsInRvZG8iLCJjb250ZW50IiwiY2xlYW5pbmciLCJsYXVuZHJ5Iiwic2hvcHBpbmciLCJwdXNoIiwic3dlZXBpbmciLCJ2YWN1dW0iLCJ3YXNoaW5nIiwibmVja2xhY2UiLCJ3YXNoIiwiZHJ5IiwidHlwZSIsInN0b3JhZ2UiLCJ3aW5kb3ciLCJ4Iiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlIiwiRE9NRXhjZXB0aW9uIiwiY29kZSIsImxlbmd0aCIsInN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjcmVhdGVJbmJveFRvZG9zIiwicGFyc2UiLCJnZXRJdGVtIiwiZGF0YUJsb2NrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInByb2plY3QiLCJsaXN0IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVByb2plY3RUb2RvcyIsImZpbmQiLCJ0YXJnZXQiLCJpZCIsImRpc3BsYXlUb2RvcyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsInNldEFjdGl2ZVByb2plY3QiLCJkYXRhUGFuZWwiLCJpbm5lckhUTUwiLCJjYW5jZWxCdG5BY3Rpb24iLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZVBvcFVwIiwiYmluZCIsImFncmVlQnRuQWN0aW9uIiwicGFyZW50IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJmaXJzdENoaWxkIiwiZGF0YSIsInNwbGljZSIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiZGVsZXRlUHJvamVjdCIsInBhcmVudEVsZW1lbnQiLCJjb250YWluZXIiLCJtb2RhbCIsImFsZXJ0IiwiY3JlYXRlTm90aWZpY2F0aW9uVGV4dCIsImFjdGlvbnMiLCJjYW5jZWwiLCJjcmVhdGVDYW5jZWxCdG4iLCJhZ3JlZSIsImNyZWF0ZUFncmVlQnRuIiwiY3JlYXRlQWN0aW9ucyIsImNyZWF0ZVBvcHVwIiwic2l0ZVRpdGxlIiwiaGVhZGVyIiwidGl0bGUiLCJtYWluIiwiY29udHJvbFBhbmVsIiwiY3JlYXRlQ29udHJvbFBhbmVsIiwiY3JlYXRlRGF0YVBhbmVsIiwiaW5ib3giLCJjcmVhdGVJbmJveCIsImluYm94VGl0bGUiLCJjcmVhdGVJbmJveFRpdGxlIiwicHJvamVjdHNCbG9jayIsInByb2plY3RzIiwiY3JlYXRlUHJvamVjdHNCbG9jayIsInByb2plY3RzVGl0bGUiLCJjcmVhdGVQcm9qZWN0c1RpdGxlIiwicHJvamVjdHNDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwiY3JlYXRlUHJvamVjdHNMaXN0IiwiYXV0aG9yIiwiZm9vdGVyIiwicGFyYSJdLCJzb3VyY2VSb290IjoiIn0=