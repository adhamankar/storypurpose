function _defineProperties(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RmqX:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),n=i("kt0X"),r=i("l2bN"),a=i("6NWb"),c=i("tyNb"),o=i("sITn"),u=i("3Pt+"),l=i("jLSX"),b=i("fXoL");i("XNiG"),i("YyRF"),i("LRne"),i("HDdC"),i("xgIS"),i("VRyK"),i("3N8a"),i("IjjT"),i("quSY"),i("/uUt"),i("D0XW"),i("l7GE"),i("ZUHj"),i("PqYM");var f=i("pLZG");i("1G5W"),i("JX91"),i("7o/Q"),i("eIep"),i("jtHE");try{"undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(gt){!1}var h,p,d,g=((d=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:d}),d.\u0275inj=b.Nb({factory:function(t){return new(t||d)}}),d),v=((p=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:p}),p.\u0275inj=b.Nb({factory:function(t){return new(t||p)}}),p),m=((h=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:h}),h.\u0275inj=b.Nb({factory:function(t){return new(t||h)},imports:[[v,g],v]}),h);i("R0Ic");var y=i("7zfz");i("t2ka");var C,k,I,w,S=((w=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:w}),w.\u0275inj=b.Nb({factory:function(t){return new(t||w)},imports:[[s.c]]}),w),O=((I=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:I}),I.\u0275inj=b.Nb({factory:function(t){return new(t||I)},imports:[[s.c,y.e,m,S],y.e,m]}),I),j=((k=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:k}),k.\u0275inj=b.Nb({factory:function(t){return new(t||k)},imports:[[s.c,O,u.c,y.e],O,u.c,y.e]}),k),V=((C=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:C}),C.\u0275inj=b.Nb({factory:function(t){return new(t||C)},imports:[[s.c,j],y.e]}),C),x=i("LPYB"),W=(i("hSFZ"),i("/RsI")),q=i("6ElM"),R={queryContext:null,issuelist:null,viewmode:q.b.LIST,savedSearchlist:null};function $(t,e){switch(e.type){case q.a.SwitchViewmode:return Object.assign(Object.assign({},t),{viewmode:e.payload});case q.a.SetQueryContext:return Object.assign(Object.assign({},t),{queryContext:e.payload});case q.a.SetIssuelist:return Object.assign(Object.assign({},t),{issuelist:e.payload});case q.a.SetSavedSearchlist:return Object.assign(Object.assign({},t),{savedSearchlist:e.payload});default:return t}}var P=i("1kSV"),Q=i("LvDl"),L=i("lJxs"),N=i("krUz"),_=i("SYT+"),z=i("F2Ol"),T=i("cdP3"),K=function(){return["/search/list"]},F=function(t){return{query:t}};function X(t,e){if(1&t&&(b.Wb(0,"div",3),b.Wb(1,"a",4),b.Kc(2),b.Vb(),b.Vb()),2&t){var i=e.$implicit;b.Cb(1),b.pc("routerLink",b.sc(3,K))("queryParams",b.tc(4,F,i.jql)),b.Cb(1),b.Mc(" ",i.name," ")}}function A(t,e){if(1&t&&(b.Wb(0,"div",1),b.Ic(1,X,3,6,"div",2),b.Vb()),2&t){var i=b.kc();b.Cb(1),b.pc("ngForOf",i.searchlist)}}var B,D=((B=function(){function t(e,i,s,n){_classCallCheck(this,t),this.router=e,this.activatedRoute=i,this.jiraService=s,this.store$=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.searchlist$=this.store$.select((function(t){return t.search.savedSearchlist})).pipe(Object(f.a)((function(t){return t}))).subscribe((function(e){return t.searchlist=e})),this.jiraService.favouriteSearches("favourite-search.json").pipe(Object(f.a)((function(t){return t&&t.length>0})),Object(L.a)((function(t){return Q.map(t,(function(t){return Q.pick(t,["id","name","jql"])}))}))).subscribe((function(e){return t.store$.dispatch(new q.e(e))}))}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||B)(b.Qb(c.d),b.Qb(c.a),b.Qb(z.b),b.Qb(n.h))},B.\u0275cmp=b.Kb({type:B,selectors:[["app-favourite-searches"]],decls:3,vars:1,consts:[["class","list-group list-group-flush list-group-flush-compact",4,"ngIf"],[1,"list-group","list-group-flush","list-group-flush-compact"],["class","list-group-item border-0 pl-0",4,"ngFor","ngForOf"],[1,"list-group-item","border-0","pl-0"],[1,"text-muted",3,"routerLink","queryParams"]],template:function(t,e){1&t&&(b.Wb(0,"h6"),b.Kc(1,"Favourite"),b.Vb(),b.Ic(2,A,2,1,"div",0)),2&t&&(b.Cb(2),b.pc("ngIf",e.searchlist))},directives:[s.l,s.k,c.f],encapsulation:2}),B);function E(t,e){1&t&&(b.Wb(0,"div",8),b.Kc(1," No Records found. "),b.Vb())}function H(t,e){1&t&&(b.Wb(0,"a",16),b.Rb(1,"fa-icon",17),b.Kc(2," Storyboard view "),b.Vb()),2&t&&(b.Cb(1),b.pc("fixedWidth",!0))}function Y(t,e){1&t&&(b.Wb(0,"a",18),b.Rb(1,"fa-icon",19),b.Kc(2," Back to list view "),b.Vb()),2&t&&(b.Cb(1),b.pc("fixedWidth",!0))}function G(t,e){if(1&t&&(b.Wb(0,"div",13),b.Ic(1,H,3,1,"a",14),b.Ic(2,Y,3,1,"a",15),b.Vb()),2&t){var i=b.kc(2);b.Cb(1),b.pc("ngIf",i.searchViewmode===i.localViewmode.LIST),b.Cb(1),b.pc("ngIf",i.searchViewmode===i.localViewmode.STORYBOARD)}}function J(t,e){if(1&t){var i=b.Xb();b.Wb(0,"div",20),b.Wb(1,"ngb-pagination",21),b.ic("pageChange",(function(t){return b.Bc(i),b.kc(2).currentPageIndex=t}))("pageChange",(function(){return b.Bc(i),b.kc(2).onPageChange()})),b.Vb(),b.Vb()}if(2&t){var s=b.kc(2);b.Cb(1),b.pc("maxSize",3)("page",s.currentPageIndex)("boundaryLinks",!0)("pageSize",s.issuelist.pageSize)("collectionSize",s.issuelist.total)}}function M(t,e){if(1&t&&(b.Wb(0,"div",9),b.Ic(1,G,3,2,"div",10),b.Ic(2,J,2,5,"div",11),b.Wb(3,"div",12),b.Kc(4),b.Wb(5,"b"),b.Kc(6),b.Vb(),b.Vb(),b.Vb()),2&t){var i=b.kc();b.Cb(1),b.pc("ngIf",i.issuelist&&i.issuelist.results&&i.issuelist.results.length>1),b.Cb(1),b.pc("ngIf",i.issuelist.total>i.issuelist.pageSize),b.Cb(2),b.Nc(" ",i.issuelist.startAt+1," - ",i.issuelist.endAt," / "),b.Cb(2),b.Lc(i.issuelist.total)}}var U,Z=((U=function(){function t(e,i,s,n){var r=this;_classCallCheck(this,t),this.router=e,this.activatedRoute=i,this.jiraService=s,this.store$=n,this.selectedTab=1,this.currentPageIndex=1,this.canNavigate=function(){return r.issuelist&&r.issuelist.trim().length>0},this.canExecuteQuery=function(){return r.query&&r.query.trim().length>0}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.localViewmode=q.b,this.searchViewmode$=this.store$.select((function(t){return t.search.viewmode})).subscribe((function(e){return t.searchViewmode=e})),this.store$.dispatch(new _.o(!0)),this.queryParams$=this.activatedRoute.queryParams.pipe(Object(f.a)((function(t){return t&&t.query&&t.query.length>0})),Object(L.a)((function(t){return t.query}))).subscribe((function(e){t.query=e,t.executeQuery()})),this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(f.a)((function(t){return t}))).subscribe((function(e){return t.issuelist=e}))}},{key:"ngOnDestroy",value:function(){}},{key:"parseQueryContext",value:function(t,e){if(t)return t.issueType!==N.a.Organization&&e.push({key:t.issueType,value:t.key}),t.parent?this.parseQueryContext(t.parent,e):null}},{key:"navigateTo",value:function(t){this.canNavigate()&&this.router.navigate(["/browse",t.trim()])}},{key:"executeQuery",value:function(){var t=this;this.canExecuteQuery()&&this.jiraService.executeJql(this.query,this.currentPageIndex-1,50,["components","labels","fixVersions"],"issuelist.json").pipe(Object(L.a)((function(t){return{total:t.total,startAt:t.startAt,endAt:t.startAt+t.maxResults<t.total?t.startAt+t.maxResults:t.total,pageSize:t.maxResults,results:Q.map(t.issues,(function(t){return Object(N.n)(t)}))}}))).subscribe((function(e){return t.store$.dispatch(new q.c(e))}))}},{key:"onPageChange",value:function(){this.executeQuery()}}]),t}()).\u0275fac=function(t){return new(t||U)(b.Qb(c.d),b.Qb(c.a),b.Qb(z.b),b.Qb(n.h))},U.\u0275cmp=b.Kb({type:U,selectors:[["app-result-container"]],decls:10,vars:2,consts:[[1,"main-container"],["direction","horizontal"],["size","15",1,"small","pt-2","pl-3"],["size","85"],[1,"body-container"],[1,"container-fluid"],["class","center-text custom-shadow alert-warning p-4",4,"ngIf"],["class","footer-container bg-light",4,"ngIf"],[1,"center-text","custom-shadow","alert-warning","p-4"],[1,"footer-container","bg-light"],["class","float-right pt-1 ml-2",4,"ngIf"],["class","float-right mt-1 mb-0",4,"ngIf"],[1,"pt-2","small","clearfix"],[1,"float-right","pt-1","ml-2"],["class","btn btn-brand btn-sm","routerLink","storyboard","queryParamsHandling","merge",4,"ngIf"],["class","btn btn-secondary btn-sm","routerLink","list","queryParamsHandling","merge",4,"ngIf"],["routerLink","storyboard","queryParamsHandling","merge",1,"btn","btn-brand","btn-sm"],["icon","map",3,"fixedWidth"],["routerLink","list","queryParamsHandling","merge",1,"btn","btn-secondary","btn-sm"],["icon","chevron-left",3,"fixedWidth"],[1,"float-right","mt-1","mb-0"],["size","sm",3,"maxSize","page","boundaryLinks","pageSize","collectionSize","pageChange"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Wb(1,"as-split",1),b.Wb(2,"as-split-area",2),b.Rb(3,"app-favourite-searches"),b.Vb(),b.Wb(4,"as-split-area",3),b.Wb(5,"div",4),b.Wb(6,"div",5),b.Rb(7,"router-outlet"),b.Ic(8,E,2,0,"div",6),b.Vb(),b.Vb(),b.Ic(9,M,7,5,"div",7),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Cb(8),b.pc("ngIf",e.issuelist&&0===e.issuelist.total),b.Cb(1),b.pc("ngIf",e.issuelist&&e.issuelist.total>0))},directives:[T.c,T.b,D,c.h,s.l,c.f,a.a,P.q],encapsulation:2}),U),tt=function(t,e){return["/browse",t,"purpose",e]};function et(t,e){if(1&t&&(b.Wb(0,"div",4),b.Wb(1,"a",5),b.Wb(2,"sub",6),b.Kc(3),b.Vb(),b.Rb(4,"fa-icon",7),b.Wb(5,"div"),b.Kc(6),b.Wb(7,"span",8),b.Kc(8),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t){var i=e.$implicit;b.Cb(1),b.pc("routerLink",b.uc(5,tt,i.key,i.key)),b.Cb(2),b.Nc("",i.issueType,": ",i.key,""),b.Cb(3),b.Mc(" ",i.title," "),b.Cb(2),b.Lc(i.status)}}function it(t,e){if(1&t&&(b.Wb(0,"div",2),b.Ic(1,et,9,8,"div",3),b.Vb()),2&t){var i=b.kc();b.Cb(1),b.pc("ngForOf",i.issuelist.results)}}var st,nt=((st=function(){function t(e,i,s,n){var r=this;_classCallCheck(this,t),this.router=e,this.activatedRoute=i,this.jiraService=s,this.store$=n,this.currentPageIndex=1,this.canNavigate=function(){return r.issuelist&&r.issuelist.trim().length>0}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.store$.dispatch(new q.f(q.b.LIST)),this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(f.a)((function(t){return t}))).subscribe((function(e){return t.issuelist=e}))}},{key:"ngOnDestroy",value:function(){}},{key:"navigateTo",value:function(t){this.canNavigate()&&this.router.navigate(["/browse",t.trim()])}}]),t}()).\u0275fac=function(t){return new(t||st)(b.Qb(c.d),b.Qb(c.a),b.Qb(z.b),b.Qb(n.h))},st.\u0275cmp=b.Kb({type:st,selectors:[["app-search-listview"]],decls:2,vars:1,consts:[[1,"container"],["class","p-3 bg-white",4,"ngIf"],[1,"p-3","bg-white"],["class","issue-list-item",4,"ngFor","ngForOf"],[1,"issue-list-item"],[1,"btn","btn-link","btn-sm","text-dark","text-left","w-100","pt-0",3,"routerLink"],[1,"text-primary","text-uppercase"],["icon","angle-right",1,"text-muted","float-right","mt-2"],[1,"badge","badge-light","font-weight-normal"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Ic(1,it,2,1,"div",1),b.Vb()),2&t&&(b.Cb(1),b.pc("ngIf",e.issuelist))},directives:[s.l,s.k,c.f,a.a],encapsulation:2}),st),rt=i("iLqC"),at=i("Ewkv"),ct=i("NGyg");function ot(t,e){if(1&t){var i=b.Xb();b.Wb(0,"p-dialog",5),b.ic("visibleChange",(function(t){return b.Bc(i),b.kc(2).showStatistics=t})),b.Rb(1,"app-statistics",6),b.Vb()}if(2&t){var s=b.kc(2);b.pc("visible",s.showStatistics),b.Cb(1),b.pc("statusStats",s.storyboardItem.statistics.status)("issueTypeStats",s.storyboardItem.statistics.issueTypes)("componentStats",s.storyboardItem.statistics.components)}}var ut=function(){return["far","chart-bar"]};function lt(t,e){if(1&t){var i=b.Xb();b.Wb(0,"div"),b.Wb(1,"button",1),b.ic("click",(function(){return b.Bc(i),b.kc().showStatistics=!0})),b.Rb(2,"fa-icon",2),b.Vb(),b.Rb(3,"app-storyboard-renderer",3),b.Ic(4,ot,2,4,"p-dialog",4),b.Vb()}if(2&t){var s=b.kc();b.Cb(2),b.pc("icon",b.sc(3,ut)),b.Cb(1),b.pc("storyboardItem",s.storyboardItem),b.Cb(1),b.pc("ngIf",s.storyboardItem.statistics)}}var bt,ft=((bt=function(){function t(e,i){_classCallCheck(this,t),this.activatedRoute=e,this.store$=i,this.showStatistics=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.store$.dispatch(new q.f(q.b.STORYBOARD)),this.storyboardItem={query:null,children:[]},this.issuelist$=this.store$.select((function(t){return t.search.issuelist})).pipe(Object(f.a)((function(t){return t}))).subscribe((function(e){t.storyboardItem.metadata=Object(rt.b)(),t.storyboardItem.children=e.results,Object(rt.c)(t.storyboardItem.metadata,Object(rt.a)(t.storyboardItem.children)),t.storyboardItem.statistics=Object(rt.d)(t.storyboardItem)}))}},{key:"ngOnDestroy",value:function(){this.issuelist$&&this.issuelist$.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||bt)(b.Qb(c.a),b.Qb(n.h))},bt.\u0275cmp=b.Kb({type:bt,selectors:[["app-storyboard-view"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"btn","btn-link","float-right","mt-1",3,"click"],["size","lg",3,"icon"],[3,"storyboardItem"],["header","Statistics","position","topright","class","bg-light",3,"visible","visibleChange",4,"ngIf"],["header","Statistics","position","topright",1,"bg-light",3,"visible","visibleChange"],[3,"statusStats","issueTypeStats","componentStats"]],template:function(t,e){1&t&&b.Ic(0,lt,5,4,"div",0),2&t&&b.pc("ngIf",e.storyboardItem)},directives:[s.l,a.a,at.a,W.a,ct.a],encapsulation:2}),bt);i.d(e,"SearchModule",(function(){return dt}));var ht,pt=[{path:"",component:Z,children:[{path:"list",component:nt},{path:"storyboard",component:ft}]}],dt=((ht=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:ht}),ht.\u0275inj=b.Nb({factory:function(t){return new(t||ht)},imports:[[s.c,c.g,u.c,r.b,a.c,l.b,V,W.b,x.b,T.a,P.i,o.a,n.i.forFeature("search",$,{initialState:R}),c.g.forChild(pt)]]}),ht)}}]);