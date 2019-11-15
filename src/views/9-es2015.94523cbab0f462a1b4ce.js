(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ZAaW:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class s{constructor(n){this.messagesService=n}ngOnInit(){}ngOnDestroy(){this.messagesService.leaveAllRoom()}}var o=e("oaey"),u=e("LRne");const i=(()=>{class n extends o.a{constructor(){super()}resolve(n){return n.paramMap.get("room")||this.errorHandle({message:"not_found"})}errorHandle(n){return this.router.navigate(["/projects"]),Object(u.a)({data:null,error:n.message})}}return n.ngInjectableDef=t.Gb({factory:function(){return new n},token:n,providedIn:"root"}),n})();class r{}var a=e("pMnS"),c=e("SVse"),g=e("s7LF"),b=e("KJJU");class m{constructor(n,l){this.chatWith=null,this.objectGroup={},Object.assign(this,n),this.group=this.group.map(n=>{const l=new b.a(n);return this.objectGroup[l._id]=l,l}),l&&this.group.length>1&&(this.chatWith=this.group.find(n=>n._id!==l._id))}roomName(n){return this.name||2!==this.group.length?{nickname:this.name,avatar:""}:this.group.find(l=>l._id!==n._id)}get groupList(){return this.group.map(n=>n.nickname).join(", ")}haveNewMess(n){return this.read.length&&0===this.read.filter(l=>l===n._id).length}}class h extends o.a{constructor(n,l,e,t){super(),this.messagesService=n,this.storageService=l,this.activatedRoute=e,this.location=t,this.rooms=[],this.usersSearch=[],this.currentRoom=null,this.form=new g.g({search:new g.e("")}),this.searchIsEmpty=!0}ngOnInit(){this.messagesService.getRooms();const n=this.form.get("search").valueChanges.subscribe(n=>this.searchValue(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n);const l=this.messagesService.onRoom().subscribe(n=>this.onRoom(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(l);const e=this.messagesService.onRooms().subscribe(n=>this.onRooms(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(e);const t=this.messagesService.onSearchUsers().subscribe(n=>this.usersSearch=n,n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(t);const s=this.messagesService.onNotiMessage().subscribe(n=>this.onNotiMessage(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(s)}searchValue(n){n&&n.length?(this.searchIsEmpty=!1,this.messagesService.getSearchUsers(n)):(this.usersSearch=[],this.searchIsEmpty=!0)}selectUser(n){this.messagesService.selectOrCreateRoom(n),this.form.reset()}onRooms(n){this.rooms=n.map(n=>new m(n,this.storageService.user)),this.checkLink()}onRoom(n){this.currentRoom=new m(n,this.storageService.user),this.rooms.filter(n=>n._id===this.currentRoom._id).length||this.rooms.push(this.currentRoom),this.location.replaceState("/messages/"+this.currentRoom._id)}onNotiMessage(n){this.rooms.map(l=>{"string"!=typeof n.owner&&l._id===n.room&&(l.read=[n.owner._id])})}checkLink(){const n=this.activatedRoute.data.subscribe(n=>{if(n.room){const l=this.rooms.find(l=>l.chatWith._id===n.room);l&&this.selectRoom(l)}},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n)}selectRoom(n){n.haveNewMess(this.storageService.user)&&n.read.push(this.storageService.user._id),this.messagesService.selectRoom(n)}}var d=e("yFR0");const p=(()=>{class n{constructor(n){this.socketService=n}onSearchUsers(){return this.socketService.listen("onSearchUsers")}onRooms(){return this.socketService.listen("onRooms")}onRoom(){return this.socketService.listen("onRoom")}onNotiMessage(){return this.socketService.listen("onNotiMessage")}getSearchUsers(n){this.socketService.emit("searchUsers",n.toLowerCase())}getRooms(){this.socketService.emit("rooms")}selectOrCreateRoom(n){this.socketService.emit("selectOrCreateRoom",n)}selectRoom(n){this.socketService.emit("selectRoom",n)}sendMessage(n){this.socketService.emit("message",n)}leaveAllRoom(){this.socketService.emit("leaveAllRoom")}}return n.ngInjectableDef=t.Gb({factory:function(){return new n(t.Kb(d.a))},token:n,providedIn:"root"}),n})();var v=e("fbMX"),f=e("iInd"),C=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:25%;border-right:1px solid #000;height:calc(100vh - 76px)}.users-search[_ngcontent-%COMP%]{padding:16px;display:flex;border-bottom:1px solid grey}.users-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:4px}.search-list[_ngcontent-%COMP%]{background:silver}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:40px;display:flex;padding:8px;cursor:pointer}.rooms-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%]{border:1px solid red}.rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background:#708090}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#d3d3d3}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20%}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{overflow:hidden;width:40px;border-radius:100%;height:40px}"]],data:{}});function x(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,5,"li",[],[[2,"newMess",null],[2,"selected",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectRoom(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,2,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,1,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),t.ob(4,0,null,null,1,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(5,null,["",""]))],null,function(n,l){var e=l.component,t=l.context.$implicit.haveNewMess(e.storageService.user);n(l,0,0,t,l.context.$implicit._id===(null==e.currentRoom?null:e.currentRoom._id)),n(l,3,0,l.context.$implicit.chatWith.avatar),n(l,5,0,l.context.$implicit.chatWith.nickname)})}function _(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","rooms-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,x)),t.nb(2,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.rooms)},null)}function M(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,6,"li",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectUser(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,0,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,3,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(4,null,[" "," "])),(n()(),t.ob(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Db(6,null,[" "," "]))],null,function(n,l){n(l,4,0,l.context.$implicit.nickname),n(l,6,0,l.context.$implicit.email)})}function O(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","search-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,M)),t.nb(2,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.usersSearch)},null)}function P(n){return t.Eb(0,[(n()(),t.db(16777216,null,null,1,null,O)),t.nb(1,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.db(0,null,null,0))],function(n,l){n(l,1,0,!l.component.searchIsEmpty)},null)}function S(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,11,"div",[["class","users-search"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0;return"submit"===l&&(s=!1!==t.xb(n,3).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,3).onReset()&&s),s},null,null)),t.nb(2,16384,null,0,g.v,[],null,null),t.nb(3,540672,null,0,g.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ab(2048,null,g.b,null,[g.h]),t.nb(5,16384,null,0,g.m,[[4,g.b]],null,null),(n()(),t.ob(6,0,null,null,5,"input",[["formControlName","search"],["placeholder","search"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,7)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,7).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,7)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,7)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(7,16384,null,0,g.c,[t.C,t.k,[2,g.a]],null,null),t.Ab(1024,null,g.j,function(n){return[n]},[g.c]),t.nb(9,671744,null,0,g.f,[[3,g.b],[8,null],[8,null],[6,g.j],[2,g.t]],{name:[0,"name"]},null),t.Ab(2048,null,g.k,null,[g.f]),t.nb(11,16384,null,0,g.l,[[4,g.k]],null,null),(n()(),t.ob(12,0,null,null,3,"div",[["class","list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,_)),t.nb(14,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.db(0,[["searchList",2]],null,0,null,P))],function(n,l){var e=l.component;n(l,3,0,e.form),n(l,9,0,"search"),n(l,14,0,e.searchIsEmpty,t.xb(l,15))},function(n,l){n(l,1,0,t.xb(l,5).ngClassUntouched,t.xb(l,5).ngClassTouched,t.xb(l,5).ngClassPristine,t.xb(l,5).ngClassDirty,t.xb(l,5).ngClassValid,t.xb(l,5).ngClassInvalid,t.xb(l,5).ngClassPending),n(l,6,0,t.xb(l,11).ngClassUntouched,t.xb(l,11).ngClassTouched,t.xb(l,11).ngClassPristine,t.xb(l,11).ngClassDirty,t.xb(l,11).ngClassValid,t.xb(l,11).ngClassInvalid,t.xb(l,11).ngClassPending)})}var w=e("wd/R");class R extends o.a{constructor(n,l){super(),this.messagesService=n,this.storageService=l,this.currentRoom=null,this.moment=w,this.form=new g.g({message:new g.e("")})}ngOnInit(){const n=this.messagesService.onRoom().subscribe(n=>{this.currentRoom=new m(n)},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n)}sendMessage(){const n={type:"message",room:this.currentRoom._id,owner:this.storageService.user._id,text:this.form.get("message").value};this.currentRoom.messages.push(n),this.messagesService.sendMessage(n),this.form.reset()}}var k=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:75%;height:calc(100vh - 76px)}.messages-box[_ngcontent-%COMP%]{display:flex;height:100%;flex-flow:column;justify-content:space-between}.header[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]{padding:8px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:calc(100vh - 225px);overflow-y:auto}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;display:flex;align-items:center}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{width:15%;display:flex;align-items:center;justify-content:center}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:40px;overflow:hidden;width:40px;border-radius:100%}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{width:85%;padding-right:16px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.owner[_ngcontent-%COMP%]{background:#708090}.form[_ngcontent-%COMP%]{padding:8px;height:60px;display:flex;align-items:center;background:silver}"]],data:{}});function y(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,10,"li",[],[[2,"owner",null]],null,null,null,null)),(n()(),t.ob(1,0,null,null,2,"div",[["class","message-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,1,"div",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),t.ob(4,0,null,null,4,"div",[["class","message-text"]],null,null,null,null,null)),(n()(),t.ob(5,0,null,null,1,"b",[["class","message-name"]],null,null,null,null,null)),(n()(),t.Db(6,null,["",""])),(n()(),t.ob(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Db(8,null,["",""])),(n()(),t.ob(9,0,null,null,1,"div",[["class","message-time"]],null,null,null,null,null)),(n()(),t.Db(10,null,[" "," "]))],null,function(n,l){var e=l.component;n(l,0,0,l.context.$implicit.owner===e.storageService.user._id),n(l,3,0,e.currentRoom.objectGroup[l.context.$implicit.owner].avatar),n(l,6,0,e.currentRoom.objectGroup[l.context.$implicit.owner].nickname),n(l,8,0,l.context.$implicit.text),n(l,10,0,e.moment(l.context.$implicit.createdAt).format("DD-MM-YYYY HH:mm"))})}function E(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,18,"div",[["class","messages-box"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,3,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,y)),t.nb(4,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ob(5,0,null,null,13,"div",[["class","form"]],null,null,null,null,null)),(n()(),t.ob(6,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0,o=n.component;return"submit"===l&&(s=!1!==t.xb(n,8).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,8).onReset()&&s),"ngSubmit"===l&&(s=!1!==o.sendMessage()&&s),s},null,null)),t.nb(7,16384,null,0,g.v,[],null,null),t.nb(8,540672,null,0,g.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ab(2048,null,g.b,null,[g.h]),t.nb(10,16384,null,0,g.m,[[4,g.b]],null,null),(n()(),t.ob(11,0,null,null,5,"input",[["formControlName","message"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,12)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,12).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,12)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,12)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(12,16384,null,0,g.c,[t.C,t.k,[2,g.a]],null,null),t.Ab(1024,null,g.j,function(n){return[n]},[g.c]),t.nb(14,671744,null,0,g.f,[[3,g.b],[8,null],[8,null],[6,g.j],[2,g.t]],{name:[0,"name"]},null),t.Ab(2048,null,g.k,null,[g.f]),t.nb(16,16384,null,0,g.l,[[4,g.k]],null,null),(n()(),t.ob(17,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Send"]))],function(n,l){var e=l.component;n(l,4,0,e.currentRoom.messages),n(l,8,0,e.form),n(l,14,0,"message")},function(n,l){n(l,6,0,t.xb(l,10).ngClassUntouched,t.xb(l,10).ngClassTouched,t.xb(l,10).ngClassPristine,t.xb(l,10).ngClassDirty,t.xb(l,10).ngClassValid,t.xb(l,10).ngClassInvalid,t.xb(l,10).ngClassPending),n(l,11,0,t.xb(l,16).ngClassUntouched,t.xb(l,16).ngClassTouched,t.xb(l,16).ngClassPristine,t.xb(l,16).ngClassDirty,t.xb(l,16).ngClassValid,t.xb(l,16).ngClassInvalid,t.xb(l,16).ngClassPending)})}function I(n){return t.Eb(0,[(n()(),t.db(16777216,null,null,1,null,E)),t.nb(1,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.currentRoom)},null)}var j=t.mb({encapsulation:0,styles:[[".messages[_ngcontent-%COMP%]{display:flex;border-right:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;background:#fff}"]],data:{}});function N(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"app-sidebar",[],null,null,null,S,C)),t.nb(2,245760,null,0,h,[p,v.a,f.a,c.f],null,null),(n()(),t.ob(3,0,null,null,1,"app-messages-box",[],null,null,null,I,k)),t.nb(4,245760,null,0,R,[p,v.a],null,null)],function(n,l){n(l,2,0),n(l,4,0)},null)}function D(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-messages",[],null,null,null,N,j)),t.nb(1,245760,null,0,s,[p],null,null)],function(n,l){n(l,1,0)},null)}var A=t.kb("app-messages",s,D,{},{},[]),U=e("IheW"),H=e("XPwU"),$=e("tHmd"),F=e("yTb8"),K=e("NHGN"),T=e("EApP"),G=e("hrfs"),L=e("PCNd");class V{}e.d(l,"MessagesRoutingModuleNgFactory",function(){return W});var W=t.lb(r,[],function(n){return t.ub([t.vb(512,t.j,t.Y,[[8,[a.a,A]],[3,t.j],t.w]),t.vb(4608,c.l,c.k,[t.t,[2,c.t]]),t.vb(4608,g.s,g.s,[]),t.vb(4608,U.h,U.n,[c.c,t.A,U.l]),t.vb(4608,U.o,U.o,[U.h,U.m]),t.vb(4608,v.a,v.a,[f.o]),t.vb(4608,U.k,U.k,[]),t.vb(6144,U.i,null,[U.k]),t.vb(4608,U.g,U.g,[U.i]),t.vb(6144,U.b,null,[U.g]),t.vb(4608,U.f,U.j,[U.b,t.q]),t.vb(4608,U.c,U.c,[U.f]),t.vb(5120,U.a,function(n,l,e,t,s){return[n,new H.a(l,e,t,s)]},[U.o,v.a,f.o,f.a,U.c]),t.vb(4608,g.d,g.d,[]),t.vb(4608,$.g,$.d,[U.c]),t.vb(5120,$.f,$.c,[[3,$.f],$.g,t.A,[2,$.b],[2,c.c]]),t.vb(4608,F.a,F.a,[U.c]),t.vb(4608,K.a,K.a,[T.j,v.a]),t.vb(1073742336,f.q,f.q,[[2,f.v],[2,f.o]]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,g.r,g.r,[]),t.vb(1073742336,g.i,g.i,[]),t.vb(1073742336,U.e,U.e,[]),t.vb(1073742336,U.d,U.d,[]),t.vb(1073742336,g.p,g.p,[]),t.vb(1073742336,G.b,G.b,[]),t.vb(1073742336,$.a,$.a,[]),t.vb(1073742336,L.a,L.a,[]),t.vb(1073742336,V,V,[]),t.vb(1073742336,r,r,[]),t.vb(256,U.l,"XSRF-TOKEN",[]),t.vb(256,U.m,"X-XSRF-TOKEN",[]),t.vb(1024,f.m,function(){return[[{path:"",component:s},{path:":room",component:s,resolve:{room:i}}]]},[])])})}}]);