(this.webpackJsonpNewsify=this.webpackJsonpNewsify||[]).push([[0],{101:function(e,t,a){},194:function(e,t,a){e.exports=a(303)},303:function(e,t,a){"use strict";a.r(t);a(195),a(221),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263);var n=a(0),c=a.n(n),r=a(73),l=a.n(r),i=a(46),s=a(40),o=a.n(s),u=a(74),m=a.n(u),p=a(105),d=a(55),f=a(113),b=a.n(f),E=a(112),h=a.n(E),g=(a(272),a(25)),k=a(41),v=a.n(k),y=a(39),O=a.n(y),j=a(42),w=a.n(j),x=a(52),N=a.n(x),C=a(53),P=a.n(C),A=a(54),G=a.n(A),K=(a(101),Object(g.b)()),S=function(e){return c.a.createElement(v.a,{id:e.id},c.a.createElement(O.a,{left:c.a.createElement(w.a,{onClick:e.go,"data-to":"home"},K===g.a?c.a.createElement(N.a,null):c.a.createElement(P.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:G.a,alt:"Persik The Cat"}))},V=Object(g.b)(),W=function(e){return c.a.createElement(v.a,{id:e.id},c.a.createElement(O.a,{left:c.a.createElement(w.a,{onClick:e.go,"data-to":"home"},V===g.a?c.a.createElement(N.a,null):c.a.createElement(P.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:G.a,alt:"Persik The Cat"}))},I=a(111),T=a.n(I),_=a(75),J=a.n(_),U=a(108),z=a.n(U),M=a(110),R=a.n(M),q=a(109),B=a.n(q),H=a(106),L=a.n(H),X=a(107),D=a.n(X),F=Object(g.b)();function Q(e){e.city&&e.city.title&&e.city.title;return i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppGeodataResult"===a)if(!0===n.available){var c="https://geocode-maps.yandex.ru/1.x/?format=json&apikey=aaa60bd2-f573-4cf9-873e-589107560bc0&sco=longlat&kind=locality&geocode="+n.long+","+n.lat,r=new XMLHttpRequest;r.open("GET",c,!0),r.onload=function(){if(200===r.status){var e=JSON.parse(r.responseText);e.response.GeoObjectCollection.featureMember[0].GeoObject.name}},r.send()}else JSON.stringify(n);else a})),i.a.send("VKWebAppGetGeodata",{})}var Y=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(v.a,{id:t},c.a.createElement(O.a,{left:c.a.createElement(w.a,{onClick:a,"data-to":"settings"},F===g.a?c.a.createElement(L.a,null):c.a.createElement(D.a,null))},"Newsify"),n&&c.a.createElement(J.a,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(z.a,{before:n.photo_200?c.a.createElement(B.a,{src:n.photo_200}):null,description:Q(n)},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(J.a,{title:"Navigation Example"},c.a.createElement(R.a,null,c.a.createElement(T.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},Z=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],u=i[1],f=Object(n.useState)(c.a.createElement(h.a,{size:"large"})),E=Object(d.a)(f,2),g=E[0],k=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(b.a,{activePanel:a,popout:g},c.a.createElement(Y,{id:"home",fetchedUser:s,go:v}),c.a.createElement(W,{id:"settings",go:v}),c.a.createElement(S,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(Z,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[194,1,2]]]);
//# sourceMappingURL=main.a9f5c942.chunk.js.map