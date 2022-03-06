(()=>{var e={471:()=>{!function(){const e=[];class t{constructor(e,t){this.name=e,this.todos=t}}class n{constructor(e){this.content=e}}const a=new t("Cleaning",[]),o=new t("Laundry",[]),c=new t("Shopping",[]);e.push(a),e.push(o),e.push(c);const d=new n("Sweeping the floor."),s=new n("Vacuuming the floor."),i=new n("Washing the filter."),r=new n("Buy new necklace."),l=new n("Put clothes in washer machine."),u=new n("Put clothes in dryer.");a.todos.push(d),a.todos.push(s),a.todos.push(i),o.todos.push(l),o.todos.push(u),c.todos.push(r),function(e){var t;try{t=window.localStorage;var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()&&localStorage.setItem("allProjects",JSON.stringify(e))}()}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}(()=>{"use strict";const e=function(){function e(){const e=JSON.parse(localStorage.getItem("allProjects")),t=document.createElement("ul");return t.classList.add("todos"),e.forEach((e=>{e.todos.forEach((e=>{const n=document.createElement("li");n.textContent=e.content,t.appendChild(n)}))})),t}function t(e){const t=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("todos"),t.find((t=>t.name===e.target.id)).todos.forEach((e=>{const t=document.createElement("li");t.textContent=e.content,n.appendChild(t)})),n}return{displayTodos:function(n){!function(e){const t=Array.from(document.getElementsByClassName("project")),n=document.getElementById(`${e.target.id}`);t.forEach((e=>{e.classList.remove("active")})),n.classList.add("active")}(n),dataPanel.innerHTML="","Inbox"===n.target.id?dataPanel.appendChild(e()):dataPanel.appendChild(t(n))},createInboxTodos:e,createProjectTodos:t}}(),t=function(){function t(e){const t=this.closest(".modalContainer");t.classList.remove("fadeIn"),t.classList.add("fadeOut"),t.addEventListener("animationend",(()=>{t.remove()}))}function n(n){const o=JSON.parse(localStorage.getItem("allProjects")),c=this.closest(".listContainer"),d=this.closest(".projects"),s=this.closest(".projectsContainer"),i=o.findIndex((e=>e.name===c.firstChild.id));var r;o.splice(i,1),r=o,localStorage.setItem("allProjects",JSON.stringify(r)),function(e){const t=Array.from(document.getElementsByClassName("project")),n=document.getElementById("Inbox");t.forEach((e=>{e.classList.remove("active")})),n.classList.add("active")}(),dataPanel.innerHTML="",s.remove(),d.appendChild(function(){const t=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("projectsContainer"),t.forEach((t=>{const o=document.createElement("li");o.classList.add("listContainer");const c=document.createElement("span");c.textContent=t.name,c.classList.add("project"),c.id=t.name,c.addEventListener("click",e.displayTodos);const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-circle-minus"),d.addEventListener("click",a),n.appendChild(o),o.appendChild(c),o.appendChild(d)})),n}()),dataPanel.appendChild(e.createInboxTodos()),t.bind(this)()}function a(e){this.parentElement.appendChild(function(){const e=document.createElement("div");e.classList.add("modalContainer"),e.classList.add("fadeIn");const a=document.createElement("div");return a.classList.add("modal"),a.appendChild(function(){const e=document.createElement("p");return e.classList.add("alert"),e.textContent="Are you sure? Deleting project will delete all todos belong to it!",e}()),a.appendChild(function(){const e=document.createElement("div");return e.classList.add("actions"),e.appendChild(function(){const e=document.createElement("button");return e.textContent="No",e.classList.add("cancel"),e.addEventListener("click",t),e}()),e.appendChild(function(){const e=document.createElement("button");return e.textContent="Yes",e.classList.add("agree"),e.addEventListener("click",n),e}()),e}()),e.appendChild(a),e}())}return{deleteProject:a}}(),a=function(){function e(){}return{addProject:function(t){this.parentElement.appendChild(function(){const t=document.createElement("div");t.classList.add("modalContainer"),t.classList.add("fadeIn");const n=document.createElement("div");return n.classList.add("modal"),document.createElement("p"),n.appendChild(function(){const t=document.createElement("form");t.id="newProjectForm";const n=document.createElement("label");n.setAttribute("for","newProjectName"),n.classList.add("label"),n.textContent="Enter the name for the project:";const a=document.createElement("input");a.id="newProjectName",a.type="text";const o=document.createElement("input");return o.type="submit",o.classList.add("submit"),o.addEventListener("click",e),t.appendChild(n),t.appendChild(a),t.appendChild(o),t}()),t.appendChild(n),t}())}}}();n(471),function(){const n=document.getElementById("content");n.appendChild(function(e){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h2");return n.textContent=e,n.classList.add("siteTitle"),t.appendChild(n),t}("JustDoIt")),n.appendChild(function(){const n=document.createElement("main"),o=function(){const e=document.createElement("div");return e.id="controlPanel",e}(),c=function(){const e=document.createElement("div");return e.id="dataPanel",e}();n.appendChild(o),n.appendChild(c);const d=function(){const t=document.createElement("div");return t.classList.add("inbox"),t.classList.add("border"),t.addEventListener("click",e.displayTodos),t}();d.appendChild(function(){const e=document.createElement("h3");return e.textContent="Inbox",e.classList.add("project"),e.classList.add("active"),e.classList.add("projectHeader"),e.id="Inbox",e}()),o.appendChild(d);const s=function(){const e=document.createElement("div");return e.classList.add("projects"),e}();return s.appendChild(function(){const e=document.createElement("h3");return e.textContent="Projects",e.classList.add("projectHeader"),e.classList.add("border"),e}()),s.appendChild(function(){const n=JSON.parse(localStorage.getItem("allProjects")),a=document.createElement("ul");return a.classList.add("projectsContainer"),n.forEach((n=>{const o=document.createElement("li");o.classList.add("listContainer");const c=document.createElement("span");c.textContent=n.name,c.classList.add("project"),c.id=n.name,c.addEventListener("click",e.displayTodos);const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-circle-minus"),d.addEventListener("click",t.deleteProject),a.appendChild(o),o.appendChild(c),o.appendChild(d)})),a}()),s.appendChild(function(){const e=document.createElement("div");e.classList.add("newProjectContainer");const t=document.createElement("button");return t.textContent="NEW PROJECT",t.classList.add("newProjectBtn"),t.addEventListener("click",a.addProject),e.appendChild(t),e}()),o.appendChild(s),n}()),dataPanel.appendChild(e.createInboxTodos()),n.appendChild(function(e){const t=document.createElement("footer");t.classList.add("footer");const n=document.createElement("p");return n.textContent=`© by ${e}`,n.classList.add("copyright"),t.appendChild(n),t}("Zachary Truong"))}()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUVaUCxFQS9EaUJTLElBQzFCaUMsRUFBYy9ELFlBZ0VkLFdBQ0UsTUFBTW9FLEVBQU01RSxTQUFTQyxjQUFjLE9BQ25DMkUsRUFBSTFFLFVBQVVDLElBQUksdUJBQ2xCLE1BQU0wRSxFQUFNN0UsU0FBU0MsY0FBYyxVQUtuQyxPQUpBNEUsRUFBSXRFLFlBQWMsY0FDbEJzRSxFQUFJM0UsVUFBVUMsSUFBSSxpQkFDbEIwRSxFQUFJcEQsaUJBQWlCLFFBQVMsRUFBQTRCLFlBQzlCdUIsRUFBSXBFLFlBQVlxRSxHQUNURCxFQXhFaUJFLElBRTFCZCxFQUFheEQsWUFBWStELEdBd0VsQlIsRUQvRWUsSUFDcEIzQyxVQUFVWixZQUFZLHNCQUN0QjdDLEVBQVE2QyxZRWhCUyxTQUFTdUUsR0FDNUIsTUFBTUMsRUFBU2hGLFNBQVNDLGNBQWMsVUFDdEMrRSxFQUFPOUUsVUFBVUMsSUFBSSxVQUVyQixNQUFNOEUsRUFBT2pGLFNBQVNDLGNBQWMsS0FLcEMsT0FKQWdGLEVBQUsxRSxZQUFjLFFBQVF3RSxJQUMzQkUsRUFBSy9FLFVBQVVDLElBQUksYUFFbkI2RSxFQUFPeEUsWUFBWXlFLEdBQ1pELEVGT2UsQ0FBYSxtQkFWckMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL3Nob3dUb2Rvcy5qcyIsIndlYnBhY2s6Ly9qdXN0ZG9pdC8uL3NyYy9kZWxldGVQcm9qZWN0LmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9qdXN0ZG9pdC8uL3NyYy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9ICggZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcbiAgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfVxuICB9XG4gIGNsYXNzIHRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsZWFuaW5nID0gbmV3IFByb2plY3QoJ0NsZWFuaW5nJywgW10pO1xuICBjb25zdCBsYXVuZHJ5ID0gbmV3IFByb2plY3QoJ0xhdW5kcnknLCBbXSk7XG4gIGNvbnN0IHNob3BwaW5nID0gbmV3IFByb2plY3QoJ1Nob3BwaW5nJywgW10pO1xuICBhbGxQcm9qZWN0cy5wdXNoKGNsZWFuaW5nKTtcbiAgYWxsUHJvamVjdHMucHVzaChsYXVuZHJ5KTtcbiAgYWxsUHJvamVjdHMucHVzaChzaG9wcGluZyk7XG5cbiAgY29uc3Qgc3dlZXBpbmcgPSBuZXcgdG9kbygnU3dlZXBpbmcgdGhlIGZsb29yLicpO1xuICBjb25zdCB2YWN1dW0gPSBuZXcgdG9kbygnVmFjdXVtaW5nIHRoZSBmbG9vci4nKTtcbiAgY29uc3Qgd2FzaGluZyA9IG5ldyB0b2RvKCdXYXNoaW5nIHRoZSBmaWx0ZXIuJyk7XG4gIGNvbnN0IG5lY2tsYWNlID0gbmV3IHRvZG8oJ0J1eSBuZXcgbmVja2xhY2UuJyk7XG4gIGNvbnN0IHdhc2ggPSBuZXcgdG9kbygnUHV0IGNsb3RoZXMgaW4gd2FzaGVyIG1hY2hpbmUuJyk7XG4gIGNvbnN0IGRyeSA9IG5ldyB0b2RvKCdQdXQgY2xvdGhlcyBpbiBkcnllci4nKTtcbiAgY2xlYW5pbmcudG9kb3MucHVzaChzd2VlcGluZyk7XG4gIGNsZWFuaW5nLnRvZG9zLnB1c2godmFjdXVtKTtcbiAgY2xlYW5pbmcudG9kb3MucHVzaCh3YXNoaW5nKTtcbiAgbGF1bmRyeS50b2Rvcy5wdXNoKHdhc2gpO1xuICBsYXVuZHJ5LnRvZG9zLnB1c2goZHJ5KTtcbiAgc2hvcHBpbmcudG9kb3MucHVzaChuZWNrbGFjZSk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgfVxuICBlbHNlIHJldHVybjtcblxuICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgICAgICB9XG4gICAgfVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbihzaXRlVGl0bGUpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc2l0ZVRpdGxlO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzaXRlVGl0bGUnKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImNvbnN0IHNob3dUb2RvcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS50YXJnZXQuaWR9YCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfTtcbiAgZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICAgIG5vZGUuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheVRvZG9zKGUpIHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGUpO1xuICAgIGNsZWFyKGRhdGFQYW5lbCk7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnSW5ib3gnKSB7XG4gICAgICBkYXRhUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlSW5ib3hUb2RvcygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YVBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RUb2RvcyhlKSk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVJbmJveFRvZG9zKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XG4gICAgY29uc3QgZGF0YUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBkYXRhQmxvY2suY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCggdG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gdG9kby5jb250ZW50O1xuICAgICAgICBkYXRhQmxvY2suYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFCbG9ja1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUb2RvcyhlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRhdGFCbG9jay5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIGNvbnN0IHRhcmdldCA9IGFsbFByb2plY3RzLmZpbmQoIHByb2plY3QgPT4gcHJvamVjdFsnbmFtZSddID09PSBlLnRhcmdldC5pZCk7XG4gICAgdGFyZ2V0LnRvZG9zLmZvckVhY2goIHRvZG8gPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0LnRleHRDb250ZW50ID0gdG9kby5jb250ZW50O1xuICAgICAgZGF0YUJsb2NrLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFCbG9jaztcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvcywgXG4gICAgY3JlYXRlSW5ib3hUb2RvcyxcbiAgICBjcmVhdGVQcm9qZWN0VG9kb3NcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1RvZG9zOyIsImltcG9ydCBzaG93VG9kb3MgZnJvbSBcIi4vc2hvd1RvZG9zXCI7XG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKCBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY3JlYXRlUG9wdXAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVOb3RpZmljYXRpb25UZXh0KCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZUFjdGlvbnMoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvblRleHQoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKTtcbiAgICBhbGVydC50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmU/IERlbGV0aW5nIHByb2plY3Qgd2lsbCBkZWxldGUgYWxsIHRvZG9zIGJlbG9uZyB0byBpdCEnO1xuICAgIHJldHVybiBhbGVydDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVBY3Rpb25zKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGNyZWF0ZUNhbmNlbEJ0bigpKTtcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGNyZWF0ZUFncmVlQnRuKCkpO1xuICAgIHJldHVybiBhY3Rpb25zO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUNhbmNlbEJ0bigpIHtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnTm8nO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxCdG5BY3Rpb24pO1xuICAgIHJldHVybiBjYW5jZWw7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQWdyZWVCdG4oKSB7XG4gICAgY29uc3QgYWdyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZ3JlZS50ZXh0Q29udGVudCA9ICdZZXMnO1xuICAgIGFncmVlLmNsYXNzTGlzdC5hZGQoJ2FncmVlJyk7XG4gICAgYWdyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZ3JlZUJ0bkFjdGlvbik7XG4gICAgcmV0dXJuIGFncmVlO1xuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbEJ0bkFjdGlvbihlKSB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSB0aGlzLmNsb3Nlc3QoJy5tb2RhbENvbnRhaW5lcicpXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluJyk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZU91dCcpO1xuICAgIG1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gYWdyZWVCdG5BY3Rpb24oZSkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gcmV0cmlldmVMb2NhbFN0b3JhZ2UoJ2FsbFByb2plY3RzJyk7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5jbG9zZXN0KCcubGlzdENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gdGhpcy5jbG9zZXN0KCcucHJvamVjdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IHRoaXMuY2xvc2VzdCgnLnByb2plY3RzQ29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwYXJlbnQuZmlyc3RDaGlsZC5pZCk7XG4gICAgYWxsUHJvamVjdHMuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpO1xuICAgIHNldEFjdGl2ZSgnSW5ib3gnKTtcbiAgICBjbGVhcihkYXRhUGFuZWwpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzTGlzdCgpKTtcbiAgICBkYXRhUGFuZWwuYXBwZW5kQ2hpbGQoc2hvd1RvZG9zLmNyZWF0ZUluYm94VG9kb3MoKSk7XG4gICAgKGNhbmNlbEJ0bkFjdGlvbi5iaW5kKHRoaXMpKSgpO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVQb3B1cCgpKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmV0cmlldmVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKTtcbiAgfVxuICBmdW5jdGlvbiBzZXRBY3RpdmUoaWQpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdCcpKTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfTtcbiAgZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICAgIHJldHVybiBub2RlLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzTGlzdCgpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcHJvamVjdFsnbmFtZSddO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICBjb250ZW50LmlkID0gcHJvamVjdC5uYW1lO1xuICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2Rvcy5kaXNwbGF5VG9kb3MpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZmEtY2lyY2xlLW1pbnVzJyk7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlUHJvamVjdDsiLCJjb25zdCBhZGRQcm9qZWN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVBvcHVwKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0Rm9ybSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ25ld1Byb2plY3RGb3JtJztcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3UHJvamVjdE5hbWUnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIHRoZSBuYW1lIGZvciB0aGUgcHJvamVjdDonO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9ICduZXdQcm9qZWN0TmFtZSc7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9XG4gIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0OyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgc2hvd1RvZG9zIGZyb20gXCIuL3Nob3dUb2Rvc1wiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcblxuKCBmdW5jdGlvbiB0b2RvQXBwKCkge1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgX2luaXQoKTtcblxuICBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcignSnVzdERvSXQnKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGRhdGFQYW5lbC5hcHBlbmRDaGlsZChzaG93VG9kb3MuY3JlYXRlSW5ib3hUb2RvcygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcignWmFjaGFyeSBUcnVvbmcnKSk7XG4gIH1cblxufSkoKTsiLCJpbXBvcnQgc2hvd1RvZG9zIGZyb20gXCIuL3Nob3dUb2Rvc1wiO1xuaW1wb3J0IGRlbGV0ZVByb2plY3QgZnJvbSBcIi4vZGVsZXRlUHJvamVjdFwiO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcblxuY29uc3QgY3JlYXRlTWFpbiA9IGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGNyZWF0ZUNvbnRyb2xQYW5lbCgpO1xuICBjb25zdCBkYXRhUGFuZWwgPSBjcmVhdGVEYXRhUGFuZWwoKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwpO1xuICBtYWluLmFwcGVuZENoaWxkKGRhdGFQYW5lbCk7XG5cbiAgY29uc3QgaW5ib3ggPSBjcmVhdGVJbmJveCgpO1xuICBpbmJveC5hcHBlbmRDaGlsZChjcmVhdGVJbmJveFRpdGxlKCkpO1xuICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICBcbiAgY29uc3QgcHJvamVjdHNCbG9jayA9IGNyZWF0ZVByb2plY3RzQmxvY2soKTtcbiAgcHJvamVjdHNCbG9jay5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c1RpdGxlKCkpO1xuICBwcm9qZWN0c0Jsb2NrLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzTGlzdCgpKTtcbiAgcHJvamVjdHNCbG9jay5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnRuKCkpO1xuXG4gIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0c0Jsb2NrKTtcblxuICBmdW5jdGlvbiBjcmVhdGVDb250cm9sUGFuZWwoKSB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbFBhbmVsLmlkID0gJ2NvbnRyb2xQYW5lbCc7XG4gICAgcmV0dXJuIGNvbnRyb2xQYW5lbDtcbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlRGF0YVBhbmVsKCkge1xuICAgIGNvbnN0IGRhdGFQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGFQYW5lbC5pZCA9ICdkYXRhUGFuZWwnO1xuICAgIHJldHVybiBkYXRhUGFuZWw7XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZUluYm94KCkge1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnaW5ib3gnKTtcbiAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCdib3JkZXInKTtcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2Rvcy5kaXNwbGF5VG9kb3MpO1xuICAgIHJldHVybiBpbmJveDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJbmJveFRpdGxlKCkge1xuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIGluYm94VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGluYm94VGl0bGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaW5ib3hUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVyJyk7XG4gICAgaW5ib3hUaXRsZS5pZCA9ICdJbmJveCc7XG4gICAgcmV0dXJuIGluYm94VGl0bGU7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNCbG9jaygpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzVGl0bGUoKSB7XG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVyJyk7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdib3JkZXInKTtcbiAgICByZXR1cm4gcHJvamVjdHNUaXRsZTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0xpc3QoKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGFpbmVyJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHByb2plY3RbJ25hbWUnXTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgY29udGVudC5pZCA9IHByb2plY3QubmFtZTtcbiAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb3MuZGlzcGxheVRvZG9zKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLWNpcmNsZS1taW51cycpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QuZGVsZXRlUHJvamVjdCk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ05FVyBQUk9KRUNUJztcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEJ0bicpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QuYWRkUHJvamVjdCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuICByZXR1cm4gbWFpbjtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbjsiLCJjb25zdCBjcmVhdGVGb290ZXIgPSBmdW5jdGlvbihhdXRob3IpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhLnRleHRDb250ZW50ID0gYMKpIGJ5ICR7YXV0aG9yfWA7XG4gIHBhcmEuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0Jyk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmEpO1xuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyOyJdLCJuYW1lcyI6WyJhbGxQcm9qZWN0cyIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0b2RvcyIsInRoaXMiLCJ0b2RvIiwiY29udGVudCIsImNsZWFuaW5nIiwibGF1bmRyeSIsInNob3BwaW5nIiwicHVzaCIsInN3ZWVwaW5nIiwidmFjdXVtIiwid2FzaGluZyIsIm5lY2tsYWNlIiwid2FzaCIsImRyeSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJsZW5ndGgiLCJzdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY3JlYXRlSW5ib3hUb2RvcyIsInBhcnNlIiwiZ2V0SXRlbSIsImRhdGFCbG9jayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImZvckVhY2giLCJwcm9qZWN0IiwibGlzdCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQcm9qZWN0VG9kb3MiLCJmaW5kIiwidGFyZ2V0IiwiaWQiLCJkaXNwbGF5VG9kb3MiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJzZXRBY3RpdmVQcm9qZWN0IiwiZGF0YVBhbmVsIiwiaW5uZXJIVE1MIiwiY2FuY2VsQnRuQWN0aW9uIiwibW9kYWxDb250YWluZXIiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFncmVlQnRuQWN0aW9uIiwicGFyZW50IiwicHJvamVjdHNEaXYiLCJwcm9qZWN0c0NvbnRhaW5lciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwiZmlyc3RDaGlsZCIsImRhdGEiLCJzcGxpY2UiLCJzZXRBY3RpdmUiLCJkZWxldGVQcm9qZWN0QnRuIiwiZGVsZXRlUHJvamVjdCIsImNyZWF0ZVByb2plY3RzTGlzdCIsImJpbmQiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyIiwibW9kYWwiLCJhbGVydCIsImNyZWF0ZU5vdGlmaWNhdGlvblRleHQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY3JlYXRlQ2FuY2VsQnRuIiwiYWdyZWUiLCJjcmVhdGVBZ3JlZUJ0biIsImNyZWF0ZUFjdGlvbnMiLCJjcmVhdGVQb3B1cCIsImFkZE5ld1Byb2plY3QiLCJhZGRQcm9qZWN0IiwiZm9ybSIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwiaW5wdXQiLCJzdWJtaXQiLCJjcmVhdGVOZXdQcm9qZWN0Rm9ybSIsInNpdGVUaXRsZSIsImhlYWRlciIsInRpdGxlIiwibWFpbiIsImNvbnRyb2xQYW5lbCIsImNyZWF0ZUNvbnRyb2xQYW5lbCIsImNyZWF0ZURhdGFQYW5lbCIsImluYm94IiwiY3JlYXRlSW5ib3giLCJpbmJveFRpdGxlIiwiY3JlYXRlSW5ib3hUaXRsZSIsInByb2plY3RzQmxvY2siLCJwcm9qZWN0cyIsImNyZWF0ZVByb2plY3RzQmxvY2siLCJwcm9qZWN0c1RpdGxlIiwiY3JlYXRlUHJvamVjdHNUaXRsZSIsImRpdiIsImJ0biIsImNyZWF0ZU5ld1Byb2plY3RCdG4iLCJhdXRob3IiLCJmb290ZXIiLCJwYXJhIl0sInNvdXJjZVJvb3QiOiIifQ==