(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lSZx:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("mrSG"),i=u("oaey"),o=function(n){function l(){return n.call(this)||this}return e.c(l,n),l.prototype.ngOnInit=function(){},l}(i.a),s=function(){return function(){}}(),a=u("pMnS"),r=u("gIcY"),c=u("KJJU"),b=function(n){function l(l,u){var t=n.call(this)||this;t.homeService=l,t.socketService=u,t.form=new r.g({email:new r.e("test@test.com"),pass:new r.e("122333Qwe")});var e=t.homeService.registeredUser.subscribe(function(n){return t.login(n)});return t.someSubscriptions.add(e),t}return e.c(l,n),l.prototype.ngOnInit=function(){},l.prototype.login=function(n){var l=this,u=this.homeService.login(n||this.form.value).subscribe(function(n){var u=new c.a(n.user,n.token);l.storageService.saveUser(u,n.token),l.socketService.initSocket(),l.router.navigate(["/projects"])},function(n){return l.errorHandlingService.showError(n)});this.someSubscriptions.add(u)},l}(i.a),g=u("67Y/"),p=u("yTb8"),d=function(){function n(n){this.baseHttp=n,this.registeredUser=new t.m}return n.prototype.register=function(n){return this.baseHttp.post("/register",n).pipe(Object(g.a)(function(n){return n}))},n.prototype.login=function(n){return this.baseHttp.post("/login",n).pipe(Object(g.a)(function(n){return n}))},n.ngInjectableDef=t.Ib({factory:function(){return new n(t.Mb(p.a))},token:n,providedIn:"root"}),n}(),m=u("yFR0"),f=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{display:flex;flex-flow:column}"]],data:{}});function h(n){return t.Gb(0,[(n()(),t.qb(0,0,null,null,20,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,2).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,2).onReset()&&e),e},null,null)),t.pb(1,16384,null,0,r.v,[],null,null),t.pb(2,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Cb(2048,null,r.b,null,[r.h]),t.pb(4,16384,null,0,r.m,[[4,r.b]],null,null),(n()(),t.qb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Sign in"])),(n()(),t.qb(7,0,null,null,5,"input",[["class","input"],["formControlName","email"],["placeholder","Email..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,8)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,8).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,8)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,8)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(8,16384,null,0,r.c,[t.E,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.j,function(n){return[n]},[r.c]),t.pb(10,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Cb(2048,null,r.k,null,[r.f]),t.pb(12,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.qb(13,0,null,null,5,"input",[["class","input"],["formControlName","pass"],["placeholder","Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,14)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,14)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(14,16384,null,0,r.c,[t.E,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.j,function(n){return[n]},[r.c]),t.pb(16,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Cb(2048,null,r.k,null,[r.f]),t.pb(18,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.qb(19,0,null,null,1,"button",[["class","btn btn--hover-blue"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),t.Fb(-1,null,["Login"]))],function(n,l){n(l,2,0,l.component.form),n(l,10,0,"email"),n(l,16,0,"pass")},function(n,l){n(l,0,0,t.zb(l,4).ngClassUntouched,t.zb(l,4).ngClassTouched,t.zb(l,4).ngClassPristine,t.zb(l,4).ngClassDirty,t.zb(l,4).ngClassValid,t.zb(l,4).ngClassInvalid,t.zb(l,4).ngClassPending),n(l,7,0,t.zb(l,12).ngClassUntouched,t.zb(l,12).ngClassTouched,t.zb(l,12).ngClassPristine,t.zb(l,12).ngClassDirty,t.zb(l,12).ngClassValid,t.zb(l,12).ngClassInvalid,t.zb(l,12).ngClassPending),n(l,13,0,t.zb(l,18).ngClassUntouched,t.zb(l,18).ngClassTouched,t.zb(l,18).ngClassPristine,t.zb(l,18).ngClassDirty,t.zb(l,18).ngClassValid,t.zb(l,18).ngClassInvalid,t.zb(l,18).ngClassPending)})}var C=function(n){function l(l,u){var t=n.call(this)||this;return t.homeService=l,t.socketService=u,t.form=new r.g({email:new r.e("test@test.com"),nickname:new r.e("testNickname"),pass:new r.e("122333Qwe")}),t}return e.c(l,n),l.prototype.ngOnInit=function(){},l.prototype.register=function(){var n=this,l=this.form.value,u=this.homeService.register(l).subscribe(function(u){var t=e.g(l,["nickname"]);n.homeService.registeredUser.emit(t)},function(l){return n.errorHandlingService.showError(l)});this.someSubscriptions.add(u)},l}(i.a),v=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{display:flex;flex-flow:column}"]],data:{}});function z(n){return t.Gb(0,[(n()(),t.qb(0,0,null,null,26,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,2).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,2).onReset()&&e),e},null,null)),t.pb(1,16384,null,0,r.v,[],null,null),t.pb(2,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Cb(2048,null,r.b,null,[r.h]),t.pb(4,16384,null,0,r.m,[[4,r.b]],null,null),(n()(),t.qb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Register"])),(n()(),t.qb(7,0,null,null,5,"input",[["class","input"],["formControlName","email"],["placeholder","Email..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,8)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,8).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,8)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,8)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(8,16384,null,0,r.c,[t.E,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.j,function(n){return[n]},[r.c]),t.pb(10,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Cb(2048,null,r.k,null,[r.f]),t.pb(12,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.qb(13,0,null,null,5,"input",[["class","input"],["formControlName","nickname"],["placeholder","Nickname..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,14)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,14)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(14,16384,null,0,r.c,[t.E,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.j,function(n){return[n]},[r.c]),t.pb(16,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Cb(2048,null,r.k,null,[r.f]),t.pb(18,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.qb(19,0,null,null,5,"input",[["class","input"],["formControlName","pass"],["placeholder","Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.zb(n,20)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,20).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,20)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,20)._compositionEnd(u.target.value)&&e),e},null,null)),t.pb(20,16384,null,0,r.c,[t.E,t.k,[2,r.a]],null,null),t.Cb(1024,null,r.j,function(n){return[n]},[r.c]),t.pb(22,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),t.Cb(2048,null,r.k,null,[r.f]),t.pb(24,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),t.qb(25,0,null,null,1,"button",[["class","btn btn--hover-gold"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.register()&&t),t},null,null)),(n()(),t.Fb(-1,null,["Register"]))],function(n,l){n(l,2,0,l.component.form),n(l,10,0,"email"),n(l,16,0,"nickname"),n(l,22,0,"pass")},function(n,l){n(l,0,0,t.zb(l,4).ngClassUntouched,t.zb(l,4).ngClassTouched,t.zb(l,4).ngClassPristine,t.zb(l,4).ngClassDirty,t.zb(l,4).ngClassValid,t.zb(l,4).ngClassInvalid,t.zb(l,4).ngClassPending),n(l,7,0,t.zb(l,12).ngClassUntouched,t.zb(l,12).ngClassTouched,t.zb(l,12).ngClassPristine,t.zb(l,12).ngClassDirty,t.zb(l,12).ngClassValid,t.zb(l,12).ngClassInvalid,t.zb(l,12).ngClassPending),n(l,13,0,t.zb(l,18).ngClassUntouched,t.zb(l,18).ngClassTouched,t.zb(l,18).ngClassPristine,t.zb(l,18).ngClassDirty,t.zb(l,18).ngClassValid,t.zb(l,18).ngClassInvalid,t.zb(l,18).ngClassPending),n(l,19,0,t.zb(l,24).ngClassUntouched,t.zb(l,24).ngClassTouched,t.zb(l,24).ngClassPristine,t.zb(l,24).ngClassDirty,t.zb(l,24).ngClassValid,t.zb(l,24).ngClassInvalid,t.zb(l,24).ngClassPending)})}var x=u("Ip0R"),w=t.ob({encapsulation:0,styles:[[".home[_ngcontent-%COMP%]{display:flex;position:relative;min-height:60vh}.home[_ngcontent-%COMP%]   .home_welcome[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.welcome-auth[_ngcontent-%COMP%]{min-width:30%;display:flex;margin-left:60px;flex-flow:column;justify-content:center}.welcome-text[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column;align-items:center;justify-content:center;text-align:center}.welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:80px;max-width:740px;line-height:76px}.welcome-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){margin-top:32px}.welcome-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:70px}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:30%;min-width:30%;display:flex;align-items:center;justify-content:center;font-size:36px;font-family:Teko,sans-serif;line-height:38px}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){color:#00caec}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){color:#4c4c4d}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){color:#f2ae32}.abilities-slide[_ngcontent-%COMP%]{position:relative}.abilities-slide[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{position:absolute;z-index:0;width:200vw;height:100%;left:-70vw}.abilities-slide[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:1;min-height:100vh}"]],data:{}});function y(n){return t.Gb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["class","welcome-auth"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"app-login",[["class","white-back"]],null,null,null,h,f)),t.pb(2,245760,null,0,b,[d,m.a],null,null),(n()(),t.qb(3,0,null,null,1,"app-register",[["class","white-back"]],null,null,null,z,v)),t.pb(4,245760,null,0,C,[d,m.a],null,null)],function(n,l){n(l,2,0),n(l,4,0)},null)}function k(n){return t.Gb(0,[(n()(),t.qb(0,0,null,null,15,"div",[["class","home"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,14,"div",[["class","home_welcome"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,11,"div",[["class","welcome-text "]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.qb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Lorem ipsum dolor sit amet, consectetur adipisicing elit."])),(n()(),t.qb(6,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),t.qb(7,0,null,null,6,"ul",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Create Projects and Tasks for your workers"])),(n()(),t.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Use the timer to count the time of work on the task"])),(n()(),t.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Send messages to your friends directly from TimerApp"])),(n()(),t.fb(16777216,null,null,1,null,y)),t.pb(15,16384,null,0,x.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(16,0,null,null,2,"div",[["class","abilities-slide"]],null,null,null,null,null)),(n()(),t.qb(17,0,null,null,0,"span",[["class","back"]],null,null,null,null,null)),(n()(),t.qb(18,0,null,null,0,"div",[["class","content"]],null,null,null,null,null))],function(n,l){n(l,15,0,!l.component.storageService.userLogged)},null)}function P(n){return t.Gb(0,[(n()(),t.qb(0,0,null,null,1,"app-home",[],null,null,null,k,w)),t.pb(1,245760,null,0,o,[],null,null)],function(n,l){n(l,1,0)},null)}var _=t.mb("app-home",o,P,{},{},[]),O=u("t/Na"),M=u("fbMX"),S=u("ZYCi"),q=u("XPwU"),j=u("eG2b"),I=u("NHGN"),T=u("SZbH"),E=u("Zseb"),N=u("PCNd"),U=function(){return function(){}}();u.d(l,"HomeRoutingModuleNgFactory",function(){return F});var F=t.nb(s,[],function(n){return t.wb([t.xb(512,t.j,t.ab,[[8,[a.a,_]],[3,t.j],t.y]),t.xb(4608,x.l,x.k,[t.v,[2,x.t]]),t.xb(4608,r.s,r.s,[]),t.xb(4608,O.h,O.n,[x.c,t.C,O.l]),t.xb(4608,O.o,O.o,[O.h,O.m]),t.xb(4608,M.a,M.a,[S.o]),t.xb(4608,O.k,O.k,[]),t.xb(6144,O.i,null,[O.k]),t.xb(4608,O.g,O.g,[O.i]),t.xb(6144,O.b,null,[O.g]),t.xb(4608,O.f,O.j,[O.b,t.r]),t.xb(4608,O.c,O.c,[O.f]),t.xb(5120,O.a,function(n,l,u,t,e){return[n,new q.a(l,u,t,e)]},[O.o,M.a,S.o,S.a,O.c]),t.xb(4608,r.d,r.d,[]),t.xb(4608,j.g,j.d,[O.c]),t.xb(5120,j.f,j.c,[[3,j.f],j.g,t.C,[2,j.b],[2,x.c]]),t.xb(4608,p.a,p.a,[O.c]),t.xb(4608,I.a,I.a,[T.j,M.a]),t.xb(1073742336,S.q,S.q,[[2,S.v],[2,S.o]]),t.xb(1073742336,x.b,x.b,[]),t.xb(1073742336,r.r,r.r,[]),t.xb(1073742336,r.i,r.i,[]),t.xb(1073742336,O.e,O.e,[]),t.xb(1073742336,O.d,O.d,[]),t.xb(1073742336,r.p,r.p,[]),t.xb(1073742336,E.b,E.b,[]),t.xb(1073742336,j.a,j.a,[]),t.xb(1073742336,N.a,N.a,[]),t.xb(1073742336,U,U,[]),t.xb(1073742336,s,s,[]),t.xb(256,O.l,"XSRF-TOKEN",[]),t.xb(256,O.m,"X-XSRF-TOKEN",[]),t.xb(1024,S.m,function(){return[[{path:"",component:o}]]},[])])})}}]);