(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7M+/":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),a=t("mrSG"),e=t("wd/R"),r=t("RiPy"),i=t("oaey");r(e);var o=function(n){function l(l){var t=n.call(this)||this;return t.statisticsService=l,t.tasks=[],t.chartData=[],t.chartLabels=[],t.loading=!0,t}return a.c(l,n),l.prototype.ngOnInit=function(){this.getStats()},l.prototype.getTime=function(n){return e.duration(n).format("HH:mm:ss",{trim:!1})},l.prototype.getStats=function(){var n=this;this.route.queryParamMap.subscribe(function(l){n.updateStatsWithParams(l.params)})},l.prototype.getStatsWithAverage=function(n){void 0===n&&(n=""),this.router.navigate([],{relativeTo:this.route,queryParams:{average:n},queryParamsHandling:"merge"})},l.prototype.updateStatsWithParams=function(n){var l=this;this.loading=!0;var t="?";for(var u in n)n[u]&&(t=t+u+"="+n[u]);1===t.length&&(t=""),this.statisticsService.getStats(t).subscribe(function(n){l.tasks=n,l.chartLabels=l.tasks.map(function(n){return n.name}),l.chartData=[l.tasks.map(function(n){return n.total})],l.loading=!1})},l}(i.a),c=function(){return function(){}}(),b=t("pMnS"),s=t("Ip0R"),p=t("Zseb");r(e);var f=function(){function n(){this.chartLabels=[],this.chartData=[],this.chartOptions={tooltips:{callbacks:{label:function(n,l){return l.labels[n.index]+": "+e.duration(l.datasets[0].data[n.index]).format("HH:mm:ss",{trim:!1})}}}},this.doughnutChartType="doughnut"}return n.prototype.ngOnInit=function(){},n}(),h=u.ob({encapsulation:0,styles:[[""]],data:{}});function g(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.qb(1,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),u.pb(2,999424,null,0,p.a,[u.k,p.c],{data:[0,"data"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(n,l){var t=l.component;n(l,2,0,t.chartData,t.chartLabels,t.chartOptions,t.doughnutChartType)},null)}function d(n){return u.Ib(0,[(n()(),u.fb(16777216,null,null,1,null,g)),u.pb(1,16384,null,0,s.k,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,t.chartData.length&&t.chartLabels.length)},null)}var m=t("67Y/"),v=t("yTb8"),x=function(){function n(n){this.baseHttp=n}return n.prototype.getStats=function(n){return this.baseHttp.get("/statistics"+n).pipe(Object(m.a)(function(n){return n}))},n.ngInjectableDef=u.Kb({factory:function(){return new n(u.Ob(v.a))},token:n,providedIn:"root"}),n}(),k=u.ob({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style-type:circle}[_nghost-%COMP%]{padding-top:16px;display:block}"]],data:{}});function y(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(n()(),u.Gb(-1,null,["The timer is on!"]))],null,null)}function I(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),u.Gb(1,null,[" "," : "," "])),(n()(),u.fb(16777216,null,null,1,null,y)),u.pb(3,16384,null,0,s.k,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.context.$implicit.timerStarted)},function(n,l){n(l,1,0,l.context.$implicit.name,l.component.getTime(l.context.$implicit.total))})}function S(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),u.qb(1,0,null,null,1,"app-chart",[],null,null,null,d,h)),u.pb(2,114688,null,0,f,[],{chartLabels:[0,"chartLabels"],chartData:[1,"chartData"]},null),(n()(),u.qb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u.Gb(-1,null,["All task where you Worker"])),(n()(),u.qb(5,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),u.fb(16777216,null,null,1,null,I)),u.pb(7,278528,null,0,s.j,[u.P,u.M,u.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.chartLabels,t.chartData),n(l,7,0,t.tasks)},null)}function q(n){return u.Ib(0,[(n()(),u.Gb(-1,null,["Loading data"]))],null,null)}function P(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),u.qb(1,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.getStatsWithAverage("day")&&u),u},null,null)),(n()(),u.Gb(-1,null,["Day"])),(n()(),u.qb(3,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.getStatsWithAverage("week")&&u),u},null,null)),(n()(),u.Gb(-1,null,["Week"])),(n()(),u.qb(5,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.getStatsWithAverage("months")&&u),u},null,null)),(n()(),u.Gb(-1,null,["Months"])),(n()(),u.qb(7,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.getStatsWithAverage()&&u),u},null,null)),(n()(),u.Gb(-1,null,["All time"])),(n()(),u.fb(16777216,null,null,1,null,S)),u.pb(10,16384,null,0,s.k,[u.P,u.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u.fb(0,[["loadingData",2]],null,0,null,q))],function(n,l){n(l,10,0,!l.component.loading,u.zb(l,11))},null)}function w(n){return u.Ib(0,[(n()(),u.qb(0,0,null,null,1,"app-statistics",[],null,null,null,P,k)),u.pb(1,245760,null,0,o,[x],null,null)],function(n,l){n(l,1,0)},null)}var M=u.mb("app-statistics",o,w,{},{},[]),O=t("gIcY"),D=t("t/Na"),G=t("fbMX"),T=t("ZYCi"),C=t("XPwU"),H=t("NHGN"),L=t("SZbH"),W=t("PCNd"),j=function(){return function(){}}();t.d(l,"StatisticsRoutingModuleNgFactory",function(){return A});var A=u.nb(c,[],function(n){return u.wb([u.xb(512,u.j,u.ab,[[8,[b.a,M]],[3,u.j],u.y]),u.xb(4608,s.m,s.l,[u.v,[2,s.u]]),u.xb(4608,O.s,O.s,[]),u.xb(4608,D.h,D.n,[s.c,u.C,D.l]),u.xb(4608,D.o,D.o,[D.h,D.m]),u.xb(4608,G.a,G.a,[T.o]),u.xb(4608,D.k,D.k,[]),u.xb(6144,D.i,null,[D.k]),u.xb(4608,D.g,D.g,[D.i]),u.xb(6144,D.b,null,[D.g]),u.xb(4608,D.f,D.j,[D.b,u.r]),u.xb(4608,D.c,D.c,[D.f]),u.xb(5120,D.a,function(n,l,t,u,a){return[n,new C.a(l,t,u,a)]},[D.o,G.a,T.o,T.a,D.c]),u.xb(4608,O.d,O.d,[]),u.xb(4608,v.a,v.a,[D.c]),u.xb(4608,H.a,H.a,[L.j,G.a]),u.xb(1073742336,T.q,T.q,[[2,T.v],[2,T.o]]),u.xb(1073742336,s.b,s.b,[]),u.xb(1073742336,O.r,O.r,[]),u.xb(1073742336,O.i,O.i,[]),u.xb(1073742336,D.e,D.e,[]),u.xb(1073742336,D.d,D.d,[]),u.xb(1073742336,O.p,O.p,[]),u.xb(1073742336,p.b,p.b,[]),u.xb(1073742336,W.a,W.a,[]),u.xb(1073742336,j,j,[]),u.xb(1073742336,c,c,[]),u.xb(256,D.l,"XSRF-TOKEN",[]),u.xb(256,D.m,"X-XSRF-TOKEN",[]),u.xb(1024,T.m,function(){return[[{path:"",component:o}]]},[])])})}}]);