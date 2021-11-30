(this["webpackJsonp4103-table"]=this["webpackJsonp4103-table"]||[]).push([[0],{100:function(e,t,r){},102:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),c=r(21),o=r.n(c),a=(r(77),r(9)),i=r.n(a),l=r(22),u=r(4),d=r(14),j=(r(44),r(71)),h=r(109),p=r(113),b=r(110),O=r(68),m=r(111),g=r(27),f=r.n(g),x=(r(63),r(0));function S(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),r=t[0],n=t[1],c=Object(s.useState)({cohortList:[],semesterList:[],cohortDropdowns:[],semesterDropdowns:[]}),o=Object(u.a)(c,2),a=o[0],i=o[1],l=Object(s.useState)({title:"",input:""}),g=Object(u.a)(l,2),S=g[0],C=g[1],v=Object(s.useState)({coop:0,total:0,FIR:0,SOP:0,JUN:0,SEN:0}),_=Object(u.a)(v,2),E=_[0],N=_[1];return Object(s.useEffect)((function(){var e="",t=0;"cohort"===S.title.toLowerCase()?e="http://127.0.0.1:8000/api/counts_cohort/"+S.input:(e="http://127.0.0.1:8000/api/counts_semester/"+S.input,t=1),[/\d{4}-\d{4}$/,/\d{4}\/FA|WI|SM$/][t].test(S.input)&&f.a.get(e).then((function(e){N({coop:e.data.countCoop,total:e.data.countTotal,FIR:e.data.FIR,SOP:e.data.SOP,JUN:e.data.JUN,SEN:e.data.SEN})}))}),[S]),Object(s.useEffect)((function(){f.a.get("http://127.0.0.1:8000/api/count_parameters").then((function(e){var t,r=[],s=Object(d.a)(e.data.cohorts);try{for(s.s();!(t=s.n()).done;){var c=t.value;r.push(Object(x.jsx)(j.a.Item,{eventKey:c,children:c}))}}catch(h){s.e(h)}finally{s.f()}var o,a=[],l=Object(d.a)(e.data.semesters);try{for(l.s();!(o=l.n()).done;){var u=o.value;a.push(Object(x.jsx)(j.a.Item,{eventKey:u,children:u}))}}catch(h){l.e(h)}finally{l.f()}i({cohortList:e.data.cohorts,semesterList:e.data.semesters,cohortDropdowns:r,semesterDropdowns:a}),C({title:"Cohort",input:e.data.cohorts[0]}),n(r)}))}),[]),Object(x.jsxs)("div",{className:"countsCard",children:[Object(x.jsxs)("div",{className:"headerDiv",children:[Object(x.jsx)("div",{className:"dropdownDiv",children:Object(x.jsxs)(h.a,{id:"dropdown-basic-button",title:S.title,variant:"danger",onSelect:function(e){"cohort"===e.toLowerCase()?(n(a.cohortDropdowns),C({title:e,input:a.cohortList[0]})):(n(a.semesterDropdowns),C({title:e,input:a.semesterList[0]}))},children:[Object(x.jsx)(j.a.Item,{eventKey:"Cohort",children:"Cohort"}),Object(x.jsx)(j.a.Item,{eventKey:"Semester",children:"Semester"})]})}),Object(x.jsx)("div",{className:"formDiv",children:Object(x.jsx)(p.a,{children:Object(x.jsx)(b.a,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)(h.a,{id:"dropdown-basic-button",title:S.input,variant:"danger",onSelect:function(e){return C({title:S.title,input:e})},children:r})})})})})]}),Object(x.jsx)("div",{className:"tableDiv",children:Object(x.jsxs)(m.a,{hover:!0,size:"sm",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"Count"})]})}),Object(x.jsxs)("tbody",{className:"counts_tbody",children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Total"}),Object(x.jsx)("td",{children:E.total})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Coop"}),Object(x.jsx)("td",{children:E.coop})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"FIR"}),Object(x.jsx)("td",{children:E.FIR})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"SOP"}),Object(x.jsx)("td",{children:E.SOP})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"JUN"}),Object(x.jsx)("td",{children:E.JUN})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"SEN"}),Object(x.jsx)("td",{children:E.SEN})]})]})]})})]})}var C=r(66);function v(){var e=Object(s.useMemo)((function(){return[5335495]}),[]),t={},r=Object(s.useState)(!1),n=Object(u.a)(r,2),c=n[0],o=n[1],a=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.location.hostname,s="localhost"===r||"127.0.0.1"===r?"http://"+r+":8000/audit_student/"+t:"http://swe4103-env.eba-irrkpdyi.us-east-2.elasticbeanstalk.com/_get_Audit/"+t,e.next=4,f.a.get(s);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=[],r=e.target_student,s={CORE:e.progress.CORE,TE:e.progress.TE,NS:e.progress.NS,CSE:{ITS:e.progress["CSE-ITS"],HSS:e.progress["CSE-HSS"],OPEN:e.progress["CSE-OPEN"]}},n=["Audit: ",r.student_number," - ",r.full_name,", ",r.cohort,", ",r.rank,", years in: ",r.years_in,"\nBased on: ",e.base_program," program, as of ",e.latest_enrolment_term,"\n\n\tSTATUS: ",r.status];t=t.concat(n);for(var c=0,o=Object.entries(s);c<o.length;c++){var a=Object(u.a)(o[c],2),i=a[0],l=a[1];if("CSE"===i)break;var j=l.completed.courses,h=l.completed.credit_hours,p="CORE"===i?l.remaining.courses:l.remaining.num_courses,b=l.remaining.credit_hours,O=l.in_progress.courses,m=l.in_progress.credit_hours,g=["\n\n==========================================================================\n","Progress through ",i," (","CORE"===i?j.length+p.length+O.length:j.length+p+O.length," courses, ",h+b+m," CH)    ",("CORE"===i?p.length:p).toString()," courses (",b.toString(),"CH) REMAINING\n","==========================================================================\n"];t=t.concat(g),t="CORE"===i?t.concat(["()** indicates equivelent course replacement\n\n"]):t.concat(["\n"]);for(var f=[i," courses completed:    ",j.length.toString()," courses (",h.toString(),"CH)\n","---------------------------------------------\n"],x=0;x<j.length;++x)f=x>1&&x%5===0?f.concat([j[x],"\n"]):f.concat([j[x],", "]);f=f.concat(["\n\n"]),t=t.concat(f);for(var S=[i," courses in progress:    ",O.length.toString()," courses (",m.toString(),"CH)\n","---------------------------------------------\n"],C=0;C<O.length;++C)S=C>1&&C%5===0?S.concat([O[C],"\n"]):S.concat([O[C],", "]);if(S=S.concat(["\n\n"]),t=t.concat(S),"CORE"===i){for(var v=[i," courses remaining:    ",p.length.toString()," courses (",b.toString(),"CH)\n","---------------------------------------------\n"],_=0;_<p.length;++_)v=_>1&&_%5===0?v.concat([p[_],"\n"]):v.concat([p[_],", "]);v=v.concat(["\n\n"]),t=t.concat(v)}}var E=s.CSE,N=E.ITS.completed.courses.length+E.ITS.remaining.num_courses+E.ITS.in_progress.courses.length,y=E.ITS.completed.credit_hours+E.ITS.remaining.credit_hours+E.ITS.in_progress.credit_hours,T=E.HSS.completed.courses.length+E.HSS.remaining.num_courses+E.HSS.in_progress.courses.length,I=E.HSS.completed.credit_hours+E.HSS.remaining.credit_hours+E.HSS.in_progress.credit_hours,H=E.OPEN.completed.courses.length+E.OPEN.remaining.num_courses+E.OPEN.in_progress.courses.length,P=y+I+(E.OPEN.completed.credit_hours+E.OPEN.remaining.credit_hours+E.OPEN.in_progress.credit_hours),w=E.HSS.remaining.num_courses+E.ITS.remaining.num_courses+E.OPEN.remaining.num_courses,F=E.HSS.remaining.credit_hours+E.ITS.remaining.credit_hours+E.OPEN.remaining.credit_hours,R=["\n\n==========================================================================\n","Progress through CSE (",N.toString()," ITS, ",T.toString()," HSS, ",H.toString()," OPEN; ",P.toString(),"CH)     ",w.toString()," courses (",F.toString(),") REMAINING\n","==========================================================================\n"];t=t.concat(R);for(var k=0,A=Object.entries(E);k<A.length;k++){var D=Object(u.a)(A[k],2),G=D[0],L=D[1],B=L.completed.courses,M=L.in_progress.courses;if(B.length>0){t=t.concat(["CSE-",G," ",B.length.toString()," (",L.completed.credit_hours.toString(),"ch) complete: "]);var z,U=Object(d.a)(B);try{for(U.s();!(z=U.n()).done;){var J=z.value;t=t.concat([J,", "])}}catch(W){U.e(W)}finally{U.f()}t=t.concat(["\n"])}if(M.length>0){t=t.concat(["CSE-",G," ",M.length.toString()," (",L.in_progress.credit_hours.toString(),"ch) inprogress: "]);var V,Y=Object(d.a)(M);try{for(Y.s();!(V=Y.n()).done;){var K=V.value;t=t.concat([K,", "])}}catch(W){Y.e(W)}finally{Y.f()}t=t.concat(["\n"])}}return t.join("")};Object(s.useEffect)((function(){if(c){var r,s=[],n=Object(d.a)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;s.push(a(i))}}catch(l){n.e(l)}finally{n.f()}Promise.all(s).then((function(e){var r,s=Object(d.a)(e);try{for(s.s();!(r=s.n()).done;){var n=r.value;t[n.target_student.student_number]=n}}catch(l){s.e(l)}finally{s.f()}for(var c="",a="",i=0,h=Object.entries(t);i<h.length;i++){var p=Object(u.a)(h[i],2),b=p[0],O=p[1];c+=b+"-",a+=j(O)}(function(e,t){var r=document.createElement("a"),s=new Blob([t],{type:"text/plain"});r.href=URL.createObjectURL(s),r.download=e,document.body.appendChild(r),r.click()})(c+="audit.txt",a),o(!1)}))}}),[e,t,c]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(C.a,{variant:"danger",size:"lg",disabled:c,onClick:c?null:function(){return o(!0)},children:"Generate Text Audit"})})}r(100);function _(e){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(i.a.mark((function e(t){var r,s,n,c,o,a,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("localhost"!==(r=window.location.hostname)&&"127.0.0.1"!==r){e.next=13;break}return s="http://"+r+":8000/api/student_data",e.next=5,fetch(s);case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,e.next=11,c.map((function(e){return e.fields}));case 11:return o=e.sent,e.abrupt("return",t(o));case 13:return a="http://"+r+"/api/student_data",e.next=16,fetch(a);case 16:return l=e.sent,e.next=19,l.json();case 19:return u=e.sent,e.next=22,u.map((function(e){return e.fields}));case 22:return d=e.sent,e.abrupt("return",t(d));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,r){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(i.a.mark((function e(t,r,s){var n,c,o,a,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.location.hostname,0===t.length){e.next=23;break}if("localhost"!==n&&"127.0.0.1"!==n){e.next=14;break}return c="http://"+n+":8000/get_transcript/"+t[1],e.next=6,fetch(c);case 6:return o=e.sent,e.next=9,o.json();case 9:return a=e.sent,s(!1),e.abrupt("return",r(a));case 14:return l="http://"+n+"/get_transcript/"+t[1],e.next=17,fetch(l);case 17:return u=e.sent,e.next=20,u.json();case 20:return d=e.sent,s(!1),e.abrupt("return",r(d));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(i.a.mark((function e(t,r,s){var n,c,o,a,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.location.hostname,0===t.length){e.next=22;break}if("localhost"!==n&&"127.0.0.1"!==n){e.next=13;break}return c="http://"+n+":8000/audit_student/"+t[1],e.next=6,fetch(c);case 6:return o=e.sent,e.next=9,o.json();case 9:return o=e.sent,e.abrupt("return",r(o));case 13:return a="http://swe4103-env.eba-irrkpdyi.us-east-2.elasticbeanstalk.com/_get_Audit/"+t[1],e.next=16,f.a.get(a);case 16:return l=e.sent,e.next=19,l.json();case 19:return u=e.sent,s(!1),e.abrupt("return",r(u));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=r(2),P=r(11),w=r(69);function F(e){var t=e.column,r=t.filterValue,s=t.preFilteredRows,n=t.setFilter;s.length;return Object(x.jsx)("input",{value:r||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"Search Records..."})}function R(e){var t=e.column,r=t.filterValue,s=t.setFilter,c=t.preFilteredRows,o=t.id,a=n.a.useMemo((function(){var e=new Set;return c.forEach((function(t){e.add(t.values[o])})),Object(P.a)(e.values())}),[o,c]);return Object(x.jsxs)("select",{value:r,onChange:function(e){s(e.target.value||void 0)},children:[Object(x.jsx)("option",{value:"",children:"All"}),a.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)}))]})}function k(e,t,r){return Object(w.a)(e,r,{keys:[function(e){return e.values[t]}]})}var A=r(17),D=r(3),G=["indeterminate"],L=n.a.forwardRef((function(e,t){var r=e.indeterminate,s=Object(D.a)(e,G),c=n.a.useRef(),o=t||c;return n.a.useEffect((function(){o.current.indeterminate=r}),[o,r]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("input",Object(H.a)({type:"checkbox",ref:o},s))})}));function B(e){var t=e.columns,r=e.data,s=(e.modalClose,e.modalOpen),c=(e.modalState,e.selectKey),o=e.selectRow;function a(e,t){if("selection"!==t.column.id){var r=e.cells.map((function(e){if("student_number"===e.column.id)return e.value})),n=e.cells.map((function(e){if("name"===e.column.id)return e.value})),a=e.cells.map((function(e){if("rank"===e.column.id)return e.value})),i=e.cells.map((function(e){if("program"===e.column.id)return e.value})),l=e.cells.map((function(e){if("status"===e.column.id)return e.value})),u=e.cells.map((function(e){if("campus"===e.column.id)return e.value}));s(),o({name:n,program:i,campus:u,rank:a,status:l}),c(r)}}var i=n.a.useMemo((function(){return{fuzzyText:k,text:function(e,t,r){return e.filter((function(e){var s=e.values[t];return void 0===s||String(s).toLowerCase().startsWith(String(r).toLowerCase())}))}}}),[]),l=n.a.useMemo((function(){return{Filter:F}}),[]),u=Object(A.useTable)({columns:t,data:r,defaultColumn:l,filterTypes:i},A.useFilters,A.useGlobalFilter,A.useSortBy,A.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(x.jsx)("div",{children:Object(x.jsx)(L,Object(H.a)({},t()))})},Cell:function(e){var t=e.row;return Object(x.jsx)(L,Object(H.a)({},t.getToggleRowSelectedProps()))}}].concat(Object(P.a)(e))}))})),d=u.getTableProps,j=u.getTableBodyProps,h=u.headerGroups,p=u.rows,b=u.prepareRow,O=(u.state,u.selectedFlatRows),m=u.visibleColumns,g=p;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("table",Object(H.a)(Object(H.a)({className:"styled-table"},d()),{},{children:[Object(x.jsxs)("thead",{children:[h.map((function(e){return Object(x.jsx)("tr",Object(H.a)(Object(H.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsxs)("th",Object(H.a)(Object(H.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(x.jsxs)("div",{children:[e.canFilter?e.render("Filter"):null,Object(x.jsxs)("span",{children:[e.isSorted?e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c":""," "]})]})]}))}))}))})),Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:m.length})})]}),Object(x.jsx)("tbody",Object(H.a)(Object(H.a)({},j()),{},{children:g.map((function(e,t){return b(e),Object(x.jsx)("tr",Object(H.a)(Object(H.a)({className:"List_Row"},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(x.jsx)("td",Object(H.a)(Object(H.a)({onClick:function(){return a(e,t)},className:"table-td-cell"},t.getCellProps()),{},{children:t.render("Cell")}))}))}))}))}))]})),Object(x.jsxs)("pre",{children:[Object(x.jsxs)("div",{children:[" ",O.map((function(e,t){return b(e),0===t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{})," ",Object(x.jsx)("td",{style:{padding:"10px"},children:"Student Number"}),Object(x.jsx)("td",{style:{padding:"10px"},children:"Name"}),Object(x.jsx)("td",{style:{padding:"10px"},children:"Program"}),Object(x.jsx)("td",{style:{padding:"10px"},children:"Campus"}),Object(x.jsx)("td",{style:{padding:"10px"},children:"Rank"}),Object(x.jsx)("td",{style:{padding:"10px"},children:"status"})]}),Object(x.jsx)("tr",Object(H.a)(Object(H.a)({style:{padding:"15px"}},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(x.jsx)("td",Object(H.a)(Object(H.a)({onClick:function(){return a(e,t)},style:{padding:"15px"}},t.getCellProps()),{},{children:t.render("Cell")}))}))})),"  "]}):Object(x.jsx)("tr",Object(H.a)(Object(H.a)({style:{padding:"15px"}},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(x.jsx)("td",Object(H.a)(Object(H.a)({onClick:function(){return a(e,t)},style:{padding:"15px"}},t.getCellProps()),{},{children:t.render("Cell")}))}))}))}))]}),Object(x.jsx)("code",{children:JSON.stringify({},null,2)})]}),Object(x.jsx)("br",{})]})}k.autoRemove=function(e){return!e};var M=[{Header:" ",columns:[{Header:"Student ID",accessor:"student_number"},{Header:"Name",accessor:"name"},{Header:"Program",accessor:"program"},{Header:"Campus",accessor:"campus",Filter:R,filter:"includes"},{Header:"Rank",accessor:"rank",sortType:function(e,t,r,s){var n=e.values[r],c=t.values[r],o=0,a=0;return"JUN"===n?o=1:"SOP"===n?o=2:"SEN"===n&&(o=3),"JUN"===c?a=1:"SOP"===c?a=2:"SEN"===c&&(a=3),Number.isNaN(o)&&(o=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),Number.isNaN(a)&&(a=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),o>a?1:o<a?-1:0},Filter:R},{Header:"Status",accessor:"status",Filter:R}]}],z=[{Header:" ",columns:[{Header:"Course Code",accessor:"Course_Code",sortType:function(e,t,r,s){var n=e.values[r];n=n.split("*");var c=t.values[r];c=c.split("*");var o=Number.parseFloat(n[1]),a=Number.parseFloat(c[1]);return Number.isNaN(o)&&(o=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),Number.isNaN(a)&&(a=s?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY),o>a?1:o<a?-1:0},disableFilters:!0},{Header:"Course Name",accessor:"Course_Name",disableFilters:!0},{Header:"Course Type",accessor:"Course_Type",disableFilters:!0},{Header:"Semester",accessor:"Semester",disableFilters:!0},{Header:"Section",accessor:"Section",filter:"includes",disableFilters:!0},{Header:"Credit Hours",accessor:"Credit_Hours",disableFilters:!0},{Header:"Grade",accessor:"Grade",disableFilters:!0}]}],U=r(112);function J(e){var t=e.columns,r=e.data,s=(e.modalClose,e.modalOpen,e.modalState,e.selectKey,e.selectName,n.a.useMemo((function(){return{fuzzyText:k,text:function(e,t,r){return e.filter((function(e){var s=e.values[t];return void 0===s||String(s).toLowerCase().startsWith(String(r).toLowerCase())}))}}}),[])),c=Object(A.useTable)({columns:t,data:r,filterTypes:s},A.useFilters,A.useGlobalFilter,A.useSortBy),o=c.getTableProps,a=c.getTableBodyProps,i=c.headerGroups,l=c.rows,u=c.prepareRow,d=(c.state,c.visibleColumns),j=l;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(m.a,Object(H.a)(Object(H.a)({className:"styled-transcript"},o()),{},{children:[Object(x.jsxs)("thead",{className:"styled-transcript-thead",children:[i.map((function(e){return Object(x.jsx)("tr",Object(H.a)(Object(H.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsxs)("th",Object(H.a)(Object(H.a)({className:"transcript_head"},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(x.jsxs)("div",{children:[e.canFilter?e.render("Filter"):null,Object(x.jsxs)("span",{children:[e.isSorted?e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c":""," "]})]})]}))}))}))})),Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:d.length})})]}),Object(x.jsx)("tbody",Object(H.a)(Object(H.a)({className:"styled-transcript-tbody"},a()),{},{children:j.map((function(e,t){return u(e),Object(x.jsx)("tr",Object(H.a)(Object(H.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(x.jsx)("td",Object(H.a)(Object(H.a)({className:"transcript_cell"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(x.jsx)("br",{})]})}var V=function(e){var t=e.CSEData,r=[],s={outterMostDiv:{float:"left",padding:"15px"}};if(0!=t["CSE-HSS"].completed.courses.length||0!=t["CSE-HSS"].in_progress.courses.length){var n,c,o={type:"CSE_HSS",inProgress:[],credit_hours:0,completed:[]};if(0!=t["CSE-HSS"].completed.courses.length)(n=o.completed).push.apply(n,Object(P.a)(t["CSE-HSS"].completed.courses)),o.credit_hours+=t["CSE-HSS"].completed.credit_hours;if(0!=t["CSE-HSS"].in_progress.courses.length)(c=o.completed).push.apply(c,Object(P.a)(t["CSE-HSS"].in_progress.courses)),o.credit_hours+=t["CSE-HSS"].in_progress.credit_hours;r.push(o)}if(0!=t["CSE-OPEN"].completed.courses.length||0!=t["CSE-OPEN"].in_progress.courses.length){var a,i,l={type:"CSE-OPEN",inProgress:[],credit_hours:0,completed:[]};if(0!=t["CSE-OPEN"].completed.courses.length)(a=l.completed).push.apply(a,Object(P.a)(t["CSE-OPEN"].completed.courses)),l.credit_hours+=t["CSE-OPEN"].completed.credit_hours;if(0!=t["CSE-OPEN"].in_progress.courses.length)(i=l.completed).push.apply(i,Object(P.a)(t["CSE-OPEN"].in_progress.courses)),l.credit_hours+=t["CSE-OPEN"].in_progress.credit_hours;r.push(l)}if(0!=t["CSE-ITS"].completed.courses.length||0!=t["CSE-ITS"].in_progress.courses.length){var u,d,j={type:"CSE-ITS",inProgress:[],credit_hours:0,completed:[]};if(0!=t["CSE-ITS"].completed.courses.length)(u=j.completed).push.apply(u,Object(P.a)(t["CSE-ITS"].completed.courses)),j.credit_hours+=t["CSE-ITS"].completed.credit_hours;if(0!=t["CSE-ITS"].in_progress.courses.length)(d=j.completed).push.apply(d,Object(P.a)(t["CSE-ITS"].in_progress.courses)),j.credit_hours+=t["CSE-ITS"].in_progress.credit_hours;r.push(j)}return Object(x.jsx)(x.Fragment,{children:r.map((function(e,t){return Object(x.jsx)("div",{style:s.outterMostDiv,children:Object(x.jsxs)("p",{children:[e.type," \xa0 ",e.inProgress.length+e.completed.length,"\xa0 (",e.credit_hours,"ch) ",e.inProgress.map((function(e){return Object(x.jsxs)("p",{children:[e," inprogress "]})})),e.completed.map((function(e){return Object(x.jsxs)("p",{children:[" ",e," completed"]})}))]})})}))})},Y=function(e){var t=e.data,r={CourseCode:{display:"inline-block",font:"sans-serif",fontSize:"18px",wordBreak:"keep-all"},div_style:{boxShadow:"1px 3px 1px #9E9E9E"},CourseHeaders:{font:"sans-serif",fontSize:"20px",paddingBottom:"15px",paddingTop:"15px"},Parent_Div:{}},s=t.progress;return Object(x.jsxs)("div",{style:r.Parent_Div,children:[Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:["Audit: ",t.target_student.student_number,", \xa0",t.target_student.cohort,",\xa0"," ",t.target_student.rank,", \xa0years in:"," ",t.target_student.years_in]})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["Based on: ",t.base_program]})," "]}),Object(x.jsxs)("div",{children:["\xa0STATUS:\xa0",t.target_student.status]}),Object(x.jsxs)("div",{style:r.div_style,children:[Object(x.jsxs)("p",{children:["Progress through CORE\xa0("," ",s.CORE.completed.courses.length+s.CORE.remaining.courses.length+s.CORE.in_progress.courses.length,"\xa0courses,"," ",s.CORE.completed.credit_hours+s.CORE.remaining.credit_hours+s.CORE.in_progress.credit_hours,"\xa0CH)\xa0\xa0\xa0",s.CORE.remaining.courses.length,"\xa0courses (",s.CORE.remaining.credit_hours,"CH)\xa0 REMAINING"]})," "]}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["Core Courses completed: \xa0\xa0\xa0",s.CORE.completed.courses.length,"\xa0 courses \xa0(",s.CORE.completed.credit_hours,"CH)\xa0"]}),Object(x.jsx)("lu",{children:s.CORE.completed.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["Core Courses in progress: \xa0\xa0\xa0",s.CORE.in_progress.courses.length,"\xa0 courses \xa0(",s.CORE.in_progress.credit_hours,"CH)\xa0"]}),Object(x.jsx)("lu",{children:s.CORE.in_progress.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["Core Courses remaining: \xa0\xa0\xa0",s.CORE.remaining.courses.length,"\xa0 courses \xa0(",s.CORE.remaining.credit_hours,"CH)\xa0"]}),Object(x.jsx)("lu",{children:s.CORE.remaining.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))}),Object(x.jsxs)("div",{style:r.div_style,children:[Object(x.jsxs)("p",{children:["Progress through TE\xa0("," ",s.TE.completed.courses.length+s.TE.remaining.num_courses+s.TE.in_progress.courses.length,"\xa0courses,"," ",s.TE.completed.credit_hours+s.TE.remaining.credit_hours+s.TE.in_progress.credit_hours,"\xa0CH)\xa0\xa0\xa0",s.TE.remaining.num_courses,"\xa0courses (",s.TE.remaining.credit_hours,"CH)\xa0 REMAINING"]})," "]}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["TE Courses completed: \xa0\xa0\xa0",s.TE.completed.courses.length,"\xa0 courses \xa0(",s.TE.completed.credit_hours,"CH)\xa0"]}),Object(x.jsx)("lu",{children:s.TE.completed.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["TE Courses in progress: \xa0\xa0\xa0",s.TE.in_progress.courses.length,"\xa0 courses \xa0(",s.TE.in_progress.credit_hours,"CH)\xa0"]}),Object(x.jsx)("lu",{children:s.TE.in_progress.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))})," ",Object(x.jsxs)("div",{style:r.div_style,children:[Object(x.jsxs)("p",{children:["Progress through NS\xa0("," ",s.NS.completed.courses.length+s.NS.remaining.num_courses+s.NS.in_progress.courses.length,"\xa0courses,"," ",s.NS.completed.credit_hours+s.NS.remaining.credit_hours+s.NS.in_progress.credit_hours,"\xa0CH)\xa0\xa0\xa0",s.NS.remaining.num_courses,"\xa0courses (",s.NS.remaining.credit_hours,"CH)\xa0 REMAINING"]})," "]}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["NS Courses completed: \xa0\xa0\xa0",s.NS.completed.courses.length,"\xa0 courses \xa0(",s.NS.completed.credit_hours,"CH)\xa0"]}),Object(x.jsx)("div",{children:s.NS.completed.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))}),Object(x.jsxs)("div",{style:r.CourseHeaders,children:["NS Courses in progress: \xa0\xa0\xa0",s.NS.in_progress.courses.length,"\xa0 courses \xa0(",s.NS.in_progress.credit_hours,"CH)\xa0"]}),Object(x.jsx)("div",{children:s.NS.in_progress.courses.map((function(e){return Object(x.jsxs)("li",{style:r.CourseCode,children:["\xa0",e]})}))})," ",Object(x.jsxs)("div",{style:r.div_style,children:[Object(x.jsxs)("p",{children:["Progress through CSE\xa0("," ",s["CSE-ITS"].completed.courses.length," ","\xa0ITS,\xa0",s["CSE-HSS"].completed.courses.length," ","\xa0HSS,\xa0",s["CSE-OPEN"].completed.courses.length," \xa0OPEN \xa0;"," ",s["CSE-HSS"].completed.credit_hours+s["CSE-OPEN"].completed.credit_hours+s["CSE-ITS"].completed.credit_hours,"\xa0CH)\xa0\xa0\xa0",s["CSE-ITS"].remaining.num_courses,"\xa0courses (",s["CSE-ITS"].remaining.credit_hours,"CH)\xa0 REMAINING"]})," "]}),Object(x.jsx)(V,{CSEData:s})]})};var K=function(){var e=n.a.useState([]),t=Object(u.a)(e,2),r=t[0],s=t[1],c=n.a.useState([]),o=Object(u.a)(c,2),a=o[0],d=o[1],j=n.a.useState(!1),h=Object(u.a)(j,2),p=h[0],b=h[1],O=n.a.useState([]),m=Object(u.a)(O,2),g=m[0],f=m[1],E=n.a.useState(!0),y=Object(u.a)(E,2),I=y[0],H=y[1],P=n.a.useState(!0),w=Object(u.a)(P,2),F=(w[0],w[1]),R=n.a.useState({name:"",program:"",campus:"",rank:"",status:""}),k=Object(u.a)(R,2),A=k[0],D=k[1],G=n.a.useState(!1),L=Object(u.a)(G,2),V=L[0],K=L[1],W=function(){return K(!1)};n.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(s);case 2:case"end":return e.stop()}}),e)})))()}),[]),n.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(g,d,H);case 2:case"end":return e.stop()}}),e)})))()}),[g]);var $=n.a.useState({}),q=Object(u.a)($,2),Q=q[0],X=q[1];function Z(e){var t=e.audit;return t||I?t?Object(x.jsxs)("div",{style:{boxShadow:"1px 3px 1px #9E9E9E",display:"inline-block"},children:[Object(x.jsx)(C.a,{size:"lg",variant:"outline-secondary",children:"Generate Text Audit"}),Object(x.jsx)(Y,{data:Q})]}):Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"Loading ..."})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"row_modal",children:[Object(x.jsx)("div",{className:"column_modal",children:Object(x.jsx)(J,{columns:z,data:a})}),Object(x.jsxs)("div",{className:"column_modal",children:[Object(x.jsx)("h1",{style:{fontFamily:"sans-serif"},children:A.name}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{style:{fontFamily:"sans-serif"},children:g}),Object(x.jsx)("h4",{style:{fontFamily:"sans-serif"},children:A.program}),Object(x.jsx)("h4",{style:{fontFamily:"sans-serif"},children:A.campus}),Object(x.jsx)("h4",{style:{fontFamily:"sans-serif"},children:A.rank}),Object(x.jsx)("h4",{style:{fontFamily:"sans-serif"},children:A.status})]})]})})}return n.a.useEffect((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(g,X,F);case 2:case"end":return e.stop()}}),e)})))()}),[g]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"master-container",children:[Object(x.jsxs)("div",{className:"div-table",children:[Object(x.jsxs)(U.a,{show:V,onHide:W,"aria-labelledby":"example-modal-sizes-title-lg",size:"xl",children:[Object(x.jsxs)(U.a.Header,{closeButton:!0,children:[Object(x.jsx)(C.a,{size:"lg",variant:"outline-secondary",onClick:function(){return b(!1)},children:"Transcript"}),Object(x.jsx)(C.a,{size:"lg",variant:"outline-secondary",onClick:function(){return b(!0)},children:"Audit"})]}),Object(x.jsx)(U.a.Body,{children:Object(x.jsx)(Z,{audit:p})}),Object(x.jsx)(U.a.Footer,{children:Object(x.jsx)(C.a,{variant:"secondary",onClick:W,children:"Close"})})]}),Object(x.jsx)(B,{columns:M,data:r,modalClose:W,modalOpen:function(){return K(!0)},modalState:V,selectKey:f,selectRow:D})]}),Object(x.jsx)("div",{className:"div-textAudit",children:Object(x.jsx)(v,{})}),Object(x.jsx)("div",{className:"div-counts",children:Object(x.jsx)(S,{})})]})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,114)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),s(e),n(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(K,{}),document.getElementById("root")),W()},63:function(e,t,r){},77:function(e,t,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.af67088f.chunk.js.map