(this["webpackJsonptodo-client"]=this["webpackJsonptodo-client"]||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},20:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),l=n.n(o),r=(n(20),n(3)),i=n(2),u=c.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),c.a.createElement("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}));var m=function(e){var t=e.editedId,n=e.setEditedId,a=e.item,o=e.delTodo,l=function(t){e.updateTodo(t),n({})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{className:"row1 ",onClick:function(){return a._id!==t._id&&n({})}},c.a.createElement("th",null,c.a.createElement("input",{type:"checkbox",checked:a.done,onChange:function(){var t=Object(i.a)(Object(i.a)({},a),{},{done:!a.done});e.updateTodo(t),console.log("item",a),console.log("obj",t)}})),c.a.createElement("td",null,a._id===t._id?c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{className:"form-control",value:t.name,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{name:e.target.value}))}}),c.a.createElement("div",{className:"input-group-append mr-n3"},c.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return l(t)}},"\u2713"),c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return n({})}},"\u2715"))):c.a.createElement("span",{className:a.done?"text-decoration-line-through mr-5":" mr-5",onDoubleClick:function(){return n(a)}},a.name)),c.a.createElement("td",null,a._id===t._id?c.a.createElement("div",{className:"input-group "},c.a.createElement("input",{className:"form-control",value:t.description,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{description:e.target.value}))}}),c.a.createElement("div",{className:"input-group-append mr-n3"},c.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return l(t)}},"\u2713"),c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return n({})}},"\u2715"))):c.a.createElement("span",{className:a.done?"text-decoration-line-through mr-5":" mr-5",onDoubleClick:function(){return n(a)}},a.description)),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return o(a._id)}},u))))};var d=function(e){var t={name:"",description:""},n=Object(a.useState)(t),o=Object(r.a)(n,2),l=o[0],u=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{className:"table-active"},c.a.createElement("th",null),c.a.createElement("td",null,c.a.createElement("input",{type:"text",className:"form-control ",placeholder:"Name",value:l.name,onChange:function(e){return u(Object(i.a)(Object(i.a)({},l),{},{name:e.target.value}))}})),c.a.createElement("td",null,c.a.createElement("input",{type:"text",className:"form-control ",placeholder:"Description",value:l.description,onChange:function(e){return u(Object(i.a)(Object(i.a)({},l),{},{description:e.target.value}))}})),c.a.createElement("td",null,c.a.createElement("button",{type:"submit",className:"btn btn-primary ",onClick:function(n){n.preventDefault(),""!==l.name&&""!==l.description&&e.createTodo(l),u(t)},disabled:""===l.name||""===l.description},"Create"))))};var s=function(e){var t=Object(a.useState)({_id:"",name:"name"}),n=Object(r.a)(t,2),o=n[0],l=n[1];return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement(d,{createTodo:e.createTodo}),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Done"),c.a.createElement("th",{scope:"col"},"Name ",c.a.createElement("span",null,c.a.createElement("i",null,c.a.createElement("small",null," (double click to edit)")))),c.a.createElement("th",{scope:"col"},"Description ",c.a.createElement("span",null,c.a.createElement("i",null,c.a.createElement("small",null," (double click to edit)")))),c.a.createElement("th",{scope:"col"},"Delete"))),c.a.createElement("tbody",null,e.list.map((function(t){return c.a.createElement(m,{key:t._id,item:t,updateTodo:e.updateTodo,delTodo:e.delTodo,editedId:o,setEditedId:l})}))))},p=n(4),E=n.n(p),h="http://localhost:5000/todo";var b=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],l=function(){E()({method:"get",url:h}).then((function(e){o(e.data)}))};return Object(a.useEffect)((function(){l()}),[]),c.a.createElement("div",{className:"container mt-3"},c.a.createElement(s,{list:n,updateTodo:function(e){E()({method:"patch",url:"".concat(h,"/").concat(e._id),data:{name:e.name,description:e.description,done:e.done}}).then((function(){return l()}))},delTodo:function(e){E()({method:"delete",url:"".concat(h,"/").concat(e)}).then((function(){return l()}))},createTodo:function(e){E()({method:"post",url:"".concat(h),data:{name:e.name,description:e.description}}).then((function(){return l()}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(38);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e80b58b9.chunk.js.map