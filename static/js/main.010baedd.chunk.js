(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){t.exports=n(34)},22:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(15),r=n.n(s),i=(n(22),n(2)),c=n(3),l=n(5),u=n(4),p=n(6),h=n(36),m=n(38),d=n(37),f=(n(11),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",null,"React Project - Users"))}}]),e}(a.Component)),b=(n(12),n(26),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).goToToDo=function(){t.props.todoRoute(t.props.player.id)},t.goToPost=function(){t.props.postRoute(t.props.player.id)},t}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("li",{className:"item"},o.a.createElement("div",{className:"item-container"},o.a.createElement("h1",null,this.props.player.name),o.a.createElement("p",null,this.props.player.email)),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{onClick:this.goToToDo,className:"button button-edit"},"ToDos"),o.a.createElement("button",{onClick:this.goToPost,className:"button button-edit"},"Posts")))}}]),e}(a.Component));b.defaultProps={player:{name:"Unknown",position:"Sixth Man",id:0}};var j=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("ul",{className:"split list-container"},this.props.list.map(function(e){return o.a.createElement(b,{key:e.id,player:e,todoRoute:t.props.todoRoute,postRoute:t.props.postRoute})}))}}]),e}(a.Component),E=(n(28),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).finishLoading=function(){setTimeout(function(){t.setState({loading:!1})},1e3)},t.goToToDos=function(e){t.props.history.push("/todos/".concat(e))},t.goToPosts=function(e){t.props.history.push("/posts/".concat(e))},t.buildList=function(e){console.log(JSON.stringify(e),null,"\n"),t.setState({list:e,error:null}),t.finishLoading()},t.state={list:[],loading:!0,error:null},t}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users/").then(function(t){return t.json()}).then(this.buildList).catch(function(e){t.setState({error:e}),t.setState({loading:!1})})}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(f,null),this.state.loading&&o.a.createElement("h1",{className:"loading"},"Loading Users..."),!this.state.loading&&o.a.createElement(j,{list:this.state.list,todoRoute:this.goToToDos,postRoute:this.goToPosts}))}}]),e}(a.Component)),g=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Path does not exist in this timeline"))}}]),e}(a.Component),O=(n(14),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("li",{className:"itemTodo"},o.a.createElement("div",{className:"todo-container"},o.a.createElement("h1",null,this.props.todo.title),o.a.createElement("p",null,"Task Status: ",this.props.todo.complete?"Completed":"Pending")),o.a.createElement("div",{className:"id-container"},o.a.createElement("p",null,"UserID: ",this.props.todo.userId)))}}]),e}(a.Component));function v(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",null,"React Project - ToDo(s)"))}var y=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).finishLoading=function(){setTimeout(function(){t.setState({loading:!1})},1e3)},t.buildList=function(e){console.log(JSON.stringify(e),null,"\n"),t.setState({list:e,error:null}),t.finishLoading()},t.state={list:[],loading:!0,error:null},t}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e="https://jsonplaceholder.typicode.com/todos?userId=".concat(this.props.match.params.userID);fetch(e).then(function(t){return t.json()}).then(this.buildList).catch(function(e){t.setState({error:e}),t.setState({loading:!1})}),console.log(this.props.match.params.userID)}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(v,null),this.state.loading&&o.a.createElement("h1",{className:"loading"},"Loading ToDo(s)..."),!this.state.loading&&!this.props.match.params.userID&&o.a.createElement("h1",null,"Please provide a user ID"),!this.state.loading&&this.props.match.params.userID&&o.a.createElement("ul",{className:"split list-container"},this.state.list.map(function(t){return o.a.createElement(O,{key:t.id,todo:t})})))}}]),e}(a.Component),k=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("li",{className:"itemTodo"},o.a.createElement("div",{className:"todo-container"},o.a.createElement("h1",null,this.props.post.title),o.a.createElement("p",null,this.props.post.body)),o.a.createElement("div",{className:"id-container"},o.a.createElement("p",null,"UserID: ",this.props.post.userId)))}}]),e}(a.Component);function D(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",null,"React Project - Post(s)"))}var N=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).finishLoading=function(){setTimeout(function(){t.setState({loading:!1})},1e3)},t.buildList=function(e){console.log(JSON.stringify(e),null,"\n"),t.setState({list:e,error:null}),t.finishLoading()},t.state={list:[],loading:!0,error:null},t}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e="https://jsonplaceholder.typicode.com/posts?userId=".concat(this.props.match.params.userID);fetch(e).then(function(t){return t.json()}).then(this.buildList).catch(function(e){t.setState({error:e}),t.setState({loading:!1})}),console.log(this.props.match.params.userID)}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(D,null),this.state.loading&&o.a.createElement("h1",{className:"loading"},"Loading Post(s)..."),!this.state.loading&&!this.props.match.params.userID&&o.a.createElement("h1",null,"Please provide a user ID"),!this.state.loading&&this.props.match.params.userID&&o.a.createElement("ul",{className:"split list-container"},this.state.list.map(function(t){return o.a.createElement(k,{key:t.id,post:t})})))}}]),e}(a.Component),T=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:E}),o.a.createElement(d.a,{exact:!0,path:"/users",component:E}),o.a.createElement(d.a,{exact:!0,path:"/todos/",component:y}),o.a.createElement(d.a,{path:"/todos/:userID",component:y}),o.a.createElement(d.a,{exact:!0,path:"/posts/",component:N}),o.a.createElement(d.a,{path:"/posts/:userID",component:N}),o.a.createElement(d.a,{component:g})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.010baedd.chunk.js.map