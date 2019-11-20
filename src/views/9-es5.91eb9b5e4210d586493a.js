(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7M+/":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),a=u("oaey"),i=u("wd/R"),r=function(l){function n(n){var u=l.call(this)||this;return u.statisticsService=n,u.data=[],u.chartData=[],u.chartLabels=[],u.loading=!0,u.queryLine="",u.currentType="worker",u.currentAverageParams=null,u.totalTime="",u.btnTypes=[{name:"worker",text:"I am worker"},{name:"owner",text:"I am owner of task"},{name:"owner-project",text:"I am owner of project"}],u.btnAverage=[{name:"day",text:"Day"},{name:"week",text:"Week"},{name:"months",text:"Months"},{name:"",text:"All time"}],u}return e.c(n,l),n.prototype.ngOnInit=function(){var l=this;this.route.queryParamMap.subscribe(function(n){l.currentAverageParams=n.params,l.updateStatsWithParams()})},n.prototype.changeAndUpdateData=function(l){this.loading=!0,this.currentType=l,this.getStatistics()},n.prototype.updateStatsWithParams=function(){var l=this.currentAverageParams;this.loading=!0;var n="?";for(var u in l)l[u]&&(n=n+u+"="+l[u]);1===n.length&&(n=""),this.queryLine=n,this.changeAndUpdateData(this.currentType)},n.prototype.getTime=function(l){return i.duration(l).format("HH:mm:ss",{trim:!1})},n.prototype.getStatistics=function(){var l=this;this.data=[],this.statisticsService.getStats(this.currentType,this.queryLine).subscribe(function(n){l.data=n,l.createChart()})},n.prototype.createChart=function(){this.chartLabels=this.data.map(function(l){return l.name}),this.chartData=[this.data.map(function(l){return l.total})];var l=this.chartData[0].reduce(function(l,n){return l+n});this.totalTime=this.getTime(l),this.loading=!1},n.prototype.getStatsWithAverage=function(l){void 0===l&&(l=""),this.router.navigate([],{relativeTo:this.route,queryParams:{average:l},queryParamsHandling:"merge"})},n}(a.a),o=function(){return function(){}}(),c=u("pMnS"),b=u("Ip0R"),s=u("Zseb");u("RiPy")(i);var p=function(){function l(){this.chartLabels=[],this.chartData=[],this.chartOptions={tooltips:{callbacks:{label:function(l,n){return n.labels[l.index]+": "+i.duration(n.datasets[0].data[l.index]).format("HH:mm:ss",{trim:!1})}}}},this.doughnutChartType="doughnut"}return l.prototype.ngOnInit=function(){},l}(),f=t.ob({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),t.pb(2,999424,null,0,s.a,[t.k,s.c],{data:[0,"data"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(l,n){var u=n.component;l(n,2,0,u.chartData,u.chartLabels,u.chartOptions,u.doughnutChartType)},null)}function h(l){return t.Gb(0,[(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(1,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.chartData.length&&u.chartLabels.length)},null)}var g=u("qNcu"),d=u("/A5B"),x=u("67Y/"),q=u("yTb8"),v=function(){function l(l){this.baseHttp=l}return l.prototype.getStats=function(l,n){return this.baseHttp.get("/statistics/"+l+"/"+n).pipe(Object(x.a)(function(l){return l}))},l.ngInjectableDef=t.Ib({factory:function(){return new l(t.Mb(q.a))},token:l,providedIn:"root"}),l}(),y=t.ob({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style-type:circle}[_nghost-%COMP%]{padding-top:16px;display:block}button.active[_ngcontent-%COMP%]{background:red}"]],data:{}});function F(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"button",[],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeAndUpdateData(l.context.$implicit.name)&&t),t},null,null)),(l()(),t.Fb(1,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.name===n.component.currentType),l(n,1,0,n.context.$implicit.text)})}function k(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"button",[],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getStatsWithAverage(l.context.$implicit.name)&&t),t},null,null)),(l()(),t.Fb(1,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.name===n.component.currentAverageParams.average),l(n,1,0,n.context.$implicit.text)})}function T(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["The timer is on!"]))],null,null)}function w(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,18,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task:"])),(l()(),t.Fb(4,null,[" "," || "])),(l()(),t.qb(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task owner:"])),(l()(),t.Fb(8,null,[" "," || "])),(l()(),t.qb(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Time: "])),(l()(),t.Fb(12,null,[" "," || "])),(l()(),t.qb(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Project:"])),(l()(),t.Fb(16,null,[" "," "])),(l()(),t.fb(16777216,null,null,1,null,T)),t.pb(18,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,18,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.owner.nickname),l(n,12,0,u.getTime(n.context.$implicit.total)),l(n,16,0,n.context.$implicit.project.name)})}function P(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["All task where you Worker"])),(l()(),t.qb(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,w)),t.pb(5,278528,null,0,b.i,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function I(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["The timer is on!"]))],null,null)}function j(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,18,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task:"])),(l()(),t.Fb(4,null,[" "," || "])),(l()(),t.qb(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task worker:"])),(l()(),t.Fb(8,null,[" "," || "])),(l()(),t.qb(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Time: "])),(l()(),t.Fb(12,null,[" "," || "])),(l()(),t.qb(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Project:"])),(l()(),t.Fb(16,null,[" "," "])),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(18,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,18,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.worker.nickname),l(n,12,0,u.getTime(n.context.$implicit.total)),l(n,16,0,n.context.$implicit.project.name)})}function M(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["All task where you Owner"])),(l()(),t.qb(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,j)),t.pb(5,278528,null,0,b.i,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function O(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["The timer is on!"]))],null,null)}function $(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,22,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Project:"])),(l()(),t.Fb(4,null,[" "," "])),(l()(),t.qb(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task:"])),(l()(),t.Fb(8,null,[" "," || "])),(l()(),t.qb(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task owner:"])),(l()(),t.Fb(12,null,[" "," || "])),(l()(),t.qb(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Task worker:"])),(l()(),t.Fb(16,null,[" "," || "])),(l()(),t.qb(17,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Time: "])),(l()(),t.Fb(20,null,[" "," || "])),(l()(),t.fb(16777216,null,null,1,null,O)),t.pb(22,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,22,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.project.name),l(n,8,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.owner.nickname),l(n,16,0,n.context.$implicit.worker.nickname),l(n,20,0,u.getTime(n.context.$implicit.total))})}function G(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["All project where you Owner"])),(l()(),t.qb(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,$)),t.pb(5,278528,null,0,b.i,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function S(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-chart",[],null,null,null,h,f)),t.pb(2,114688,null,0,p,[],{chartLabels:[0,"chartLabels"],chartData:[1,"chartData"]},null),(l()(),t.qb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(4,null,["Total Time: ",""])),(l()(),t.fb(16777216,null,null,1,null,P)),t.pb(6,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,M)),t.pb(8,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,G)),t.pb(10,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.chartLabels,u.chartData),l(n,6,0,"worker"===u.currentType),l(n,8,0,"owner"===u.currentType),l(n,10,0,"owner-project"===u.currentType)},function(l,n){l(n,4,0,n.component.totalTime)})}function A(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"app-loader",[],null,null,null,g.b,g.a)),t.pb(1,114688,null,0,d.a,[],null,null)],function(l,n){l(n,1,0)},null)}function D(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,F)),t.pb(2,278528,null,0,b.i,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(3,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(6,278528,null,0,b.i,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.fb(16777216,null,null,1,null,S)),t.pb(8,16384,null,0,b.j,[t.P,t.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.fb(0,[["loadingData",2]],null,0,null,A))],function(l,n){var u=n.component;l(n,2,0,u.btnTypes),l(n,6,0,u.btnAverage),l(n,8,0,!u.loading,t.zb(n,9))},null)}function C(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"app-statistics",[],null,null,null,D,y)),t.pb(1,245760,null,0,r,[v],null,null)],function(l,n){l(n,1,0)},null)}var L=t.mb("app-statistics",r,C,{},{},[]),H=u("gIcY"),N=u("t/Na"),R=u("fbMX"),W=u("ZYCi"),U=u("XPwU"),X=u("eG2b"),E=u("NHGN"),Y=u("SZbH"),Z=u("dU8u"),_=u("PCNd"),J=function(){return function(){}}();u.d(n,"StatisticsRoutingModuleNgFactory",function(){return K});var K=t.nb(o,[],function(l){return t.wb([t.xb(512,t.j,t.ab,[[8,[c.a,L]],[3,t.j],t.y]),t.xb(4608,b.l,b.k,[t.v,[2,b.t]]),t.xb(4608,H.u,H.u,[]),t.xb(4608,N.h,N.n,[b.c,t.C,N.l]),t.xb(4608,N.o,N.o,[N.h,N.m]),t.xb(4608,R.a,R.a,[W.o]),t.xb(4608,N.k,N.k,[]),t.xb(6144,N.i,null,[N.k]),t.xb(4608,N.g,N.g,[N.i]),t.xb(6144,N.b,null,[N.g]),t.xb(4608,N.f,N.j,[N.b,t.r]),t.xb(4608,N.c,N.c,[N.f]),t.xb(5120,N.a,function(l,n,u,t,e){return[l,new U.a(n,u,t,e)]},[N.o,R.a,W.o,W.a,N.c]),t.xb(4608,H.e,H.e,[]),t.xb(4608,X.g,X.d,[N.c]),t.xb(5120,X.f,X.c,[[3,X.f],X.g,t.C,[2,X.b],[2,b.c]]),t.xb(4608,q.a,q.a,[N.c]),t.xb(4608,E.a,E.a,[Y.j,R.a]),t.xb(1073742336,W.q,W.q,[[2,W.v],[2,W.o]]),t.xb(1073742336,b.b,b.b,[]),t.xb(1073742336,H.t,H.t,[]),t.xb(1073742336,H.k,H.k,[]),t.xb(1073742336,N.e,N.e,[]),t.xb(1073742336,N.d,N.d,[]),t.xb(1073742336,H.r,H.r,[]),t.xb(1073742336,s.b,s.b,[]),t.xb(1073742336,X.a,X.a,[]),t.xb(1073742336,Z.b,Z.b,[]),t.xb(1073742336,_.a,_.a,[]),t.xb(1073742336,J,J,[]),t.xb(1073742336,o,o,[]),t.xb(256,N.l,"XSRF-TOKEN",[]),t.xb(256,N.m,"X-XSRF-TOKEN",[]),t.xb(1024,W.m,function(){return[[{path:"",component:r}]]},[])])})}}]);