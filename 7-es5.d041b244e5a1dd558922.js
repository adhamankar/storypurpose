function _defineProperties(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RmqX:function(t,e,s){"use strict";s.r(e);var a=s("ofXK"),i=s("kt0X"),n=s("l2bN"),r=s("6NWb"),c=s("tyNb"),o=s("sITn"),u=s("3Pt+"),l=s("jLSX"),b=s("EVgl"),d=s("LPYB"),h=(s("hSFZ"),s("/RsI")),p={queryContext:null,issuelist:null,roadmapView:null,savedSearchlist:null},f=s("LvDl"),v=s("j9Al"),g={SetQueryContext:Object(v.b)("[SetQueryContext]"),LoadSearchResults:Object(v.b)("[LoadSearchResults]"),LoadSearchResultsFailed:Object(v.b)("[LoadSearchResults] Failed"),LoadSearchResultsSuccess:Object(v.b)("[LoadSearchResults] Success"),LoadSavedSearchlist:Object(v.b)("[LoadSavedSearchlist]"),LoadSavedSearchlistFailed:Object(v.b)("[LoadSavedSearchlist] Failed"),LoadSavedSearchlistSuccess:Object(v.b)("[LoadSavedSearchlist] Success"),PopulateSearchResultRoadmapView:Object(v.b)("[PopulateSearchResultRoadmapView]"),LoadSearchResultRoadmapNode:Object(v.b)("[LoadSearchResultRoadmapNode]"),LoadSearchResultRoadmapNodeFailed:Object(v.b)("[LoadSearchResultRoadmapNode] Failed"),LoadSearchResultRoadmapNodeSuccess:Object(v.b)("[LoadSearchResultRoadmapNode] Success")},m=function t(e){_classCallCheck(this,t),this.payload=e,this.type=g.PopulateSearchResultRoadmapView},y=function t(e){_classCallCheck(this,t),this.payload=e,this.type=g.LoadSearchResultRoadmapNode},S=function t(e){_classCallCheck(this,t),this.payload=e,this.type=g.LoadSearchResults},O=function t(e){_classCallCheck(this,t),this.payload=e,this.type=g.LoadSavedSearchlist},k=s("EYUV"),C=s("krUz"),j=s("uAqM");function w(t,e){switch(e.type){case g.SetQueryContext:return Object.assign(Object.assign({},t),{queryContext:e.payload});case g.LoadSearchResults:return Object.assign(Object.assign({},t),{issuelist:[]});case g.LoadSearchResultsSuccess:return Object.assign(Object.assign({},t),{issuelist:e.payload});case g.LoadSavedSearchlist:return Object.assign(Object.assign({},t),{savedSearchlist:[]});case g.LoadSavedSearchlistSuccess:var s=f.map(e.payload,(function(t){return f.pick(t,["id","name","jql"])}));return Object.assign(Object.assign({},t),{savedSearchlist:s});case g.PopulateSearchResultRoadmapView:var a=k.a(e.payload),i=k.b(e.payload,a.timespan,!0);return Object.assign(Object.assign({},t),{roadmapView:{metadata:a,records:i}});case g.LoadSearchResultRoadmapNodeSuccess:var n=e.payload.issueKey,r=e.payload.payload&&e.payload.payload.issues?f.map(e.payload.payload.issues,(function(t){return Object(C.q)(t)})):[],c=k.b(r,t.roadmapView.metadata.timespan,!1);return Object.assign(Object.assign({},t),{roadmapView:Object.assign(Object.assign({},t.roadmapView),{records:t.roadmapView.records.map((function(t){return t&&t.data&&t.data.key===n?Object.assign(Object.assign({},t),{children:c,data:Object.assign(Object.assign({},t.data),{isHeading:c&&c.length>0,statistics:Object(j.d)(Object(j.a)(r),r,t.data.label)})}):t}))})});default:return t}}var R=s("1kSV"),V=s("pLZG"),L=s("lJxs"),W=s("SYT+"),q=s("fXoL"),I=function(){return["/search/list"]},x=function(t){return{query:t}};function $(t,e){if(1&t&&(q.Wb(0,"div",9),q.Wb(1,"a",10),q.Oc(2),q.Vb(),q.Vb()),2&t){var s=e.$implicit;q.Cb(1),q.qc("routerLink",q.tc(3,I))("queryParams",q.uc(4,x,s.jql)),q.Cb(1),q.Qc(" ",s.name," ")}}function P(t,e){if(1&t&&(q.Wb(0,"div",7),q.Mc(1,$,3,6,"div",8),q.Vb()),2&t){var s=q.kc();q.Cb(1),q.qc("ngForOf",s.searchlist)}}var F,M=((F=function(){function t(e){_classCallCheck(this,t),this.store$=e,this.close=new q.n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.searchlist$=this.store$.select((function(t){return t.search.savedSearchlist})).pipe(Object(V.a)((function(t){return t}))).subscribe((function(e){return t.searchlist=e})),this.store$.dispatch(new O(null))}},{key:"ngOnDestroy",value:function(){}},{key:"onClose",value:function(){this.close.emit(null)}}]),t}()).\u0275fac=function(t){return new(t||F)(q.Qb(i.h))},F.\u0275cmp=q.Kb({type:F,selectors:[["app-favourite-searches"]],outputs:{close:"close"},decls:10,vars:1,consts:[[1,"pane"],[1,"pane-header"],[1,"pane-body","pl-4","pr-4"],["class","list-group list-group-flush list-group-flush-compact",4,"ngIf"],[1,"pane-footer","text-right"],[1,"btn","btn-default","btn-sm",3,"click"],["icon","times",1,"mr-1"],[1,"list-group","list-group-flush","list-group-flush-compact"],["class","list-group-item border-0 pl-0",4,"ngFor","ngForOf"],[1,"list-group-item","border-0","pl-0"],[1,"text-muted","text-nowrap",3,"routerLink","queryParams"]],template:function(t,e){1&t&&(q.Wb(0,"div",0),q.Wb(1,"div",1),q.Wb(2,"h4"),q.Oc(3,"Favorite"),q.Vb(),q.Vb(),q.Wb(4,"div",2),q.Mc(5,P,2,1,"div",3),q.Vb(),q.Wb(6,"div",4),q.Wb(7,"button",5),q.ic("click",(function(){return e.onClose()})),q.Rb(8,"fa-icon",6),q.Oc(9," Close "),q.Vb(),q.Vb(),q.Vb()),2&t&&(q.Cb(5),q.qc("ngIf",e.searchlist))},directives:[a.m,r.a,a.l,c.f],encapsulation:2}),F);function N(t,e){if(1&t){var s=q.Xb();q.Wb(0,"div",13),q.Wb(1,"ngb-pagination",14),q.ic("pageChange",(function(t){return q.Fc(s),q.kc().currentPageIndex=t}))("pageChange",(function(){return q.Fc(s),q.kc().onPageChange()})),q.Vb(),q.Vb()}if(2&t){var a=q.kc();q.Cb(1),q.qc("maxSize",3)("page",a.currentPageIndex)("boundaryLinks",!0)("pageSize",a.issuelist.pageSize)("collectionSize",a.issuelist.total)}}function Q(t,e){if(1&t&&(q.Wb(0,"div",15),q.Oc(1),q.Wb(2,"b"),q.Oc(3),q.Vb(),q.Vb()),2&t){var s=q.kc();q.Cb(1),q.Rc(" ",s.issuelist.startAt+1," - ",s.issuelist.endAt," / "),q.Cb(2),q.Pc(s.issuelist.total)}}function _(t,e){1&t&&(q.Wb(0,"div",16),q.Wb(1,"a",17),q.Rb(2,"fa-icon",18),q.Oc(3," List "),q.Vb(),q.Wb(4,"a",19),q.Rb(5,"fa-icon",20),q.Oc(6," Storyboard "),q.Vb(),q.Wb(7,"a",21),q.Rb(8,"fa-icon",22),q.Wb(9,"span",23),q.Oc(10,"Roadmap"),q.Vb(),q.Vb(),q.Vb()),2&t&&(q.Cb(2),q.qc("fixedWidth",!0),q.Cb(2),q.qc("routerLinkActive","active"),q.Cb(1),q.qc("fixedWidth",!0),q.Cb(2),q.qc("routerLinkActive","active"))}function z(t,e){1&t&&(q.Wb(0,"div",24),q.Oc(1," No Records found. "),q.Vb())}var A,E=((A=function(){function t(e,s,a){var i=this;_classCallCheck(this,t),this.router=e,this.activatedRoute=s,this.store$=a,this.selectedTab=1,this.currentPageIndex=1,this.showSavedSearches=!1,this.canNavigate=function(){return i.issuelist&&i.issuelist.trim().length>0},this.canExecuteQuery=function(){return i.query&&i.query.trim().length>0}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.store$.dispatch(new W.l(!0)),this.queryParams$=this.activatedRoute.queryParams.pipe(Object(V.a)((function(t){return t&&t.query&&t.query.length>0})),Object(L.a)((function(t){return t.query}))).subscribe((function(e){t.query=e,t.executeQuery()})),this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(V.a)((function(t){return t}))).subscribe((function(e){return t.issuelist=e}))}},{key:"ngOnDestroy",value:function(){}},{key:"parseQueryContext",value:function(t,e){if(t)return t.issueType!==C.a.Organization&&e.push({key:t.issueType,value:t.key}),t.parent?this.parseQueryContext(t.parent,e):null}},{key:"navigateTo",value:function(t){this.canNavigate()&&this.router.navigate(["/browse",t.trim()])}},{key:"executeQuery",value:function(){this.canExecuteQuery()&&(this.showSavedSearches=!1,this.store$.dispatch(new S({query:this.query,currentPageIndex:this.currentPageIndex})))}},{key:"onPageChange",value:function(){this.executeQuery()}}]),t}()).\u0275fac=function(t){return new(t||A)(q.Qb(c.d),q.Qb(c.a),q.Qb(i.h))},A.\u0275cmp=q.Kb({type:A,selectors:[["app-result-container"]],decls:14,vars:6,consts:[[1,"main-container"],[1,"bg-light","pb-1","border-bottom"],["class","float-right mb-0 mt-1 mr-3",4,"ngIf"],["class","float-right small mt-2 mr-3",4,"ngIf"],[1,"clearfix"],["title","Show/hide saved searches",1,"btn","btn-link","mr-1",3,"click"],["icon","bars",3,"fixedWidth"],["class","btn-group btn-group-sm mr-2",4,"ngIf"],[1,"body-container"],[1,"w-100"],["class","center-text custom-shadow alert-warning p-4",4,"ngIf"],["styleClass","ui-sidebar-sm","position","left",3,"visible","visibleChange","onHide"],[3,"close"],[1,"float-right","mb-0","mt-1","mr-3"],["size","sm",3,"maxSize","page","boundaryLinks","pageSize","collectionSize","pageChange"],[1,"float-right","small","mt-2","mr-3"],[1,"btn-group","btn-group-sm","mr-2"],["routerLink","list","routerLinkActive","active","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap"],["icon","list",3,"fixedWidth"],["routerLink","storyboard","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap",3,"routerLinkActive"],["icon","map",3,"fixedWidth"],["routerLink","roadmap","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap",3,"routerLinkActive"],["icon","map-signs","size","sm"],[1,"ml-1"],[1,"center-text","custom-shadow","alert-warning","p-4"]],template:function(t,e){1&t&&(q.Wb(0,"div",0),q.Wb(1,"div",1),q.Mc(2,N,2,5,"div",2),q.Mc(3,Q,4,3,"div",3),q.Wb(4,"div",4),q.Wb(5,"button",5),q.ic("click",(function(){return e.showSavedSearches=!e.showSavedSearches})),q.Rb(6,"fa-icon",6),q.Vb(),q.Mc(7,_,11,4,"div",7),q.Vb(),q.Vb(),q.Wb(8,"div",8),q.Wb(9,"div",9),q.Rb(10,"router-outlet"),q.Mc(11,z,2,0,"div",10),q.Vb(),q.Vb(),q.Vb(),q.Wb(12,"p-sidebar",11),q.ic("visibleChange",(function(t){return e.showSavedSearches=t}))("onHide",(function(){return e.showSavedSearches=!1})),q.Wb(13,"app-favourite-searches",12),q.ic("close",(function(){return e.showSavedSearches=!1})),q.Vb(),q.Vb()),2&t&&(q.Cb(2),q.qc("ngIf",e.issuelist&&e.issuelist.total>e.issuelist.pageSize),q.Cb(1),q.qc("ngIf",e.issuelist&&e.issuelist.total),q.Cb(3),q.qc("fixedWidth",!0),q.Cb(1),q.qc("ngIf",e.issuelist&&e.issuelist.results&&e.issuelist.results.length>1),q.Cb(4),q.qc("ngIf",e.issuelist&&0===e.issuelist.total),q.Cb(1),q.qc("visible",e.showSavedSearches))},directives:[a.m,r.a,c.h,l.a,M,R.q,c.f,c.e],encapsulation:2}),A),H=function(t){return{"issue-resolved":t}},X=function(t,e){return["/browse",t,"purpose",e]};function K(t,e){if(1&t&&(q.Wb(0,"tr"),q.Wb(1,"td"),q.Rb(2,"i",6),q.Vb(),q.Wb(3,"td"),q.Wb(4,"a",7),q.Oc(5),q.Vb(),q.Vb(),q.Wb(6,"td",8),q.Oc(7),q.Vb(),q.Wb(8,"td",8),q.Oc(9),q.lc(10,"date"),q.Vb(),q.Wb(11,"td",4),q.Oc(12),q.Vb(),q.Vb()),2&t){var s=e.$implicit;q.Cb(2),q.Eb(s.icon),q.qc("title",s.issueType),q.Cb(2),q.qc("ngClass",q.uc(13,H,s.resolution))("routerLink",q.vc(15,X,s.key,s.key)),q.Cb(1),q.Qc(" ",s.key," "),q.Cb(2),q.Pc(s.title),q.Cb(2),q.Pc(q.nc(10,10,s.duedate,"MMM dd,yy")),q.Cb(3),q.Pc(s.status)}}function T(t,e){if(1&t&&(q.Wb(0,"table",1),q.Wb(1,"thead"),q.Wb(2,"tr"),q.Wb(3,"th",2),q.Oc(4,"\xa0"),q.Vb(),q.Wb(5,"th",3),q.Oc(6,"Key"),q.Vb(),q.Wb(7,"th"),q.Oc(8,"Summary"),q.Vb(),q.Wb(9,"th",4),q.Oc(10,"Duedate"),q.Vb(),q.Wb(11,"th",4),q.Oc(12,"Status"),q.Vb(),q.Vb(),q.Vb(),q.Mc(13,K,13,18,"tr",5),q.Vb()),2&t){var s=q.kc();q.Cb(13),q.qc("ngForOf",s.issuelist.results)}}var D,J=((D=function(){function t(e,s,a){var i=this;_classCallCheck(this,t),this.router=e,this.activatedRoute=s,this.store$=a,this.currentPageIndex=1,this.canNavigate=function(){return i.issuelist&&i.issuelist.trim().length>0}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(V.a)((function(t){return t}))).subscribe((function(e){return t.issuelist=e}))}},{key:"ngOnDestroy",value:function(){}},{key:"navigateTo",value:function(t){this.canNavigate()&&this.router.navigate(["/browse",t.trim()])}}]),t}()).\u0275fac=function(t){return new(t||D)(q.Qb(c.d),q.Qb(c.a),q.Qb(i.h))},D.\u0275cmp=q.Kb({type:D,selectors:[["app-search-listview"]],decls:1,vars:1,consts:[["class","table table-striped table-sm issuelist",4,"ngIf"],[1,"table","table-striped","table-sm","issuelist"],["width","1%"],["width","5%"],["width","10%"],[4,"ngFor","ngForOf"],[3,"title"],[1,"text-primary","text-nowrap",3,"ngClass","routerLink"],[1,"text-truncate"]],template:function(t,e){1&t&&q.Mc(0,T,14,1,"table",0),2&t&&q.qc("ngIf",e.issuelist&&e.issuelist.total>0)},directives:[a.m,a.l,c.f,a.k],pipes:[a.e],encapsulation:2}),D),B=s("Ewkv"),G=s("lVkt"),Y=s("NGyg");function U(t,e){if(1&t){var s=q.Xb();q.Wb(0,"p-multiSelect",8),q.ic("ngModelChange",(function(t){return q.Fc(s),q.kc(2).selectedStatuses=t}))("onChange",(function(){return q.Fc(s),q.kc(2).onSelectedStatusChange()})),q.Vb()}if(2&t){var a=q.kc(2);q.qc("options",a.statusLookup)("ngModel",a.selectedStatuses)}}function Z(t,e){if(1&t){var s=q.Xb();q.Wb(0,"p-dialog",9),q.ic("visibleChange",(function(t){return q.Fc(s),q.kc(2).showStatistics=t})),q.Rb(1,"app-statistics",10),q.Vb()}if(2&t){var a=q.kc(2);q.qc("header",a.storyboardItem.statistics.title)("dismissableMask",!0)("modal",!0)("visible",a.showStatistics),q.Cb(1),q.qc("statistics",a.storyboardItem.statistics)}}var tt=function(){return["far","chart-bar"]};function et(t,e){if(1&t){var s=q.Xb();q.Wb(0,"div"),q.Wb(1,"button",1),q.ic("click",(function(){return q.Fc(s),q.kc().showStatistics=!0})),q.Rb(2,"fa-icon",2),q.Vb(),q.Wb(3,"div",3),q.Wb(4,"div",4),q.Mc(5,U,1,2,"p-multiSelect",5),q.Vb(),q.Vb(),q.Rb(6,"app-storyboard-renderer",6),q.Mc(7,Z,2,5,"p-dialog",7),q.Vb()}if(2&t){var a=q.kc();q.Cb(2),q.qc("icon",q.tc(4,tt)),q.Cb(3),q.qc("ngIf",a.statusLookup&&a.statusLookup.length>0),q.Cb(1),q.qc("storyboardItem",a.storyboardItem),q.Cb(1),q.qc("ngIf",a.storyboardItem.statistics)}}var st,at,it=((st=function(){function t(e,s){_classCallCheck(this,t),this.activatedRoute=e,this.store$=s,this.selectedStatuses=[],this.statusLookup=[],this.showStatistics=!1,this.filterByStatus=function(t,e){return e&&e.length>0?f.filter(t,(function(t){return void 0!==f.find(e,(function(e){return e===t.status}))})):t}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.storyboardItem={query:null,children:[]},this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(V.a)((function(t){return t}))).subscribe((function(e){t.issuelist=e,t.plotStoryboard()}))}},{key:"ngOnDestroy",value:function(){this.issuelist$&&this.issuelist$.unsubscribe()}},{key:"plotStoryboard",value:function(){var t=f.map(this.selectedStatuses,"key");this.storyboardItem.metadata=Object(j.b)(),this.storyboardItem.children=this.filterByStatus(this.issuelist.results,t),Object(j.c)(this.storyboardItem.metadata,Object(j.a)(this.storyboardItem.children)),this.storyboardItem.statistics=Object(j.d)(this.storyboardItem.metadata,this.storyboardItem.children),this.storyboardItem.statistics&&this.statusLookup&&0===this.statusLookup.length&&(this.statusLookup=this.storyboardItem.statistics.status)}},{key:"onSelectedStatusChange",value:function(){this.plotStoryboard()}}]),t}()).\u0275fac=function(t){return new(t||st)(q.Qb(c.a),q.Qb(i.h))},st.\u0275cmp=q.Kb({type:st,selectors:[["app-storyboard-view"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"btn","btn-link","float-right",3,"click"],["size","lg",3,"icon"],[1,"row","mt-1"],[1,"offset-md-9","col-md-3"],["styleClass","w-100","defaultLabel","Filter","optionLabel","key",3,"options","ngModel","ngModelChange","onChange",4,"ngIf"],[3,"storyboardItem"],["position","topright","class","bg-light",3,"header","dismissableMask","modal","visible","visibleChange",4,"ngIf"],["styleClass","w-100","defaultLabel","Filter","optionLabel","key",3,"options","ngModel","ngModelChange","onChange"],["position","topright",1,"bg-light",3,"header","dismissableMask","modal","visible","visibleChange"],[3,"statistics"]],template:function(t,e){1&t&&q.Mc(0,et,8,5,"div",0),2&t&&q.qc("ngIf",e.storyboardItem)},directives:[a.m,r.a,B.a,G.a,u.f,u.i,h.a,Y.a],encapsulation:2}),st),nt=s("cdP3"),rt=s("snw9"),ct=s("mrSG"),ot=s("eIep"),ut=s("JIr8"),lt=s("LRne"),bt=s("F2Ol"),dt=((at=function t(e,s){var a=this;_classCallCheck(this,t),this.actions$=e,this.jiraService=s,this.loadSearchlist=this.actions$.pipe(Object(rt.d)(g.LoadSearchResults),Object(ot.a)((function(t){return a.jiraService.executeJql(t.payload.query,t.payload.currentPageIndex-1,50,C.r,"issuelist.json").pipe(Object(L.a)((function(t){return{total:t.total,startAt:t.startAt,endAt:t.startAt+t.maxResults<t.total?t.startAt+t.maxResults:t.total,pageSize:t.maxResults,results:f.map(t.issues,(function(t){return Object(C.q)(t)}))}}))).pipe(Object(L.a)((function(t){return{type:g.LoadSearchResultsSuccess,payload:t}})),Object(ut.a)((function(){return Object(lt.a)({type:g.LoadSearchResultsFailed})})))}))),this.loadSaveSearchlist=this.actions$.pipe(Object(rt.d)(g.LoadSavedSearchlist),Object(ot.a)((function(){return a.jiraService.favouriteSearches("favourite-search.json").pipe(Object(L.a)((function(t){return{type:g.LoadSavedSearchlistSuccess,payload:t}})),Object(ut.a)((function(){return Object(lt.a)({type:g.LoadSavedSearchlistFailed})})))}))),this.loadSearchResultRoadmapNode=this.actions$.pipe(Object(rt.d)(g.LoadSearchResultRoadmapNode),Object(ot.a)((function(t){return a.jiraService.loadEpicChildren$(t.payload).pipe(Object(L.a)((function(e){return{type:g.LoadSearchResultRoadmapNodeSuccess,payload:{issueKey:t.payload,payload:e}}})),Object(ut.a)((function(){return Object(lt.a)({type:g.LoadSearchResultRoadmapNodeFailed})})))})))}).\u0275fac=function(t){return new(t||at)(q.ec(rt.a),q.ec(bt.b))},at.\u0275prov=q.Mb({token:at,factory:at.\u0275fac}),Object(ct.b)([Object(rt.b)()],at.prototype,"loadSearchlist",void 0),Object(ct.b)([Object(rt.b)()],at.prototype,"loadSaveSearchlist",void 0),Object(ct.b)([Object(rt.b)()],at.prototype,"loadSearchResultRoadmapNode",void 0),at),ht=s("VMLX"),pt=["content"];function ft(t,e){if(1&t){var s=q.Xb();q.Wb(0,"app-roadmap-renderer",3),q.ic("nodeExpand",(function(t){return q.Fc(s),q.kc().onNodeExpand(t)})),q.Vb()}if(2&t){var a=q.kc();q.qc("roadmap",a.roadmap)("contentHeight",a.contentHeight)}}var vt,gt=((vt=function(){function t(e,s,a){_classCallCheck(this,t),this.cdRef=e,this.activatedRoute=s,this.store$=a,this.containerSize=80,this.contentHeight=0}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(V.a)((function(t){return t&&t.results})),Object(L.a)((function(t){return t.results}))).subscribe((function(e){t.store$.dispatch(new m(e))})),this.roadmap$=this.store$.select((function(t){return t.search.roadmapView})).pipe(Object(V.a)((function(t){return t}))).subscribe((function(e){return t.roadmap=e}))}},{key:"ngOnDestroy",value:function(){this.issuelist$&&this.issuelist$.unsubscribe(),this.roadmap$&&this.roadmap$.unsubscribe()}},{key:"ngAfterViewInit",value:function(){this.onResize()}},{key:"onResize",value:function(){this.elementView&&(this.contentHeight=this.elementView.nativeElement.offsetParent.clientHeight-this.containerSize,this.cdRef.detectChanges())}},{key:"onNodeExpand",value:function(t){this.store$.dispatch(new y(t))}}]),t}()).\u0275fac=function(t){return new(t||vt)(q.Qb(q.h),q.Qb(c.a),q.Qb(i.h))},vt.\u0275cmp=q.Kb({type:vt,selectors:[["app-roadmap-view"]],viewQuery:function(t,e){var s;1&t&&q.Sc(pt,!0),2&t&&q.Cc(s=q.jc())&&(e.elementView=s.first)},hostBindings:function(t,e){1&t&&q.ic("resize",(function(t){return e.onResize(t)}),!1,q.Ec)},decls:3,vars:1,consts:[[1,"issuelist"],["content",""],[3,"roadmap","contentHeight","nodeExpand",4,"ngIf"],[3,"roadmap","contentHeight","nodeExpand"]],template:function(t,e){1&t&&(q.Wb(0,"div",0,1),q.Mc(2,ft,1,2,"app-roadmap-renderer",2),q.Vb()),2&t&&(q.Cb(2),q.qc("ngIf",e.roadmap))},directives:[a.m,ht.a],encapsulation:2}),vt);s.d(e,"SearchModule",(function(){return St}));var mt,yt=[{path:"",component:E,children:[{path:"list",component:J},{path:"storyboard",component:it},{path:"roadmap",component:gt}]}],St=((mt=function t(){_classCallCheck(this,t)}).\u0275mod=q.Ob({type:mt}),mt.\u0275inj=q.Nb({factory:function(t){return new(t||mt)},imports:[[a.c,c.g,u.c,n.b,r.c,l.b,b.c,h.b,d.b,G.b,nt.a,R.i,o.a,i.j.forFeature("search",w,{initialState:p}),rt.c.forFeature([dt]),c.g.forChild(yt)]]}),mt)}}]);