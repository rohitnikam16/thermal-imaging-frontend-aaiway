(this["webpackJsonpthermal-imaging-frontend"]=this["webpackJsonpthermal-imaging-frontend"]||[]).push([[0],{21:function(e,a,t){e.exports={container:"Register_container__XWZSX",heading:"Register_heading__3fUWf",innerContainer:"Register_innerContainer__3Mnn5",inputName:"Register_inputName__2S5iP",inputField:"Register_inputField__3vJOl",angleFace:"Register_angleFace__1Lj2F",nextBtn:"Register_nextBtn__1HF4d",nextButton:"Register_nextButton__2NU18",prevButton:"Register_prevButton__1k05Q",webcam:"Register_webcam__E8eIS"}},23:function(e,a,t){e.exports={container:"Login_container__1Oz4Y",heading:"Login_heading__3J40v",innerContainer:"Login_innerContainer__dLyUS",textField:"Login_textField__3Eo6D",card:"Login_card__2ebUg",heroImage:"Login_heroImage__2tEzm",submitBtn:"Login_submitBtn__3-9f5"}},51:function(e,a,t){e.exports={container:"App_container__1MQN3",contorlPanel:"App_contorlPanel__1ZqF7"}},69:function(e,a,t){e.exports=t.p+"static/media/heroLogin.970d73b7.svg"},7:function(e,a,t){e.exports={container:"ControlPanel_container__Z5LXb",iconBtn:"ControlPanel_iconBtn__2WSo3",whiteBg:"ControlPanel_whiteBg__2G-yJ",dialog:"ControlPanel_dialog__ZhHpm",dialogTitle:"ControlPanel_dialogTitle__2XAxZ",settingsDialog:"ControlPanel_settingsDialog__2xcS-",formComponent:"ControlPanel_formComponent__1qYGz",adminMail:"ControlPanel_adminMail__2RKXo",settingsForm:"ControlPanel_settingsForm__1IiGr",saveBtn:"ControlPanel_saveBtn__2ekKm"}},70:function(e,a,t){e.exports=t.p+"static/media/video.2f554134.webm"},83:function(e,a,t){e.exports=t(94)},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=t(51),c=t.n(o),m=t(50),s=t(12),u=t(10),g=t(7),d=t.n(g),_=t(120),E=t(132),p=t(125),b=t(133),v=t(126),h=t(127),f=t(134),N=t(130),C=t(128),B=t(65),S=t.n(B),j=t(64),x=t.n(j),O=t(66),P=t.n(O),k=t(67),w=t.n(k),y=t(68),F=t.n(y),L=t(33),R=t.n(L),z=Object(s.f)((function(e){var a=e.history,t=Object(n.useState)({login:d.a.nothing,register:d.a.nothing,capture:d.a.nothing,database:d.a.nothing}),l=Object(u.a)(t,2),i=l[0],o=l[1],c=Object(n.useState)(!1),m=Object(u.a)(c,2),s=m[0],g=m[1],B=Object(n.useState)(!0),j=Object(u.a)(B,2),O=j[0],k=j[1],y=Object(n.useState)(!1),L=Object(u.a)(y,2),z=L[0],I=L[1],K=Object(n.useState)(""),A=Object(u.a)(K,2),D=A[0],J=A[1],M=Object(n.useState)(!1),U=Object(u.a)(M,2),X=U[0],Z=U[1],q=Object(n.useState)(!0),T=Object(u.a)(q,2),W=T[0],G=T[1],H=function(e){a.push("/".concat(e))},Y=Object(n.useState)(!1),Q=Object(u.a)(Y,2),V=Q[0],$=Q[1];return Object(n.useEffect)((function(){switch(a.location.pathname){case"/":o({login:d.a.whiteBg});break;case"/register":o({register:d.a.whiteBg});break;case"/capture":o({capture:d.a.whiteBg});break;case"/database":o({database:d.a.whiteBg});break;case"/settings":o({settings:d.a.whiteBg});break;default:o({login:d.a.nothing,register:d.a.nothing,capture:d.a.nothing,database:d.a.nothing,settings:d.a.nothing})}}),[a.location]),r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:R()(d.a.iconBtn,i.login)},r.a.createElement(_.a,{onClick:function(){return H("")}},r.a.createElement(x.a,{fontSize:"large"}))),r.a.createElement("div",{className:R()(d.a.iconBtn,i.register)},r.a.createElement(_.a,{onClick:function(){return H("register")}},r.a.createElement(S.a,{fontSize:"large"}))),r.a.createElement("div",{className:R()(d.a.iconBtn,i.capture)},r.a.createElement(_.a,{onClick:function(){return H("capture")}},r.a.createElement(P.a,{fontSize:"large"}))),r.a.createElement("div",{className:R()(d.a.iconBtn,i.database)},r.a.createElement(_.a,{onClick:function(){return H("database")}},r.a.createElement(w.a,{fontSize:"large"}))),r.a.createElement("div",{className:R()(d.a.iconBtn,V?d.a.whiteBg:d.a.nothing)},r.a.createElement(_.a,{onClick:function(){return $(!0)}},r.a.createElement(F.a,{fontSize:"large"}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{open:V,onClose:function(){$(!1)},className:d.a.dialog,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(p.a,{className:d.a.dialogTitle,id:"responsive-dialog-title"},"Settings"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("Hurry ")}},r.a.createElement(b.a,{component:"fieldset",className:d.a.settingsDialog},r.a.createElement(v.a,{"aria-label":"position",className:d.a.settingsForm},r.a.createElement(h.a,{className:d.a.formComponent,value:s,control:r.a.createElement(f.a,{color:"primary"}),checked:s,label:"Allow sunglasses",labelPlacement:"end",onChange:function(){return g(!s)}}),r.a.createElement(h.a,{className:d.a.formComponent,value:O,checked:O,onChange:function(){return k(!O)},control:r.a.createElement(f.a,{color:"primary"}),label:"Email to user",labelPlacement:"end"}),r.a.createElement(h.a,{className:d.a.formComponent,value:z,checked:z,onChange:function(){return I(!z)},control:r.a.createElement(f.a,{color:"primary"}),label:"Save original image",labelPlacement:"end"}),r.a.createElement(N.a,{className:R()(d.a.formComponent,d.a.adminMail),value:D,variant:"standard",type:"email",label:"Admin email",onChange:function(e){return J(e.target.value)}}),r.a.createElement(h.a,{className:d.a.formComponent,value:X,checked:X,onChange:function(){return Z(!X)},control:r.a.createElement(f.a,{color:"primary"}),label:"Sound alarm",labelPlacement:"end"}),r.a.createElement(h.a,{className:d.a.formComponent,value:W,checked:W,onChange:function(){return G(!W)},control:r.a.createElement(f.a,{color:"primary"}),label:"Thermal view",labelPlacement:"end"}),r.a.createElement(C.a,{type:"submit",className:d.a.saveBtn},"Save")))))))})),I=t(23),K=t.n(I),A=t(69),D=t.n(A),J=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),c=o[0],m=o[1];return r.a.createElement("div",{className:K.a.container},r.a.createElement("div",{className:K.a.heading},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Please login here to continue")),r.a.createElement("div",{className:K.a.innerContainer},r.a.createElement("div",{className:K.a.formContainer},r.a.createElement("form",{onSubmit:function(){alert("Login Working!")}},r.a.createElement("div",{className:K.a.card},r.a.createElement(N.a,{className:K.a.textField,required:!0,value:t,type:"email",onChange:function(e){return l(e.target.value)},label:"Username",variant:"outlined"}),r.a.createElement(N.a,{className:K.a.textField,required:!0,value:c,type:"password",onChange:function(e){return m(e.target.value)},label:"Password",variant:"outlined"}),r.a.createElement(C.a,{className:K.a.submitBtn,type:"submit",variant:"contained"},"Login")))),r.a.createElement("div",{className:K.a.heroImage},r.a.createElement("img",{src:D.a,alt:"hero-login"}))))},M=t(21),U=t.n(M),X=t(129),Z=t(70),q=t.n(Z),T=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:U.a.container},r.a.createElement("div",{className:U.a.heading},r.a.createElement("h2",null,"Register Face"),r.a.createElement("p",null,"You can start capturing images here to register new face.")),r.a.createElement(X.a,{container:!0,className:U.a.innerContainer},r.a.createElement(X.a,{item:!0,lg:3,md:3,xs:3},r.a.createElement("div",{className:U.a.inputName},r.a.createElement(N.a,{className:U.a.inputField,type:"text",value:t,label:"Name",onChange:function(e){return l(e.target.value)},variant:"outlined"}),r.a.createElement(C.a,{variant:"contained",className:U.a.nextBtn},"Next")),r.a.createElement("div",{className:U.a.angleFace},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png",alt:"smily"}),r.a.createElement("div",{className:U.a.buttons},r.a.createElement(C.a,{className:U.a.prevButton,variant:"contained"},"Prev"),r.a.createElement(C.a,{className:U.a.nextButton,variant:"contained"},"Next")))),r.a.createElement(X.a,{lg:8,md:8,className:U.a.webcam,item:!0},r.a.createElement("video",{controls:!0,autoPlay:!0,src:q.a}))))},W=function(){return r.a.createElement("div",{className:c.a.container},r.a.createElement(m.a,null,r.a.createElement("div",{className:c.a.contorlPanel},r.a.createElement(z,null)),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:J}),r.a.createElement(s.a,{path:"/register",exact:!0,component:T}))))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.90d820ce.chunk.js.map