(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{16:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__3SeYc",Instagram:"Toolbar_Instagram__11xUa",Search:"Toolbar_Search__1KwoG",MenuIcon:"Toolbar_MenuIcon__14for"}},17:function(e,t,a){e.exports={Summary:"Summary_Summary__H97T2",Username:"Summary_Username__1bPtI",Post:"Summary_Post__3s7ph",Link:"Summary_Link__3D-_e",Usernametext:"Summary_Usernametext__jhSF1"}},18:function(e,t,a){e.exports={Profile:"Profile_Profile__1-QPs",PhotoandSummary:"Profile_PhotoandSummary__2nk3U",UserContent:"Profile_UserContent__3RZlX",UserMedia:"Profile_UserMedia__13i04"}},20:function(e,t,a){e.exports={Auth:"Login_Auth__2b0x_",FormContainer:"Login_FormContainer__3k3w-",text:"Login_text__1Y8DG"}},21:function(e,t,a){e.exports={Posts:"Posts_Posts__3KZay",Mypost:"Posts_Mypost__2LUff",Image:"Posts_Image__1m-mI"}},22:function(e,t,a){e.exports={Uploadpost:"uploadpost_Uploadpost__aqJTO",UploadpostContent:"uploadpost_UploadpostContent__1k_Md",Form:"uploadpost_Form__2q7Qa"}},25:function(e,t,a){e.exports={Auth:"Signup_Auth__3Lhr4",FormContainer:"Signup_FormContainer__36Wt7"}},26:function(e,t,a){e.exports={Profilepic:"Profilepic_Profilepic__2VErQ",Image:"Profilepic_Image__1u0cX"}},27:function(e,t,a){e.exports={Modal:"Modal_Modal__-GjUy",Children:"Modal_Children__7VWxN"}},39:function(e,t,a){e.exports={Container:"Container_Container__rwvju"}},52:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3cPEq"}},57:function(e,t,a){e.exports=a(87)},62:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(38),r=a.n(l),c=(a(62),a(39)),m=a.n(c),i=a(2),s=a(16),u=a.n(s),p=a(41),d=a.n(p),f=a(42),g=a.n(f),E=a(45),h=a.n(E),b=a(47),_=a.n(b),v=a(40),S=a.n(v),j=a(46),O=a.n(j),y=a(48),k=a.n(y),C=a(44),x=a.n(C),P=a(43),I=a.n(P),N=a(49),U=a.n(N),w=a(50),L=a.n(w),M=a(51),T=a.n(M),A=a(4),D=a(15),F=a.n(D),z=o.a.createContext({isAuth:!1,token:null,username:null,userId:null,login:function(){},signup:function(){},logout:function(){}}),R=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(null),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(null),d=Object(i.a)(p,2),f=d[0],g=d[1],E=Object(n.useState)(null),h=Object(i.a)(E,2),b=h[0],_=h[1];return o.a.createElement(z.Provider,{value:{isAuth:l,login:function(e){F.a.post("http://localhost:8080/login",e).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.userId),localStorage.setItem("username",e.data.username),u(e.data.token),g(e.data.username),_(e.data.userId)})).catch((function(e){console.log(e)})),r(!0)},signup:function(e){F.a.post("http://localhost:8080/signup",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},token:s,username:f,userId:b,logout:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("username")}}},e.children)},B=o.a.memo((function(e){var t,a=Object(n.useContext)(z).username,l=Object(n.useState)(!1),r=Object(i.a)(l,2),c=r[0],m=r[1],s=Object(n.useState)(!0),p=Object(i.a)(s,2),f=p[0],E=p[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),j=v[0],y=v[1],C=Object(n.useState)(!1),P=Object(i.a)(C,2),N=P[0],w=P[1],M=Object(n.useState)(!1),D=Object(i.a)(M,2),F=D[0],R=D[1],B=Object(n.useState)(!1),W=Object(i.a)(B,2),G=W[0],V=W[1];c&&(t={width:"90%"});var q=function(e){!0===f?E(!1):(E(!0),y(!1),w(!1),R(!1),V(!1)),console.log(f)},J=function(){!0===j?y(!1):(y(!0),E(!1),w(!1),R(!1),V(!1))},Q=function(){!0===N?w(!1):(w(!0),E(!1),y(!1),R(!1),V(!1))},H=function(){!0===F?R(!1):(R(!0),E(!1),y(!1),w(!1),V(!1))},K=function(){!0===G?V(!1):(V(!0),E(!1),y(!1),w(!1),R(!1))};return o.a.createElement("div",{onClick:function(e){e.preventDefault(),m(!1)},className:u.a.Toolbar},o.a.createElement("div",null,o.a.createElement(A.b,{to:"/",className:u.a.Instagram},"Instagram")),o.a.createElement("div",{onClick:function(e){e.preventDefault(),m(!c)},className:u.a.Search},o.a.createElement(S.a,null),o.a.createElement("input",{style:c?t:null,type:"text",placeholder:"Search"})),o.a.createElement("div",{className:u.a.MenuIcon},o.a.createElement(A.b,{to:"/"},f?o.a.createElement(d.a,{onClick:q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):o.a.createElement(g.a,{onClick:q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),o.a.createElement(A.b,{to:"/direct"},!1===F?o.a.createElement(I.a,{onClick:H,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):o.a.createElement(x.a,{onClick:H,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),o.a.createElement(A.b,{to:"/activity"},!1===j?o.a.createElement(h.a,{onClick:J,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):o.a.createElement(O.a,{onClick:J,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),o.a.createElement(A.b,{to:"/explore"},!1===N?o.a.createElement(_.a,{onClick:Q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):o.a.createElement(k.a,{onClick:Q,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),o.a.createElement(A.b,{to:"/"+a},!1===G?o.a.createElement(U.a,{onClick:K,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}):o.a.createElement(L.a,{onClick:K,style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}})),o.a.createElement(A.b,{to:"/upload"},o.a.createElement(T.a,{style:{color:"black",fontSize:30,marginLeft:"0.5rem",marginRight:"0.5rem"}}))))})),W=o.a.memo((function(e){return o.a.createElement("div",{className:m.a.Container},o.a.createElement(B,null),e.children)})),G=a(3),V=a(25),q=a.n(V),J=o.a.memo((function(){var e=Object(n.useContext)(z).signup,t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),f=d[0],g=d[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),b=h[0],_=h[1];return o.a.createElement("div",{className:q.a.Auth},o.a.createElement("div",{className:q.a.FormContainer},o.a.createElement("form",{onSubmit:function(t){(t.preventDefault(),""!==l&&""!==s&&""!==b)&&e({username:l,email:s,password:f,confirm:b});r(""),u(""),g(""),_("")}},o.a.createElement("input",{type:"text",placeholder:"username",value:l,onChange:function(e){return r(e.target.value)}}),o.a.createElement("input",{type:"email",placeholder:"email",value:s,onChange:function(e){return u(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"password",value:f,onChange:function(e){return g(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"confirm",value:b,onChange:function(e){return _(e.target.value)}}),o.a.createElement("button",{type:"submit"},"submit"))),o.a.createElement("div",null,o.a.createElement("p",null,"Have an Account? ",o.a.createElement(A.b,{to:"/login"},"Login"))))})),Q=a(20),H=a.n(Q),K=a(52),X=a.n(K),Y=function(e){return o.a.createElement("div",{onClick:e.disable,className:X.a.Backdrop},e.children)},Z=o.a.memo((function(e){var t=Object(n.useContext)(z).login,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],c=l[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),g=f[0],E=f[1];return o.a.createElement("div",{className:H.a.Auth},o.a.createElement("div",{className:H.a.FormContainer},o.a.createElement("form",{onSubmit:function(a){(a.preventDefault(),""!==r&&""!==u)&&t({auth:r,password:u});c(""),p(""),e.history.push("/")}},o.a.createElement("p",{className:H.a.text},"Instagram"),o.a.createElement("input",{type:"email",placeholder:"email or username",value:r,onChange:function(e){return c(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return p(e.target.value)}}),o.a.createElement("button",{type:"submit"},"submit"))),o.a.createElement("div",null,o.a.createElement("p",null,"Do not have Account? ",o.a.createElement(A.b,{to:"/signup"},"Sign up")),o.a.createElement("button",{onClick:function(e){e.preventDefault(),E(!0)}},"modal")),g?o.a.createElement(Y,{disable:function(){E(!1)}}):null)})),$=a(21),ee=a.n($),te=a(26),ae=a.n(te),ne=function(e){return o.a.createElement("div",{className:ae.a.Profilepic},o.a.createElement("img",{className:ae.a.Image,src:e.imageUrl,alt:"Profile Pic"}))},oe=a(17),le=a.n(oe),re=o.a.memo((function(e){var t=Object(n.useContext)(z);return o.a.createElement("div",{className:le.a.Summary},o.a.createElement("div",{className:le.a.Username},o.a.createElement("p",{className:le.a.Usernametext}," ",e.username," "),o.a.createElement(A.b,{to:"/".concat(t.username,"/edit")},"Edit Profile")),o.a.createElement("div",{className:le.a.Post},o.a.createElement("p",null,e.posts," posts"),o.a.createElement("p",null,e.followers," followers")))})),ce=a(18),me=a.n(ce),ie=a(53),se=a.n(ie),ue=a(54),pe=a.n(ue),de=a(55),fe=a.n(de),ge=o.a.memo((function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(),d=Object(i.a)(p,2),f=d[0],g=d[1];return Object(n.useEffect)((function(){F.a.get("http://localhost:8080/user/"+e.id).then((function(e){console.log(e.data.data),r(e.data.data.username),u(e.data.data.followers.length),g(e.data.data.myposts.length)})).catch((function(e){console.log(e)}))}),[e.id,l]),o.a.createElement("div",{className:me.a.Profile},o.a.createElement("div",{className:me.a.PhotoandSummary},o.a.createElement(ne,{imageUrl:"https://i.eurosport.com/2020/02/16/2776480-57351610-2560-1440.jpg"}),o.a.createElement(re,{username:l,followers:s,posts:f})),o.a.createElement("hr",{style:{color:"black"}}),o.a.createElement("div",{className:me.a.UserContent},o.a.createElement("div",null,o.a.createElement(A.b,{to:"/"+e.id},o.a.createElement(se.a,{style:{fontWeight:100}}),o.a.createElement("span",null,"POSTS"))),o.a.createElement("div",null,o.a.createElement(A.b,{to:"/"+e.id+"/channel"},o.a.createElement(pe.a,null),o.a.createElement("span",null,"IGTV"))),o.a.createElement("div",null,o.a.createElement(A.b,{to:""},o.a.createElement(fe.a,null),o.a.createElement("span",null,"SAVED")))),o.a.createElement("div",{className:me.a.UserMedia},e.children))})),Ee=o.a.memo((function(e){var t=e.match.params.id,a=Object(n.useState)([]),l=Object(i.a)(a,2),r=l[0],c=l[1];return Object(n.useEffect)((function(){F.a.get("http://localhost:8080/user/"+t).then((function(e){c(e.data.data.myposts)})).catch((function(e){console.log(e)}))}),[t]),o.a.createElement(ge,{id:t},o.a.createElement("div",{className:ee.a.Posts},r.map((function(e){return o.a.createElement("div",{key:e._id,className:ee.a.Mypost},o.a.createElement("img",{className:ee.a.Image,src:"http://localhost:8080/"+e.mediaUrl,alt:e.postText}))}))))})),he=function(e){var t=e.match.params.id;return console.log(e),o.a.createElement(ge,{id:t},o.a.createElement("div",null,o.a.createElement("h1",null,"Instagram Tv")))},be=a(22),_e=a.n(be),ve=a(27),Se=a.n(ve),je=function(e){return o.a.createElement("div",{className:Se.a.Modal},o.a.createElement("div",{className:Se.a.Children},e.children))},Oe=o.a.memo((function(e){var t=Object(n.useContext)(z);console.log(t.userPost);var a=t.token,l=Object(n.useState)(""),r=Object(i.a)(l,2),c=r[0],m=r[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),p=u[0],d=u[1];return o.a.createElement("div",{className:_e.a.Uploadpost},o.a.createElement(Y,null,o.a.createElement(je,null,o.a.createElement("div",{className:_e.a.UploadpostContent},o.a.createElement("h1",null,"Upload Post"),o.a.createElement("div",{className:_e.a.Form},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("postText",c),t.append("image",p);var n={headers:{Authorization:"Bearer "+a,"content-type":"multipart/form-data"}};F.a.post("http://localhost:8080/createpost",t,n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},o.a.createElement("input",{type:"text",placeholder:"What's in your Mind? ",value:c,onChange:function(e){m(e.target.value)}}),o.a.createElement("input",{type:"file",onChange:function(e){e.preventDefault(),d(e.target.files[0])}}),o.a.createElement("button",{type:"submit"},"upload"),o.a.createElement("button",{onClick:function(t){t.preventDefault(),e.history.goBack()}},"cancel")))))))})),ye=function(){var e=Object(n.useContext)(z).isAuth;return o.a.createElement(G.d,null,e?o.a.createElement(n.Fragment,null,o.a.createElement(W,null,o.a.createElement(G.b,{exact:!0,path:"/upload",component:Oe}),o.a.createElement(G.b,{exact:!0,path:"/:id/channel",component:he}),o.a.createElement(G.b,{exact:!0,path:"/:id",component:Ee}))):o.a.createElement(n.Fragment,null,o.a.createElement(G.a,{from:"/",to:"/login"}),o.a.createElement(G.b,{exact:!0,path:"/signup",component:J}),o.a.createElement(G.b,{exact:!0,path:"/login",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(R,null,o.a.createElement(A.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(ye,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.07475bb8.chunk.js.map