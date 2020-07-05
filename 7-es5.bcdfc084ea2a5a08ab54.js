function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],s=!0,n=!1,a=void 0;try{for(var r,c=e[Symbol.iterator]();!(s=(r=c.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(o){n=!0,a=o}finally{try{s||null==c.return||c.return()}finally{if(n)throw a}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RmqX:function(e,t,i){"use strict";i.r(t);var s=i("ofXK"),n=i("kt0X"),a=i("l2bN"),r=i("6NWb"),c=i("tyNb"),o=i("pl0p"),l=i("3Pt+"),u=i("jLSX"),d=i("EVgl"),b=i("LPYB"),h=(i("hSFZ"),i("/RsI")),p={queryContext:null,issuelist:null,timelineView:null,savedSearchlist:null},f=i("LvDl"),y=i("j9Al"),g={SetQueryContext:Object(y.c)("[SetQueryContext]"),LoadSearchResults:Object(y.c)("[LoadSearchResults]"),LoadSearchResultsFailed:Object(y.c)("[LoadSearchResults] Failed"),LoadSearchResultsSuccess:Object(y.c)("[LoadSearchResults] Success"),LoadSavedSearchlist:Object(y.c)("[LoadSavedSearchlist]"),LoadSavedSearchlistFailed:Object(y.c)("[LoadSavedSearchlist] Failed"),LoadSavedSearchlistSuccess:Object(y.c)("[LoadSavedSearchlist] Success"),PopulateSearchResultTimelineView:Object(y.c)("[PopulateSearchResultTimelineView]"),LoadSearchResultTimelineNode:Object(y.c)("[LoadSearchResultTimelineNode]"),LoadSearchResultTimelineNodeFailed:Object(y.c)("[LoadSearchResultTimelineNode] Failed"),LoadSearchResultTimelineNodeSuccess:Object(y.c)("[LoadSearchResultTimelineNode] Success"),UpdateSearchFieldValue:Object(y.c)("[UpdateSearchFieldValue]"),UpdateSearchFieldValueFailed:Object(y.c)("[UpdateSearchFieldValue] Failed"),UpdateSearchFieldValueSuccess:Object(y.c)("[UpdateSearchFieldValue] Success")},v=function e(t){_classCallCheck(this,e),this.payload=t,this.type=g.PopulateSearchResultTimelineView},m=function e(t){_classCallCheck(this,e),this.payload=t,this.type=g.LoadSearchResultTimelineNode},S=function e(t){_classCallCheck(this,e),this.payload=t,this.type=g.LoadSearchResults},C=function e(t){_classCallCheck(this,e),this.payload=t,this.type=g.LoadSavedSearchlist},O=function e(t){_classCallCheck(this,e),this.payload=t,this.type=g.UpdateSearchFieldValue},k=i("iPf6"),I=i("krUz"),j=i("uAqM");function V(e,t){switch(t.type){case g.SetQueryContext:return Object.assign(Object.assign({},e),{queryContext:t.payload});case g.LoadSearchResults:var i=t.payload;return Object.assign(Object.assign({},e),{issuelist:[],queryContext:i});case g.LoadSearchResultsSuccess:return Object.assign(Object.assign({},e),{issuelist:t.payload});case g.LoadSavedSearchlist:return Object.assign(Object.assign({},e),{savedSearchlist:[]});case g.LoadSavedSearchlistSuccess:var s=f.map(t.payload,(function(e){return f.pick(e,["id","name","jql"])}));return Object.assign(Object.assign({},e),{savedSearchlist:s});case g.PopulateSearchResultTimelineView:var n=t.payload.startdateField,a=t.payload.results,r=k.a(a,n),c=k.b(a,r.timespan,n,!0);return Object.assign(Object.assign({},e),{timelineView:{metadata:r,records:c}});case g.LoadSearchResultTimelineNodeSuccess:var o=t.payload.issueKey,l=t.payload.payload&&t.payload.payload.issues?f.map(t.payload.payload.issues,(function(e){return Object(I.u)(e)})):[],u=k.b(l,e.timelineView.metadata.timespan,"created",!1);return Object.assign(Object.assign({},e),{timelineView:Object.assign(Object.assign({},e.timelineView),{records:e.timelineView.records.map((function(e){return e&&e.data&&e.data.key===o?Object.assign(Object.assign({},e),{children:u,data:Object.assign(Object.assign({},e.data),{isHeading:u&&u.length>0,statistics:Object(j.d)(Object(j.a)(l,"components"),l,e.data.label,"components")})}):e}))})});default:return e}}var x=i("1kSV"),w=i("itXk"),F=i("pLZG"),q=i("lJxs"),W=i("SYT+"),L=i("fXoL"),R=function(){return["/search/list"]},_=function(e){return{query:e}};function P(e,t){if(1&e&&(L.Wb(0,"div",9),L.Wb(1,"a",10),L.Oc(2),L.Vb(),L.Vb()),2&e){var i=t.$implicit;L.Cb(1),L.qc("routerLink",L.tc(3,R))("queryParams",L.uc(4,_,i.jql)),L.Cb(1),L.Qc(" ",i.name," ")}}function $(e,t){if(1&e&&(L.Wb(0,"div",7),L.Mc(1,P,3,6,"div",8),L.Vb()),2&e){var i=L.kc();L.Cb(1),L.qc("ngForOf",i.searchlist)}}var M,T=((M=function(){function e(t){_classCallCheck(this,e),this.store$=t,this.close=new L.n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.searchlist$=this.store$.select((function(e){return e.search.savedSearchlist})).pipe(Object(F.a)((function(e){return e}))).subscribe((function(t){return e.searchlist=t})),this.store$.dispatch(new C(null))}},{key:"ngOnDestroy",value:function(){}},{key:"onClose",value:function(){this.close.emit(null)}}]),e}()).\u0275fac=function(e){return new(e||M)(L.Qb(n.h))},M.\u0275cmp=L.Kb({type:M,selectors:[["app-favourite-searches"]],outputs:{close:"close"},decls:10,vars:1,consts:[[1,"pane"],[1,"pane-header"],[1,"pane-body","pl-4","pr-4"],["class","list-group list-group-flush list-group-flush-compact",4,"ngIf"],[1,"pane-footer","text-right"],[1,"btn","btn-default","btn-sm",3,"click"],["icon","times",1,"mr-1"],[1,"list-group","list-group-flush","list-group-flush-compact"],["class","list-group-item border-0 pl-0",4,"ngFor","ngForOf"],[1,"list-group-item","border-0","pl-0"],[1,"text-muted","text-nowrap",3,"routerLink","queryParams"]],template:function(e,t){1&e&&(L.Wb(0,"div",0),L.Wb(1,"div",1),L.Wb(2,"h4"),L.Oc(3,"Favorite"),L.Vb(),L.Vb(),L.Wb(4,"div",2),L.Mc(5,$,2,1,"div",3),L.Vb(),L.Wb(6,"div",4),L.Wb(7,"button",5),L.ic("click",(function(){return t.onClose()})),L.Rb(8,"fa-icon",6),L.Oc(9," Close "),L.Vb(),L.Vb(),L.Vb()),2&e&&(L.Cb(5),L.qc("ngIf",t.searchlist))},directives:[s.n,r.a,s.m,c.f],encapsulation:2}),M);function E(e,t){if(1&e){var i=L.Xb();L.Wb(0,"div",14),L.Wb(1,"ngb-pagination",15),L.ic("pageChange",(function(e){return L.Fc(i),L.kc().currentPageIndex=e}))("pageChange",(function(){return L.Fc(i),L.kc().onPageChange()})),L.Vb(),L.Vb()}if(2&e){var s=L.kc();L.Cb(1),L.qc("maxSize",3)("page",s.currentPageIndex)("boundaryLinks",!0)("pageSize",s.issuelist.pageSize)("collectionSize",s.issuelist.total)}}function Q(e,t){if(1&e&&(L.Wb(0,"div",16),L.Oc(1),L.Wb(2,"b"),L.Oc(3),L.Vb(),L.Vb()),2&e){var i=L.kc();L.Cb(1),L.Rc(" ",i.issuelist.startAt+1," - ",i.issuelist.endAt," / "),L.Cb(2),L.Pc(i.issuelist.total)}}var z=function(){return["far","map"]};function A(e,t){1&e&&(L.Wb(0,"div",17),L.Wb(1,"a",18),L.Rb(2,"fa-icon",19),L.Oc(3," List "),L.Vb(),L.Wb(4,"a",20),L.Rb(5,"fa-icon",21),L.Oc(6," Storyboard "),L.Vb(),L.Wb(7,"a",22),L.Rb(8,"fa-icon",23),L.Wb(9,"span",24),L.Oc(10,"Timeline"),L.Vb(),L.Vb(),L.Vb()),2&e&&(L.Cb(2),L.qc("fixedWidth",!0),L.Cb(2),L.qc("routerLinkActive","active"),L.Cb(1),L.qc("icon",L.tc(5,z))("fixedWidth",!0),L.Cb(2),L.qc("routerLinkActive","active"))}function N(e,t){if(1&e&&(L.Wb(0,"i",25),L.Oc(1),L.Vb()),2&e){var i=L.kc();L.Cb(1),L.Qc(" NOTE: Displaying ",i.issuelist.pageSize," records at a time ")}}function U(e,t){1&e&&(L.Wb(0,"h4",26),L.Rb(1,"fa-icon",27),L.Oc(2," No Records found. "),L.Vb())}var D,B=((D=function(){function e(t,i,s){var n=this;_classCallCheck(this,e),this.router=t,this.activatedRoute=i,this.store$=s,this.selectedTab=1,this.currentPageIndex=1,this.showSavedSearches=!1,this.canNavigate=function(){return n.issuelist&&n.issuelist.trim().length>0},this.canExecuteQuery=function(){return n.query&&n.query.trim().length>0}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.store$.dispatch(new W.m(!0));var t=this.store$.select((function(e){return e.search.queryContext})).pipe(Object(F.a)((function(e){return e&&e.query&&e.query.length>0})),Object(q.a)((function(e){return e.query}))),i=this.activatedRoute.queryParams.pipe(Object(F.a)((function(e){return!e||!e.query})));this.emptyQueryParams$=Object(w.a)(t,i).subscribe((function(t){var i=_slicedToArray(t,1)[0];e.router.navigate([],{relativeTo:e.activatedRoute,queryParams:{query:i}})}));var s=this.activatedRoute.queryParams.pipe(Object(F.a)((function(e){return e&&e.query&&e.query.length>0})),Object(q.a)((function(e){return e.query}))),n=this.store$.select((function(e){return e.app.allExtendedFields}));this.combined$=Object(w.a)(s,n).subscribe((function(t){var i=_slicedToArray(t,2),s=i[0],n=i[1];e.query=s,e.allExtendedFields=n,e.executeQuery()})),this.issuelist$=this.store$.select((function(e){return e.search.issuelist})).subscribe((function(t){return e.issuelist=t}))}},{key:"ngOnDestroy",value:function(){this.combined$&&this.combined$.unsubscribe(),this.emptyQueryParams$&&this.emptyQueryParams$.unsubscribe()}},{key:"parseQueryContext",value:function(e,t){if(e)return e.issueType!==I.a.Organization&&t.push({key:e.issueType,value:e.key}),e.parent?this.parseQueryContext(e.parent,t):null}},{key:"navigateTo",value:function(e){this.canNavigate()&&this.router.navigate(["/browse",e.trim()])}},{key:"executeQuery",value:function(){this.canExecuteQuery()&&(this.showSavedSearches=!1,this.store$.dispatch(new S({query:this.query,allExtendedFields:this.allExtendedFields,currentPageIndex:this.currentPageIndex})))}},{key:"onPageChange",value:function(){this.executeQuery()}}]),e}()).\u0275fac=function(e){return new(e||D)(L.Qb(c.d),L.Qb(c.a),L.Qb(n.h))},D.\u0275cmp=L.Kb({type:D,selectors:[["app-result-container"]],decls:15,vars:7,consts:[[1,"main-container"],[1,"bg-light","pb-1","border-bottom"],["class","float-right mb-0 mt-1 mr-3",4,"ngIf"],["class","float-right small mt-2 mr-3",4,"ngIf"],[1,"clearfix"],["title","Show/hide saved searches",1,"btn","btn-link","mr-1",3,"click"],["icon","bars",3,"fixedWidth"],["class","btn-group btn-group-sm mr-2",4,"ngIf"],["class","small",4,"ngIf"],[1,"body-container"],[1,"w-100"],["class","center-text font-weight-light p-3",4,"ngIf"],["styleClass","ui-sidebar-sm","position","left",3,"visible","visibleChange","onHide"],[3,"close"],[1,"float-right","mb-0","mt-1","mr-3"],["size","sm",3,"maxSize","page","boundaryLinks","pageSize","collectionSize","pageChange"],[1,"float-right","small","mt-2","mr-3"],[1,"btn-group","btn-group-sm","mr-2"],["routerLink","list","routerLinkActive","active","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap"],["icon","list",3,"fixedWidth"],["routerLink","storyboard","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap",3,"routerLinkActive"],[3,"icon","fixedWidth"],["routerLink","timeline","queryParamsHandling","preserve",1,"btn","btn-default","border","text-nowrap",3,"routerLinkActive"],["icon","map-signs","size","sm"],[1,"ml-1"],[1,"small"],[1,"center-text","font-weight-light","p-3"],["icon","exclamation-triangle","size","xs",1,"mr-2","text-muted"]],template:function(e,t){1&e&&(L.Wb(0,"div",0),L.Wb(1,"div",1),L.Mc(2,E,2,5,"div",2),L.Mc(3,Q,4,3,"div",3),L.Wb(4,"div",4),L.Wb(5,"button",5),L.ic("click",(function(){return t.showSavedSearches=!t.showSavedSearches})),L.Rb(6,"fa-icon",6),L.Vb(),L.Mc(7,A,11,6,"div",7),L.Mc(8,N,2,1,"i",8),L.Vb(),L.Vb(),L.Wb(9,"div",9),L.Wb(10,"div",10),L.Rb(11,"router-outlet"),L.Mc(12,U,3,0,"h4",11),L.Vb(),L.Vb(),L.Vb(),L.Wb(13,"p-sidebar",12),L.ic("visibleChange",(function(e){return t.showSavedSearches=e}))("onHide",(function(){return t.showSavedSearches=!1})),L.Wb(14,"app-favourite-searches",13),L.ic("close",(function(){return t.showSavedSearches=!1})),L.Vb(),L.Vb()),2&e&&(L.Cb(2),L.qc("ngIf",t.issuelist&&t.issuelist.total>t.issuelist.pageSize),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.total),L.Cb(3),L.qc("fixedWidth",!0),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.results&&t.issuelist.results.length>1),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.total>t.issuelist.pageSize),L.Cb(4),L.qc("ngIf",t.issuelist&&0===t.issuelist.total),L.Cb(1),L.qc("visible",t.showSavedSearches))},directives:[s.n,r.a,c.h,u.a,T,x.q,c.f,c.e],encapsulation:2}),D),X=function(){function e(t){_classCallCheck(this,e),this.store$=t,this.issueDetailsVisible=!1,this.currentIndex=0}return _createClass(e,[{key:"subscribeIssuelist",value:function(){var e=this;this.issuelist$=this.store$.select((function(e){return e.search.issuelist})).pipe(Object(F.a)((function(e){return e}))).subscribe((function(t){e.issuelist=t,e.onIssuelistLoaded()}))}},{key:"unsubscribeIssuelist",value:function(){}},{key:"onFieldUpdated",value:function(e){this.store$.dispatch(new O(e))}},{key:"openIssueAtIndex",value:function(e){this.issueDetailsVisible=!0,this.currentIndex=e}},{key:"onItemSelected",value:function(e){if(this.issuelist&&this.issuelist.results&&e&&e.issueKey){var t=f.findIndex(this.issuelist.results,{key:e.issueKey});t>=0&&this.openIssueAtIndex(t)}}}]),e}(),H=i("AQDj"),K=i("qUTn"),G=function(e){return{"issue-resolved":e}},J=function(e,t,i){return{"badge-success":e,"badge-warning":t,"badge-light border":i}};function Y(e,t){if(1&e){var i=L.Xb();L.Wb(0,"tr"),L.Wb(1,"td"),L.Rb(2,"i",9),L.Vb(),L.Wb(3,"td"),L.Wb(4,"a",10),L.ic("click",(function(){L.Fc(i);var e=t.index;return L.kc(2).openIssueAtIndex(e)})),L.Oc(5),L.Vb(),L.Vb(),L.Wb(6,"td",11),L.Oc(7),L.Vb(),L.Wb(8,"td",11),L.Oc(9),L.lc(10,"date"),L.Vb(),L.Wb(11,"td"),L.Wb(12,"div",12),L.Oc(13),L.Vb(),L.Vb(),L.Wb(14,"td"),L.Rb(15,"app-issue-navigation-menu",13),L.Vb(),L.Vb()}if(2&e){var s=t.$implicit;L.Cb(2),L.Fb("",s.icon," text-muted"),L.qc("title",s.issueType),L.Cb(2),L.qc("ngClass",L.uc(14,G,s.resolution)),L.Cb(1),L.Qc(" ",s.key," "),L.Cb(2),L.Pc(s.title),L.Cb(2),L.Pc(L.nc(10,11,s.duedate,"MMM dd, yyyy")),L.Cb(3),L.qc("ngClass",L.wc(16,J,s.resolution,!s.resolution&&s.duedateMissing,!s.resolution&&!s.duedateMissing)),L.Cb(1),L.Qc(" ",s.status," "),L.Cb(2),L.qc("issueKey",s.key)}}function Z(e,t){if(1&e&&(L.Wb(0,"table",3),L.Wb(1,"thead"),L.Wb(2,"tr",4),L.Wb(3,"th",5),L.Oc(4,"\xa0"),L.Vb(),L.Wb(5,"th",6),L.Oc(6,"Key"),L.Vb(),L.Wb(7,"th"),L.Oc(8,"Summary"),L.Vb(),L.Wb(9,"th",7),L.Oc(10,"Duedate"),L.Vb(),L.Wb(11,"th",6),L.Oc(12,"Status"),L.Vb(),L.Wb(13,"td",5),L.Oc(14,"\xa0"),L.Vb(),L.Vb(),L.Vb(),L.Mc(15,Y,16,20,"tr",8),L.Vb()),2&e){var i=L.kc();L.Cb(15),L.qc("ngForOf",i.issuelist.results)}}function ee(e,t){if(1&e){var i=L.Xb();L.Wb(0,"app-issue-details",14),L.ic("currentIndexChange",(function(e){return L.Fc(i),L.kc().currentIndex=e}))("close",(function(){return L.Fc(i),L.kc().issueDetailsVisible=!1}))("fieldUpdated",(function(e){return L.Fc(i),L.kc().onFieldUpdated(e)})),L.Vb()}if(2&e){var s=L.kc();L.qc("list",s.issuelist.results)("currentIndex",s.currentIndex)("enableEdits",!0)}}var te,ie=((te=function(e){function t(e,i,s){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,s))).router=e,n.activatedRoute=i,n.store$=s,n.currentPageIndex=1,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){this.subscribeIssuelist()}},{key:"ngOnDestroy",value:function(){this.unsubscribeIssuelist()}},{key:"printExtendedValue",value:function(e){return e?isNaN(Date.parse(e))?e:new Date(e).toDateString():""}},{key:"onIssuelistLoaded",value:function(){}}]),t}(X)).\u0275fac=function(e){return new(e||te)(L.Qb(c.d),L.Qb(c.a),L.Qb(n.h))},te.\u0275cmp=L.Kb({type:te,selectors:[["app-search-listview"]],features:[L.zb],decls:3,vars:5,consts:[["class","table table-striped table-sm issuelist small",4,"ngIf"],["styleClass","bg-light",3,"visible","fullScreen","showCloseIcon","visibleChange"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated",4,"ngIf"],[1,"table","table-striped","table-sm","issuelist","small"],[2,"background-color","#eee"],["width","1%"],["width","5%"],["width","10%"],[4,"ngFor","ngForOf"],[3,"title"],[1,"text-primary","text-nowrap",3,"ngClass","click"],[1,"text-truncate"],[1,"badge","text-truncate","mt-1",3,"ngClass"],[1,"mr-2",3,"issueKey"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated"]],template:function(e,t){1&e&&(L.Mc(0,Z,16,1,"table",0),L.Wb(1,"p-sidebar",1),L.ic("visibleChange",(function(e){return t.issueDetailsVisible=e})),L.Mc(2,ee,1,3,"app-issue-details",2),L.Vb()),2&e&&(L.qc("ngIf",t.issuelist&&t.issuelist.total>0),L.Cb(1),L.qc("visible",t.issueDetailsVisible)("fullScreen",!0)("showCloseIcon",!1),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.results))},directives:[s.n,u.a,s.m,s.l,H.a,K.a],pipes:[s.e],encapsulation:2}),te),se=i("Ewkv"),ne=i("lVkt"),ae=i("NGyg"),re=function(){return["far","chart-bar"]};function ce(e,t){if(1&e){var i=L.Xb();L.Wb(0,"button",13),L.ic("click",(function(){return L.Fc(i),L.kc(2).showStatistics=!0})),L.Rb(1,"fa-icon",14),L.Vb()}2&e&&(L.Cb(1),L.qc("icon",L.tc(1,re)))}function oe(e,t){if(1&e){var i=L.Xb();L.Wb(0,"p-multiSelect",15),L.ic("ngModelChange",(function(e){return L.Fc(i),L.kc(2).selectedStatuses=e}))("onChange",(function(){return L.Fc(i),L.kc(2).onSelectedStatusChange()})),L.Vb()}if(2&e){var s=L.kc(2);L.qc("options",s.statusLookup)("ngModel",s.selectedStatuses)}}function le(e,t){if(1&e){var i=L.Xb();L.Wb(0,"p-dialog",16),L.ic("visibleChange",(function(e){return L.Fc(i),L.kc(2).showStatistics=e})),L.Rb(1,"app-statistics",17),L.Vb()}if(2&e){var s=L.kc(2);L.qc("header",s.storyboardItem.statistics.title)("dismissableMask",!0)("modal",!0)("visible",s.showStatistics),L.Cb(1),L.qc("groupByColumn",s.groupByColumn)("statistics",s.storyboardItem.statistics)}}function ue(e,t){if(1&e){var i=L.Xb();L.Wb(0,"div"),L.Mc(1,ce,2,2,"button",3),L.Wb(2,"div",4),L.Wb(3,"div",5),L.Wb(4,"select",6),L.ic("ngModelChange",(function(e){return L.Fc(i),L.kc().groupByColumn=e}))("change",(function(){return L.Fc(i),L.kc().onGroupByColumnChanged()})),L.Wb(5,"option",7),L.Oc(6,"Components"),L.Vb(),L.Wb(7,"option",8),L.Oc(8,"Labels"),L.Vb(),L.Vb(),L.Vb(),L.Wb(9,"div",9),L.Mc(10,oe,1,2,"p-multiSelect",10),L.Vb(),L.Vb(),L.Wb(11,"app-storyboard-renderer",11),L.ic("itemSelected",(function(e){return L.Fc(i),L.kc().onItemSelected(e)})),L.Vb(),L.Mc(12,le,2,6,"p-dialog",12),L.Vb()}if(2&e){var s=L.kc();L.Cb(1),L.qc("ngIf",s.storyboardItem.statistics),L.Cb(3),L.qc("ngModel",s.groupByColumn),L.Cb(6),L.qc("ngIf",s.statusLookup&&s.statusLookup.length>0),L.Cb(1),L.qc("groupByColumn",s.groupByColumn)("storyboardItem",s.storyboardItem),L.Cb(1),L.qc("ngIf",s.storyboardItem.statistics)}}function de(e,t){if(1&e){var i=L.Xb();L.Wb(0,"app-issue-details",18),L.ic("currentIndexChange",(function(e){return L.Fc(i),L.kc().currentIndex=e}))("close",(function(){return L.Fc(i),L.kc().issueDetailsVisible=!1}))("fieldUpdated",(function(e){return L.Fc(i),L.kc().onFieldUpdated(e)})),L.Vb()}if(2&e){var s=L.kc();L.qc("list",s.issuelist.results)("currentIndex",s.currentIndex)("enableEdits",!0)}}var be,he,pe=((be=function(e){function t(e,i){var s;return _classCallCheck(this,t),(s=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,i))).activatedRoute=e,s.store$=i,s.selectedStatuses=[],s.statusLookup=[],s.showStatistics=!1,s.groupByColumn="components",s.filterByStatus=function(e,t){return t&&t.length>0?f.filter(e,(function(e){return void 0!==f.find(t,(function(t){return t===e.status}))})):e},s}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){this.storyboardItem={query:null,children:[]},this.subscribeIssuelist()}},{key:"ngOnDestroy",value:function(){this.unsubscribeIssuelist()}},{key:"onGroupByColumnChanged",value:function(){this.plotStoryboard()}},{key:"onIssuelistLoaded",value:function(){this.plotStoryboard()}},{key:"plotStoryboard",value:function(){var e=f.map(this.selectedStatuses,"key");this.storyboardItem.metadata=Object(j.b)(this.groupByColumn),this.storyboardItem.children=this.filterByStatus(this.issuelist.results,e),Object(j.c)(this.storyboardItem.metadata,Object(j.a)(this.storyboardItem.children,this.groupByColumn),this.groupByColumn),this.storyboardItem.statistics=Object(j.d)(this.storyboardItem.metadata,this.storyboardItem.children,"Statistics",this.groupByColumn),this.storyboardItem.statistics&&this.statusLookup&&0===this.statusLookup.length&&(this.statusLookup=this.storyboardItem.statistics.status)}},{key:"onSelectedStatusChange",value:function(){this.plotStoryboard()}}]),t}(X)).\u0275fac=function(e){return new(e||be)(L.Qb(c.a),L.Qb(n.h))},be.\u0275cmp=L.Kb({type:be,selectors:[["app-storyboard-view"]],features:[L.zb],decls:3,vars:5,consts:[[4,"ngIf"],["styleClass","bg-light",3,"visible","fullScreen","showCloseIcon","visibleChange"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated",4,"ngIf"],["class","btn btn-link float-right",3,"click",4,"ngIf"],[1,"row","mt-1"],[1,"col-md-2"],[1,"form-control","form-control-sm",2,"width","150px",3,"ngModel","ngModelChange","change"],["value","components"],["value","labels"],[1,"offset-md-8","col-md-2","text-right"],["styleClass","w-100","defaultLabel","Filter","optionLabel","key",3,"options","ngModel","ngModelChange","onChange",4,"ngIf"],[3,"groupByColumn","storyboardItem","itemSelected"],["position","topright","class","bg-light",3,"header","dismissableMask","modal","visible","visibleChange",4,"ngIf"],[1,"btn","btn-link","float-right",3,"click"],["size","lg",3,"icon"],["styleClass","w-100","defaultLabel","Filter","optionLabel","key",3,"options","ngModel","ngModelChange","onChange"],["position","topright",1,"bg-light",3,"header","dismissableMask","modal","visible","visibleChange"],[3,"groupByColumn","statistics"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated"]],template:function(e,t){1&e&&(L.Mc(0,ue,13,6,"div",0),L.Wb(1,"p-sidebar",1),L.ic("visibleChange",(function(e){return t.issueDetailsVisible=e})),L.Mc(2,de,1,3,"app-issue-details",2),L.Vb()),2&e&&(L.qc("ngIf",t.storyboardItem&&t.storyboardItem.children),L.Cb(1),L.qc("visible",t.issueDetailsVisible)("fullScreen",!0)("showCloseIcon",!1),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.results))},directives:[s.n,u.a,l.k,l.f,l.i,l.j,l.l,se.a,r.a,ne.a,h.a,ae.a,K.a],encapsulation:2}),be),fe=i("cdP3"),ye=i("snw9"),ge=i("mrSG"),ve=i("eIep"),me=i("JIr8"),Se=i("LRne"),Ce=i("F2Ol"),Oe=((he=function e(t,i){var s=this;_classCallCheck(this,e),this.actions$=t,this.jiraService=i,this.loadSearchlist=this.actions$.pipe(Object(ye.d)(g.LoadSearchResults),Object(ve.a)((function(e){var t=e.payload.allExtendedFields&&e.payload.allExtendedFields.length>0?f.map(e.payload.allExtendedFields,"id"):[];return s.jiraService.executeJql(e.payload.query,e.payload.currentPageIndex-1,50,f.union(I.w,t),"issuelist.json").pipe(Object(q.a)((function(t){return{total:t.total,startAt:t.startAt,endAt:t.startAt+t.maxResults<t.total?t.startAt+t.maxResults:t.total,pageSize:t.maxResults,extendedFields:e.payload.allExtendedFields,results:f.map(t.issues,(function(t){return Object(I.v)(t,e.payload.allExtendedFields)}))}}))).pipe(Object(q.a)((function(e){return{type:g.LoadSearchResultsSuccess,payload:e}})),Object(me.a)((function(){return Object(Se.a)({type:g.LoadSearchResultsFailed})})))}))),this.loadSaveSearchlist=this.actions$.pipe(Object(ye.d)(g.LoadSavedSearchlist),Object(ve.a)((function(){return s.jiraService.favouriteSearches("favourite-search.json").pipe(Object(q.a)((function(e){return{type:g.LoadSavedSearchlistSuccess,payload:e}})),Object(me.a)((function(){return Object(Se.a)({type:g.LoadSavedSearchlistFailed})})))}))),this.loadSearchResultTimelineNode=this.actions$.pipe(Object(ye.d)(g.LoadSearchResultTimelineNode),Object(ve.a)((function(e){return s.jiraService.loadEpicChildren$(e.payload).pipe(Object(q.a)((function(t){return{type:g.LoadSearchResultTimelineNodeSuccess,payload:{issueKey:e.payload,payload:t}}})),Object(me.a)((function(){return Object(Se.a)({type:g.LoadSearchResultTimelineNodeFailed})})))}))),this.updateSearchFieldValue=this.actions$.pipe(Object(ye.d)(g.UpdateSearchFieldValue),Object(ve.a)((function(e){return s.jiraService.updateFieldValue$(e.payload).pipe(Object(q.a)((function(){return{type:g.UpdateSearchFieldValueSuccess,payload:e.payload}})),Object(me.a)((function(){return Object(Se.a)({type:g.UpdateSearchFieldValueFailed})})))})))}).\u0275fac=function(e){return new(e||he)(L.ec(ye.a),L.ec(Ce.b))},he.\u0275prov=L.Mb({token:he,factory:he.\u0275fac}),Object(ge.b)([Object(ye.b)()],he.prototype,"loadSearchlist",void 0),Object(ge.b)([Object(ye.b)()],he.prototype,"loadSaveSearchlist",void 0),Object(ge.b)([Object(ye.b)()],he.prototype,"loadSearchResultTimelineNode",void 0),Object(ge.b)([Object(ye.b)()],he.prototype,"updateSearchFieldValue",void 0),he),ke=i("5fYs"),Ie=["content"];function je(e,t){if(1&e){var i=L.Xb();L.Wb(0,"app-timeline-renderer",5),L.ic("nodeExpand",(function(e){return L.Fc(i),L.kc().onNodeExpand(e)}))("itemSelected",(function(e){return L.Fc(i),L.kc().onItemSelected(e)})),L.Vb()}if(2&e){var s=L.kc();L.qc("timeline",s.timeline)("contentHeight",s.contentHeight)}}function Ve(e,t){if(1&e){var i=L.Xb();L.Wb(0,"app-issue-details",6),L.ic("currentIndexChange",(function(e){return L.Fc(i),L.kc().currentIndex=e}))("close",(function(){return L.Fc(i),L.kc().issueDetailsVisible=!1}))("fieldUpdated",(function(e){return L.Fc(i),L.kc().onFieldUpdated(e)})),L.Vb()}if(2&e){var s=L.kc();L.qc("list",s.issuelist.results)("currentIndex",s.currentIndex)("enableEdits",!0)}}var xe,we=((xe=function(e){function t(e,i,s){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,s))).cdRef=e,n.activatedRoute=i,n.store$=s,n.containerSize=80,n.contentHeight=0,n.startdateField="created",n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.subscribeIssuelist();var t=this.store$.select((function(e){return e.search.issuelist})).pipe(Object(F.a)((function(e){return e&&e.results})),Object(q.a)((function(e){return e.results}))),i=this.store$.select((function(e){return e.app.projects}));this.combined$=Object(w.a)(t,i).subscribe((function(t){var i=_slicedToArray(t,2),s=i[0],n=i[1];if(n){var a=f.head(n);e.startdateField=a&&a.startdate?a.startdate.id:"created"}e.store$.dispatch(new v({results:s,startdateField:e.startdateField}))})),this.timeline$=this.store$.select((function(e){return e.search.timelineView})).pipe(Object(F.a)((function(e){return e}))).subscribe((function(t){return e.timeline=t}))}},{key:"ngOnDestroy",value:function(){this.unsubscribeIssuelist(),this.combined$&&this.combined$.unsubscribe(),this.timeline$&&this.timeline$.unsubscribe()}},{key:"ngAfterViewInit",value:function(){this.onResize()}},{key:"onResize",value:function(){this.elementView&&(this.contentHeight=this.elementView.nativeElement.offsetParent.clientHeight-this.containerSize,this.cdRef.detectChanges())}},{key:"onNodeExpand",value:function(e){this.store$.dispatch(new m(e))}},{key:"onIssuelistLoaded",value:function(){}}]),t}(X)).\u0275fac=function(e){return new(e||xe)(L.Qb(L.h),L.Qb(c.a),L.Qb(n.h))},xe.\u0275cmp=L.Kb({type:xe,selectors:[["app-timeline-view"]],viewQuery:function(e,t){var i;1&e&&L.Sc(Ie,!0),2&e&&L.Cc(i=L.jc())&&(t.elementView=i.first)},hostBindings:function(e,t){1&e&&L.ic("resize",(function(e){return t.onResize(e)}),!1,L.Ec)},features:[L.zb],decls:5,vars:5,consts:[[1,"issuelist"],["content",""],[3,"timeline","contentHeight","nodeExpand","itemSelected",4,"ngIf"],["styleClass","bg-light",3,"visible","fullScreen","showCloseIcon","visibleChange"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated",4,"ngIf"],[3,"timeline","contentHeight","nodeExpand","itemSelected"],[3,"list","currentIndex","enableEdits","currentIndexChange","close","fieldUpdated"]],template:function(e,t){1&e&&(L.Wb(0,"div",0,1),L.Mc(2,je,1,2,"app-timeline-renderer",2),L.Vb(),L.Wb(3,"p-sidebar",3),L.ic("visibleChange",(function(e){return t.issueDetailsVisible=e})),L.Mc(4,Ve,1,3,"app-issue-details",4),L.Vb()),2&e&&(L.Cb(2),L.qc("ngIf",t.timeline),L.Cb(1),L.qc("visible",t.issueDetailsVisible)("fullScreen",!0)("showCloseIcon",!1),L.Cb(1),L.qc("ngIf",t.issuelist&&t.issuelist.results))},directives:[s.n,u.a,ke.a,K.a],encapsulation:2}),xe),Fe=i("0kVS");i.d(t,"SearchModule",(function(){return Le}));var qe,We=[{path:"",component:B,children:[{path:"list",component:ie},{path:"storyboard",component:pe},{path:"timeline",component:we}]}],Le=((qe=function e(){_classCallCheck(this,e)}).\u0275mod=L.Ob({type:qe}),qe.\u0275inj=L.Nb({factory:function(e){return new(e||qe)},imports:[[s.c,c.g,l.c,Fe.a,a.b,r.c,u.b,d.c,h.b,b.b,ne.b,fe.a,x.i,o.a,n.j.forFeature("search",V,{initialState:p}),ye.c.forFeature([Oe]),c.g.forChild(We)]]}),qe)}}]);