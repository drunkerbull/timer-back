(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ZAaW:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class s{constructor(n){this.messagesService=n}ngOnInit(){}ngOnDestroy(){this.messagesService.leaveAllRoom()}}class u{}var o=e("pMnS"),i=e("SVse"),r=e("s7LF");class c{constructor(n,l){this.messagesService=n,this.storageService=l,this.rooms=[],this.usersSearch=[],this.currentRoom=null,this.form=new r.g({search:new r.e("")}),this.searchIsEmpty=!0}ngOnInit(){this.messagesService.getRooms(),this.form.get("search").valueChanges.subscribe(n=>{n&&n.length?(this.searchIsEmpty=!1,this.messagesService.getSearchUsers(n)):(this.usersSearch=[],this.searchIsEmpty=!0)}),this.messagesService.onRoom().subscribe(n=>{console.log(n),this.currentRoom=n,this.rooms.filter(n=>n._id===this.currentRoom._id).length||this.rooms.push(this.currentRoom)}),this.messagesService.onRooms().subscribe(n=>{this.rooms=n}),this.messagesService.onSearchUsers().subscribe(n=>{this.usersSearch=n}),this.messagesService.onNotiMessage().subscribe(n=>{this.rooms.map(l=>{l._id===n.room&&(l.read=[n.owner._id])})})}selectUser(n){this.messagesService.selectOrCreateRoom(n),this.form.reset()}selectRoom(n){this.getNewMess(n)&&n.read.push(this.storageService.user._id),this.messagesService.selectRoom(n)}getRoomName(n){return n.name||2!==n.group.length?this.currentRoom.name:n.group.find(n=>n._id!==this.storageService.user._id).nickname}getNewMess(n){return n.read&&0===n.read.filter(n=>n===this.storageService.user._id).length}}var a=e("yFR0");const g=(()=>{class n{constructor(n){this.socketService=n}getSearchUsers(n){this.socketService.emit("searchUsers",n.toLowerCase())}onSearchUsers(){return this.socketService.listen("onSearchUsers")}getRooms(){this.socketService.emit("rooms")}onRooms(){return this.socketService.listen("onRooms")}onRoom(){return this.socketService.listen("onRoom")}selectOrCreateRoom(n){this.socketService.emit("selectOrCreateRoom",n)}onNotiMessage(){return this.socketService.listen("onNotiMessage")}selectRoom(n){this.socketService.emit("selectRoom",n)}sendMessage(n){this.socketService.emit("message",n)}leaveAllRoom(){this.socketService.emit("leaveAllRoom")}}return n.ngInjectableDef=t.Gb({factory:function(){return new n(t.Kb(a.a))},token:n,providedIn:"root"}),n})();var b=e("fbMX"),m=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:25%;border-right:1px solid #000;height:calc(100vh - 76px)}.users-search[_ngcontent-%COMP%]{padding:16px;display:flex;border-bottom:1px solid grey}.users-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:4px}.search-list[_ngcontent-%COMP%]{background:silver}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:40px;display:flex;padding:8px;cursor:pointer}.rooms-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%]{border:1px solid red}.rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background:#708090}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#d3d3d3}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20%}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{background:grey;width:40px;border-radius:100%;height:40px}"]],data:{}});function d(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"li",[],[[2,"newMess",null],[2,"selected",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectRoom(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,0,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,1,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(4,null,["",""]))],null,function(n,l){var e=l.component;n(l,0,0,e.getNewMess(l.context.$implicit),l.context.$implicit._id===(null==e.currentRoom?null:e.currentRoom._id)),n(l,4,0,e.getRoomName(l.context.$implicit))})}function h(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","rooms-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,d)),t.nb(2,278528,null,0,i.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.rooms)},null)}function p(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,6,"li",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectUser(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,0,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,3,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(4,null,[" "," "])),(n()(),t.ob(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Db(6,null,[" "," "]))],null,function(n,l){n(l,4,0,l.context.$implicit.nickname),n(l,6,0,l.context.$implicit.email)})}function v(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","search-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,p)),t.nb(2,278528,null,0,i.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.usersSearch)},null)}function C(n){return t.Eb(0,[(n()(),t.db(16777216,null,null,1,null,v)),t.nb(1,16384,null,0,i.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.db(0,null,null,0))],function(n,l){n(l,1,0,!l.component.searchIsEmpty)},null)}function f(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,11,"div",[["class","users-search"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0;return"submit"===l&&(s=!1!==t.xb(n,3).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,3).onReset()&&s),s},null,null)),t.nb(2,16384,null,0,r.v,[],null,null),t.nb(3,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ab(2048,null,r.b,null,[r.h]),t.nb(5,16384,null,0,r.m,[[4,r.b]],null,null),(n()(),t.ob(6,0,null,null,5,"input",[["formControlName","search"],["placeholder","search"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,7)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,7).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,7)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,7)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(7,16384,null,0,r.c,[t.C,t.k,[2,r.a]],null,null),t.Ab(1024,null,r.j,function(n){return[n]},[r.c]),t.nb(9,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Ab(2048,null,r.k,null,[r.f]),t.nb(11,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.ob(12,0,null,null,3,"div",[["class","list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,h)),t.nb(14,16384,null,0,i.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.db(0,[["searchList",2]],null,0,null,C))],function(n,l){var e=l.component;n(l,3,0,e.form),n(l,9,0,"search"),n(l,14,0,e.searchIsEmpty,t.xb(l,15))},function(n,l){n(l,1,0,t.xb(l,5).ngClassUntouched,t.xb(l,5).ngClassTouched,t.xb(l,5).ngClassPristine,t.xb(l,5).ngClassDirty,t.xb(l,5).ngClassValid,t.xb(l,5).ngClassInvalid,t.xb(l,5).ngClassPending),n(l,6,0,t.xb(l,11).ngClassUntouched,t.xb(l,11).ngClassTouched,t.xb(l,11).ngClassPristine,t.xb(l,11).ngClassDirty,t.xb(l,11).ngClassValid,t.xb(l,11).ngClassInvalid,t.xb(l,11).ngClassPending)})}class x{constructor(n,l){this.messagesService=n,this.storageService=l,this.currentRoom=null,this.form=new r.g({message:new r.e("")})}ngOnInit(){this.messagesService.onRoom().subscribe(n=>{this.currentRoom=n})}get groupList(){return this.currentRoom.group.map(n=>n.nickname).join(", ")}get roomName(){return this.currentRoom.name||2!==this.currentRoom.group.length?this.currentRoom.name:this.currentRoom.group.filter(n=>n._id!==this.storageService.user._id)[0].nickname}sendMessage(){const n={type:"message",room:this.currentRoom._id,owner:this.storageService.user._id,text:this.form.get("message").value};this.currentRoom.messages.push(n),this.messagesService.sendMessage(n),this.form.reset()}}var _=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:75%;height:calc(100vh - 76px)}.messages-box[_ngcontent-%COMP%]{display:flex;height:100%;flex-flow:column;justify-content:space-between}.header[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]{padding:8px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:calc(100vh - 225px);overflow-y:auto}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;display:flex;align-items:center}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{width:15%;display:flex;align-items:center;justify-content:center}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:40px;width:40px;background:grey;border-radius:100%}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{width:85%;padding-right:16px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.owner[_ngcontent-%COMP%]{background:#708090}.form[_ngcontent-%COMP%]{padding:8px;height:60px;display:flex;align-items:center;background:silver}"]],data:{}});function M(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"li",[],[[2,"owner",null]],null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","message-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,0,"div",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,1,"div",[["class","message-text"]],null,null,null,null,null)),(n()(),t.Db(4,null,[" "," "]))],null,function(n,l){n(l,0,0,l.context.$implicit.owner===l.component.storageService.user._id),n(l,4,0,l.context.$implicit.text)})}function O(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,22,"div",[["class","messages-box"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,3,"div",[["class","header"]],null,null,null,null,null)),(n()(),t.Db(2,null,[" Room name: "," "])),(n()(),t.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Db(4,null,[" Group: [","] "])),(n()(),t.ob(5,0,null,null,3,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(6,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,M)),t.nb(8,278528,null,0,i.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ob(9,0,null,null,13,"div",[["class","form"]],null,null,null,null,null)),(n()(),t.ob(10,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0,u=n.component;return"submit"===l&&(s=!1!==t.xb(n,12).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,12).onReset()&&s),"ngSubmit"===l&&(s=!1!==u.sendMessage()&&s),s},null,null)),t.nb(11,16384,null,0,r.v,[],null,null),t.nb(12,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ab(2048,null,r.b,null,[r.h]),t.nb(14,16384,null,0,r.m,[[4,r.b]],null,null),(n()(),t.ob(15,0,null,null,5,"input",[["formControlName","message"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,16)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,16).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,16)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,16)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(16,16384,null,0,r.c,[t.C,t.k,[2,r.a]],null,null),t.Ab(1024,null,r.j,function(n){return[n]},[r.c]),t.nb(18,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Ab(2048,null,r.k,null,[r.f]),t.nb(20,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.ob(21,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Send"]))],function(n,l){var e=l.component;n(l,8,0,e.currentRoom.messages),n(l,12,0,e.form),n(l,18,0,"message")},function(n,l){var e=l.component;n(l,2,0,e.roomName),n(l,4,0,e.groupList),n(l,10,0,t.xb(l,14).ngClassUntouched,t.xb(l,14).ngClassTouched,t.xb(l,14).ngClassPristine,t.xb(l,14).ngClassDirty,t.xb(l,14).ngClassValid,t.xb(l,14).ngClassInvalid,t.xb(l,14).ngClassPending),n(l,15,0,t.xb(l,20).ngClassUntouched,t.xb(l,20).ngClassTouched,t.xb(l,20).ngClassPristine,t.xb(l,20).ngClassDirty,t.xb(l,20).ngClassValid,t.xb(l,20).ngClassInvalid,t.xb(l,20).ngClassPending)})}function P(n){return t.Eb(0,[(n()(),t.db(16777216,null,null,1,null,O)),t.nb(1,16384,null,0,i.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.currentRoom)},null)}var S=t.mb({encapsulation:0,styles:[[".messages[_ngcontent-%COMP%]{display:flex;border-right:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;background:#fff}"]],data:{}});function R(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"app-sidebar",[],null,null,null,f,m)),t.nb(2,114688,null,0,c,[g,b.a],null,null),(n()(),t.ob(3,0,null,null,1,"app-messages-box",[],null,null,null,P,_)),t.nb(4,114688,null,0,x,[g,b.a],null,null)],function(n,l){n(l,2,0),n(l,4,0)},null)}function k(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-messages",[],null,null,null,R,S)),t.nb(1,245760,null,0,s,[g],null,null)],function(n,l){n(l,1,0)},null)}var y=t.kb("app-messages",s,k,{},{},[]),w=e("IheW"),I=e("iInd"),N=e("XPwU"),E=e("yTb8"),j=e("NHGN"),D=e("EApP"),U=e("hrfs"),A=e("PCNd");class F{}e.d(l,"MessagesRoutingModuleNgFactory",function(){return K});var K=t.lb(u,[],function(n){return t.ub([t.vb(512,t.j,t.Y,[[8,[o.a,y]],[3,t.j],t.w]),t.vb(4608,i.l,i.k,[t.t,[2,i.t]]),t.vb(4608,r.s,r.s,[]),t.vb(4608,w.h,w.n,[i.c,t.A,w.l]),t.vb(4608,w.o,w.o,[w.h,w.m]),t.vb(4608,b.a,b.a,[I.k]),t.vb(4608,w.k,w.k,[]),t.vb(6144,w.i,null,[w.k]),t.vb(4608,w.g,w.g,[w.i]),t.vb(6144,w.b,null,[w.g]),t.vb(4608,w.f,w.j,[w.b,t.q]),t.vb(4608,w.c,w.c,[w.f]),t.vb(5120,w.a,function(n,l,e,t,s){return[n,new N.a(l,e,t,s)]},[w.o,b.a,I.k,I.a,w.c]),t.vb(4608,r.d,r.d,[]),t.vb(4608,E.a,E.a,[w.c]),t.vb(4608,j.a,j.a,[D.j,b.a]),t.vb(1073742336,I.m,I.m,[[2,I.r],[2,I.k]]),t.vb(1073742336,i.b,i.b,[]),t.vb(1073742336,r.r,r.r,[]),t.vb(1073742336,r.i,r.i,[]),t.vb(1073742336,w.e,w.e,[]),t.vb(1073742336,w.d,w.d,[]),t.vb(1073742336,r.p,r.p,[]),t.vb(1073742336,U.b,U.b,[]),t.vb(1073742336,A.a,A.a,[]),t.vb(1073742336,F,F,[]),t.vb(1073742336,u,u,[]),t.vb(256,w.l,"XSRF-TOKEN",[]),t.vb(256,w.m,"X-XSRF-TOKEN",[]),t.vb(1024,I.i,function(){return[[{path:"",component:s}]]},[])])})}}]);