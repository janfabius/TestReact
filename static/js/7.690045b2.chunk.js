(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,a){"use strict";var n=a(11),r=a(1),l=a.n(r),c=(a(27),a(36)),i=a(237),s=a(238),o=a(58),u=c.a.create("page"),d=function(e){var t=e.title,a=e.breadcrumbs,r=e.tag,c=e.className,d=e.children,p=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=u.b("px-3",c);return l.a.createElement(r,Object.assign({className:m},p),l.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?l.a.createElement(o.a,{type:"h1",className:u.e("title")},t):t,a&&l.a.createElement(i.a,{className:u.e("breadcrumb")},l.a.createElement(s.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return l.a.createElement(s.a,{key:t,active:n},a)}))),d)};d.defaultProps={tag:"div",title:""},t.a=d},207:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(197),c=a(198),i=a(181),s=a(182),o=a(183);t.a=function(e){return r.a.createElement(l.a,null,r.a.createElement(c.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(s.a,{for:"from"},"Da"),r.a.createElement(o.a,{type:"date",name:"from",id:"from",placeholder:"Data inizio",defaultValue:e.fromStartDate,onChange:function(t){return e.onChange(t.target.value,"from")}}))),r.a.createElement(c.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(s.a,{for:"exampleDate"},"A"),r.a.createElement(o.a,{type:"date",name:"date",id:"to",placeholder:"Data Fine",defaultValue:e.toStartDate,onChange:function(t){return e.onChange(t.target.value,"to")}}))))}},208:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),c=a(14),i=a(16),s=a(1),o=a.n(s),u=a(212),d=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u.isMobile&&document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")}}]),t}(o.a.Component);t.a=d},209:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:e.colspan},e.children||"Nessun dato presente"))}},210:function(e,t,a){"use strict";t.a=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")}},213:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(198),c=a(181),i=a(182),s=a(211),o=a(10);t.a=function(e){return r.a.createElement(l.a,{md:6},r.a.createElement(c.a,null,r.a.createElement(i.a,{for:"exampleUrl"},"Filiale"),r.a.createElement(s.a,{isClearable:!0,cacheOptions:!0,loadOptions:function(e){var t="affiliates".concat(e?"?filter[text]="+e:"");return o.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.name}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return function(t){var a=t?t.value:null;e.onChange(a,"affiliate_id")}(t)}})))}},217:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))}},219:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),c=a(14),i=a(16),s=a(1),o=a.n(s),u=a(181),d=a(183),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).handleChangePagination=function(e){a.props.handleChangePagination(e.currentTarget.value)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.options.length;t++)e.push(o.a.createElement("option",{key:this.props.options[t],value:this.props.options[t]},this.props.options[t]));return o.a.createElement(u.a,null,o.a.createElement("label",null,"Elementi per pagina:"),o.a.createElement(d.a,{type:"select",name:"select",id:"per_page",onChange:this.handleChangePagination},e))}}]),t}(s.Component);t.a=p},220:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),c=a(14),i=a(16),s=a(60),o=a(1),u=a.n(o),d=a(5),p=a(6),m=a(0),h=a.n(m),g=a(4),f=a.n(g),b=a(2),E={active:h.a.bool,children:h.a.node,className:h.a.string,cssModule:h.a.object,disabled:h.a.bool,tag:b.p},v=function(e){var t=e.active,a=e.className,n=e.cssModule,r=e.disabled,l=e.tag,c=Object(p.a)(e,["active","className","cssModule","disabled","tag"]),i=Object(b.l)(f()(a,"page-item",{active:t,disabled:r}),n);return u.a.createElement(l,Object(d.a)({},c,{className:i}))};v.propTypes=E,v.defaultProps={tag:"li"};var y=v,C={"aria-label":h.a.string,children:h.a.node,className:h.a.string,cssModule:h.a.object,next:h.a.bool,previous:h.a.bool,tag:b.p},x=function(e){var t,a=e.className,n=e.cssModule,r=e.next,l=e.previous,c=e.tag,i=Object(p.a)(e,["className","cssModule","next","previous","tag"]),s=Object(b.l)(f()(a,"page-link"),n);l?t="Previous":r&&(t="Next");var o,m=e["aria-label"]||t;l?o="\xab":r&&(o="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),i.href||"a"!==c||(c="button"),(l||r)&&(h=[u.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||o),u.a.createElement("span",{className:"sr-only",key:"sr"},m)]),u.a.createElement(c,Object(d.a)({},i,{className:s,"aria-label":m}),h)};x.propTypes=C,x.defaultProps={tag:"a"};var P=x,O=a(183),j={children:h.a.node,className:h.a.string,listClassName:h.a.string,cssModule:h.a.object,size:h.a.string,tag:b.p,listTag:b.p,"aria-label":h.a.string},_=function(e){var t,a=e.className,n=e.listClassName,r=e.cssModule,l=e.size,c=e.tag,i=e.listTag,s=e["aria-label"],o=Object(p.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),m=Object(b.l)(f()(a),r),h=Object(b.l)(f()(n,"pagination",((t={})["pagination-"+l]=!!l,t)),r);return u.a.createElement(c,{className:m,"aria-label":s},u.a.createElement(i,Object(d.a)({},o,{className:h})))};_.propTypes=j,_.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var N=_,S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleChangePage=function(e){var t=e.currentTarget.value>a.props.lastPage?a.props.lastPage:e.currentTarget.value;a.props.handleChangePage(t)},a.handleChangePage=a.handleChangePage.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){for(var e=[],t=2;t>0;t--)this.props.currentPage-t>1&&e.push(u.a.createElement(y,{key:this.props.currentPage-t,active:this.props.currentPage===t},u.a.createElement(P,{value:this.props.currentPage-t,onClick:this.handleChangePage},this.props.currentPage-t)));e.push(u.a.createElement(y,{key:t,active:this.props.currentPage===t},u.a.createElement(O.a,{value:this.props.currentPage,type:"number",className:"page-link",style:{width:"100px",fontWeight:"bold"},onChange:this.handleChangePage})));for(t=1;t<3;t++)this.props.currentPage+t<this.props.lastPage&&e.push(u.a.createElement(y,{key:this.props.currentPage+t,active:this.props.currentPage===t},u.a.createElement(P,{value:this.props.currentPage+t,onClick:this.handleChangePage},this.props.currentPage+t)));return u.a.createElement(N,{"aria-label":"Page navigation example"},u.a.createElement(y,{disabled:1===this.props.currentPage,value:"1",key:"first",onClick:this.handleChangePage},u.a.createElement(P,null,"1")),u.a.createElement(y,{disabled:1===this.props.currentPage,value:this.props.currentPage-1,onClick:this.handleChangePage},u.a.createElement(P,{key:"prev",previous:!0})),e,u.a.createElement(y,{disabled:this.props.currentPage===this.props.lastPage,value:this.props.currentPage+1,onClick:this.handleChangePage},u.a.createElement(P,{key:"next",next:!0})),u.a.createElement(y,{disabled:this.props.currentPage===this.props.lastPage,value:this.props.lastPage,onClick:this.handleChangePage},u.a.createElement(P,{key:"last"},this.props.lastPage)))}}]),t}(o.Component);t.a=S},229:function(e,t,a){"use strict";var n=a(59),r=a(1),l=a.n(r),c=a(197),i=a(198),s=a(181),o=a(182),u=a(211),d=a(10);t.a=function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),p=a[0],m=a[1],h=Object(r.useState)(null),g=Object(n.a)(h,2),f=g[0],b=g[1];return l.a.createElement(c.a,null,l.a.createElement(i.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,{for:"exampleUrl"},"Gruppo Prodotto"),l.a.createElement(u.a,{isClearable:!0,cacheOptions:!0,loadOptions:function(e){var t="product-groups".concat(e?"?filter[text]="+e:"");return d.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.description}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return function(t){var a=t?t.value:null;e.onChange(a,"product_group_id"),m(a)}(t)}}))),l.a.createElement(i.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,{for:"exampleUrl"},"Reparto prodotto"),l.a.createElement(u.a,{isClearable:!0,loadOptions:function(e){var t="product-departments".concat(e?"?filter[text]="+e:"").concat(p?"&filter[group_id]="+p:"");return d.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.attributes.code,label:e.attributes.description}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return function(t){var a=t?t.value:null;e.onChange(a,"product_department_id"),b(a)}(t)}}))),l.a.createElement(i.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,{for:"exampleUrl"},"Prodotto"),l.a.createElement(u.a,{isClearable:!0,loadOptions:function(e){if(e.length>3){var t="products".concat(e?"?filter[text]="+e:"").concat(p?"&filter[group_id]="+p:"").concat(f?"&filter[department_id]="+f:"");return d.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.description}})}).catch(function(e){console.log("some error",e)})}},defaultOptions:!0,onChange:function(t){return e.onChange(t.value,"product_id")}}))))}},437:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),l=a(15),c=a(14),i=a(16),s=a(31),o=a(1),u=a.n(o),d=a(0),p=a.n(d),m=a(19),h=a(30),g=a(205),f=a(172),b=a(173),E=a(191),v=a(178),y=a(197),C=a(198),x=a(177),P=a(192),O=a(427),j=a(224),_=a(220),N=a(219),S=a(34),k=a.n(S),D=a(42),T=a(217),F=a(207),w=a(229),B=a(213),M=a(209),A=a(218),R=a(210),z=a(208),G=new Date,I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={filters:{from:Object(R.a)(new Date(G.getFullYear()-1,G.getMonth(),G.getDate())),to:Object(R.a)(new Date(G.getFullYear(),G.getMonth(),G.getDate())),product_group_id:null,product_department_id:null,product_id:null,product_detail_group_id:null,product_detail_department_id:null},groupBy:"groups",groupByRelation:"group",groupByFilterName:"product_group_id",searchClicked:!1,touched:!1,paginateOptions:[10,20,30],currentPage:null,paginateElements:10},a.handleChangePage=function(e){a.setState({currentPage:e},function(){a.handleSubmit()})},a.handleChangePagination=function(e){a.setState({paginateElements:e},function(){a.handleSubmit()})},a.handleFilterChange=function(e,t){var n=a.state.filters;switch(n[t]=e,a.setState({filters:n}),t){case"product_group_id":n.product_detail_group_id=e,a.setState({filters:n});break;case"product_department_id":n.product_detail_department_id=e,a.setState({filters:n});break;case"product_id":n.product_id=e,a.setState({filters:n})}if(null===e)switch(t){case"product_group_id":a.changeGroupBy("");break;case"product_department_id":a.changeGroupBy("groups")}},a.handleSubmit=function(){var e=a.state.searchClicked;a.setState({searchClicked:!e,touched:!0}),a.props.onLoadStats(a.state.currentPage,a.state.paginateElements,a.state.filters,["affiliate","product","group","department"],null)},a.handleDetailClick=function(e,t,n){a.handleFilterChange(e,t),a.handleSubmit(),a.changeGroupBy(n)},a.changeGroupBy=function(e){var t=a.state,n=t.groupBy,r=t.groupByRelation,l=t.groupByFilterName;switch(e){case"groups":n="departments",r="department",l="product_department_id";break;case"departments":n="families",r="family",l="product_id";break;default:n="groups",r="group",l="product_group_id"}a.setState({groupBy:n,groupByRelation:r,groupByFilterName:l})},a.handleReset=function(){var e=a.state.filters;Object.keys(e).forEach(function(t){e[t]=null}),a.setState({filters:e}),a.changeGroupBy("")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=u.a.createElement(M.a,{colspan:7}),a=null,n=null,r=null,l=this.state,c=l.groupBy,i=(l.groupByRelation,l.groupByFilterName),o=l.touched,d=this.props,p=d.stats,m=d.loading,h=d.error,S=(d.searchClicked,{labels:[],datasets:[{label:"Incasso anno corrente",borderColor:Object(T.a)("primary"),backgroundColor:Object(T.a)("primary"),data:[]},{label:"Incasso anno precedente",borderColor:Object(T.a)("secondary"),backgroundColor:Object(T.a)("secondary"),data:[]}]});if(this.props.loading&&(n=u.a.createElement(f.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{color:"primary"})))),!1===m&&!1===h&&null!==p&&!0===o){var R=0,z=0;t=this.props.stats.data.map(function(t){return R+=t.amount,z+=t.amount_prev_year,S.labels.push(t.description),S.datasets[0].data.push(t.amount.toFixed(2)),S.datasets[1].data.push(t.amount_prev_year.toFixed(2)),u.a.createElement("tr",{key:t.id},u.a.createElement("td",{className:"text-left"},u.a.createElement(v.a,{color:"link",onClick:function(){return e.handleDetailClick(t.id,i,c)}},t.description)),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:t.amount,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"}," ",(100*t.amount/R).toFixed(2)," %"),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:t.amount_prev_year,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"},(100*t.amount_prev_year/z).toFixed(2)," %"),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:t.amount-t.amount_prev_year,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"},(100*(t.amount-t.amount_prev_year)/t.amount).toFixed(2)," %"))}),a=u.a.createElement("tr",null,u.a.createElement("th",null,"Totale incassi:"),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:R,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"},"100 %"),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:z,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"},"100 %"),u.a.createElement("td",{className:"text-right"},u.a.createElement(A.a,{value:R-z,displayType:"text",thousandSeparator:".",decimalSeparator:",",decimalScale:2,fixedDecimalScale:!0,renderText:function(e){return u.a.createElement("div",null,e)}})),u.a.createElement("td",{className:"text-right"},(100*(R-z)/R).toFixed(2)," %")),n=u.a.createElement(y.a,null,u.a.createElement(C.a,null,u.a.createElement(f.a,null,u.a.createElement(x.a,null,"Paragone incassi"),u.a.createElement(b.a,null,u.a.createElement(j.Bar,{data:S,options:Object(s.a)({},D.a)}))))),r=u.a.createElement(_.a,{currentPage:this.props.stats.current_page,lastPage:this.props.stats.last_page,handleChangePage:this.handleChangePage.bind(this)})}return u.a.createElement(g.a,{title:"Vendite prodotti",breadcrumbs:[{name:"vendite prodotti",active:!0}]},u.a.createElement(y.a,null,u.a.createElement(C.a,null,u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(x.a,null,"Filtri"),u.a.createElement(b.a,null,u.a.createElement(P.a,{onSubmit:this.handleSubmit},u.a.createElement(F.a,{onChange:this.handleFilterChange.bind(this),fromStartDate:this.state.filters.from,toStartDate:this.state.filters.to}),u.a.createElement(w.a,{onChange:this.handleFilterChange.bind(this)}),u.a.createElement(y.a,null,u.a.createElement(B.a,{onChange:this.handleFilterChange.bind(this)})),u.a.createElement(y.a,null,u.a.createElement(C.a,null,u.a.createElement(v.a,{color:"primary",disabled:this.props.loading&&this.state.searchClicked,onClick:this.handleSubmit},"Cerca"),"\xa0",u.a.createElement(v.a,{color:"secondary",disabled:this.props.loading&&this.state.searchClicked,onClick:this.handleReset},"Reset")))))))),n,u.a.createElement(y.a,null,u.a.createElement(C.a,null,u.a.createElement(f.a,null,u.a.createElement(x.a,null,u.a.createElement(y.a,null,u.a.createElement(C.a,{sm:"12",md:{size:3,offset:9}},u.a.createElement(N.a,{options:this.state.paginateOptions,handleChangePagination:this.handleChangePagination})))),u.a.createElement(b.a,null,u.a.createElement(O.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"text-left"},"Categoria"),u.a.createElement("th",{className:"text-right"},"Anno corrente \u20ac"),u.a.createElement("th",{className:"text-right"},"Incidenza %"),u.a.createElement("th",{className:"text-right"},"Anno precedente \u20ac"),u.a.createElement("th",{className:"text-right"},"Incidenza %"),u.a.createElement("th",{className:"text-right"},"Diff. val \u20ac"),u.a.createElement("th",{className:"text-right"},"Diff %"))),u.a.createElement("tbody",null,t),u.a.createElement("tfoot",null,a)),r)))),u.a.createElement(k.a,{dismissible:!1,notifications:this.props.notifications,style:D.d}))}}]),t}(z.a);I.contextTypes={store:p.a.object},I.propTypes={notifications:p.a.array,stats:p.a.object,affiliates:p.a.object,products:p.a.object,groups:p.a.object,departments:p.a.object,families:p.a.object,loading:p.a.bool,error:p.a.bool,pdfAvaiable:p.a.bool};t.default=Object(m.connect)(function(e){return{stats:e.statistics.history,affiliates:e.statistics.affiliates,products:e.statistics.products,groups:e.statistics.groups,departments:e.statistics.departments,failies:e.statistics.families,loading:e.statistics.loading,error:e.statistics.error,pdfAvaiable:e.statistics.pdfAvaiable,notifications:e.notifications}},function(e){return{onLoadStats:function(t,a,n,r,l){return e(h.h(t,a,n,r,l))}}})(I)}}]);
//# sourceMappingURL=7.690045b2.chunk.js.map