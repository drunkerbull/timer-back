(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{lSZx:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),e=u("oaey");class o extends e.a{constructor(){super()}ngOnInit(){}}class i{}var s=u("pMnS"),a=u("s7LF"),c=u("KJJU");class r extends e.a{constructor(n,l){super(),this.homeService=n,this.socketService=l,this.form=new a.i({email:new a.f("test@test.com"),pass:new a.f("122333Qwe")});const u=this.homeService.registeredUser.subscribe(n=>this.login(n));this.someSubscriptions.add(u)}ngOnInit(){}login(n){const l=this.homeService.login(n||this.form.value).subscribe(n=>{console.log(n.user);const l=new c.a(n.user,n.token);this.storageService.saveUser(l,n.token),this.socketService.initSocket(),this.router.navigate(["/projects"])},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(l)}}var b=u("lJxs"),g=u("yTb8");const d=(()=>{class n{constructor(n){this.baseHttp=n,this.registeredUser=new t.m}register(n){return this.baseHttp.post("/register",n).pipe(Object(b.a)(n=>n))}login(n){return this.baseHttp.post("/login",n).pipe(Object(b.a)(n=>n))}}return n.ngInjectableDef=t.Gb({factory:function(){return new n(t.Kb(g.a))},token:n,providedIn:"root"}),n})();var m=u("yFR0"),p=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{display:flex;flex-flow:column}"]],data:{}});function h(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,20,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.xb(n,2).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.xb(n,2).onReset()&&e),e},null,null)),t.nb(1,16384,null,0,a.x,[],null,null),t.nb(2,540672,null,0,a.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ab(2048,null,a.c,null,[a.j]),t.nb(4,16384,null,0,a.o,[[4,a.c]],null,null),(n()(),t.ob(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Sign in"])),(n()(),t.ob(7,0,null,null,5,"input",[["class","input"],["formControlName","email"],["placeholder","Email..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,8)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,8).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,8)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,8)._compositionEnd(u.target.value)&&e),e},null,null)),t.nb(8,16384,null,0,a.d,[t.C,t.k,[2,a.a]],null,null),t.Ab(1024,null,a.l,function(n){return[n]},[a.d]),t.nb(10,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.l],[2,a.v]],{name:[0,"name"]},null),t.Ab(2048,null,a.m,null,[a.h]),t.nb(12,16384,null,0,a.n,[[4,a.m]],null,null),(n()(),t.ob(13,0,null,null,5,"input",[["class","input"],["formControlName","pass"],["placeholder","Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,14)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,14)._compositionEnd(u.target.value)&&e),e},null,null)),t.nb(14,16384,null,0,a.d,[t.C,t.k,[2,a.a]],null,null),t.Ab(1024,null,a.l,function(n){return[n]},[a.d]),t.nb(16,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.l],[2,a.v]],{name:[0,"name"]},null),t.Ab(2048,null,a.m,null,[a.h]),t.nb(18,16384,null,0,a.n,[[4,a.m]],null,null),(n()(),t.ob(19,0,null,null,1,"button",[["class","btn btn--hover-blue"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),t.Db(-1,null,["Login"]))],function(n,l){n(l,2,0,l.component.form),n(l,10,0,"email"),n(l,16,0,"pass")},function(n,l){n(l,0,0,t.xb(l,4).ngClassUntouched,t.xb(l,4).ngClassTouched,t.xb(l,4).ngClassPristine,t.xb(l,4).ngClassDirty,t.xb(l,4).ngClassValid,t.xb(l,4).ngClassInvalid,t.xb(l,4).ngClassPending),n(l,7,0,t.xb(l,12).ngClassUntouched,t.xb(l,12).ngClassTouched,t.xb(l,12).ngClassPristine,t.xb(l,12).ngClassDirty,t.xb(l,12).ngClassValid,t.xb(l,12).ngClassInvalid,t.xb(l,12).ngClassPending),n(l,13,0,t.xb(l,18).ngClassUntouched,t.xb(l,18).ngClassTouched,t.xb(l,18).ngClassPristine,t.xb(l,18).ngClassDirty,t.xb(l,18).ngClassValid,t.xb(l,18).ngClassInvalid,t.xb(l,18).ngClassPending)})}var v=u("mrSG");class x extends e.a{constructor(n,l){super(),this.homeService=n,this.socketService=l,this.form=new a.i({email:new a.f("test@test.com"),nickname:new a.f("testNickname"),pass:new a.f("122333Qwe")})}ngOnInit(){}register(){const n=this.form.value,l=this.homeService.register(n).subscribe(l=>{const u=v.a(n,["nickname"]);this.homeService.registeredUser.emit(u)},n=>this.errorHandlingService.showError(n));this.someSubscriptions.add(l)}}var f=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{display:flex;flex-flow:column}"]],data:{}});function C(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,26,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.xb(n,2).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.xb(n,2).onReset()&&e),e},null,null)),t.nb(1,16384,null,0,a.x,[],null,null),t.nb(2,540672,null,0,a.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ab(2048,null,a.c,null,[a.j]),t.nb(4,16384,null,0,a.o,[[4,a.c]],null,null),(n()(),t.ob(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Register"])),(n()(),t.ob(7,0,null,null,5,"input",[["class","input"],["formControlName","email"],["placeholder","Email..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,8)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,8).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,8)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,8)._compositionEnd(u.target.value)&&e),e},null,null)),t.nb(8,16384,null,0,a.d,[t.C,t.k,[2,a.a]],null,null),t.Ab(1024,null,a.l,function(n){return[n]},[a.d]),t.nb(10,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.l],[2,a.v]],{name:[0,"name"]},null),t.Ab(2048,null,a.m,null,[a.h]),t.nb(12,16384,null,0,a.n,[[4,a.m]],null,null),(n()(),t.ob(13,0,null,null,5,"input",[["class","input"],["formControlName","nickname"],["placeholder","Nickname..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,14)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,14)._compositionEnd(u.target.value)&&e),e},null,null)),t.nb(14,16384,null,0,a.d,[t.C,t.k,[2,a.a]],null,null),t.Ab(1024,null,a.l,function(n){return[n]},[a.d]),t.nb(16,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.l],[2,a.v]],{name:[0,"name"]},null),t.Ab(2048,null,a.m,null,[a.h]),t.nb(18,16384,null,0,a.n,[[4,a.m]],null,null),(n()(),t.ob(19,0,null,null,5,"input",[["class","input"],["formControlName","pass"],["placeholder","Password..."],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0;return"input"===l&&(e=!1!==t.xb(n,20)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.xb(n,20).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.xb(n,20)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.xb(n,20)._compositionEnd(u.target.value)&&e),e},null,null)),t.nb(20,16384,null,0,a.d,[t.C,t.k,[2,a.a]],null,null),t.Ab(1024,null,a.l,function(n){return[n]},[a.d]),t.nb(22,671744,null,0,a.h,[[3,a.c],[8,null],[8,null],[6,a.l],[2,a.v]],{name:[0,"name"]},null),t.Ab(2048,null,a.m,null,[a.h]),t.nb(24,16384,null,0,a.n,[[4,a.m]],null,null),(n()(),t.ob(25,0,null,null,1,"button",[["class","btn btn--hover-gold"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.register()&&t),t},null,null)),(n()(),t.Db(-1,null,["Register"]))],function(n,l){n(l,2,0,l.component.form),n(l,10,0,"email"),n(l,16,0,"nickname"),n(l,22,0,"pass")},function(n,l){n(l,0,0,t.xb(l,4).ngClassUntouched,t.xb(l,4).ngClassTouched,t.xb(l,4).ngClassPristine,t.xb(l,4).ngClassDirty,t.xb(l,4).ngClassValid,t.xb(l,4).ngClassInvalid,t.xb(l,4).ngClassPending),n(l,7,0,t.xb(l,12).ngClassUntouched,t.xb(l,12).ngClassTouched,t.xb(l,12).ngClassPristine,t.xb(l,12).ngClassDirty,t.xb(l,12).ngClassValid,t.xb(l,12).ngClassInvalid,t.xb(l,12).ngClassPending),n(l,13,0,t.xb(l,18).ngClassUntouched,t.xb(l,18).ngClassTouched,t.xb(l,18).ngClassPristine,t.xb(l,18).ngClassDirty,t.xb(l,18).ngClassValid,t.xb(l,18).ngClassInvalid,t.xb(l,18).ngClassPending),n(l,19,0,t.xb(l,24).ngClassUntouched,t.xb(l,24).ngClassTouched,t.xb(l,24).ngClassPristine,t.xb(l,24).ngClassDirty,t.xb(l,24).ngClassValid,t.xb(l,24).ngClassInvalid,t.xb(l,24).ngClassPending)})}var w=u("SVse"),P=t.mb({encapsulation:0,styles:[[".home[_ngcontent-%COMP%]{display:flex;position:relative;min-height:60vh}.home[_ngcontent-%COMP%]   .home_welcome[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.welcome-auth[_ngcontent-%COMP%]{min-width:30%;display:flex;margin-left:60px;flex-flow:column;justify-content:center}.welcome-text[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:column;align-items:center;justify-content:center;text-align:center}.welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:80px;max-width:740px;line-height:76px}.welcome-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){margin-top:32px}.welcome-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:70px}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:30%;min-width:30%;display:flex;align-items:center;justify-content:center;font-size:36px;font-family:Teko,sans-serif;line-height:38px}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){color:#00caec}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){color:#4c4c4d}.welcome-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){color:#f2ae32}.abilities-slide[_ngcontent-%COMP%]{position:relative}.abilities-slide[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{position:absolute;z-index:0;width:200vw;height:100%;left:-70vw}.abilities-slide[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:1;min-height:100vh}"]],data:{}});function y(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"div",[["class","welcome-auth"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"app-login",[["class","white-back"]],null,null,null,h,p)),t.nb(2,245760,null,0,r,[d,m.a],null,null),(n()(),t.ob(3,0,null,null,1,"app-register",[["class","white-back"]],null,null,null,C,f)),t.nb(4,245760,null,0,x,[d,m.a],null,null)],function(n,l){n(l,2,0),n(l,4,0)},null)}function _(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,15,"div",[["class","home"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,14,"div",[["class","home_welcome"]],null,null,null,null,null)),(n()(),t.ob(2,0,null,null,11,"div",[["class","welcome-text "]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.ob(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Lorem ipsum dolor sit amet, consectetur adipisicing elit."])),(n()(),t.ob(6,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),t.ob(7,0,null,null,6,"ul",[],null,null,null,null,null)),(n()(),t.ob(8,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Create Projects and Tasks for your workers"])),(n()(),t.ob(10,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Use the timer to count the time of work on the task"])),(n()(),t.ob(12,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Send messages to your friends directly from TimerApp"])),(n()(),t.db(16777216,null,null,1,null,y)),t.nb(15,16384,null,0,w.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(n()(),t.ob(16,0,null,null,2,"div",[["class","abilities-slide"]],null,null,null,null,null)),(n()(),t.ob(17,0,null,null,0,"span",[["class","back"]],null,null,null,null,null)),(n()(),t.ob(18,0,null,null,0,"div",[["class","content"]],null,null,null,null,null))],function(n,l){n(l,15,0,!l.component.storageService.userLogged)},null)}function k(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-home",[],null,null,null,_,P)),t.nb(1,245760,null,0,o,[],null,null)],function(n,l){n(l,1,0)},null)}var O=t.kb("app-home",o,k,{},{},[]),M=u("IheW"),S=u("fbMX"),I=u("iInd"),j=u("XPwU"),T=u("tHmd"),E=u("NHGN"),A=u("EApP"),D=u("hrfs"),N=u("MNke"),U=u("PCNd");class H{}u.d(l,"HomeRoutingModuleNgFactory",function(){return R});var R=t.lb(i,[],function(n){return t.ub([t.vb(512,t.j,t.Y,[[8,[s.a,O]],[3,t.j],t.w]),t.vb(4608,w.l,w.k,[t.t,[2,w.t]]),t.vb(4608,a.u,a.u,[]),t.vb(4608,M.h,M.n,[w.c,t.A,M.l]),t.vb(4608,M.o,M.o,[M.h,M.m]),t.vb(4608,S.a,S.a,[I.o]),t.vb(4608,M.k,M.k,[]),t.vb(6144,M.i,null,[M.k]),t.vb(4608,M.g,M.g,[M.i]),t.vb(6144,M.b,null,[M.g]),t.vb(4608,M.f,M.j,[M.b,t.q]),t.vb(4608,M.c,M.c,[M.f]),t.vb(5120,M.a,function(n,l,u,t,e){return[n,new j.a(l,u,t,e)]},[M.o,S.a,I.o,I.a,M.c]),t.vb(4608,a.e,a.e,[]),t.vb(4608,T.g,T.d,[M.c]),t.vb(5120,T.f,T.c,[[3,T.f],T.g,t.A,[2,T.b],[2,w.c]]),t.vb(4608,g.a,g.a,[M.c]),t.vb(4608,E.a,E.a,[A.j,S.a]),t.vb(1073742336,I.q,I.q,[[2,I.v],[2,I.o]]),t.vb(1073742336,w.b,w.b,[]),t.vb(1073742336,a.t,a.t,[]),t.vb(1073742336,a.k,a.k,[]),t.vb(1073742336,M.e,M.e,[]),t.vb(1073742336,M.d,M.d,[]),t.vb(1073742336,a.r,a.r,[]),t.vb(1073742336,D.b,D.b,[]),t.vb(1073742336,T.a,T.a,[]),t.vb(1073742336,N.b,N.b,[]),t.vb(1073742336,U.a,U.a,[]),t.vb(1073742336,H,H,[]),t.vb(1073742336,i,i,[]),t.vb(256,M.l,"XSRF-TOKEN",[]),t.vb(256,M.m,"X-XSRF-TOKEN",[]),t.vb(1024,I.m,function(){return[[{path:"",component:o}]]},[])])})}}]);