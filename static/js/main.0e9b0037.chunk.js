(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(22),a(12)),s=a(13),m=a(16),i=a(15),u=a(14),h=a.n(u),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",employees:[]},e.handleSubmit=function(t){t.preventDefault(),console.log("input",t.target.value);var a=e.state.employees_orig.filter((function(e){return e.name.first.toLowerCase().startsWith(t.target.value.toLowerCase())}));e.setState({employees:a})},e.handleFilter=function(e){e.preventDefault(),console.log("input",e.target.getAttribute("column"))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=10").then((function(t){console.log(t.data.results),e.setState({employees:t.data.results}),e.state.employees_orig=t.data.results}))}},{key:"render",value:function(){var e=this.state.employees,t=e.length?e.map((function(e){return console.log(e),l.a.createElement("tr",{key:e.email},l.a.createElement("th",{scope:"row"},l.a.createElement("img",{src:e.picture.thumbnail})),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone))})):l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"No Employee Information Available at this time"));return console.log("employees: ",t),l.a.createElement("div",null,l.a.createElement("form",{className:"jumbotron form-group"},l.a.createElement("center",null,l.a.createElement("h1",{className:"display-4"},"Employee Directory"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("input",{type:"text",className:"form-control",id:"filterName",placeholder:"Filter By First Name",onChange:this.handleSubmit}),l.a.createElement("br",null))),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Image"),l.a.createElement("th",{onClick:this.handleFilter,column:"name.first",scope:"col"},"First Name"),l.a.createElement("th",{onClick:this.handleFilter,column:"name.last",scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"Phone"))),l.a.createElement("tbody",null,t)))}}]),a}(n.Component);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0e9b0037.chunk.js.map