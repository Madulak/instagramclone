(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{16:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__3SeYc",Instagram:"Toolbar_Instagram__11xUa",Search:"Toolbar_Search__1KwoG",MenuIcon:"Toolbar_MenuIcon__14for"}},17:function(e,t,a){e.exports={Summary:"Summary_Summary__H97T2",Username:"Summary_Username__1bPtI",Post:"Summary_Post__3s7ph",Link:"Summary_Link__3D-_e",Usernametext:"Summary_Usernametext__jhSF1"}},18:function(e,t,a){e.exports={Profile:"Profile_Profile__1-QPs",PhotoandSummary:"Profile_PhotoandSummary__2nk3U",UserContent:"Profile_UserContent__3RZlX",UserMedia:"Profile_UserMedia__13i04"}},20:function(e,t,a){e.exports={Auth:"Login_Auth__2b0x_",FormContainer:"Login_FormContainer__3k3w-",text:"Login_text__1Y8DG"}},21:function(e,t,a){e.exports={Posts:"Posts_Posts__3KZay",Mypost:"Posts_Mypost__2LUff",Image:"Posts_Image__1m-mI"}},22:function(e,t,a){e.exports={Detailedpost:"Detailedpost_Detailedpost__9Lgym",PostImage:"Detailedpost_PostImage__1630i"}},25:function(e,t,a){e.exports={Auth:"Signup_Auth__3Lhr4",FormContainer:"Signup_FormContainer__36Wt7"}},26:function(e,t,a){e.exports={Profilepic:"Profilepic_Profilepic__2VErQ",Image:"Profilepic_Image__1u0cX"}},27:function(e,t,a){e.exports={Uploadpost:"uploadpost_Uploadpost__aqJTO",UploadpostContent:"uploadpost_UploadpostContent__1k_Md",Form:"uploadpost_Form__2q7Qa"}},28:function(e,t,a){e.exports={Modal:"Modal_Modal__-GjUy",Children:"Modal_Children__7VWxN"}},40:function(e,t,a){e.exports={Container:"Container_Container__rwvju"}},53:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3cPEq"}},57:function(e,t,a){e.exports={Timeline:"Timeline_Timeline__1AXAD"}},59:function(e,t,a){e.exports=a(89)},64:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(39),r=a.n(o),c=(a(64),a(40)),m=a.n(c),i=a(2),s=a(16),u=a.n(s),p=a(42),d=a.n(p),f=a(43),E=a.n(f),g=a(46),b=a.n(g),h=a(48),_=a.n(h),v=a(41),S=a.n(v),j=a(47),O=a.n(j),y=a(49),C=a.n(y),k=a(45),x=a.n(k),P=a(44),I=a.n(P),N=a(50),U=a.n(N),w=a(51),L=a.n(w),T=a(52),D=a.n(T),M=a(4),A=a(11),F=a.n(A),z=l.a.createContext({isAuth:!1,token:null,username:null,userId:null,login:function(){},signup:function(){},logout:function(){}}),R=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(null),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(null),d=Object(i.a)(p,2),f=d[0],E=d[1],g=Object(n.useState)(null),b=Object(i.a)(g,2),h=b[0],_=b[1];return l.a.createElement(z.Provider,{value:{isAuth:o,login:function(e){F.a.post("http://localhost:8080/login",e).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.userId),localStorage.setItem("username",e.data.username),u(e.data.token),E(e.data.username),_(e.data.userId)})).catch((function(e){console.log(e)})),r(!0)},signup:function(e){F.a.post("http://localhost:8080/signup",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},token:s,username:f,userId:h,logout:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("username")}}},e.children)},B=l.a.memo((function(e){var t,a=Object(n.useContext)(z).username,o=Object(n.useState)(!1),r=Object(i.a)(o,2),c=r[0],m=r[1],s=Object(n.useState)(!0),p=Object(i.a)(s,2),f=p[0],g=p[1],h=Object(n.useState)(!1),v=Object(i.a)(h,2),j=v[0],y=v[1],k=Object(n.useState)(!1),P=Object(i.a)(k,2),N=P[0],w=P[1],T=Object(n.useState)(!1),A=Object(i.a)(T,2),F=A[0],R=A[1],B=Object(n.useState)(!1),W=Object(i.a)(B,2),G=W[0],V=W[1];c&&(t={width:"90%"});var q=function(e){!0===f?g(!1):(g(!0),y(!1),w(!1),R(!1),V(!1)),console.log(f)},J=function(){!0===j?y(!1):(y(!0),g(!1),w(!1),R(!1),V(!1))},Q=function(){!0===N?w(!1):(w(!0),g(!1),y(!1),R(!1),V(!1))},X=function(){!0===F?R(!1):(R(!0),g(!1),y(!1),w(!1),V(!1))},H=function(){!0===G?V(!1):(V(!0),g(!1),y(!1),w(!1),R(!1))};return l.a.createElement("div",{onClick:function(e){e.preventDefault(),m(!1)},className:u.a.Toolbar},l.a.createElement("div",null,l.a.createElement(M.b,{to:"/",className:u.a.Instagram},"Instagram")),l.a.createElement("div",{onClick:function(e){e.preventDefault(),m(!c)},className:u.a.Search},l.a.createElement(S.a,null),l.a.createElement("input",{style:c?t:null,type:"text",placeholder:"Search"})),l.a.createElement("div",{className:u.a.MenuIcon},l.a.createElement(M.b,{to:"/"},f?l.a.createElement(d.a,{onClick:q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):l.a.createElement(E.a,{onClick:q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),l.a.createElement(M.b,{to:"/direct"},!1===F?l.a.createElement(I.a,{onClick:X,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):l.a.createElement(x.a,{onClick:X,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),l.a.createElement(M.b,{to:"/activity"},!1===j?l.a.createElement(b.a,{onClick:J,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):l.a.createElement(O.a,{onClick:J,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),l.a.createElement(M.b,{to:"/explore"},!1===N?l.a.createElement(_.a,{onClick:Q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):l.a.createElement(C.a,{onClick:Q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),l.a.createElement(M.b,{to:"/"+a},!1===G?l.a.createElement(U.a,{onClick:H,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):l.a.createElement(L.a,{onClick:H,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),l.a.createElement(M.b,{to:"/upload"},l.a.createElement(D.a,{style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}))))})),W=l.a.memo((function(e){return l.a.createElement("div",{className:m.a.Container},l.a.createElement(B,null),e.children)})),G=a(3),V=a(25),q=a.n(V),J=l.a.memo((function(){var e=Object(n.useContext)(z).signup,t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),f=d[0],E=d[1],g=Object(n.useState)(""),b=Object(i.a)(g,2),h=b[0],_=b[1];return l.a.createElement("div",{className:q.a.Auth},l.a.createElement("div",{className:q.a.FormContainer},l.a.createElement("form",{onSubmit:function(t){(t.preventDefault(),""!==o&&""!==s&&""!==h)&&e({username:o,email:s,password:f,confirm:h});r(""),u(""),E(""),_("")}},l.a.createElement("input",{type:"text",placeholder:"username",value:o,onChange:function(e){return r(e.target.value)}}),l.a.createElement("input",{type:"email",placeholder:"email",value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:f,onChange:function(e){return E(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"confirm",value:h,onChange:function(e){return _(e.target.value)}}),l.a.createElement("button",{type:"submit"},"submit"))),l.a.createElement("div",null,l.a.createElement("p",null,"Have an Account? ",l.a.createElement(M.b,{to:"/login"},"Login"))))})),Q=a(20),X=a.n(Q),H=a(53),K=a.n(H),Y=function(e){return l.a.createElement("div",{onClick:e.disable,className:K.a.Backdrop},e.children)},Z=l.a.memo((function(e){var t=Object(n.useContext)(z).login,a=Object(n.useState)(""),o=Object(i.a)(a,2),r=o[0],c=o[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),E=f[0],g=f[1];return l.a.createElement("div",{className:X.a.Auth},l.a.createElement("div",{className:X.a.FormContainer},l.a.createElement("form",{onSubmit:function(a){(a.preventDefault(),""!==r&&""!==u)&&t({auth:r,password:u});c(""),p(""),e.history.push("/")}},l.a.createElement("p",{className:X.a.text},"Instagram"),l.a.createElement("input",{type:"email",placeholder:"email or username",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return p(e.target.value)}}),l.a.createElement("button",{type:"submit"},"submit"))),l.a.createElement("div",null,l.a.createElement("p",null,"Do not have Account? ",l.a.createElement(M.b,{to:"/signup"},"Sign up")),l.a.createElement("button",{onClick:function(e){e.preventDefault(),g(!0)}},"modal")),E?l.a.createElement(Y,{disable:function(){g(!1)}}):null)})),$=a(21),ee=a.n($),te=a(26),ae=a.n(te),ne=function(e){return l.a.createElement("div",{className:ae.a.Profilepic},l.a.createElement("img",{className:ae.a.Image,src:e.imageUrl,alt:"Profile Pic"}))},le=a(17),oe=a.n(le),re=l.a.memo((function(e){var t=Object(n.useContext)(z);return l.a.createElement("div",{className:oe.a.Summary},l.a.createElement("div",{className:oe.a.Username},l.a.createElement("div",null,l.a.createElement("p",{className:oe.a.Usernametext}," ",e.username," ")),l.a.createElement("div",null,l.a.createElement(M.b,{to:"/".concat(t.username,"/edit")},"Edit Profile"))),l.a.createElement("div",{className:oe.a.Post},l.a.createElement("p",null,e.posts," posts"),l.a.createElement("p",null,e.followers," followers")))})),ce=a(18),me=a.n(ce),ie=a(54),se=a.n(ie),ue=a(55),pe=a.n(ue),de=a(56),fe=a.n(de),Ee=l.a.memo((function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(),d=Object(i.a)(p,2),f=d[0],E=d[1];return Object(n.useEffect)((function(){F.a.get("http://localhost:8080/user/"+e.id).then((function(e){console.log(e.data.data),r(e.data.data.username),u(e.data.data.followers.length),E(e.data.data.myposts.length)})).catch((function(e){console.log(e)}))}),[e.id,o]),l.a.createElement("div",{className:me.a.Profile},l.a.createElement("div",{className:me.a.PhotoandSummary},l.a.createElement(ne,{imageUrl:"https://i.eurosport.com/2020/02/16/2776480-57351610-2560-1440.jpg"}),l.a.createElement(re,{username:o,followers:s,posts:f})),l.a.createElement("hr",{style:{color:"black"}}),l.a.createElement("div",{className:me.a.UserContent},l.a.createElement("div",null,l.a.createElement(M.b,{to:"/"+e.id},l.a.createElement(se.a,{style:{fontWeight:100}}),l.a.createElement("span",null,"POSTS"))),l.a.createElement("div",null,l.a.createElement(M.b,{to:"/"+e.id+"/channel"},l.a.createElement(pe.a,null),l.a.createElement("span",null,"IGTV"))),l.a.createElement("div",null,l.a.createElement(M.b,{to:""},l.a.createElement(fe.a,null),l.a.createElement("span",null,"SAVED")))),l.a.createElement("div",{className:me.a.UserMedia},e.children))})),ge=l.a.memo((function(e){var t=e.match.params.id,a=Object(n.useState)([]),o=Object(i.a)(a,2),r=o[0],c=o[1];return Object(n.useEffect)((function(){F.a.get("http://localhost:8080/user/"+t).then((function(e){c(e.data.data.myposts)})).catch((function(e){console.log(e)}))}),[t]),l.a.createElement(Ee,{id:t},l.a.createElement("div",{className:ee.a.Posts},r.map((function(e){return l.a.createElement(M.b,{key:e._id,to:"/post/"+e._id},l.a.createElement("div",{className:ee.a.Mypost},l.a.createElement("img",{className:ee.a.Image,src:"http://localhost:8080/"+e.mediaUrl,alt:e.postText})))}))))})),be=function(e){var t=e.match.params.id;return console.log(e),l.a.createElement(Ee,{id:t},l.a.createElement("div",null,l.a.createElement("h1",null,"Instagram Tv")))},he=a(27),_e=a.n(he),ve=a(28),Se=a.n(ve),je=function(e){return l.a.createElement("div",{className:Se.a.Modal},l.a.createElement("div",{className:Se.a.Children},e.children))},Oe=l.a.memo((function(e){var t=Object(n.useContext)(z);console.log(t.userPost);var a=t.token,o=Object(n.useState)(""),r=Object(i.a)(o,2),c=r[0],m=r[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),p=u[0],d=u[1];return l.a.createElement(W,null,l.a.createElement(Y,null,l.a.createElement(je,null,l.a.createElement("div",{className:_e.a.UploadpostContent},l.a.createElement("h1",null,"Upload Post"),l.a.createElement("div",{className:_e.a.Form},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("postText",c),t.append("image",p);var n={headers:{Authorization:"Bearer "+a,"content-type":"multipart/form-data"}};F.a.post("http://localhost:8080/createpost",t,n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{type:"text",placeholder:"What's in your Mind? ",value:c,onChange:function(e){m(e.target.value)}}),l.a.createElement("input",{type:"file",onChange:function(e){e.preventDefault(),d(e.target.files[0])}}),l.a.createElement("button",{type:"submit"},"upload"),l.a.createElement("button",{onClick:function(e){e.preventDefault()}},"cancel")))))))})),ye=a(22),Ce=a.n(ye),ke=l.a.memo((function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(),d=Object(i.a)(p,2),f=d[0],E=d[1],g=Object(n.useState)(),b=Object(i.a)(g,2),h=b[0],_=b[1],v=e.match.params.id;Object(n.useEffect)((function(){F.a.get("http://localhost:8080/post/"+v).then((function(e){u(e.data.data.createdAt),r(e.data.data.mediaUrl),E(e.data.data.postCreator.username),_(e.data.data.postText)})).catch((function(e){console.log(e)}))}),[v]);return l.a.createElement(W,null,l.a.createElement(Y,{disable:function(){e.history.goBack()}},l.a.createElement(je,null,l.a.createElement("div",{className:Ce.a.Detailedpost},l.a.createElement("div",{className:Ce.a.PostImage},l.a.createElement("img",{src:"http://localhost:8080/"+o,alt:h})),l.a.createElement("div",{className:Ce.a.PostContent},l.a.createElement("div",null,l.a.createElement("p",null,f)),l.a.createElement("div",null,l.a.createElement("p",null,h)),l.a.createElement("div",null,l.a.createElement("p",null,s)))))))})),xe=a(57),Pe=a.n(xe),Ie=function(){return l.a.createElement(W,null,l.a.createElement("div",{className:Pe.a.Timeline},l.a.createElement("h1",null,"Myposts of the Timeline")))},Ne=function(){var e=Object(n.useContext)(z).isAuth;return l.a.createElement(G.d,null,e?l.a.createElement(n.Fragment,null,l.a.createElement(G.b,{exact:!0,path:"/",component:Ie}),l.a.createElement(G.b,{exact:!0,path:"/upload",component:Oe}),l.a.createElement(G.b,{exact:!0,path:"/post/:id",component:ke}),l.a.createElement(G.b,{exact:!0,path:"/:id/channel",component:be}),l.a.createElement(G.b,{exact:!0,path:"/:id",component:ge})):l.a.createElement(n.Fragment,null,l.a.createElement(G.a,{from:"/",to:"/login"}),l.a.createElement(G.b,{exact:!0,path:"/signup",component:J}),l.a.createElement(G.b,{exact:!0,path:"/login",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null,l.a.createElement(M.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.7842d0c7.chunk.js.map