(this["webpackJsonpshahada-app"]=this["webpackJsonpshahada-app"]||[]).push([[1],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(29),c=n.n(l),o=n(22),s=n(2),i=n(10),u=(n(61),n(72)),m=n(27),E=n.n(m),d=n(12),p=E()("08-03-2021","DD-MM-YYYY").format("YYYY-MM-DD"),f=194200*E()().diff(p,"years")/100+19420,y="Jan ".concat(E()().add(1,"year").format("YYYY")),g=10*f/100+f,h="Feb ".concat(E()().add(1,"year").format("YYYY")),v=function(){return r.a.createElement(s.A,{className:"current-status-card"},r.a.createElement(s.j,null,r.a.createElement(s.e,{className:"current-year-card"},r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Current Rent:"),r.a.createElement(s.h,null,"\u20b9 ",f)),r.a.createElement(s.f,null,r.a.createElement(s.g,null,"End Date:"),r.a.createElement(s.h,null,y)))),r.a.createElement(s.j,null,r.a.createElement(s.e,{className:"next-year-card"},r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Next Rent:"),r.a.createElement(s.h,null,"\u20b9 ",g)),r.a.createElement(s.f,null,r.a.createElement(s.g,null,"Start Date:"),r.a.createElement(s.h,null,h)))))},b=n(51),j=n(7),k=n.n(j),x=n(14),O=n(16),_=n(44),w=n.n(_),L=n(74),D=n.n(L),I=n(45),C=I.a.Storage,P={baseUrl:""};P.baseUrl="https://investabook-server.herokuapp.com/";var S=function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get({key:"token"});case 2:return t=e.sent,e.abrupt("return",w.a.get(t,"value",null));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=D.a.create({baseURL:P.baseUrl,responseType:"json"}),Y=I.a.Storage,A=Object(O.b)({path:["kea","login"],defaults:{isLoggedIn:!1,loginError:!1,loginLoading:!1},actions:{login:function(e){return{loginDetails:e}},setLoggedIn:function(e){return{userDetails:e}},setLoginError:!0},listeners:function(e){var t=e.actions;return{login:function(){var e=Object(x.a)(k.a.mark((function e(n){var a,r,l,c,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.loginDetails,r={"x-access-token":null},l=a.username,c=a.password,e.prev=3,e.next=6,N.post("/auth/login",{email:l,password:c},{headers:r});case 6:return o=e.sent,s=o.data,e.next=10,Y.set({key:"token",value:s.token});case 10:s.token?t.setLoggedIn(s.userDetails):t.setLoginError(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),t.setLoginError();case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()}},reducers:{isLoggedIn:{setLoggedIn:function(){return!0},setLoginError:function(){return!1}},loginError:{setLoginError:function(){return!0}},loginLoading:{login:function(){return!0},setLoggedIn:function(){return!1},setLoginError:function(){return!1}},userDetails:[{},{setLoggedIn:function(e,t){return t.userDetails}}],users:[[],{setUsers:function(e,t){return t.users}}]}}),q=Object(O.b)({path:["kea","payments"],connect:{values:[A,["userDetails"]]},events:function(e){var t=e.actions;return{afterMount:function(){t.getPayments()}}},defaults:{paymentLoding:!1},actions:{getPayments:!0,setPayments:function(e){return{payments:e}},addPayment:function(e){return{paymentDetails:e}},unsetLoding:!0},listeners:function(e){var t=e.actions;return{getPayments:function(){var e=Object(x.a)(k.a.mark((function e(){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.t0=e.sent,n={"x-access-token":e.t0},e.next=6,N.get("/payment",{headers:n});case 6:a=e.sent,r=a.data,t.setPayments(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addPayment:function(){var e=Object(x.a)(k.a.mark((function e(n){var a,r,l,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.paymentDetails,console.log(a),e.prev=2,e.next=5,S();case 5:return e.t0=e.sent,r={"x-access-token":e.t0},e.next=9,N.post("/payment",Object(b.a)(Object(b.a)({},a),{},{approved:!0}),{headers:r});case 9:l=e.sent,c=l.data,t.unsetLoding(c),e.next=16;break;case 14:e.prev=14,e.t1=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()}},reducers:{paymentLoding:{addPayment:function(){return!0},unsetLoding:function(){return!1}},payments:[[],{setPayments:function(e,t){return t.payments}}]}}),M=function(){var e=Object(O.d)(q),t=e.payments;e.userDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.n,{className:"header"},r.a.createElement(s.J,{className:"toolbar"},r.a.createElement(s.d,{slot:"start"},r.a.createElement(s.w,{color:"dark",autoHide:!1,onClick:function(){return i.g.open()}})),r.a.createElement(s.I,null,"Home"))),r.a.createElement(s.k,{fullscreen:!0},r.a.createElement(v,null),r.a.createElement(s.s,null,r.a.createElement(s.t,null,"Recent Payments"),w.a.map(t,(function(e){return r.a.createElement(s.e,null,r.a.createElement(s.q,null,r.a.createElement(s.o,{icon:d.c,style:{color:e.approved?"#bae637":"#ffa39e",fontSize:"40px"}}),r.a.createElement(s.r,null,r.a.createElement(s.m,null,r.a.createElement(s.A,null,r.a.createElement(s.j,{size:"7"},r.a.createElement("h2",{style:{fontWeight:400}},E()(e.paid_on).format("DD MMMM YYYY")),r.a.createElement("h3",null,e.amount),r.a.createElement("p",null,e.mode)),r.a.createElement(s.j,null,r.a.createElement(s.i,{color:e.approved?"success":"danger",style:{float:"left"}},r.a.createElement(s.r,null,e.approved?"PAID":"PENDING"))))))))})))))},U=(n(71),function(){return r.a.createElement(s.x,null,r.a.createElement(s.n,{className:"header"},r.a.createElement(s.J,null,r.a.createElement(s.I,null,"Wallet"))),r.a.createElement(s.k,{fullscreen:!0}))}),J=function(){return console.log("settings"),r.a.createElement(s.x,null,r.a.createElement(s.n,{className:"header"},r.a.createElement(s.J,null,r.a.createElement(s.I,null,"Settings"))),r.a.createElement(s.k,{fullscreen:!0}))},T=function(){return r.a.createElement(s.x,null,r.a.createElement(s.n,{className:"header"},r.a.createElement(s.J,null,r.a.createElement(s.I,null,"Activity"))),r.a.createElement(s.k,{fullscreen:!0}))},z=n(5),B=n(6),F=n(8),H=n(9),R=function(e){Object(F.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(z.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={tenant_id:"",paid_on:"",amount:0,mode:"",description:""},e.handleSubmit=function(){e.props.onSubmit(e.state),e.setState({tenant_id:"",paid_on:"",amount:0,mode:"",description:""})},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(s.s,null,r.a.createElement(s.q,null,r.a.createElement(s.r,null,"Tenant"),r.a.createElement(s.p,{value:this.state.tenant_id,onIonChange:function(t){return e.setState({tenant_id:t.detail.value})},placeholder:"0",clearInput:!0})),r.a.createElement(s.q,null,r.a.createElement(s.r,null,"Date of Payment"),r.a.createElement(s.l,{placeholder:"Select Date",value:this.state.paid_on,onIonChange:function(t){return e.setState({paid_on:t.detail.value})}})),r.a.createElement(s.q,null,r.a.createElement(s.r,null,"Amount"),r.a.createElement(s.p,{type:"number",placeholder:"0.00",value:this.state.amount,onIonChange:function(t){return e.setState({amount:t.detail.value})},clearInput:!0})),r.a.createElement(s.q,null,r.a.createElement(s.r,null,"Mode of Payment"),r.a.createElement(s.B,{value:this.state.mode,onIonChange:function(t){return e.setState({mode:t.detail.value})}},r.a.createElement(s.C,{value:"Cash"},"Cash"),r.a.createElement(s.C,{value:"Cheque"},"Cheque"),r.a.createElement(s.C,{value:"Bank Transfer"},"Bank Transfer"))),r.a.createElement(s.q,null,r.a.createElement(s.r,null,"Description"),r.a.createElement(s.H,{value:this.state.description,onIonChange:function(t){return e.setState({description:t.detail.value})}})),r.a.createElement(s.c,{color:"primary",expand:"block",onClick:this.handleSubmit,style:{margin:"15px"}},"Add"))}}]),n}(a.PureComponent),W=function(){var e=Object(O.c)(q).addPayment,t=Object(O.d)(q).paymentLoding;return r.a.createElement(s.x,null,r.a.createElement(s.n,{className:"header"},r.a.createElement(s.J,null,r.a.createElement(s.I,null,"Add Payment"))),r.a.createElement(s.k,{fullscreen:!0},r.a.createElement(R,{onSubmit:function(t){e(t)}})),r.a.createElement(s.u,{cssClass:"my-custom-class",isOpen:t,message:"Please wait..."}))},G=function(){Object(O.c)(A).login;return Object(O.d)(A).isLoggedIn?r.a.createElement(s.F,null,r.a.createElement(s.z,null,r.a.createElement(o.b,{path:"/private/home",exact:!0},r.a.createElement(M,null)),r.a.createElement(o.b,{path:"/private/wallet",component:U,exact:!0},r.a.createElement(U,null)),r.a.createElement(o.b,{path:"/private/settings",component:J,exact:!0},r.a.createElement(J,null)),r.a.createElement(o.b,{path:"/private/activity",component:T,exact:!0},r.a.createElement(T,null)),r.a.createElement(o.b,{path:"/private/add-payment",component:W,exact:!0},r.a.createElement(W,null)),r.a.createElement(o.a,{from:"/",to:"/private/home",exact:!0})),r.a.createElement(s.D,{slot:"bottom",translucent:!0,style:{backgroundColor:"black"}},r.a.createElement(s.E,{tab:"home",href:"/private/home"},r.a.createElement(s.o,{icon:d.l}),r.a.createElement(s.r,null,"Home")),r.a.createElement(s.E,{tab:"wallet",href:"/private/wallet"},r.a.createElement(s.o,{icon:d.s}),r.a.createElement(s.r,null,"Shahada Wallet")),r.a.createElement(s.E,{tab:"add-payment",href:"/private/add-payment"},r.a.createElement(s.o,{icon:d.a}),r.a.createElement(s.r,null,"Add Payment")),r.a.createElement(s.E,{tab:"activity",href:"/private/activity"},r.a.createElement(s.o,{icon:d.k}),r.a.createElement(s.r,null,"Acitvity")),r.a.createElement(s.E,{tab:"settings",href:"/private/settings"},r.a.createElement(s.o,{icon:d.j}),r.a.createElement(s.r,null,"Settings")))):r.a.createElement(o.a,{to:"/login"})},K=n(39),V=function(e){var t=e.onSubmit,n=Object(a.useState)(""),l=Object(K.a)(n,2),c=l[0],o=l[1],i=Object(a.useState)(""),u=Object(K.a)(i,2),m=u[0],E=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.j,{size:"12"},r.a.createElement(s.q,null,r.a.createElement(s.p,{placeholder:"Username",value:c,inputmode:"email",required:!0,onIonChange:function(e){var t=e.detail;return o(t.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.q,null,r.a.createElement(s.p,{placeholder:"Password",value:m,type:"password",required:!0,onIonChange:function(e){var t=e.detail;return E(t.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.c,{color:"dark",class:"button-margin",expand:"block",onClick:function(){return t({username:c,password:m})}},"Login"),r.a.createElement("br",null),r.a.createElement(s.c,{expand:"block",fill:"clear",color:"dark"},"Not Registered ?")))},$=function(){var e=Object(O.c)(A).login,t=Object(O.d)(A),n=t.isLoggedIn,a=t.loginError,l=t.loginLoading;return n?r.a.createElement(o.a,{to:"/private/home"}):r.a.createElement(s.x,{className:"login-background"},r.a.createElement(s.m,null,r.a.createElement(s.A,{style:{marginTop:"150px",height:"70%"}},r.a.createElement(s.j,{size:"12"},r.a.createElement(s.G,{color:"secondary",className:"brand-margin"},r.a.createElement("h1",{className:"brand-margin"},"INVESTABOOK"))),r.a.createElement(V,{onSubmit:function(t){return e(t)}}))),a&&r.a.createElement(s.a,{isOpen:!0,cssClass:"my-custom-class",header:"Alert",subHeader:"Login failed!",message:"Please recheck the user credentials",buttons:["OK"]}),r.a.createElement(s.u,{cssClass:"my-custom-class",isOpen:l,message:"Please wait..."}))},Q=function(){return i.g.enable(!0),r.a.createElement(s.b,null,r.a.createElement(s.v,{side:"end",contentId:"main-content",type:"overlay"},r.a.createElement(s.n,null,r.a.createElement(s.J,{color:"secondary"},r.a.createElement(s.w,{slot:"end",color:"primary"}))),r.a.createElement("div",null,"Hi")),r.a.createElement(s.x,{id:"main-content"},r.a.createElement(u.a,null,r.a.createElement(s.z,null,r.a.createElement(o.b,{path:"/login",exact:!0},r.a.createElement($,null)),r.a.createElement(o.b,{path:"/private"},r.a.createElement(G,null)),r.a.createElement(o.a,{from:"/",to:"/private/home",exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120);var X=n(31);c.a.render(r.a.createElement(X.a,{store:Object(O.a)().store},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,n){},71:function(e,t,n){},79:function(e,t,n){e.exports=n(121)},85:function(e,t,n){var a={"./ion-action-sheet.entry.js":[123,5],"./ion-alert.entry.js":[124,6],"./ion-app_8.entry.js":[125,7],"./ion-avatar_3.entry.js":[126,17],"./ion-back-button.entry.js":[127,18],"./ion-backdrop.entry.js":[128,43],"./ion-button_2.entry.js":[129,19],"./ion-card_5.entry.js":[130,20],"./ion-checkbox.entry.js":[131,21],"./ion-chip.entry.js":[132,22],"./ion-col_3.entry.js":[133,44],"./ion-datetime_3.entry.js":[134,10],"./ion-fab_3.entry.js":[135,23],"./ion-img.entry.js":[136,45],"./ion-infinite-scroll_2.entry.js":[137,46],"./ion-input.entry.js":[138,24],"./ion-item-option_3.entry.js":[139,25],"./ion-item_8.entry.js":[140,26],"./ion-loading.entry.js":[141,27],"./ion-menu_3.entry.js":[142,28],"./ion-modal.entry.js":[143,8],"./ion-nav_2.entry.js":[144,14],"./ion-popover.entry.js":[145,9],"./ion-progress-bar.entry.js":[146,29],"./ion-radio_2.entry.js":[147,30],"./ion-range.entry.js":[148,31],"./ion-refresher_2.entry.js":[149,11],"./ion-reorder_2.entry.js":[150,16],"./ion-ripple-effect.entry.js":[151,47],"./ion-route_4.entry.js":[152,32],"./ion-searchbar.entry.js":[153,33],"./ion-segment_2.entry.js":[154,34],"./ion-select_3.entry.js":[155,35],"./ion-slide_2.entry.js":[156,48],"./ion-spinner.entry.js":[157,13],"./ion-split-pane.entry.js":[158,49],"./ion-tab-bar_2.entry.js":[159,36],"./ion-tab_2.entry.js":[160,15],"./ion-text.entry.js":[161,37],"./ion-textarea.entry.js":[162,38],"./ion-toast.entry.js":[163,39],"./ion-toggle.entry.js":[164,12],"./ion-virtual-scroll.entry.js":[165,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=85,e.exports=r},87:function(e,t,n){var a={"./ion-icon.entry.js":[167,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=87,e.exports=r}},[[79,3,4]]]);
//# sourceMappingURL=main.67396be8.chunk.js.map