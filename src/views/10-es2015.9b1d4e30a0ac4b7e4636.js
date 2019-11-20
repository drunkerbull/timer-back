(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7M+/":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("oaey"),a=u("wd/R");class o extends e.a{constructor(l){super(),this.statisticsService=l,this.data=[],this.chartData=[],this.chartLabels=[],this.loading=!0,this.queryLine="",this.currentType="worker",this.currentAverageParams=null,this.totalTime="",this.btnTypes=[{name:"worker",text:"I am worker"},{name:"owner",text:"I am owner of task"},{name:"owner-project",text:"I am owner of project"}],this.btnAverage=[{name:"day",text:"Day"},{name:"week",text:"Week"},{name:"months",text:"Months"},{name:"",text:"All time"}]}ngOnInit(){this.route.queryParamMap.subscribe(l=>{this.currentAverageParams=l.params,this.updateStatsWithParams()})}changeAndUpdateData(l){this.loading=!0,this.currentType=l,this.getStatistics()}updateStatsWithParams(){const l=this.currentAverageParams;this.loading=!0;let n="?";for(let u in l)l[u]&&(n=n+u+"="+l[u]);1===n.length&&(n=""),this.queryLine=n,this.changeAndUpdateData(this.currentType)}getTime(l){return a.duration(l).format("HH:mm:ss",{trim:!1})}getStatistics(){this.data=[],this.statisticsService.getStats(this.currentType,this.queryLine).subscribe(l=>{this.data=l,this.createChart()})}createChart(){this.chartLabels=this.data.map(l=>l.name),this.chartData=[this.data.map(l=>l.total)];const l=this.chartData[0].reduce((l,n)=>l+n);this.totalTime=this.getTime(l),this.loading=!1}getStatsWithAverage(l=""){this.router.navigate([],{relativeTo:this.route,queryParams:{average:l},queryParamsHandling:"merge"})}}class i{}var r=u("pMnS"),b=u("SVse"),c=u("hrfs");u("RiPy")(a);class s{constructor(){this.chartLabels=[],this.chartData=[],this.chartOptions={tooltips:{callbacks:{label:(l,n)=>n.labels[l.index]+": "+a.duration(n.datasets[0].data[l.index]).format("HH:mm:ss",{trim:!1})}}},this.doughnutChartType="doughnut"}ngOnInit(){}}var p=t.mb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),t.nb(2,999424,null,0,c.a,[t.k,c.c],{data:[0,"data"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],function(l,n){var u=n.component;l(n,2,0,u.chartData,u.chartLabels,u.chartOptions,u.doughnutChartType)},null)}function h(l){return t.Eb(0,[(l()(),t.db(16777216,null,null,1,null,m)),t.nb(1,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.chartData.length&&u.chartLabels.length)},null)}var d=u("qNcu"),f=u("/A5B"),g=u("lJxs"),v=u("yTb8");const D=(()=>{class l{constructor(l){this.baseHttp=l}getStats(l,n){return this.baseHttp.get("/statistics/"+l+"/"+n).pipe(Object(g.a)(l=>l))}}return l.ngInjectableDef=t.Gb({factory:function(){return new l(t.Kb(v.a))},token:l,providedIn:"root"}),l})();var k=t.mb({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style-type:circle}[_nghost-%COMP%]{padding-top:16px;display:block}button.active[_ngcontent-%COMP%]{background:red}"]],data:{}});function T(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"button",[],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeAndUpdateData(l.context.$implicit.name)&&t),t},null,null)),(l()(),t.Db(1,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.name===n.component.currentType),l(n,1,0,n.context.$implicit.text)})}function y(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"button",[],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getStatsWithAverage(l.context.$implicit.name)&&t),t},null,null)),(l()(),t.Db(1,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit.name===n.component.currentAverageParams.average),l(n,1,0,n.context.$implicit.text)})}function x(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["The timer is on!"]))],null,null)}function w(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,18,"li",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task:"])),(l()(),t.Db(4,null,[" "," || "])),(l()(),t.ob(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task owner:"])),(l()(),t.Db(8,null,[" "," || "])),(l()(),t.ob(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Time: "])),(l()(),t.Db(12,null,[" "," || "])),(l()(),t.ob(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Project:"])),(l()(),t.Db(16,null,[" "," "])),(l()(),t.db(16777216,null,null,1,null,x)),t.nb(18,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,18,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.owner.nickname),l(n,12,0,u.getTime(n.context.$implicit.total)),l(n,16,0,n.context.$implicit.project.name)})}function I(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["All task where you Worker"])),(l()(),t.ob(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,w)),t.nb(5,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function j(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["The timer is on!"]))],null,null)}function E(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,18,"li",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task:"])),(l()(),t.Db(4,null,[" "," || "])),(l()(),t.ob(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task worker:"])),(l()(),t.Db(8,null,[" "," || "])),(l()(),t.ob(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Time: "])),(l()(),t.Db(12,null,[" "," || "])),(l()(),t.ob(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Project:"])),(l()(),t.Db(16,null,[" "," "])),(l()(),t.db(16777216,null,null,1,null,j)),t.nb(18,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,18,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.worker.nickname),l(n,12,0,u.getTime(n.context.$implicit.total)),l(n,16,0,n.context.$implicit.project.name)})}function O(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["All task where you Owner"])),(l()(),t.ob(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,E)),t.nb(5,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function $(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"span",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["The timer is on!"]))],null,null)}function N(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,22,"li",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Project:"])),(l()(),t.Db(4,null,[" "," "])),(l()(),t.ob(5,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task:"])),(l()(),t.Db(8,null,[" "," || "])),(l()(),t.ob(9,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task owner:"])),(l()(),t.Db(12,null,[" "," || "])),(l()(),t.ob(13,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Task worker:"])),(l()(),t.Db(16,null,[" "," || "])),(l()(),t.ob(17,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.ob(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Time: "])),(l()(),t.Db(20,null,[" "," || "])),(l()(),t.db(16777216,null,null,1,null,$)),t.nb(22,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,22,0,n.context.$implicit.timerStarted)},function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.project.name),l(n,8,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.owner.nickname),l(n,16,0,n.context.$implicit.worker.nickname),l(n,20,0,u.getTime(n.context.$implicit.total))})}function A(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["All project where you Owner"])),(l()(),t.ob(3,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,N)),t.nb(5,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.data)},null)}function P(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"app-chart",[],null,null,null,h,p)),t.nb(2,114688,null,0,s,[],{chartLabels:[0,"chartLabels"],chartData:[1,"chartData"]},null),(l()(),t.ob(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(4,null,["Total Time: ",""])),(l()(),t.db(16777216,null,null,1,null,I)),t.nb(6,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,null,1,null,O)),t.nb(8,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.db(16777216,null,null,1,null,A)),t.nb(10,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.chartLabels,u.chartData),l(n,6,0,"worker"===u.currentType),l(n,8,0,"owner"===u.currentType),l(n,10,0,"owner-project"===u.currentType)},function(l,n){l(n,4,0,n.component.totalTime)})}function S(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"app-loader",[],null,null,null,d.b,d.a)),t.nb(1,114688,null,0,f.a,[],null,null)],function(l,n){l(n,1,0)},null)}function K(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,T)),t.nb(2,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(3,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.db(16777216,null,null,1,null,y)),t.nb(6,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.db(16777216,null,null,1,null,P)),t.nb(8,16384,null,0,b.j,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.db(0,[["loadingData",2]],null,0,null,S))],function(l,n){var u=n.component;l(n,2,0,u.btnTypes),l(n,6,0,u.btnAverage),l(n,8,0,!u.loading,t.xb(n,9))},null)}function F(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"app-statistics",[],null,null,null,K,k)),t.nb(1,245760,null,0,o,[D],null,null)],function(l,n){l(n,1,0)},null)}var L=t.kb("app-statistics",o,F,{},{},[]),q=u("s7LF"),M=u("IheW"),C=u("fbMX"),H=u("iInd"),W=u("XPwU"),R=u("tHmd"),X=u("NHGN"),J=u("EApP"),U=u("MNke"),_=u("PCNd");class G{}u.d(n,"StatisticsRoutingModuleNgFactory",function(){return Y});var Y=t.lb(i,[],function(l){return t.ub([t.vb(512,t.j,t.Y,[[8,[r.a,L]],[3,t.j],t.w]),t.vb(4608,b.l,b.k,[t.t,[2,b.t]]),t.vb(4608,q.u,q.u,[]),t.vb(4608,M.h,M.n,[b.c,t.A,M.l]),t.vb(4608,M.o,M.o,[M.h,M.m]),t.vb(4608,C.a,C.a,[H.o]),t.vb(4608,M.k,M.k,[]),t.vb(6144,M.i,null,[M.k]),t.vb(4608,M.g,M.g,[M.i]),t.vb(6144,M.b,null,[M.g]),t.vb(4608,M.f,M.j,[M.b,t.q]),t.vb(4608,M.c,M.c,[M.f]),t.vb(5120,M.a,function(l,n,u,t,e){return[l,new W.a(n,u,t,e)]},[M.o,C.a,H.o,H.a,M.c]),t.vb(4608,q.e,q.e,[]),t.vb(4608,R.g,R.d,[M.c]),t.vb(5120,R.f,R.c,[[3,R.f],R.g,t.A,[2,R.b],[2,b.c]]),t.vb(4608,v.a,v.a,[M.c]),t.vb(4608,X.a,X.a,[J.j,C.a]),t.vb(1073742336,H.q,H.q,[[2,H.v],[2,H.o]]),t.vb(1073742336,b.b,b.b,[]),t.vb(1073742336,q.t,q.t,[]),t.vb(1073742336,q.k,q.k,[]),t.vb(1073742336,M.e,M.e,[]),t.vb(1073742336,M.d,M.d,[]),t.vb(1073742336,q.r,q.r,[]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,R.a,R.a,[]),t.vb(1073742336,U.b,U.b,[]),t.vb(1073742336,_.a,_.a,[]),t.vb(1073742336,G,G,[]),t.vb(1073742336,i,i,[]),t.vb(256,M.l,"XSRF-TOKEN",[]),t.vb(256,M.m,"X-XSRF-TOKEN",[]),t.vb(1024,H.m,function(){return[[{path:"",component:o}]]},[])])})}}]);