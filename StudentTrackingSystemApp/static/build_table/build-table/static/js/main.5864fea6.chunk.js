(this["webpackJsonp4103-table"]=this["webpackJsonp4103-table"]||[]).push([[0],{101:function(e,t,r){},102:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r.n(s),n=r(18),a=r.n(n),o=(r(76),r(13)),l=r.n(o),i=r(34),d=r(2),u=r(5),j=r(23),b=r(20),h=r(25),O=(r(54),r(70)),p=r(109),m=r(113),f=r(110),x=r(67),v=r(111),N=r(52),g=r.n(N),S=(r(97),r(1));function y(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(s.useState)({cohortList:[],semesterList:[],cohortDropdowns:[],semesterDropdowns:[]}),a=Object(u.a)(n,2),o=a[0],l=a[1],i=Object(s.useState)({title:"",input:""}),d=Object(u.a)(i,2),j=d[0],b=d[1],N=Object(s.useState)({coop:0,total:0,FIR:0,SOP:0,JUN:0,SEN:0}),y=Object(u.a)(N,2),F=y[0],C=y[1];return Object(s.useEffect)((function(){var e="",t=0;"cohort"===j.title.toLowerCase()?e="http://127.0.0.1:8000/api/counts_cohort/"+j.input:(e="http://127.0.0.1:8000/api/counts_semester/"+j.input,t=1),[/\d{4}-\d{4}$/,/\d{4}\/FA|WI|SM$/][t].test(j.input)&&g.a.get(e).then((function(e){C({coop:e.data.countCoop,total:e.data.countTotal,FIR:e.data.FIR,SOP:e.data.SOP,JUN:e.data.JUN,SEN:e.data.SEN})}))}),[j]),Object(s.useEffect)((function(){g.a.get("http://127.0.0.1:8000/api/count_parameters").then((function(e){var t,r=[],s=Object(h.a)(e.data.cohorts);try{for(s.s();!(t=s.n()).done;){var n=t.value;r.push(Object(S.jsx)(O.a.Item,{eventKey:n,children:n}))}}catch(u){s.e(u)}finally{s.f()}var a,o=[],i=Object(h.a)(e.data.semesters);try{for(i.s();!(a=i.n()).done;){var d=a.value;o.push(Object(S.jsx)(O.a.Item,{eventKey:d,children:d}))}}catch(u){i.e(u)}finally{i.f()}l({cohortList:e.data.cohorts,semesterList:e.data.semesters,cohortDropdowns:r,semesterDropdowns:o}),b({title:"Cohort",input:e.data.cohorts[0]}),c(r)}))}),[]),Object(S.jsxs)("div",{className:"countsCard",children:[Object(S.jsxs)("div",{className:"headerDiv",children:[Object(S.jsx)("div",{className:"dropdownDiv",children:Object(S.jsxs)(p.a,{id:"dropdown-basic-button",title:j.title,variant:"danger",onSelect:function(e){"cohort"===e.toLowerCase()?(c(o.cohortDropdowns),b({title:e,input:o.cohortList[0]})):(c(o.semesterDropdowns),b({title:e,input:o.semesterList[0]}))},children:[Object(S.jsx)(O.a.Item,{eventKey:"Cohort",children:"Cohort"}),Object(S.jsx)(O.a.Item,{eventKey:"Semester",children:"Semester"})]})}),Object(S.jsx)("div",{className:"formDiv",children:Object(S.jsx)(m.a,{children:Object(S.jsx)(f.a,{children:Object(S.jsx)(x.a,{children:Object(S.jsx)(p.a,{id:"dropdown-basic-button",title:j.input,variant:"danger",onSelect:function(e){return b({title:j.title,input:e})},children:r})})})})})]}),Object(S.jsx)("div",{className:"tableDiv",children:Object(S.jsxs)(v.a,{hover:!0,size:"sm",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{}),Object(S.jsx)("th",{children:"Count"})]})}),Object(S.jsxs)("tbody",{className:"counts_tbody",children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"Total"}),Object(S.jsx)("td",{children:F.total})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"Coop"}),Object(S.jsx)("td",{children:F.coop})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"FIR"}),Object(S.jsx)("td",{children:F.FIR})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"SOP"}),Object(S.jsx)("td",{children:F.SOP})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"JUN"}),Object(S.jsx)("td",{children:F.JUN})]}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:"SEN"}),Object(S.jsx)("td",{children:F.SEN})]})]})]})})]})}var F=r(68);r(101);function C(e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(l.a.mark((function e(t){var r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://127.0.0.1:8000/api/student_data",e.next=3,fetch("http://127.0.0.1:8000/api/student_data");case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.next=9,s.map((function(e){return e.fields}));case 9:return c=e.sent,console.log(c),e.abrupt("return",t(c));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(l.a.mark((function e(t,r){var s,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.length){e.next=11;break}return console.log(t),s="http://127.0.0.1:8000/get_transcript/"+t[0],e.next=5,fetch(s);case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,console.log(n),e.abrupt("return",r(n));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=r(65),P=r(112);function _(e){var t=e.column,r=t.filterValue,s=t.preFilteredRows,c=t.setFilter;s.length;return Object(S.jsx)("input",{value:r||"",onChange:function(e){c(e.target.value||void 0)},placeholder:"Search Records..."})}function E(e){var t=e.column,r=t.filterValue,s=t.setFilter,n=t.preFilteredRows,a=t.id,o=c.a.useMemo((function(){var e=new Set;return n.forEach((function(t){e.add(t.values[a])})),Object(j.a)(e.values())}),[a,n]);return Object(S.jsxs)("select",{value:r,onChange:function(e){s(e.target.value||void 0)},children:[Object(S.jsx)("option",{value:"",children:"All"}),o.map((function(e,t){return Object(S.jsx)("option",{value:e,children:e},t)}))]})}function L(e,t,r){return Object(F.a)(e,r,{keys:[function(e){return e.values[t]}]})}function R(e){var t=e.columns,r=e.data,s=(e.modalClose,e.modalOpen),n=(e.modalState,e.selectKey),a=e.selectName;var o=c.a.useMemo((function(){return{fuzzyText:L,text:function(e,t,r){return e.filter((function(e){var s=e.values[t];return void 0===s||String(s).toLowerCase().startsWith(String(r).toLowerCase())}))}}}),[]),l=c.a.useMemo((function(){return{Filter:_}}),[]),i=Object(b.useTable)({columns:t,data:r,defaultColumn:l,filterTypes:o},b.useFilters,b.useGlobalFilter,b.useSortBy),u=i.getTableProps,j=i.getTableBodyProps,h=i.headerGroups,O=i.rows,p=i.prepareRow,m=(i.state,i.visibleColumns),f=O;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("table",Object(d.a)(Object(d.a)({className:"styled-table"},u()),{},{children:[Object(S.jsxs)("thead",{children:[h.map((function(e){return Object(S.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(S.jsxs)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(S.jsxs)("div",{children:[e.canFilter?e.render("Filter"):null,Object(S.jsxs)("span",{children:[e.isSorted?e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c":""," "]})]})]}))}))}))})),Object(S.jsx)("tr",{children:Object(S.jsx)("th",{colSpan:m.length})})]}),Object(S.jsx)("tbody",Object(d.a)(Object(d.a)({},j()),{},{children:f.map((function(e,t){return p(e),Object(S.jsx)("tr",Object(d.a)(Object(d.a)({className:"List_Row",onClick:function(){return function(e){var t=e.cells.map((function(e){if("student_number"===e.column.id)return e.value})),r=e.cells.map((function(e){if("name"===e.column.id)return e.value}));s(),a(r),n(t),console.log(t)}(e)}},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(S.jsx)("td",Object(d.a)(Object(d.a)({className:"table-td-cell"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(S.jsx)("br",{})]})}function D(e){var t=e.columns,r=e.data,s=(e.modalClose,e.modalOpen,e.modalState,e.selectKey,e.selectName,c.a.useMemo((function(){return{fuzzyText:L,text:function(e,t,r){return e.filter((function(e){var s=e.values[t];return void 0===s||String(s).toLowerCase().startsWith(String(r).toLowerCase())}))}}}),[])),n=Object(b.useTable)({columns:t,data:r,filterTypes:s},b.useFilters,b.useGlobalFilter,b.useSortBy),a=n.getTableProps,o=n.getTableBodyProps,l=n.headerGroups,i=n.rows,u=n.prepareRow,j=(n.state,n.visibleColumns),h=i;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(v.a,Object(d.a)(Object(d.a)({className:"styled-transcript"},a()),{},{children:[Object(S.jsxs)("thead",{className:"styled-transcript-thead",children:[l.map((function(e){return Object(S.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(S.jsxs)("th",Object(d.a)(Object(d.a)({className:"transcript_head"},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(S.jsxs)("div",{children:[e.canFilter?e.render("Filter"):null,Object(S.jsxs)("span",{children:[e.isSorted?e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c":""," "]})]})]}))}))}))})),Object(S.jsx)("tr",{children:Object(S.jsx)("th",{colSpan:j.length})})]}),Object(S.jsx)("tbody",Object(d.a)(Object(d.a)({className:"styled-transcript-tbody"},o()),{},{children:h.map((function(e,t){return u(e),Object(S.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(S.jsx)("td",Object(d.a)(Object(d.a)({className:"transcript_cell"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(S.jsx)("br",{})]})}function k(e,t,r,s){var c=e.values[r];c=c.split("*"),console.log(c);var n=t.values[r];n=n.split("*"),console.log(n);var a=Number.parseFloat(c[1]),o=Number.parseFloat(n[1]);return Number.isNaN(a)&&(a=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),Number.isNaN(o)&&(o=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),a>o?1:a<o?-1:0}L.autoRemove=function(e){return!e};var B=function(){var e=c.a.useState([]),t=Object(u.a)(e,2),r=t[0],s=t[1],n=c.a.useState([]),a=Object(u.a)(n,2),o=a[0],d=a[1],j=c.a.useState(!1),b=Object(u.a)(j,2),h=b[0],O=b[1],p=c.a.useState([]),m=Object(u.a)(p,2),f=m[0],x=m[1],v=c.a.useState(""),N=Object(u.a)(v,2),g=N[0],F=N[1],w=function(){return O(!1)};c.a.useEffect((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(s);case 2:case"end":return e.stop()}}),e)})))()}),[]),c.a.useEffect((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(f,d);case 2:case"end":return e.stop()}}),e)})))()}),[f]);var T=c.a.useMemo((function(){return[{Header:" ",columns:[{Header:"Student ID",accessor:"student_number"},{Header:"Name",accessor:"name"},{Header:"Program",accessor:"program"},{Header:"Campus",accessor:"campus",Filter:E,filter:"includes"},{Header:"Rank",accessor:"rank",Filter:E}]}]}),[]),_=c.a.useMemo((function(){return[{Header:" ",columns:[{Header:"Course Code",accessor:"Course_Code",sortType:k,disableFilters:!0},{Header:"Course Name",accessor:"Course_Name",disableFilters:!0},{Header:"Course Type",accessor:"Course_Type",disableFilters:!0},{Header:"Semester",accessor:"Semester",disableFilters:!0},{Header:"Section",accessor:"Section",filter:"includes",disableFilters:!0},{Header:"Credit Hours",accessor:"Credit_Hours",disableFilters:!0},{Header:"Grade",accessor:"Grade",disableFilters:!0}]}]}),[]);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"master-container",children:[Object(S.jsxs)("div",{className:"div-table",children:[Object(S.jsxs)(P.a,{show:h,onHide:w,"aria-labelledby":"example-modal-sizes-title-lg",size:"xl",children:[Object(S.jsx)(P.a.Header,{closeButton:!0,children:Object(S.jsx)(P.a.Title,{children:"Transcript"})}),Object(S.jsx)(P.a.Body,{children:Object(S.jsxs)("div",{className:"row_modal",children:[Object(S.jsx)("div",{className:"column_modal",children:Object(S.jsx)(D,{columns:_,data:o})}),Object(S.jsxs)("div",{className:"column_modal",children:[Object(S.jsx)("h1",{style:{fontFamily:"sans-serif"},children:g}),Object(S.jsx)("br",{}),Object(S.jsx)("h2",{style:{fontFamily:"sans-serif"},children:f})]})]})}),Object(S.jsx)(P.a.Footer,{children:Object(S.jsx)(H.a,{variant:"secondary",onClick:w,children:"Close"})})]}),Object(S.jsx)(R,{columns:T,data:r,modalClose:w,modalOpen:function(){return O(!0)},modalState:h,selectKey:x,selectName:F})]}),Object(S.jsx)("div",{className:"div-counts",children:Object(S.jsx)(y,{})})]})})},G=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,114)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),s(e),c(e),n(e),a(e)}))};a.a.render(Object(S.jsx)(B,{}),document.getElementById("root")),G()},76:function(e,t,r){},97:function(e,t,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.5864fea6.chunk.js.map