(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{205:function(e,t,a){"use strict";var n=a(11),l=a(1),r=a.n(l),c=(a(27),a(36)),i=a(237),o=a(238),u=a(58),s=c.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,l=e.tag,c=e.className,m=e.children,d=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),f=s.b("px-3",c);return r.a.createElement(l,Object.assign({className:f},d),r.a.createElement("div",{className:s.e("header")},t&&"string"===typeof t?r.a.createElement(u.a,{type:"h1",className:s.e("title")},t):t,a&&r.a.createElement(i.a,{className:s.e("breadcrumb")},r.a.createElement(o.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return r.a.createElement(o.a,{key:t,active:n},a)}))),m)};m.defaultProps={tag:"div",title:""},t.a=m},207:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(197),c=a(198),i=a(181),o=a(182),u=a(183);t.a=function(e){return l.a.createElement(r.a,null,l.a.createElement(c.a,{md:6},l.a.createElement(i.a,null,l.a.createElement(o.a,{for:"from"},"Da"),l.a.createElement(u.a,{type:"date",name:"from",id:"from",placeholder:"Data inizio",defaultValue:e.fromStartDate,onChange:function(t){return e.onChange(t.target.value,"from")}}))),l.a.createElement(c.a,{md:6},l.a.createElement(i.a,null,l.a.createElement(o.a,{for:"exampleDate"},"A"),l.a.createElement(u.a,{type:"date",name:"date",id:"to",placeholder:"Data Fine",defaultValue:e.toStartDate,onChange:function(t){return e.onChange(t.target.value,"to")}}))))}},208:function(e,t,a){"use strict";var n=a(12),l=a(13),r=a(15),c=a(14),i=a(16),o=a(1),u=a.n(o),s=a(212),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){s.isMobile&&document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")}}]),t}(u.a.Component);t.a=m},209:function(e,t,a){"use strict";var n=a(1),l=a.n(n);t.a=function(e){return l.a.createElement("tr",null,l.a.createElement("td",{colSpan:e.colspan},e.children||"Nessun dato presente"))}},213:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(198),c=a(181),i=a(182),o=a(211),u=a(10);t.a=function(e){return l.a.createElement(r.a,{md:6},l.a.createElement(c.a,null,l.a.createElement(i.a,{for:"exampleUrl"},"Filiale"),l.a.createElement(o.a,{isClearable:!0,cacheOptions:!0,loadOptions:function(e){var t="affiliates".concat(e?"?filter[text]="+e:"");return u.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.name}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return function(t){var a=t?t.value:null;e.onChange(a,"affiliate_id")}(t)}})))}},223:function(e,t,a){"use strict";var n=a(59),l=a(1),r=a.n(l),c=a(197),i=a(198),o=a(181),u=a(182),s=a(211),m=a(10);t.a=function(e){var t=Object(l.useState)(null),a=Object(n.a)(t,2),d=a[0],f=a[1];return r.a.createElement(c.a,null,r.a.createElement(i.a,{md:6},r.a.createElement(o.a,null,r.a.createElement(u.a,{for:"exampleUrl"},"Gruppo Cliente"),r.a.createElement(s.a,{isClearable:!0,cacheOptions:!0,loadOptions:function(e){var t="customer-groups".concat(e?"?filter[text]="+e:"");return m.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.description}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return function(t){var a=t?t.value:null;e.onChange(a,"customer_group_id"),f(a)}(t)}}))),r.a.createElement(i.a,{md:6},r.a.createElement(o.a,null,r.a.createElement(u.a,{for:"exampleUrl"},"Cliente"),r.a.createElement(s.a,{isClearable:!0,loadOptions:function(e){var t="customers".concat(e?"?filter[text]="+e:"").concat(d?"&filter[group_id]="+d:"");return m.a.get(t).then(function(e){return e.data.data.map(function(e){return{value:e.id,label:e.attributes.business_name}})}).catch(function(e){console.log("some error",e)})},defaultOptions:!0,onChange:function(t){return e.onChange(t.value,"customer_id")}}))))}},440:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),r=a(15),c=a(14),i=a(16),o=a(205),u=a(0),s=a.n(u),m=a(1),d=a.n(m),f=a(19),h=a(197),E=a(198),p=a(172),b=a(177),g=a(173),v=a(192),C=a(181),O=a(182),y=a(183),_=a(178),F=a(427),j=a(30),S=a(207),x=a(213),k=a(223),N=a(48),D=a.n(N),w=a(42),T=a(209),L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={filters:{affiliate_id:null,customer_id:null,credit_note:!1,from:null,to:null}},a.handleSubmit=function(){var e=a.state.searchClicked;a.setState({searchClicked:!e}),a.props.onLoadStats(null,null,a.state.filters,["affiliate","customer"],null)},a.handleFilterChange=function(e,t){console.log(e);var n=a.state.filters;n[t]=e,a.setState({filters:n})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.stats,n=t.customers,l=0,r=0,c=0,i=d.a.createElement(T.a,{colspan:6});return!1===this.props.loading&&!1===this.props.error&&null!==this.props.stats&&(i=a.map(function(e,t){var a=parseFloat(e.attributes.amount.replace(",",".")),i=parseFloat(e.attributes.amount_prev_year.replace(",",".")),o=parseFloat(e.attributes.vat_amount.replace(",",".")),u=((a-i)/i*100).toFixed(2);return l+=a-o,r+=o,c+=a,d.a.createElement("tr",{key:t},d.a.createElement("td",null,n[e.attributes.customer_id].code),d.a.createElement("td",null,n[e.attributes.customer_id].business_name),d.a.createElement("td",null,n[e.attributes.customer_id].vat_number),d.a.createElement("td",null,(a-o).toFixed(2)),d.a.createElement("td",null,e.attributes.vat_amount),d.a.createElement("td",null,e.attributes.amount),d.a.createElement("td",null,isFinite(u)?"".concat(u,"%"):"100%"))})),d.a.createElement(o.a,{title:"Fatturato clienti",breadcrumbs:[{name:"fatturato clienti",active:!0}]},d.a.createElement(h.a,null,d.a.createElement(E.a,null,d.a.createElement(p.a,{className:"mb-3"},d.a.createElement(b.a,null,"Filtri"),d.a.createElement(g.a,null,d.a.createElement(v.a,{onSubmit:this.handleSubmit},d.a.createElement(S.a,{onChange:this.handleFilterChange.bind(this)}),d.a.createElement(k.a,{onChange:this.handleFilterChange.bind(this)}),d.a.createElement(h.a,null,d.a.createElement(x.a,{onChange:this.handleFilterChange.bind(this)}),d.a.createElement(E.a,{md:6},d.a.createElement(C.a,{check:!0},d.a.createElement(O.a,{check:!0},d.a.createElement(y.a,{type:"checkbox",name:"credit_note",onChange:function(t){return e.handleFilterChange(t.target.checked,"credit_note")}})," ","Senza note credito")))),d.a.createElement(h.a,null,d.a.createElement(E.a,null,d.a.createElement(_.a,{color:"primary",disabled:this.props.loading&&this.state.searchClicked,onClick:this.handleSubmit},"Cerca")))))),d.a.createElement(p.a,{className:"mb-3"},d.a.createElement(g.a,null,d.a.createElement(F.a,{responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Codice"),d.a.createElement("th",null,"Ragione sociale"),d.a.createElement("th",null,"Partita iva"),d.a.createElement("th",null,"Imponibile"),d.a.createElement("th",null,"Iva"),d.a.createElement("th",null,"Totale"),d.a.createElement("th",null,"% anno precedente"))),d.a.createElement("tbody",null,i),d.a.createElement("tfoot",null,d.a.createElement("tr",null,d.a.createElement("th",null,"TOTALI:"),d.a.createElement("td",null),d.a.createElement("td",null),d.a.createElement("td",null,"\u20ac ",l.toFixed(2)),d.a.createElement("td",null,"\u20ac ",r.toFixed(2)),d.a.createElement("td",null,"\u20ac ",c.toFixed(2)),d.a.createElement("td",null)))))))),d.a.createElement(D.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:w.d}))}}]),t}(a(208).a);L.contextTypes={store:s.a.object},L.propTypes={notifications:s.a.array,stats:s.a.array,loading:s.a.bool,error:s.a.bool};t.default=Object(f.connect)(function(e){return{stats:e.statistics.customerDocStatistics,affiliates:e.statistics.affiliates,customers:e.statistics.customers,loading:e.statistics.loading,error:e.statistics.error,notifications:e.notifications}},function(e){return{onLoadStats:function(t,a,n,l,r){return e(j.g(t,a,n,l,r))}}})(L)}}]);
//# sourceMappingURL=15.7dedc4be.chunk.js.map