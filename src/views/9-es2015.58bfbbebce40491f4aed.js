(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ZAaW:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class s{constructor(n){this.messagesService=n}ngOnInit(){}ngOnDestroy(){this.messagesService.leaveAllRoom()}}var o=e("oaey"),u=e("LRne");const i=(()=>{class n extends o.a{constructor(){super()}resolve(n){return n.paramMap.get("room")||this.errorHandle({message:"not_found"})}errorHandle(n){return this.router.navigate(["/projects"]),Object(u.a)({data:null,error:n.message})}}return n.ngInjectableDef=t.Gb({factory:function(){return new n},token:n,providedIn:"root"}),n})();class r{}var a=e("pMnS"),c=e("SVse"),g=e("s7LF"),m=e("KJJU");class b{constructor(n,l){this.chatWith=null,this.objectGroup={},Object.assign(this,n),this.group=this.group.map(n=>{const l=new m.a(n);return this.objectGroup[l._id]=l,l}),l&&this.group.length>1&&(this.chatWith=this.group.find(n=>n._id!==l._id))}roomName(n){return this.name||2!==this.group.length?{nickname:this.name,avatar:""}:this.group.find(l=>l._id!==n._id)}get groupList(){return this.group.map(n=>n.nickname).join(", ")}haveNewMess(n){return this.read.length&&0===this.read.filter(l=>l===n._id).length}}var h=e("wd/R");class d extends o.a{constructor(n,l,e,t){super(),this.messagesService=n,this.storageService=l,this.activatedRoute=e,this.location=t,this.rooms=[],this.usersSearch=[],this.currentRoom=null,this.form=new g.i({search:new g.f("")}),this.searchIsEmpty=!0}ngOnInit(){this.messagesService.getRooms();const n=this.form.get("search").valueChanges.subscribe(n=>this.searchValue(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n);const l=this.messagesService.onRoom().subscribe(n=>this.onRoom(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(l);const e=this.messagesService.onRooms().subscribe(n=>this.onRooms(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(e);const t=this.messagesService.onSearchUsers().subscribe(n=>this.usersSearch=n,n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(t);const s=this.messagesService.onNotiMessage().subscribe(n=>this.onNotiMessage(n),n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(s)}searchValue(n){n&&n.length?(this.searchIsEmpty=!1,this.messagesService.getSearchUsers(n)):(this.usersSearch=[],this.searchIsEmpty=!0)}selectUser(n){this.messagesService.selectOrCreateRoom(n),this.form.reset()}onRooms(n){this.createAndSortingRooms(n),this.checkLink()}createAndSortingRooms(n=this.rooms){this.rooms=n.map(n=>new b(n,this.storageService.user)).sort((n,l)=>h(l.updatedAt).diff(h(n.updatedAt)))}onRoom(n){this.currentRoom=new b(n,this.storageService.user),this.rooms.filter(n=>n._id===this.currentRoom._id).length||this.rooms.push(this.currentRoom),this.location.replaceState("/messages/"+this.currentRoom._id)}onNotiMessage(n){this.rooms.map(l=>{"string"!=typeof n.owner&&l._id===n.room&&(l.read=[n.owner._id],l.updatedAt=n.updatedAt,this.createAndSortingRooms())})}checkLink(){const n=this.activatedRoute.data.subscribe(n=>{if(n.room){const l=this.rooms.find(l=>l.chatWith._id===n.room);l&&this.selectRoom(l)}},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n)}selectRoom(n){n.haveNewMess(this.storageService.user)&&n.read.push(this.storageService.user._id),this.messagesService.selectRoom(n)}}var p=e("yFR0");const v=(()=>{class n{constructor(n){this.socketService=n}onSearchUsers(){return this.socketService.listen("onSearchUsers")}onRooms(){return this.socketService.listen("onRooms")}onRoom(){return this.socketService.listen("onRoom")}onLoadMoreMessages(){return this.socketService.listen("onLoadMoreMessages")}loadMoreMessages(n,l){this.socketService.emit("loadMoreMessages",{room:n,options:l})}onNotiMessage(){return this.socketService.listen("onNotiMessage")}getSearchUsers(n){this.socketService.emit("searchUsers",n.toLowerCase())}getRooms(){this.socketService.emit("rooms")}changeMessage(n){this.socketService.emit("changeMessage",n)}deleteMessage(n){this.socketService.emit("deleteMessage",n)}selectOrCreateRoom(n){this.socketService.emit("selectOrCreateRoom",n)}selectRoom(n){this.socketService.emit("selectRoom",n)}sendMessage(n,l){this.socketService.emit("message",n,l)}leaveAllRoom(){this.socketService.emit("leaveAllRoom")}}return n.ngInjectableDef=t.Gb({factory:function(){return new n(t.Kb(p.a))},token:n,providedIn:"root"}),n})();var f=e("fbMX"),x=e("iInd"),C=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:25%;border-right:1px solid #000;height:calc(100vh - 76px)}.users-search[_ngcontent-%COMP%]{padding:16px;display:flex;border-bottom:1px solid grey}.users-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:4px}.search-list[_ngcontent-%COMP%]{background:silver}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:40px;display:flex;padding:8px;cursor:pointer}.rooms-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.newMess[_ngcontent-%COMP%]{border:1px solid red}.rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .rooms-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background:#708090}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#d3d3d3}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20%}.rooms-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .search-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .room-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{overflow:hidden;width:40px;border-radius:100%;height:40px}"]],data:{}});function M(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,6,"li",[],[[2,"newMess",null],[2,"selected",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectRoom(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,2,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,1,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),t.ob(4,0,null,null,1,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(5,null,["",""])),(n()(),t.Db(6,null,[" "," "]))],null,function(n,l){var e=l.component,t=l.context.$implicit.haveNewMess(e.storageService.user);n(l,0,0,t,l.context.$implicit._id===(null==e.currentRoom?null:e.currentRoom._id)),n(l,3,0,l.context.$implicit.chatWith.avatar),n(l,5,0,l.context.$implicit.chatWith.nickname),n(l,6,0,l.context.$implicit.updatedAt)})}function S(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","rooms-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,M)),t.nb(2,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.rooms)},null)}function _(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"li",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectUser(n.context.$implicit)&&t),t},null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","room-avatar"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,0,"span",[["class","avatar"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,1,"span",[["class","room-name"]],null,null,null,null,null)),(n()(),t.Db(4,null,[" "," "]))],null,function(n,l){n(l,4,0,l.context.$implicit.nickname)})}function O(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,"ul",[["class","search-list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,_)),t.nb(2,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.usersSearch)},null)}function P(n){return t.Eb(0,[(n()(),t.db(16777216,null,null,1,null,O)),t.nb(1,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.db(0,null,null,0))],function(n,l){n(l,1,0,!l.component.searchIsEmpty)},null)}function k(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,11,"div",[["class","users-search"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0;return"submit"===l&&(s=!1!==t.xb(n,3).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,3).onReset()&&s),s},null,null)),t.nb(2,16384,null,0,g.x,[],null,null),t.nb(3,540672,null,0,g.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ab(2048,null,g.c,null,[g.j]),t.nb(5,16384,null,0,g.o,[[4,g.c]],null,null),(n()(),t.ob(6,0,null,null,5,"input",[["formControlName","search"],["placeholder","Write nickname..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,7)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,7).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,7)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,7)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(7,16384,null,0,g.d,[t.C,t.k,[2,g.a]],null,null),t.Ab(1024,null,g.l,function(n){return[n]},[g.d]),t.nb(9,671744,null,0,g.h,[[3,g.c],[8,null],[8,null],[6,g.l],[2,g.v]],{name:[0,"name"]},null),t.Ab(2048,null,g.m,null,[g.h]),t.nb(11,16384,null,0,g.n,[[4,g.m]],null,null),(n()(),t.ob(12,0,null,null,3,"div",[["class","list"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,S)),t.nb(14,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.db(0,[["searchList",2]],null,0,null,P))],function(n,l){var e=l.component;n(l,3,0,e.form),n(l,9,0,"search"),n(l,14,0,e.searchIsEmpty,t.xb(l,15))},function(n,l){n(l,1,0,t.xb(l,5).ngClassUntouched,t.xb(l,5).ngClassTouched,t.xb(l,5).ngClassPristine,t.xb(l,5).ngClassDirty,t.xb(l,5).ngClassValid,t.xb(l,5).ngClassInvalid,t.xb(l,5).ngClassPending),n(l,6,0,t.xb(l,11).ngClassUntouched,t.xb(l,11).ngClassTouched,t.xb(l,11).ngClassPristine,t.xb(l,11).ngClassDirty,t.xb(l,11).ngClassValid,t.xb(l,11).ngClassInvalid,t.xb(l,11).ngClassPending)})}var w=e("MNke");class R extends o.a{constructor(n,l){super(),this.messagesService=n,this.storageService=l,this.currentRoom=null,this.moment=h,this.form=new g.i({message:new g.f("")}),this.formChange=new g.i({messageChange:new g.f("")}),this.options={skip:0},this.selectedChangeMessage=null}ngOnInit(){const n=this.messagesService.onRoom().subscribe(n=>{this.currentRoom=new b(n),this.currentRoom.messages=this.currentRoom.messages.reverse(),this.options.skip=this.currentRoom.messages.length,this.boxScrollDown()},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(n),this.messagesService.onLoadMoreMessages().subscribe(n=>{this.options.skip=this.options.skip+n.messages.length,this.currentRoom.messages=[...n.messages.reverse(),...this.currentRoom.messages]})}selectMessToChange(n){this.selectedChangeMessage=n,this.formChange.get("messageChange").setValue(n.text)}changeMessage(){this.selectedChangeMessage.text=this.formChange.get("messageChange").value,this.messagesService.changeMessage(this.selectedChangeMessage),this.formChange.reset(),this.selectedChangeMessage=null}deleteMessage(n,l){this.messagesService.deleteMessage(n),this.currentRoom.messages.splice(l,1)}boxScrollDown(){setTimeout(()=>{this.messagebox.nativeElement.scrollTo(0,this.messagebox.nativeElement.scrollHeight)})}cancelChangeMessage(){this.selectedChangeMessage=null,this.formChange.reset()}loadMoreMessages(){this.messagesService.loadMoreMessages(this.currentRoom,this.options)}sendMessage(){if(0===this.form.get("message").value.trim().length)return void this.toastr.error("You cant send empty message");let n={type:"message",room:this.currentRoom._id,owner:this.storageService.user._id,text:this.form.get("message").value};this.messagesService.sendMessage(n,l=>{n._id=l._id,this.currentRoom.messages.push(n),this.form.reset(),this.boxScrollDown()})}}var y=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:75%;height:calc(100vh - 76px)}.messages-box[_ngcontent-%COMP%]{display:flex;height:100%;flex-flow:column;justify-content:space-between}.header[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]{padding:8px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:calc(100vh - 225px);overflow-y:auto}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:16px;display:flex;flex-flow:column;min-height:60px;box-shadow:-2px -2px rgba(0,0,0,.02),-1px -1px rgba(0,0,0,.01),0 0 rgba(0,0,0,.01),1px 1px rgba(0,0,0,.01),2px 2px rgba(0,0,0,.02),3px 3px rgba(0,0,0,.03),4px 4px rgba(0,0,0,.04),5px 5px rgba(0,0,0,.05),6px 6px rgba(0,0,0,.06);border-radius:2px;align-items:flex-start;justify-content:space-between;max-width:50%;background:#292929;margin:16px;color:#fff;position:relative}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-control[_ngcontent-%COMP%]{position:absolute;display:flex;right:8px;top:8px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{width:85%;padding-right:16px}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{font-size:10px;font-style:italic}.messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.owner[_ngcontent-%COMP%]{margin-left:auto;background:#00caec}.form[_ngcontent-%COMP%]{padding:8px;height:60px;display:flex;align-items:center;background:silver}"]],data:{}});function I(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"div",[["class","message-control"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"button",[["class","btn btn--small btn--outline-gold"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectMessToChange(n.parent.context.$implicit)&&t),t},null,null)),(n()(),t.Db(-1,null,["C"])),(n()(),t.ob(3,0,null,null,1,"button",[["class","btn btn--small btn--outline-red"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.deleteMessage(n.parent.context.$implicit,n.parent.context.index)&&t),t},null,null)),(n()(),t.Db(-1,null,["D"]))],null,null)}function E(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,7,"li",[],[[2,"owner",null]],null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,I)),t.nb(2,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.ob(3,0,null,null,2,"div",[["class","message-text"]],null,null,null,null,null)),(n()(),t.ob(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Db(5,null,["",""])),(n()(),t.ob(6,0,null,null,1,"div",[["class","message-time"]],null,null,null,null,null)),(n()(),t.Db(7,null,[" "," "]))],function(n,l){var e=l.component;n(l,2,0,l.context.$implicit.owner===e.storageService.user._id&&!e.selectedChangeMessage)},function(n,l){var e=l.component;n(l,0,0,l.context.$implicit.owner===e.storageService.user._id),n(l,5,0,l.context.$implicit.text),n(l,7,0,e.moment(l.context.$implicit.createdAt).format("DD-MM-YYYY HH:mm"))})}function N(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0,o=n.component;return"submit"===l&&(s=!1!==t.xb(n,2).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,2).onReset()&&s),"ngSubmit"===l&&(s=!1!==o.sendMessage()&&s),s},null,null)),t.nb(1,16384,null,0,g.x,[],null,null),t.nb(2,540672,null,0,g.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ab(2048,null,g.c,null,[g.j]),t.nb(4,16384,null,0,g.o,[[4,g.c]],null,null),(n()(),t.ob(5,0,null,null,5,"input",[["formControlName","message"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,6)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,6).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,6)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,6)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(6,16384,null,0,g.d,[t.C,t.k,[2,g.a]],null,null),t.Ab(1024,null,g.l,function(n){return[n]},[g.d]),t.nb(8,671744,null,0,g.h,[[3,g.c],[8,null],[8,null],[6,g.l],[2,g.v]],{name:[0,"name"]},null),t.Ab(2048,null,g.m,null,[g.h]),t.nb(10,16384,null,0,g.n,[[4,g.m]],null,null),(n()(),t.ob(11,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Send"]))],function(n,l){n(l,2,0,l.component.form),n(l,8,0,"message")},function(n,l){n(l,0,0,t.xb(l,4).ngClassUntouched,t.xb(l,4).ngClassTouched,t.xb(l,4).ngClassPristine,t.xb(l,4).ngClassDirty,t.xb(l,4).ngClassValid,t.xb(l,4).ngClassInvalid,t.xb(l,4).ngClassPending),n(l,5,0,t.xb(l,10).ngClassUntouched,t.xb(l,10).ngClassTouched,t.xb(l,10).ngClassPristine,t.xb(l,10).ngClassDirty,t.xb(l,10).ngClassValid,t.xb(l,10).ngClassInvalid,t.xb(l,10).ngClassPending)})}function j(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0,o=n.component;return"submit"===l&&(s=!1!==t.xb(n,2).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.xb(n,2).onReset()&&s),"ngSubmit"===l&&(s=!1!==o.changeMessage()&&s),s},null,null)),t.nb(1,16384,null,0,g.x,[],null,null),t.nb(2,540672,null,0,g.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ab(2048,null,g.c,null,[g.j]),t.nb(4,16384,null,0,g.o,[[4,g.c]],null,null),(n()(),t.ob(5,0,null,null,5,"input",[["formControlName","messageChange"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0;return"input"===l&&(s=!1!==t.xb(n,6)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.xb(n,6).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.xb(n,6)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.xb(n,6)._compositionEnd(e.target.value)&&s),s},null,null)),t.nb(6,16384,null,0,g.d,[t.C,t.k,[2,g.a]],null,null),t.Ab(1024,null,g.l,function(n){return[n]},[g.d]),t.nb(8,671744,null,0,g.h,[[3,g.c],[8,null],[8,null],[6,g.l],[2,g.v]],{name:[0,"name"]},null),t.Ab(2048,null,g.m,null,[g.h]),t.nb(10,16384,null,0,g.n,[[4,g.m]],null,null),(n()(),t.ob(11,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.cancelChangeMessage()&&t),t},null,null)),(n()(),t.Db(-1,null,["Cancel"])),(n()(),t.ob(13,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Change message"]))],function(n,l){n(l,2,0,l.component.formChange),n(l,8,0,"messageChange")},function(n,l){n(l,0,0,t.xb(l,4).ngClassUntouched,t.xb(l,4).ngClassTouched,t.xb(l,4).ngClassPristine,t.xb(l,4).ngClassDirty,t.xb(l,4).ngClassValid,t.xb(l,4).ngClassInvalid,t.xb(l,4).ngClassPending),n(l,5,0,t.xb(l,10).ngClassUntouched,t.xb(l,10).ngClassTouched,t.xb(l,10).ngClassPristine,t.xb(l,10).ngClassDirty,t.xb(l,10).ngClassValid,t.xb(l,10).ngClassInvalid,t.xb(l,10).ngClassPending)})}function D(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,10,"div",[["class","messages-box"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,4,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(2,0,[[1,0],["messagebox",1]],null,3,"ul",[["infiniteScroll",""]],null,[[null,"scrolledUp"]],function(n,l,e){var t=!0;return"scrolledUp"===l&&(t=!1!==n.component.loadMoreMessages()&&t),t},null,null)),t.nb(3,4866048,null,0,w.a,[t.k,t.y],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"],scrollWindow:[2,"scrollWindow"]},{scrolledUp:"scrolledUp"}),(n()(),t.db(16777216,null,null,1,null,E)),t.nb(5,278528,null,0,c.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ob(6,0,null,null,4,"div",[["class","form"]],null,null,null,null,null)),(n()(),t.db(16777216,null,null,1,null,N)),t.nb(8,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.db(16777216,null,null,1,null,j)),t.nb(10,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,2,50,!1),n(l,5,0,e.currentRoom.messages),n(l,8,0,!e.selectedChangeMessage),n(l,10,0,e.selectedChangeMessage)},null)}function A(n){return t.Eb(0,[t.Bb(671088640,1,{messagebox:0}),(n()(),t.db(16777216,null,null,1,null,D)),t.nb(2,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.currentRoom)},null)}var U=t.mb({encapsulation:0,styles:[[".messages[_ngcontent-%COMP%]{display:flex;border-right:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;background:#fff}"]],data:{}});function T(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"div",[["class","messages"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"app-sidebar",[],null,null,null,k,C)),t.nb(2,245760,null,0,d,[v,f.a,x.a,c.f],null,null),(n()(),t.ob(3,0,null,null,1,"app-messages-box",[],null,null,null,A,y)),t.nb(4,245760,null,0,R,[v,f.a],null,null)],function(n,l){n(l,2,0),n(l,4,0)},null)}function H(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-messages",[],null,null,null,T,U)),t.nb(1,245760,null,0,s,[v],null,null)],function(n,l){n(l,1,0)},null)}var $=t.kb("app-messages",s,H,{},{},[]),K=e("IheW"),F=e("XPwU"),L=e("tHmd"),V=e("yTb8"),W=e("NHGN"),Y=e("EApP"),G=e("hrfs"),J=e("PCNd");class X{}e.d(l,"MessagesRoutingModuleNgFactory",function(){return q});var q=t.lb(r,[],function(n){return t.ub([t.vb(512,t.j,t.Y,[[8,[a.a,$]],[3,t.j],t.w]),t.vb(4608,c.l,c.k,[t.t,[2,c.t]]),t.vb(4608,g.u,g.u,[]),t.vb(4608,K.h,K.n,[c.c,t.A,K.l]),t.vb(4608,K.o,K.o,[K.h,K.m]),t.vb(4608,f.a,f.a,[x.o]),t.vb(4608,K.k,K.k,[]),t.vb(6144,K.i,null,[K.k]),t.vb(4608,K.g,K.g,[K.i]),t.vb(6144,K.b,null,[K.g]),t.vb(4608,K.f,K.j,[K.b,t.q]),t.vb(4608,K.c,K.c,[K.f]),t.vb(5120,K.a,function(n,l,e,t,s){return[n,new F.a(l,e,t,s)]},[K.o,f.a,x.o,x.a,K.c]),t.vb(4608,g.e,g.e,[]),t.vb(4608,L.g,L.d,[K.c]),t.vb(5120,L.f,L.c,[[3,L.f],L.g,t.A,[2,L.b],[2,c.c]]),t.vb(4608,V.a,V.a,[K.c]),t.vb(4608,W.a,W.a,[Y.j,f.a]),t.vb(1073742336,x.q,x.q,[[2,x.v],[2,x.o]]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,g.t,g.t,[]),t.vb(1073742336,g.k,g.k,[]),t.vb(1073742336,K.e,K.e,[]),t.vb(1073742336,K.d,K.d,[]),t.vb(1073742336,g.r,g.r,[]),t.vb(1073742336,G.b,G.b,[]),t.vb(1073742336,L.a,L.a,[]),t.vb(1073742336,w.b,w.b,[]),t.vb(1073742336,J.a,J.a,[]),t.vb(1073742336,X,X,[]),t.vb(1073742336,r,r,[]),t.vb(256,K.l,"XSRF-TOKEN",[]),t.vb(256,K.m,"X-XSRF-TOKEN",[]),t.vb(1024,x.m,function(){return[[{path:"",component:s},{path:":room",component:s,resolve:{room:i}}]]},[])])})}}]);