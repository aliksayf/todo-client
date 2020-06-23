(this["webpackJsonptodo-client"]=this["webpackJsonptodo-client"]||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},20:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),l=(n(20),n(3)),i=n(2);var u=function(e){var t={name:"",description:""},n=Object(a.useState)(t),c=Object(l.a)(n,2),r=c[0],u=c[1];return o.a.createElement("div",{className:"form-group form-row"},o.a.createElement("input",{type:"text",className:"form-control col-3 ",placeholder:"Name",value:r.name,onChange:function(e){return u(Object(i.a)(Object(i.a)({},r),{},{name:e.target.value}))}}),o.a.createElement("input",{type:"text",className:"form-control col-5 ",placeholder:"Description",value:r.description,onChange:function(e){return u(Object(i.a)(Object(i.a)({},r),{},{description:e.target.value}))}}),o.a.createElement("button",{type:"submit",className:"btn btn-primary ",onClick:function(n){n.preventDefault(),""!==r.name&&""!==r.description&&e.createTodo(r),u(t)},disabled:""===r.name||""===r.description},"Create"))},m=o.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}));var d=function(e){var t=e.editedId,n=e.setEditedId,a=e.item,c=e.delTodo,r=function(t){e.updateTodo(t),n({})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",{className:"row1 ",onClick:function(){return a._id!==t._id&&n({})}},o.a.createElement("th",null,o.a.createElement("input",{type:"checkbox",checked:a.done,onChange:function(){var t=Object(i.a)(Object(i.a)({},a),{},{done:!a.done});e.updateTodo(t),console.log("item",a),console.log("obj",t)}})),o.a.createElement("td",null,a._id===t._id?o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{className:"form-control",value:t.name,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{name:e.target.value}))}}),o.a.createElement("div",{className:"input-group-append mr-n3"},o.a.createElement("button",{onClick:function(){return r(t)}},"\u2714"),o.a.createElement("button",{onClick:function(){return n({})}},"\u2716"))):o.a.createElement("span",{className:a.done?"text-decoration-line-through mr-5":" mr-5",onDoubleClick:function(){return n(a)}},a.name)),o.a.createElement("td",null,a._id===t._id?o.a.createElement("div",{className:"input-group "},o.a.createElement("input",{className:"form-control",value:t.description,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{description:e.target.value}))}}),o.a.createElement("div",{className:"input-group-append mr-n3"},o.a.createElement("button",{onClick:function(){return r(t)}},"\u2714"),o.a.createElement("button",{onClick:function(){return n({})}},"\u2716"))):o.a.createElement("span",{className:a.done?"text-decoration-line-through mr-5":" mr-5",onDoubleClick:function(){return n(a)}},a.description)),o.a.createElement("td",null,o.a.createElement("span",{className:"ml-2",onClick:function(){return c(a._id)}},m))))};var s=function(e){var t=Object(a.useState)({_id:"",name:"name"}),n=Object(l.a)(t,2),c=n[0],r=n[1];return o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Done"),o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Description"),o.a.createElement("th",{scope:"col"},"Delete"))),o.a.createElement("tbody",null,e.list.map((function(t){return o.a.createElement(d,{key:t._id,item:t,updateTodo:e.updateTodo,delTodo:e.delTodo,editedId:c,setEditedId:r})}))))},p=n(4),h=n.n(p),E="http://localhost:5000/todo";var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=function(){h()({method:"get",url:E}).then((function(e){c(e.data)}))};return Object(a.useEffect)((function(){r()}),[]),o.a.createElement("div",{className:"container"},o.a.createElement(u,{createTodo:function(e){h()({method:"post",url:"".concat(E),data:{name:e.name,description:e.description}}).then((function(){return r()}))}}),o.a.createElement(s,{list:n,updateTodo:function(e){h()({method:"patch",url:"".concat(E,"/").concat(e._id),data:{name:e.name,description:e.description,done:e.done}}).then((function(){return r()}))},delTodo:function(e){h()({method:"delete",url:"".concat(E,"/").concat(e)}).then((function(){return r()}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(38);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bc89548d.chunk.js.map