function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],n=!0,s=!1,c=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(o){s=!0,c=o}finally{try{n||null==l.return||l.return()}finally{if(s)throw c}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cyGc:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),s=i("kt0X"),c={selectedItem:null,item:null,recentlyViewedItems:[],recentmostItem:null},r=i("j9Al"),l={SetSelectedItem:Object(r.a)("[SetSelectedItem]"),SetPurpose:Object(r.a)("[SetPurpose]"),SetRecentlyViewed:Object(r.a)("[SetRecentlyViewed]")},o=function e(t){_classCallCheck(this,e),this.payload=t,this.type=l.SetSelectedItem},a=function e(t){_classCallCheck(this,e),this.payload=t,this.type=l.SetPurpose};function u(e,t){switch(t.type){case l.SetSelectedItem:return Object.assign(Object.assign({},e),{selectedItem:t.payload});case l.SetPurpose:return Object.assign(Object.assign({},e),{item:t.payload});case l.SetRecentlyViewed:return Object.assign(Object.assign({},e),{recentmostItem:t.payload});default:return e}}var b=i("fXoL"),d=i("pLZG"),p=i("ze3F"),f=i("6NWb"),h=i("l2bN");function m(e,t){if(1&e&&(b.Wb(0,"div",16),b.Wb(1,"h5",17),b.Kc(2),b.Vb(),b.Wb(3,"ngx-md"),b.Kc(4),b.Vb(),b.Vb()),2&e){var i=b.kc().$implicit;b.Cb(2),b.Mc(" ",i.title," "),b.Cb(2),b.Mc(" ",i.purpose," ")}}var g=function(e){return{"float-left":e}};function v(e,t){if(1&e&&(b.Wb(0,"div",7),b.Rb(1,"div",12),b.Wb(2,"div",13),b.Wb(3,"a",9),b.ic("click",(function(){var e=t.$implicit;return e.show=!e.show})),b.Rb(4,"fa-icon",10),b.Wb(5,"span",14),b.Kc(6),b.Vb(),b.Vb(),b.Vb(),b.Ic(7,m,5,2,"div",15),b.Vb()),2&e){var i=t.$implicit;b.pc("ngClass",b.tc(4,g,!i.show)),b.Cb(4),b.pc("icon",i.show?"chevron-down":"chevron-right"),b.Cb(2),b.Mc("",i.issueType," purpose"),b.Cb(1),b.pc("ngIf",i.show)}}var k=function(e){return{small:e}};function y(e,t){if(1&e){var i=b.Xb();b.Wb(0,"div",7),b.Wb(1,"div",8),b.Wb(2,"a",9),b.ic("click",(function(){b.Bc(i);var e=b.kc();return e.showHideAllPurposes(!e.showAll)})),b.Rb(3,"fa-icon",10),b.Vb(),b.Vb(),b.Ic(4,v,8,6,"div",11),b.Vb()}if(2&e){var n=b.kc();b.pc("ngClass",b.tc(3,k,n.fontSizeSmall)),b.Cb(3),b.pc("icon",n.showAll?"angle-double-down":"angle-double-right"),b.Cb(1),b.pc("ngForOf",n.purpose)}}var I,C=((I=function(){function e(t,i){_classCallCheck(this,e),this.persistenceService=t,this.store$=i,this.edit=new b.n,this.showAll=!1,this.fontSizeSmall=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.purpose$=this.store$.select((function(e){return e.purpose.item})).pipe(Object(d.a)((function(e){return e}))).subscribe((function(t){e.purpose=t,e.showHideAllPurposes(!1)}))}},{key:"ngOnDestroy",value:function(){this.purpose$&&this.purpose$.unsubscribe(),this.hierarchySetupVisibility$&&this.hierarchySetupVisibility$.unsubscribe()}},{key:"showHideAllPurposes",value:function(e){var t=this;this.showAll=e,this.purpose&&(this.purpose.forEach((function(e){return e.show=t.showAll})),!this.showAll&&this.purpose.length>0&&(this.purpose[this.purpose.length-1].show=!0))}}]),e}()).\u0275fac=function(e){return new(e||I)(b.Qb(p.a),b.Qb(s.h))},I.\u0275cmp=b.Kb({type:I,selectors:[["app-purpose"]],outputs:{edit:"edit"},decls:9,vars:3,consts:[[1,"row"],[1,"col-md-10"],[3,"ngClass",4,"ngIf"],[1,"col-md-2"],[1,"sticky-title","text-right"],[1,"btn","btn-light","btn-sm","mr-2",3,"disabled","click"],[1,"btn","btn-light",3,"disabled","click"],[3,"ngClass"],[1,"border-0","pb-0","mb-2","float-left"],["title","Show/hide details",1,"btn","btn-light","btn-sm","text-muted","mr-2",3,"click"],["size","fw",3,"icon"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"clearfix"],[1,"text-uppercase","text-muted"],[1,"small"],["class","ml-3 pl-3 pr-3 border-left","style","overflow:auto",4,"ngIf"],[1,"ml-3","pl-3","pr-3","border-left",2,"overflow","auto"],[1,"text-dark","font-weight-normal","mt-1"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Ic(2,y,5,5,"div",2),b.Vb(),b.Wb(3,"div",3),b.Wb(4,"div",4),b.Wb(5,"button",5),b.ic("click",(function(){return t.fontSizeSmall=!0})),b.Kc(6,"A"),b.Vb(),b.Wb(7,"button",6),b.ic("click",(function(){return t.fontSizeSmall=!1})),b.Kc(8,"A"),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Cb(2),b.pc("ngIf",t.purpose&&t.purpose.length>0),b.Cb(3),b.pc("disabled",t.fontSizeSmall),b.Cb(2),b.pc("disabled",!t.fontSizeSmall))},directives:[n.l,n.j,f.a,n.k,h.a],encapsulation:2}),I),V=i("tyNb"),W=i("e/fS"),w=i("3Pt+"),F=i("jLSX"),S=i("krUz"),x=i("LvDl"),j=i("itXk"),O=i("F2Ol");function T(e,t){if(1&e){var i=b.Xb();b.Wb(0,"th",9),b.Wb(1,"a",10),b.ic("click",(function(){return b.Bc(i),b.kc(3).showHideExtendedFields()})),b.Rb(2,"fa-icon",11),b.Vb(),b.Vb()}if(2&e){var n=b.kc(3);b.Cb(2),b.pc("icon",n.hideExtendedFields?"angle-double-right":"angle-double-down")}}function $(e,t){if(1&e&&(b.Wb(0,"span",12),b.Kc(1),b.Vb()),2&e){var i=b.kc(3);b.Cb(1),b.Mc(" ",i.filteredItems.length," ")}}function K(e,t){if(1&e&&(b.Wb(0,"option",16),b.Kc(1),b.Vb()),2&e){var i=t.$implicit;b.pc("value",i.key),b.Cb(1),b.Mc(" ",i.key+" ("+i.count+")","")}}function A(e,t){if(1&e){var i=b.Xb();b.Wb(0,"select",13),b.ic("ngModelChange",(function(e){return b.Bc(i),b.kc(3).issueTypeFilter=e}))("change",(function(){return b.Bc(i),b.kc(3).onFilterChanged()})),b.Wb(1,"option",14),b.Kc(2,"All"),b.Vb(),b.Ic(3,K,2,2,"option",15),b.Vb()}if(2&e){var n=b.kc(3);b.pc("ngModel",n.issueTypeFilter),b.Cb(3),b.pc("ngForOf",n.issueTypeStats)}}function L(e,t){if(1&e&&(b.Wb(0,"option",16),b.Kc(1),b.Vb()),2&e){var i=t.$implicit;b.pc("value",i.key),b.Cb(1),b.Mc(" ",i.key+" ("+i.count+")","")}}function E(e,t){if(1&e){var i=b.Xb();b.Wb(0,"select",13),b.ic("ngModelChange",(function(e){return b.Bc(i),b.kc(3).statusFilter=e}))("change",(function(){return b.Bc(i),b.kc(3).onFilterChanged()})),b.Wb(1,"option",14),b.Kc(2,"All"),b.Vb(),b.Ic(3,L,2,2,"option",15),b.Vb()}if(2&e){var n=b.kc(3);b.pc("ngModel",n.statusFilter),b.Cb(3),b.pc("ngForOf",n.statusStats)}}function M(e,t){if(1&e){var i=b.Xb();b.Wb(0,"td"),b.Wb(1,"a",10),b.ic("click",(function(){b.Bc(i);var e=b.kc().$implicit;return e.hideExtendedFields=!e.hideExtendedFields})),b.Rb(2,"fa-icon",11),b.Vb(),b.Vb()}if(2&e){var n=b.kc().$implicit;b.Cb(2),b.pc("icon",n.hideExtendedFields?"angle-right":"angle-down")}}function _(e,t){if(1&e&&(b.Wb(0,"tr"),b.Wb(1,"td",24),b.Kc(2),b.Vb(),b.Wb(3,"td",25),b.Kc(4),b.Vb(),b.Vb()),2&e){var i=t.$implicit;b.Cb(2),b.Mc("",i.name,":"),b.Cb(2),b.Mc(" ",i.value," ")}}function R(e,t){if(1&e&&(b.Wb(0,"div",22),b.Wb(1,"table",23),b.Ic(2,_,5,2,"tr",8),b.Vb(),b.Vb()),2&e){var i=b.kc().$implicit;b.Cb(2),b.pc("ngForOf",i.extendedFields)}}function P(e,t){if(1&e&&(b.Wb(0,"tr"),b.Ic(1,M,3,1,"td",0),b.Wb(2,"td",17),b.Kc(3),b.Vb(),b.Wb(4,"td"),b.Wb(5,"div"),b.Kc(6),b.Vb(),b.Ic(7,R,3,1,"div",18),b.Vb(),b.Wb(8,"td",19),b.Wb(9,"small",20),b.Kc(10),b.Vb(),b.Vb(),b.Wb(11,"td",19),b.Wb(12,"span",21),b.Kc(13),b.Vb(),b.Vb(),b.Vb()),2&e){var i=t.$implicit,n=b.kc(3);b.Cb(1),b.pc("ngIf",n.hasExtendedFields),b.Cb(2),b.Mc(" ",i.key," "),b.Cb(3),b.Lc(i.title),b.Cb(1),b.pc("ngIf",!i.hideExtendedFields&&i.extendedFields&&i.extendedFields.length>0),b.Cb(3),b.Lc(i.issueType),b.Cb(3),b.Lc(i.status)}}function z(e,t){if(1&e&&(b.Wb(0,"div"),b.Wb(1,"table",2),b.Wb(2,"thead"),b.Wb(3,"tr"),b.Ic(4,T,3,1,"th",3),b.Wb(5,"th",4),b.Ic(6,$,2,1,"span",5),b.Kc(7),b.Vb(),b.Wb(8,"th",6),b.Ic(9,A,4,2,"select",7),b.Vb(),b.Wb(10,"th",6),b.Ic(11,E,4,2,"select",7),b.Vb(),b.Vb(),b.Vb(),b.Ic(12,P,14,6,"tr",8),b.Vb(),b.Vb()),2&e){var i=b.kc(2);b.Cb(4),b.pc("ngIf",i.hasExtendedFields),b.Cb(2),b.pc("ngIf",i.filteredItems.length>0),b.Cb(1),b.Mc(" record",i.filteredItems.length>1?"s":""," "),b.Cb(2),b.pc("ngIf",i.issueTypeStats&&i.issueTypeStats.length>1),b.Cb(2),b.pc("ngIf",i.statusStats&&i.statusStats.length>1),b.Cb(1),b.pc("ngForOf",i.filteredItems)}}function Q(e,t){1&e&&(b.Wb(0,"div",26),b.Kc(1," No detail records found. "),b.Vb())}function D(e,t){if(1&e&&(b.Wb(0,"div"),b.Ic(1,z,13,6,"div",0),b.Ic(2,Q,2,0,"div",1),b.Vb()),2&e){var i=b.kc();b.Cb(1),b.pc("ngIf",i.filteredItems&&i.filteredItems.length>0),b.Cb(1),b.pc("ngIf",i.filteredItems&&0===i.filteredItems.length)}}var B,X=((B=function(){function e(t,i,n){_classCallCheck(this,e),this.jiraService=t,this.persistenceService=i,this.store$=n,this.childIssueType="",this.hasExtendedFields=!1,this.showDetails=!1,this.hideExtendedFields=!0,this.statusFilter="all",this.issueTypeFilter="all"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.store$.select((function(e){return e.purpose.selectedItem})).pipe(Object(d.a)((function(e){return e}))),i=this.store$.select((function(e){return e.app.projects}));this.issueSubscription=Object(j.a)(t,i).subscribe((function(t){var i=_slicedToArray(t,2),n=i[0],s=i[1];e.issue=n,e.issue.project=x.find(s,{key:e.issue.project.key}),e.loadDetails(e.issue)}))}},{key:"ngOnDestroy",value:function(){this.issueSubscription&&this.issueSubscription.unsubscribe(),this.projectsSubscription&&this.projectsSubscription.unsubscribe()}},{key:"loadDetails",value:function(e){var t=this;if(e.project&&e.project.subTaskIssueTypes&&e.project.subTaskIssueTypes.length>0){var i=x.join(x.map(e.project.subTaskIssueTypes,(function(e){return"'".concat(e.name,"'")})),","),n=x.spread(x.union)(x.map(e.project.subTaskIssueTypes,"list"));this.hasExtendedFields=n&&n.length>0;var s=x.map(n,"id");this.jiraService.executeJql("issuetype in (".concat(i,") AND parent=").concat(e.key),0,100,s,"test-cases.json").pipe(Object(d.a)((function(e){return e&&e.issues}))).subscribe((function(e){t.childItems=Object(S.f)(e.issues),t.childItems.forEach((function(e){return e.hideExtendedFields=!0})),Object(S.b)(t.childItems,n),t.onFilterChanged();var i=x.mapValues(x.groupBy(x.map(t.childItems,"status")),(function(e){return e.length}));t.statusStats=Object.keys(i).map((function(e){return{key:e,count:i[e]}}));var s=x.mapValues(x.groupBy(x.map(t.childItems,"issueType")),(function(e){return e.length}));t.issueTypeStats=Object.keys(s).map((function(e){return{key:e,count:s[e]}}))}))}}},{key:"onFilterChanged",value:function(){var e=this;this.filteredItems=x.filter(this.childItems,(function(t){return!(e.statusFilter&&"all"!==e.statusFilter&&t.status!==e.statusFilter||e.issueTypeFilter&&"all"!==e.issueTypeFilter&&t.issueType!==e.issueTypeFilter)})),this.filteredItems=x.orderBy(this.filteredItems,["issueType","status"])}},{key:"showHideExtendedFields",value:function(){var e=this;this.hideExtendedFields=!this.hideExtendedFields,this.childItems&&this.childItems.forEach((function(t){return t.hideExtendedFields=e.hideExtendedFields}))}}]),e}()).\u0275fac=function(e){return new(e||B)(b.Qb(O.b),b.Qb(p.a),b.Qb(s.h))},B.\u0275cmp=b.Kb({type:B,selectors:[["app-task-list"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","alert alert-warning",4,"ngIf"],[1,"table"],["width","1%",4,"ngIf"],["colspan","2",1,"text-muted"],["class","mr-1",4,"ngIf"],["width","10%"],["class","form-control form-control-sm bg-light border-0",3,"ngModel","ngModelChange","change",4,"ngIf"],[4,"ngFor","ngForOf"],["width","1%"],["title","Show/hide details",1,"text-muted",3,"click"],["size","sm",3,"icon"],[1,"mr-1"],[1,"form-control","form-control-sm","bg-light","border-0",3,"ngModel","ngModelChange","change"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["width","5%",1,"text-muted","font-weight-light",2,"white-space","nowrap"],["style","overflow: auto;","class","alert mt-2 p-0 rounded-0 border-0",4,"ngIf"],[2,"white-space","nowrap"],[1,"text-muted"],[1,"pl-1","pr-1","border","rounded","bg-light","small"],[1,"alert","mt-2","p-0","rounded-0","border-0",2,"overflow","auto"],[1,"table","table-small","small","p-0","m-0","border-0","bg-light","extended-fields"],["width","10%",1,"p-1","text-nowrap","text-muted"],["Markdown","",1,"p-1","text-dark"],[1,"alert","alert-warning"]],template:function(e,t){1&e&&b.Ic(0,D,3,2,"div",0),2&e&&b.pc("ngIf",t.issue)},directives:[n.l,n.k,f.a,w.i,w.f,w.g,w.h,w.j,h.a],encapsulation:2}),B);function N(e,t){1&e&&(b.Wb(0,"div"),b.Rb(1,"fa-icon",7),b.Kc(2," There are no extended fields/attributes for this record. "),b.Vb())}var H=function(e){return{small:e}};function J(e,t){if(1&e&&(b.Wb(0,"div",10),b.Wb(1,"div",0),b.Wb(2,"div",11),b.Kc(3),b.Vb(),b.Wb(4,"div",12),b.Wb(5,"ngx-md"),b.Kc(6),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e){var i=t.$implicit,n=b.kc(3);b.Cb(3),b.Lc(i.name),b.Cb(1),b.pc("ngClass",b.tc(3,H,n.fontSizeSmall)),b.Cb(2),b.Mc(" ",i.value," ")}}function G(e,t){if(1&e&&(b.Wb(0,"div",8),b.Ic(1,J,7,5,"div",9),b.Vb()),2&e){var i=b.kc(2);b.Cb(1),b.pc("ngForOf",i.issue.extendedFields)}}function q(e,t){if(1&e&&(b.Wb(0,"div"),b.Ic(1,N,3,0,"div",2),b.Ic(2,G,2,1,"div",6),b.Vb()),2&e){var i=b.kc();b.Cb(1),b.pc("ngIf",!i.issue.extendedFields||0===i.issue.extendedFields.length),b.Cb(1),b.pc("ngIf",i.issue.extendedFields&&i.issue.extendedFields.length>0)}}var U,Z=((U=function(){function e(t){_classCallCheck(this,e),this.store$=t,this.fontSizeSmall=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.issue$=this.store$.select((function(e){return e.purpose.selectedItem})).pipe(Object(d.a)((function(e){return e}))).subscribe((function(t){return e.issue=t}))}},{key:"ngOnDestroy",value:function(){this.issue$&&this.issue$.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||U)(b.Qb(s.h))},U.\u0275cmp=b.Kb({type:U,selectors:[["app-extended-fields"]],decls:8,vars:3,consts:[[1,"row"],[1,"col-md-10"],[4,"ngIf"],[1,"col-md-2","text-right"],[1,"btn","btn-light","btn-sm","mr-2",3,"disabled","click"],[1,"btn","btn-light",3,"disabled","click"],["class","list-group list-group-flush",4,"ngIf"],["icon","exclamation-triangle",1,"text-info"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"col-md-2","small","text-muted","text-uppercase"],[1,"col-md-10",3,"ngClass"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Ic(2,q,3,2,"div",2),b.Vb(),b.Wb(3,"div",3),b.Wb(4,"button",4),b.ic("click",(function(){return t.fontSizeSmall=!0})),b.Kc(5,"A"),b.Vb(),b.Wb(6,"button",5),b.ic("click",(function(){return t.fontSizeSmall=!1})),b.Kc(7,"A"),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Cb(2),b.pc("ngIf",t.issue),b.Cb(2),b.pc("disabled",t.fontSizeSmall),b.Cb(2),b.pc("disabled",!t.fontSizeSmall))},directives:[n.l,f.a,n.k,n.j,h.a],encapsulation:2}),U),Y=i("lJxs"),ee=i("LvOF"),te=i("1kSV");function ie(e,t){if(1&e&&(b.Wb(0,"span",20),b.Kc(1),b.Vb()),2&e){var i=t.$implicit;b.Cb(1),b.Lc(i)}}function ne(e,t){if(1&e&&(b.Wb(0,"div",17),b.Wb(1,"span",18),b.Kc(2,"FIX VERSION: "),b.Vb(),b.Ic(3,ie,2,1,"span",19),b.Vb()),2&e){var i=b.kc(2);b.Cb(3),b.pc("ngForOf",i.selectedItem.fixVersions)}}function se(e,t){if(1&e&&(b.Wb(0,"span",23),b.Kc(1),b.Vb()),2&e){var i=t.$implicit;b.Cb(1),b.Lc(i)}}function ce(e,t){if(1&e&&(b.Wb(0,"div",21),b.Ic(1,se,2,1,"span",22),b.Vb()),2&e){var i=b.kc(2);b.Cb(1),b.pc("ngForOf",i.selectedItem.labels)}}var re=function(){return["far","list-alt"]};function le(e,t){1&e&&(b.Wb(0,"a",24),b.Rb(1,"fa-icon",13),b.Kc(2," Attributes "),b.Vb()),2&e&&(b.pc("routerLinkActive","active"),b.Cb(1),b.pc("icon",b.sc(2,re)))}function oe(e,t){1&e&&(b.Wb(0,"a",25),b.Rb(1,"fa-icon",26),b.Kc(2," Task breakup "),b.Vb()),2&e&&b.pc("routerLinkActive","active")}var ae=function(e){return["../../storyboard",e,"details"]},ue=function(e){return["../../storyboard",e,"list"]},be=function(){return["far","copy"]};function de(e,t){if(1&e&&(b.Wb(0,"div",27),b.Wb(1,"a",28),b.Rb(2,"fa-icon",29),b.Kc(3," Storyboard "),b.Vb(),b.Wb(4,"div",30),b.Rb(5,"button",31),b.Wb(6,"div",32),b.Wb(7,"a",33),b.Rb(8,"fa-icon",13),b.Kc(9," Story list "),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e){var i=b.kc(2);b.Cb(1),b.pc("routerLink",b.tc(5,ae,i.selectedItem.key))("routerLinkActive","active"),b.Cb(6),b.pc("routerLink",b.tc(7,ue,i.selectedItem.key))("routerLinkActive","active"),b.Cb(1),b.pc("icon",b.sc(9,be))}}var pe=function(){return["details"]},fe=function(){return["far","lightbulb"]};function he(e,t){if(1&e&&(b.Wb(0,"div",2),b.Wb(1,"div",3),b.Wb(2,"div"),b.Ic(3,ne,4,1,"div",4),b.Wb(4,"sub",5),b.Kc(5),b.Vb(),b.Wb(6,"sub",6),b.Kc(7),b.Vb(),b.Vb(),b.Wb(8,"h2",7),b.Kc(9),b.Vb(),b.Ic(10,ce,2,1,"div",8),b.Wb(11,"div",9),b.Wb(12,"div",10),b.Wb(13,"div",11),b.Wb(14,"a",12),b.Rb(15,"fa-icon",13),b.Kc(16," Purpose "),b.Vb(),b.Ic(17,le,3,3,"a",14),b.Ic(18,oe,3,1,"a",15),b.Ic(19,de,10,10,"div",16),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e){var i=b.kc();b.Cb(3),b.pc("ngIf",i.selectedItem.fixVersions&&i.selectedItem.fixVersions.length>0),b.Cb(2),b.Nc("",i.selectedItem.issueType,": ",i.selectedItem.key,""),b.Cb(2),b.Mc(" ",i.selectedItem.status," "),b.Cb(2),b.Mc(" ",i.selectedItem.title," "),b.Cb(1),b.pc("ngIf",i.selectedItem.labels&&i.selectedItem.labels.length>0),b.Cb(4),b.pc("routerLink",b.sc(12,pe))("routerLinkActive","active"),b.Cb(1),b.pc("icon",b.sc(13,fe)),b.Cb(2),b.pc("ngIf",i.selectedItem.extendedFields&&i.selectedItem.extendedFields.length>0),b.Cb(1),b.pc("ngIf","Epic"!==i.selectedItem.issueType),b.Cb(1),b.pc("ngIf","Epic"===i.selectedItem.issueType)}}var me,ge=((me=function(){function e(t,i,n,s){_classCallCheck(this,e),this.activatedRoute=t,this.persistenceService=i,this.jiraService=n,this.store$=s}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.localNodeType=S.a,this.selectedItem$=this.store$.select((function(e){return e.purpose.selectedItem})).pipe(Object(d.a)((function(e){return e}))).subscribe((function(t){return e.selectedItem=t})),this.issueQuery$=this.store$.select((function(e){return e.app.hierarchicalIssue})).pipe(Object(d.a)((function(e){return e}))),this.paramsQuery$=this.activatedRoute.params.pipe(Object(d.a)((function(e){return e&&e.selected&&e.selected.length>0})),Object(Y.a)((function(e){return e.selected}))),this.projectsQuery$=this.store$.select((function(e){return e.app.projects})).pipe(Object(d.a)((function(e){return e}))),this.combined$=Object(j.a)(this.issueQuery$,this.paramsQuery$,this.projectsQuery$).subscribe((function(t){var i=_slicedToArray(t,3),n=i[0],s=i[1],c=i[2];e.projects=c;var r=Object(S.m)(n,S.a.Project),l=Object(S.n)(n,s);if(r&&l){l.extendedFields=Object(ee.a)(e.projects,r.key,l.issueType);var a=x.map(l.extendedFields,"id");e.jiraService.getIssueDetails(s,a).pipe(Object(d.a)((function(e){return null!=e&&e.fields}))).subscribe((function(t){Object(S.d)(Object(S.k)(t),l),l.extendedFields=x.map(l.extendedFields,(function(e){return e.value=t.fields[e.id],e}));var i=x.pick(l,["key","label","title","issueType","project","status","description","components","labels","fixVersions","extendedFields","children"]);e.store$.dispatch(new o(i))}))}setTimeout((function(){return e.markIssueSelected(l)}),500)}))}},{key:"ngOnDestroy",value:function(){this.combined$&&this.combined$.unsubscribe(),this.selectedItem$&&this.selectedItem$.unsubscribe()}},{key:"markIssueSelected",value:function(e){var t=this;if(e)if(this.projects&&e.project&&(e.extendedFields=Object(ee.a)(this.projects,e.project.key,e.issueType)),!e.parent||e.parent.issueType!==S.a.RelatedLink||e.description&&0!==e.description.length)this.expandPurpose(e);else{var i=x.map(e.extendedFields,"id");this.jiraService.getIssueDetails(e.key,i).pipe(Object(d.a)((function(e){return null!=e}))).subscribe((function(i){var n=Object(S.k)(i);n&&Object(S.d)(n,e),e.extendedFields=x.map(e.extendedFields,(function(e){return e.value=i.fields[e.id],e})),t.expandPurpose(e)}))}}},{key:"expandPurpose",value:function(e){this.purpose=[],this.populatePurpose(e),x.reverse(this.purpose),this.store$.dispatch(new a(this.purpose))}},{key:"populatePurpose",value:function(e){e&&(e.issueType!==S.a.EpicChildren&&e.issueType!==S.a.RelatedLink&&this.purpose.push({key:e.key,issueType:e.issueType,title:e.title,purpose:e.description,editable:e.editable,hfKey:e.hfKey}),e.parent&&this.populatePurpose(e.parent))}}]),e}()).\u0275fac=function(e){return new(e||me)(b.Qb(V.a),b.Qb(p.a),b.Qb(O.b),b.Qb(s.h))},me.\u0275cmp=b.Kb({type:me,selectors:[["app-container"]],decls:4,vars:1,consts:[[1,"pt-0","pr-3","pb-2","pl-3"],["class","sticky-title pb-3",4,"ngIf"],[1,"sticky-title","pb-3"],[1,"border-bottom"],["class","float-right small",4,"ngIf"],[1,"text-uppercase","mr-2"],[1,"badge","badge-light","small","text-muted","text-uppercase","font-weight-normal"],[1,"font-weight-light","mb-0"],["class","small",4,"ngIf"],[1,"pb-2"],[1,"row"],[1,"col-md-8"],["title","View purpose",1,"btn","btn-link","mr-1","pl-0",3,"routerLink","routerLinkActive"],["size","sm",3,"icon"],["class","btn btn-link mr-1","routerLink","attributes",3,"routerLinkActive",4,"ngIf"],["class","btn btn-link mr-1","routerLink","items",3,"routerLinkActive",4,"ngIf"],["class","btn-group mr-1",4,"ngIf"],[1,"float-right","small"],[1,"small","text-muted"],["class","badge badge-light ml-1",4,"ngFor","ngForOf"],[1,"badge","badge-light","ml-1"],[1,"small"],["class","mr-1 pl-1 pr-1 bg-light text-muted rounded",4,"ngFor","ngForOf"],[1,"mr-1","pl-1","pr-1","bg-light","text-muted","rounded"],["routerLink","attributes",1,"btn","btn-link","mr-1",3,"routerLinkActive"],["routerLink","items",1,"btn","btn-link","mr-1",3,"routerLinkActive"],["icon","list-ol","size","sm"],[1,"btn-group","mr-1"],[1,"btn","btn-link","pr-0",3,"routerLink","routerLinkActive"],["icon","map","size","sm"],["ngbDropdown","","display","dynamic","placement","bottom-right"],["id","dropdownBasic1","ngbDropdownToggle","","title","story list",1,"btn","btn-link"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown-menu-right"],["ngbDropdownItem","",3,"routerLink","routerLinkActive"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Ic(1,he,20,14,"div",1),b.Wb(2,"div"),b.Rb(3,"router-outlet"),b.Vb(),b.Vb()),2&e&&(b.Cb(1),b.pc("ngIf",t.selectedItem))},directives:[n.l,V.h,V.f,V.e,f.a,n.k,te.c,te.g,te.e,te.d],encapsulation:2}),me);i.d(t,"PurposeModule",(function(){return ye}));var ve,ke=[{path:":selected",component:ge,children:[{path:"items",component:X},{path:"attributes",component:Z},{path:"details",component:C},{path:"",redirectTo:"details",pathMatch:"full"}]}],ye=((ve=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:ve}),ve.\u0275inj=b.Nb({factory:function(e){return new(e||ve)},imports:[[n.c,V.g,w.c,h.b,f.c,F.b,te.f,W.a,s.i.forFeature("purpose",u,{initialState:c}),V.g.forChild(ke)]]}),ve)}}]);