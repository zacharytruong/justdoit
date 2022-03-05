(()=>{var t={471:()=>{!function(){const t=[];class e{constructor(t,e){this.name=t,this.todos=e}}class n{constructor(t){this.content=t}}const o=new e("Cleaning",[]),c=new e("Laundry",[]),a=new e("Shopping",[]);t.push(o),t.push(c),t.push(a);const d=new n("Sweeping the floor."),s=new n("Vacuuming the floor."),r=new n("Washing the filter."),i=new n("Buy new necklace."),l=new n("Put clothes in washer machine."),u=new n("Put clothes in dryer.");o.todos.push(d),o.todos.push(s),o.todos.push(r),c.todos.push(l),c.todos.push(u),a.todos.push(i),function(t){var e;try{e=window.localStorage;var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}()&&localStorage.setItem("allProjects",JSON.stringify(t))}()}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";const t=function(){function t(t){const e=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("todos"),e.forEach((t=>{t.todos.forEach((t=>{const e=document.createElement("li");e.textContent=t.content,n.appendChild(e)}))})),n}return{displayTodos:function(e){!function(t){const e=Array.from(document.getElementsByClassName("project")),n=document.getElementById(`${t.target.id}`);e.forEach((t=>{t.classList.remove("active")})),n.classList.add("active")}(e),dataPanel.innerHTML="","Inbox"===e.target.id?dataPanel.appendChild(t()):dataPanel.appendChild(function(t){const e=JSON.parse(localStorage.getItem("allProjects")),n=document.createElement("ul");return n.classList.add("todos"),e.find((e=>e.name===t.target.id)).todos.forEach((t=>{const e=document.createElement("li");e.textContent=t.content,n.appendChild(e)})),n}(e))},createInboxTodos:t}}(),e={deleteProject:function(){dataPanel.appendChild(function(){const t=document.createElement("div");t.classList.add("modalContainer");const e=document.createElement("div");return e.classList.add("modal"),e.appendChild(function(){const t=document.createElement("p");return t.textContent="Are you sure? Deleting project will delete all todos belong to it!",t}()),e.appendChild(function(){const t=document.createElement("div");return t.classList.add("actions"),t.appendChild(function(){const t=document.createElement("button");return t.textContent="No",t.classList.add("cancel"),t}()),t.appendChild(function(){const t=document.createElement("button");return t.textContent="Yes",t.classList.add("agree"),t}()),t}()),t.appendChild(e),t}())}};n(471),function(){const n=document.getElementById("content");n.appendChild(function(t){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h2");return n.textContent=t,n.classList.add("siteTitle"),e.appendChild(n),e}("JustDoIt")),n.appendChild(function(){const n=document.createElement("main"),o=function(){const t=document.createElement("div");return t.id="controlPanel",t}(),c=function(){const t=document.createElement("div");return t.id="dataPanel",t}();n.appendChild(o),n.appendChild(c);const a=function(){const e=document.createElement("div");return e.classList.add("inbox"),e.classList.add("border"),e.addEventListener("click",t.displayTodos),e}(),d=function(){const t=document.createElement("h3");return t.textContent="Inbox",t.classList.add("project"),t.classList.add("active"),t.classList.add("projectHeader"),t.id="Inbox",t}();a.appendChild(d),o.appendChild(a);const s=function(){const t=document.createElement("div");return t.classList.add("projects"),t}(),r=function(){const t=document.createElement("h3");return t.textContent="Projects",t.classList.add("projectHeader"),t.classList.add("border"),t}(),i=function(){const n=JSON.parse(localStorage.getItem("allProjects")),o=document.createElement("ul");return o.classList.add("projectsContainer"),n.forEach((n=>{const c=document.createElement("li");c.classList.add("listContainer");const a=document.createElement("span");a.textContent=n.name,a.classList.add("project"),a.id=n.name,a.addEventListener("click",t.displayTodos);const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-circle-minus"),d.addEventListener("click",e.deleteProject),o.appendChild(c),c.appendChild(a),c.appendChild(d)})),o}();return s.appendChild(r),s.appendChild(i),o.appendChild(s),n}()),dataPanel.appendChild(t.createInboxTodos()),n.appendChild(function(t){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p");return n.textContent=`© by ${t}`,n.classList.add("copyright"),e.appendChild(n),e}("Zachary Truong"))}()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVGT2UsQ0FBYSxtQkFWckMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL3Nob3dUb2Rvcy5qcyIsIndlYnBhY2s6Ly9qdXN0ZG9pdC8uL3NyYy9kZWxldGVQcm9qZWN0LmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2p1c3Rkb2l0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vanVzdGRvaXQvLi9zcmMvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGFsbFByb2plY3RzID0gW107XG4gIGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9zKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cbiAgfVxuICBjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgfVxuICBjb25zdCBjbGVhbmluZyA9IG5ldyBQcm9qZWN0KCdDbGVhbmluZycsIFtdKTtcbiAgY29uc3QgbGF1bmRyeSA9IG5ldyBQcm9qZWN0KCdMYXVuZHJ5JywgW10pO1xuICBjb25zdCBzaG9wcGluZyA9IG5ldyBQcm9qZWN0KCdTaG9wcGluZycsIFtdKTtcbiAgYWxsUHJvamVjdHMucHVzaChjbGVhbmluZyk7XG4gIGFsbFByb2plY3RzLnB1c2gobGF1bmRyeSk7XG4gIGFsbFByb2plY3RzLnB1c2goc2hvcHBpbmcpO1xuXG4gIGNvbnN0IHN3ZWVwaW5nID0gbmV3IHRvZG8oJ1N3ZWVwaW5nIHRoZSBmbG9vci4nKTtcbiAgY29uc3QgdmFjdXVtID0gbmV3IHRvZG8oJ1ZhY3V1bWluZyB0aGUgZmxvb3IuJyk7XG4gIGNvbnN0IHdhc2hpbmcgPSBuZXcgdG9kbygnV2FzaGluZyB0aGUgZmlsdGVyLicpO1xuICBjb25zdCBuZWNrbGFjZSA9IG5ldyB0b2RvKCdCdXkgbmV3IG5lY2tsYWNlLicpO1xuICBjb25zdCB3YXNoID0gbmV3IHRvZG8oJ1B1dCBjbG90aGVzIGluIHdhc2hlciBtYWNoaW5lLicpO1xuICBjb25zdCBkcnkgPSBuZXcgdG9kbygnUHV0IGNsb3RoZXMgaW4gZHJ5ZXIuJyk7XG4gIGNsZWFuaW5nLnRvZG9zLnB1c2goc3dlZXBpbmcpO1xuICBjbGVhbmluZy50b2Rvcy5wdXNoKHZhY3V1bSk7XG4gIGNsZWFuaW5nLnRvZG9zLnB1c2god2FzaGluZyk7XG4gIGxhdW5kcnkudG9kb3MucHVzaCh3YXNoKTtcbiAgbGF1bmRyeS50b2Rvcy5wdXNoKGRyeSk7XG4gIHNob3BwaW5nLnRvZG9zLnB1c2gobmVja2xhY2UpO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIH1cbiAgZWxzZSByZXR1cm47XG5cbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH1cblxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgY3JlYXRlSGVhZGVyID0gZnVuY3Rpb24oc2l0ZVRpdGxlKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHNpdGVUaXRsZTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnc2l0ZVRpdGxlJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjsiLCJjb25zdCBzaG93VG9kb3MgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QoZSkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JykpO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UudGFyZ2V0LmlkfWApO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG4gIGZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgICBub2RlLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlUb2RvcyhlKSB7XG4gICAgc2V0QWN0aXZlUHJvamVjdChlKTtcbiAgICBjbGVhcihkYXRhUGFuZWwpO1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ0luYm94Jykge1xuICAgICAgZGF0YVBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZUluYm94VG9kb3MoZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFRvZG9zKGUpKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZUluYm94VG9kb3MoZSkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XG4gICAgY29uc3QgZGF0YUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBkYXRhQmxvY2suY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCggdG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gdG9kby5jb250ZW50O1xuICAgICAgICBkYXRhQmxvY2suYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFCbG9ja1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUb2RvcyhlKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRhdGFCbG9jay5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuICAgIGNvbnN0IHRhcmdldCA9IGFsbFByb2plY3RzLmZpbmQoIHByb2plY3QgPT4gcHJvamVjdFsnbmFtZSddID09PSBlLnRhcmdldC5pZCk7XG4gICAgdGFyZ2V0LnRvZG9zLmZvckVhY2goIHRvZG8gPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0LnRleHRDb250ZW50ID0gdG9kby5jb250ZW50O1xuICAgICAgZGF0YUJsb2NrLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFCbG9jaztcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvcywgXG4gICAgY3JlYXRlSW5ib3hUb2Rvc1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93VG9kb3M7IiwiY29uc3QgZGVsZXRlUHJvamVjdCA9ICggZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVOb3RpZmljYXRpb25UZXh0KCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZUFjdGlvbnMoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvblRleHQoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWxlcnQudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlPyBEZWxldGluZyBwcm9qZWN0IHdpbGwgZGVsZXRlIGFsbCB0b2RvcyBiZWxvbmcgdG8gaXQhJztcbiAgICByZXR1cm4gYWxlcnQ7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQWN0aW9ucygpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVDYW5jZWxCdG4oKSk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVBZ3JlZUJ0bigpKTtcbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVDYW5jZWxCdG4oKSB7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ05vJztcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XG4gICAgcmV0dXJuIGNhbmNlbDtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVBZ3JlZUJ0bigpIHtcbiAgICBjb25zdCBhZ3JlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFncmVlLnRleHRDb250ZW50ID0gJ1llcyc7XG4gICAgYWdyZWUuY2xhc3NMaXN0LmFkZCgnYWdyZWUnKTtcbiAgICByZXR1cm4gYWdyZWU7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBkYXRhUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlUG9wdXAoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlbGV0ZVByb2plY3QsXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBzaG93VG9kb3MgZnJvbSBcIi4vc2hvd1RvZG9zXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG4oIGZ1bmN0aW9uIHRvZG9BcHAoKSB7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBfaW5pdCgpO1xuXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCdKdXN0RG9JdCcpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgZGF0YVBhbmVsLmFwcGVuZENoaWxkKHNob3dUb2Rvcy5jcmVhdGVJbmJveFRvZG9zKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCdaYWNoYXJ5IFRydW9uZycpKTtcbiAgfVxuXG59KSgpOyIsImltcG9ydCBzaG93VG9kb3MgZnJvbSBcIi4vc2hvd1RvZG9zXCI7XG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tIFwiLi9kZWxldGVQcm9qZWN0XCI7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSBmdW5jdGlvbigpIHtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBjb250cm9sUGFuZWwgPSBjcmVhdGVDb250cm9sUGFuZWwoKTtcbiAgY29uc3QgZGF0YVBhbmVsID0gY3JlYXRlRGF0YVBhbmVsKCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkYXRhUGFuZWwpO1xuXG4gIGNvbnN0IGluYm94ID0gY3JlYXRlSW5ib3goKTtcbiAgY29uc3QgaW5ib3hUaXRsZSA9IGNyZWF0ZUluYm94VGl0bGUoKTtcbiAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG4gIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChpbmJveCk7XG4gIFxuICBjb25zdCBwcm9qZWN0c0Jsb2NrID0gY3JlYXRlUHJvamVjdHNCbG9jaygpO1xuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gY3JlYXRlUHJvamVjdHNUaXRsZSgpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RzTGlzdCgpO1xuICBwcm9qZWN0c0Jsb2NrLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICBwcm9qZWN0c0Jsb2NrLmFwcGVuZENoaWxkKGFsbFByb2plY3RzKTtcblxuICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQocHJvamVjdHNCbG9jayk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29udHJvbFBhbmVsKCkge1xuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xQYW5lbC5pZCA9ICdjb250cm9sUGFuZWwnO1xuICAgIHJldHVybiBjb250cm9sUGFuZWw7XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZURhdGFQYW5lbCgpIHtcbiAgICBjb25zdCBkYXRhUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRhUGFuZWwuaWQgPSAnZGF0YVBhbmVsJztcbiAgICByZXR1cm4gZGF0YVBhbmVsO1xuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVJbmJveCgpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94LmNsYXNzTGlzdC5hZGQoJ2luYm94Jyk7XG4gICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kb3MuZGlzcGxheVRvZG9zKTtcbiAgICByZXR1cm4gaW5ib3g7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSW5ib3hUaXRsZSgpIHtcbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGluYm94VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICAgIGluYm94VGl0bGUuaWQgPSAnSW5ib3gnO1xuICAgIHJldHVybiBpbmJveFRpdGxlO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzQmxvY2soKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c1RpdGxlKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XG4gICAgcmV0dXJuIHByb2plY3RzVGl0bGU7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNMaXN0KCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0WyduYW1lJ107XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIGNvbnRlbnQuaWQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG9zLmRpc3BsYXlUb2Rvcyk7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1jaXJjbGUtbWludXMnKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0LmRlbGV0ZVByb2plY3QpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbiAgfVxuXG4gIHJldHVybiBtYWluO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluOyIsImNvbnN0IGNyZWF0ZUZvb3RlciA9IGZ1bmN0aW9uKGF1dGhvcikge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBgwqkgYnkgJHthdXRob3J9YDtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7Il0sIm5hbWVzIjpbImFsbFByb2plY3RzIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvZG9zIiwidGhpcyIsInRvZG8iLCJjb250ZW50IiwiY2xlYW5pbmciLCJsYXVuZHJ5Iiwic2hvcHBpbmciLCJwdXNoIiwic3dlZXBpbmciLCJ2YWN1dW0iLCJ3YXNoaW5nIiwibmVja2xhY2UiLCJ3YXNoIiwiZHJ5IiwidHlwZSIsInN0b3JhZ2UiLCJ3aW5kb3ciLCJ4Iiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlIiwiRE9NRXhjZXB0aW9uIiwiY29kZSIsImxlbmd0aCIsInN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjcmVhdGVJbmJveFRvZG9zIiwicGFyc2UiLCJnZXRJdGVtIiwiZGF0YUJsb2NrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInByb2plY3QiLCJsaXN0IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlUb2RvcyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0YXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwicmVtb3ZlIiwic2V0QWN0aXZlUHJvamVjdCIsImRhdGFQYW5lbCIsImlubmVySFRNTCIsImZpbmQiLCJjcmVhdGVQcm9qZWN0VG9kb3MiLCJkZWxldGVQcm9qZWN0IiwiY29udGFpbmVyIiwibW9kYWwiLCJhbGVydCIsImNyZWF0ZU5vdGlmaWNhdGlvblRleHQiLCJhY3Rpb25zIiwiY2FuY2VsIiwiY3JlYXRlQ2FuY2VsQnRuIiwiYWdyZWUiLCJjcmVhdGVBZ3JlZUJ0biIsImNyZWF0ZUFjdGlvbnMiLCJjcmVhdGVQb3B1cCIsInNpdGVUaXRsZSIsImhlYWRlciIsInRpdGxlIiwibWFpbiIsImNvbnRyb2xQYW5lbCIsImNyZWF0ZUNvbnRyb2xQYW5lbCIsImNyZWF0ZURhdGFQYW5lbCIsImluYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUluYm94IiwiaW5ib3hUaXRsZSIsImNyZWF0ZUluYm94VGl0bGUiLCJwcm9qZWN0c0Jsb2NrIiwicHJvamVjdHMiLCJjcmVhdGVQcm9qZWN0c0Jsb2NrIiwicHJvamVjdHNUaXRsZSIsImNyZWF0ZVByb2plY3RzVGl0bGUiLCJwcm9qZWN0c0NvbnRhaW5lciIsImRlbGV0ZVByb2plY3RCdG4iLCJjcmVhdGVQcm9qZWN0c0xpc3QiLCJhdXRob3IiLCJmb290ZXIiLCJwYXJhIl0sInNvdXJjZVJvb3QiOiIifQ==