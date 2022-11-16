(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 4.5fr;\n    grid-template-rows: min-content 1fr;\n    min-height: 100vh;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton {\n    border: none;\n    padding: 0.5rem 1.75rem;\n    border-radius: 1rem;\n    display: block;\n}\n\nli {\n    list-style-type: none;   \n    margin-top: 1rem;\n}\n\n#header {\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n}\n\n#corner {\n    display: flex;\n    align-items: center;\n}\n\n#corner > *:first-child {\n    margin-right: 1rem;\n}\n\n\n#sidebar {\n    padding: 2rem 1rem 1rem 1rem;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: min-content;\n    grid-auto-rows: min-content;\n    row-gap: 1rem;\n}\n\n.span-icon {\n    display: flex;\n    justify-content: space-between;\n}\n\nli > button {\n    width: 100%;\n}\n\n.task {\n    margin: 0 1rem 0 1rem;\n    padding: 1.25rem;\n    border-bottom: 1px solid grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n.task > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n}\n\n.task-description {\n    flex: 1\n}\n\n.task-toggle {\n    width: 1.5rem;\n    height: 1.5rem;\n    background-color: white;\n    border: 1px solid grey;\n    border-radius: 50%;\n}\n\n#content .task:last-child {\n    border: none;\n}\n\n.icon {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\nform.form-new-task {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 1rem 2rem;\n    border-left: 6px solid black;\n}\n\n#project-name-input {\n    margin-top: 1rem;\n}\n\n.form-element {\n    display: flex;\n    flex-direction: column;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(28),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"8d317290131028fe10cf.svg",g=t.p+"bde675c38d54979f589e.svg";function h(){return{getProjects:()=>[...document.querySelector("#project-list").children].map((e=>e.innerText)),inputNewProject:()=>{const e=document.querySelector("#project-list"),n=document.createElement("form");n.classList.add("form-new-project"),n.innerHTML='<input id="project-name-input" type="text">',e.appendChild(n),n.addEventListener("submit",(t=>{t.preventDefault(),((e,n)=>{const t=document.createElement("li");t.innerHTML=`<span>${e}</span>`,n.appendChild(t)})(document.getElementById("project-name-input").value,e),n.remove()}))}}}function y(){const e=[];return{getTaskList:()=>e,addTask:n=>e.push(n)}}const b=y(),w=h(),x=function(){const e=()=>document.getElementById("content");let n=!1;return{inputNewTask:()=>{if(n)return;n=!0;const t=e(),r=document.createElement("form");r.classList.add("form-new-task"),r.innerHTML=`\n            <div class="form-element">\n                <label for="title">Title:</label>\n                <input type="text" id="title">\n            </div>\n            \n            <div class="form-element">\n                <label for="description">Description</label>\n                <input type="text" id="description">\n            </div>\n\n            <div class="form-element">\n                <label for="project">Project:</label>\n                <select name="project" id="project">\n                    ${(()=>{const e=w.getProjects();let n='<option value="none"></option>';return e.forEach((e=>{n+=`<option value="${e}">${e}</option>`})),n})()}\n                </select>\n            </div>\n\n            <div class="form-element">\n                <label for="due-date">Due date:</label>\n                <input type="date" id="due-date">\n            </div>\n\n            <button id="add-task-submit">Add</button>\n        `,t.appendChild(r),document.getElementById("add-task-submit").addEventListener("click",(t=>{t.preventDefault(),n=!1,(n=>{b.addTask(n);const t=e(),r=document.createElement("div");r.classList.add("task"),r.innerHTML=`\n            <span class="task-toggle"></span>\n            <h3 class="task-title">${n.title}</h3>\n            <p class="task-description">${n.description}</p>\n            <p class="task-project">${n.project}</p>\n            <p class="task-due-date">${n.dueDate}</p>\n            <img class="icon" src="${v}">\n            <img class="icon" src="${g}">\n        `,t.appendChild(r)})({title:document.getElementById("title").value,description:document.getElementById("description").value,project:document.getElementById("project").value,dueDate:document.getElementById("due-date").value}),r.remove()}))}}}(),j=(y(),h());document.querySelector("#add-task").addEventListener("click",x.inputNewTask),document.querySelector("#add-project").addEventListener("click",j.inputNewProject)})()})();