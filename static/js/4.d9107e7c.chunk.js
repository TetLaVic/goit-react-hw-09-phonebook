(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{120:function(e,t,a){e.exports={contactForm:"ContactForm_contactForm__32IQW",labelForm:"ContactForm_labelForm__bq1cV",inputForm:"ContactForm_inputForm__3CrSN",buttonForm:"ContactForm_buttonForm__2V1a4",Form:"ContactForm_Form__mGr1W"}},121:function(e,t,a){e.exports={listItem:"ContactListItem_listItem__1Kfx6",buttonListItem:"ContactListItem_buttonListItem__1kNKd",ListGroup:"ContactListItem_ListGroup__9D1Q4",Item:"ContactListItem_Item__vxXHT",Button:"ContactListItem_Button__3OoGx"}},122:function(e,t,a){e.exports={contactList:"ContactList_contactList__2qebs"}},123:function(e,t,a){e.exports={h2Header:"ContactsPage_h2Header__3BTtC"}},124:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ue}));var n=a(0),r=a.n(n),c=a(6),o=a(27),i=a(113),s=a(120),l=a.n(s),u=a(11),b=a(21),f=a.n(b),d=a(18),m=function(e){var t=e.name,a=e.number;return function(e){e(d.a.addContactRequest()),f.a.post("/contacts",{name:t,number:a}).then((function(t){var a=t.data;return e(d.a.addContactSuccess(a))})).catch((function(t){return e(d.a.addContactError(t.message))}))}},v=function(e){return function(t){t(d.a.deleteContactRequest()),f.a.delete("/contacts/".concat(e)).then((function(){return t(d.a.deleteContactSuccess(e))})).catch((function(e){return t(d.a.deleteContactError(e.message))}))}},j=function(){return function(e){e(d.a.fetchContactsRequest()),f.a.get("./contacts").then((function(t){var a=t.data;return e(d.a.fetchContactsSuccess(a))})).catch((function(t){return e(d.a.fetchContactsError(t.message))}))}},O=a(48),h=a(110),p=a(2);function C(){var e=Object(n.useState)({name:"",number:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(u.c)(),b=Object(n.useCallback)((function(e){return s(m(e))}),[s]),f=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;r((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},a,n))}))},d=Object(n.useCallback)((function(e){e.preventDefault(),b(a),r({name:"",number:""})}),[b,a]);return Object(p.jsxs)(h.a,{onSubmit:d,className:l.a.Form,children:[Object(p.jsxs)(h.a.Group,{controlId:"formBasicName",children:[Object(p.jsx)(h.a.Label,{children:"Name"}),Object(p.jsx)(h.a.Control,{type:"name",name:"name",value:a.name,placeholder:"Enter name",onChange:f})]}),Object(p.jsxs)(h.a.Group,{controlId:"formBasicNumber",children:[Object(p.jsx)(h.a.Label,{children:"Number"}),Object(p.jsx)(h.a.Control,{type:"tel",name:"number",placeholder:"Enter phone number",value:a.number,onChange:f})]}),Object(p.jsx)(O.a,{variant:"primary",type:"submit",children:"Add contact"})]})}var x=a(34),y=function(e){return e.contacts.filter},N={getFilter:y,getContacts:Object(x.a)([y,function(e){return e.contacts.items}],(function(e,t){var a=e.toLowerCase();return t.filter((function(e){var t=e.name;return!!t&&t.toLowerCase().includes(a)}))}))},_=a(114);function g(){var e=Object(u.d)(N.getFilter),t=Object(u.c)(),a=Object(n.useCallback)((function(e){return t(d.a.filterChange(e.target.value))}),[t]);return Object(p.jsxs)(h.a,{inline:!0,children:[Object(p.jsx)(_.a,{type:"text",name:"filter",value:e,onChange:a,placeholder:"Search",className:"mr-sm-2"}),Object(p.jsx)(O.a,{variant:"primary",children:"Search"})]})}var I=a(121),k=a.n(I),w=a(1),L=a(3),F=a(12),P=a.n(F),E=(a(109),a(59)),K=a(15),S=Function.prototype.bind.call(Function.prototype.call,[].slice);var R=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var G=function(e,t){return Object(n.useMemo)((function(){return function(e,t){var a=R(e),n=R(t);return function(e){a&&a(e),n&&n(e)}}(e,t)}),[e,t])},D=r.a.createContext(null);D.displayName="NavContext";var q=D,A=a(49),B=r.a.createContext(null),z=function(){},H=r.a.forwardRef((function(e,t){var a,c,o=e.as,i=void 0===o?"ul":o,s=e.onSelect,l=e.activeKey,u=e.role,b=e.onKeyDown,f=Object(L.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),d=Object(n.useReducer)((function(e){return!e}),!1)[1],m=Object(n.useRef)(!1),v=Object(n.useContext)(A.a),j=Object(n.useContext)(B);j&&(u=u||"tablist",l=j.activeKey,a=j.getControlledId,c=j.getControllerId);var O=Object(n.useRef)(null),h=function(e){var t=O.current;if(!t)return null;var a,n=(a="[data-rb-event-key]:not(.disabled)",S(t.querySelectorAll(a))),r=t.querySelector(".active");if(!r)return null;var c=n.indexOf(r);if(-1===c)return null;var o=c+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},p=function(e,t){null!=e&&(s&&s(e,t),v&&v(e,t))};Object(n.useEffect)((function(){if(O.current&&m.current){var e=O.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var C=G(t,O);return r.a.createElement(A.a.Provider,{value:p},r.a.createElement(q.Provider,{value:{role:u,activeKey:Object(A.b)(l),getControlledId:a||z,getControllerId:c||z}},r.a.createElement(i,Object(w.a)({},f,{onKeyDown:function(e){var t;switch(b&&b(e),e.key){case"ArrowLeft":case"ArrowUp":t=h(-1);break;case"ArrowRight":case"ArrowDown":t=h(1);break;default:return}t&&(e.preventDefault(),p(t.dataset.rbEventKey,e),m.current=!0,d())},ref:C,role:u}))))})),J=a(61),Q=r.a.forwardRef((function(e,t){var a=e.active,c=e.className,o=e.eventKey,i=e.onSelect,s=e.onClick,l=e.as,u=Object(L.a)(e,["active","className","eventKey","onSelect","onClick","as"]),b=Object(A.b)(o,u.href),f=Object(n.useContext)(A.a),d=Object(n.useContext)(q),m=a;if(d){u.role||"tablist"!==d.role||(u.role="tab");var v=d.getControllerId(b),j=d.getControlledId(b);u["data-rb-event-key"]=b,u.id=v||u.id,u["aria-controls"]=j||u["aria-controls"],m=null==a&&null!=b?d.activeKey===b:a}"tab"===u.role&&(u.disabled&&(u.tabIndex=-1,u["aria-disabled"]=!0),u["aria-selected"]=m);var O=Object(J.a)((function(e){s&&s(e),null!=b&&(i&&i(b,e),f&&f(b,e))}));return r.a.createElement(l,Object(w.a)({},u,{ref:t,onClick:O,className:P()(c,m&&"active")}))}));Q.defaultProps={disabled:!1};var T=Q,V={variant:void 0,active:!1,disabled:!1},W=r.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.active,o=e.disabled,i=e.className,s=e.variant,l=e.action,u=e.as,b=e.eventKey,f=e.onClick,d=Object(L.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(K.a)(a,"list-group-item");var m=Object(n.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();f&&f(e)}),[o,f]);return o&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0),r.a.createElement(T,Object(w.a)({ref:t},d,{eventKey:Object(A.b)(b,d.href),as:u||(l?d.href?"a":"button":"div"),onClick:m,className:P()(i,a,c&&"active",o&&"disabled",s&&a+"-"+s,l&&a+"-action")}))}));W.defaultProps=V,W.displayName="ListGroupItem";var M=W,U={variant:void 0,horizontal:void 0},X=r.a.forwardRef((function(e,t){var a,n=Object(E.a)(e,{activeKey:"onSelect"}),c=n.className,o=n.bsPrefix,i=n.variant,s=n.horizontal,l=n.as,u=void 0===l?"div":l,b=Object(L.a)(n,["className","bsPrefix","variant","horizontal","as"]),f=Object(K.a)(o,"list-group");return a=s?!0===s?"horizontal":"horizontal-"+s:null,r.a.createElement(H,Object(w.a)({ref:t},b,{as:u,className:P()(c,f,i&&f+"-"+i,a&&f+"-"+a)}))}));X.defaultProps=U,X.displayName="ListGroup",X.Item=M;var Y=X,Z=function(e){var t,a=e.name,n=e.number,r=e.id,o=e.onDeleteContact;return Object(p.jsxs)(Y.Item,{id:r,className:k.a.ListGroup.Item,children:[a,": ",n,Object(p.jsx)(O.a,(t={className:k.a.Button,variant:"outline-danger",onClick:function(){o(r)}},Object(c.a)(t,"className",k.a.buttonListItem),Object(c.a)(t,"children","Delete"),t))]})},$=a(122),ee=a.n($);function te(){var e=Object(u.d)(N.getContacts),t=Object(u.c)(),a=function(e){return t(v(e))};return Object(n.useEffect)((function(){t(j())}),[t]),Object(p.jsx)(Y,{className:ee.a.ListGroup,children:e.map((function(e){var t=e.name,n=e.number,r=e.id;return Object(p.jsx)(Z,{name:t,number:n,id:r,onDeleteContact:a,className:ee.a.contactList},r)}))})}var ae=a(123),ne=a.n(ae),re=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,c=e.as,o=void 0===c?"div":c,i=e.className,s=Object(L.a)(e,["bsPrefix","fluid","as","className"]),l=Object(K.a)(a,"container"),u="string"===typeof n?"-"+n:"-fluid";return r.a.createElement(o,Object(w.a)({ref:t},s,{className:P()(i,n?""+l+u:l)}))}));re.displayName="Container",re.defaultProps={fluid:!1};var ce=re,oe=["xl","lg","md","sm","xs"],ie=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.noGutters,o=e.as,i=void 0===o?"div":o,s=Object(L.a)(e,["bsPrefix","className","noGutters","as"]),l=Object(K.a)(a,"row"),u=l+"-cols",b=[];return oe.forEach((function(e){var t,a=s[e];delete s[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&b.push(""+u+n+"-"+t)})),r.a.createElement(i,Object(w.a)({ref:t},s,{className:P.a.apply(void 0,[n,l,c&&"no-gutters"].concat(b))}))}));ie.displayName="Row",ie.defaultProps={noGutters:!1};var se=ie,le=a(115),ue=function(){return Object(p.jsx)(ce,{children:Object(p.jsxs)(se,{children:[Object(p.jsxs)(le.a,{children:[Object(p.jsx)("h2",{className:ne.a.h2Header,children:"Phonebook"}),Object(p.jsx)(C,{})]}),Object(p.jsxs)(le.a,{children:[Object(p.jsx)("h2",{className:ne.a.h2Header,children:"Contacts"}),Object(p.jsx)(g,{}),Object(p.jsx)(te,{})]})]})})}}}]);
//# sourceMappingURL=4.d9107e7c.chunk.js.map