(function(e){function t(t){for(var a,c,o=t[0],i=t[1],f=t[2],l=0,b=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,f||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var d=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"42b5":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("MainLayout")],1)},r=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{attrs:{fluid:"",id:"main-container"}},[s("b-row",[s("b-col",{attrs:{sm:"3"}},[s("b-card",{attrs:{title:"OpenFaaS Auto Scaling"}},[e._v(" Gateway "),s("b-form-input",{model:{value:e.gateway,callback:function(t){e.gateway=t},expression:"gateway"}}),s("br"),e._v("Function name "),s("b-form-input",{model:{value:e.fn,callback:function(t){e.fn=t},expression:"fn"}}),s("br"),e._v("POST data "),s("b-form-textarea",{attrs:{rows:"2","max-rows":"2"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),s("br"),e._v(" "+e._s(e.cps)+" calls per second "),s("b-form-input",{attrs:{id:"range-1",type:"range",min:"0",max:"40"},model:{value:e.cps,callback:function(t){e.cps=t},expression:"cps"}}),s("br"),s("br"),e.started?e._e():s("b-button",{attrs:{href:"#",variant:"primary"},on:{click:e.start}},[e._v("Start")]),e.started?s("b-button",{attrs:{href:"#",variant:"secondary"},on:{click:e.stop}},[e._v("Stop")]):e._e()],1)],1),s("b-col",{attrs:{sm:"5"}},[s("b-card",{attrs:{title:"Charts"}},[e.describe?s("div",[s("b",[e._v("Number of Calls")]),s("my-chart",{ref:"numCalls"}),s("b",[e._v("Replicas")]),s("my-chart",{ref:"numReplicas"}),s("b",[e._v("Average Response Time (ms)")]),s("my-chart",{ref:"avg"})],1):e._e()])],1),s("b-col",{attrs:{sm:"4"}},[s("b-card",{attrs:{title:"Pods"}},[s("b-row",[s("b-col",{attrs:{sm:"5"}},[e._v("Name")]),s("b-col",{attrs:{sm:"4"}},[e._v("Status")]),s("b-col",{attrs:{sm:"3"}},[e._v("Age")])],1),s("hr"),e.pods?s("div",e._l(e.pods,(function(t,a){return s("b-row",{key:a,style:"color:"+e.getPodColor(t)},[s("b-col",{attrs:{sm:"5"}},[e._v(e._s(t.name))]),s("b-col",{attrs:{sm:"4"}},[e._v(e._s(t.status))]),s("b-col",{attrs:{sm:"3"}},[e._v(e._s(t.age))])],1)})),1):e._e()],1)],1)],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("canvas",{ref:"myChart",attrs:{width:100,height:25}})])},f=[],d=s("30ef"),l=s.n(d),b={name:"my-chart",data:function(){return{chart:void 0,datasets:[{borderWidth:1,borderColor:"rgba(0, 123, 255, 0.8)",hoverBorderWidth:2,hoverBorderColor:"rgba(0, 123, 255, 1)",backgroundColor:"rgba(100, 123, 255, 0.2)",data:[]}],options:{animation:{duration:0},elements:{point:{radius:0}},legend:{display:!1},scales:{scaleLabel:{display:!0,labelString:"xxx"},yAxes:[{ticks:{fontColor:"#000000",fontSize:14,beginAtZero:!0}}],xAxes:[{ticks:{fontColor:"#000000",fontSize:14}}]},tooltips:{callbacks:{label:function(e){return"".concat(e.yLabel)}},titleFontSize:14,titleFontColor:"#ffffff",bodyFontSize:14,backgroundColor:"rgba(0, 0, 0, 0.6)"}}}},methods:{reload:function(e,t){this.datasets[0].data=t,this.chart&&this.chart.destroy(),this.chart=new l.a(this.$refs.myChart,{type:"line",data:{labels:e,datasets:this.datasets},options:this.options})}}},u=b,j=s("2877"),p=Object(j["a"])(u,i,f,!1,null,null,null),h=p.exports,m=s("bc3a"),v={components:{MyChart:h},data:function(){return{gateway:"http://35.221.238.105:31112",fn:"echo",data:"5566",cps:1,started:!1,describe:void 0,pods:void 0,stats:void 0}},mounted:function(){this.getInfo()},methods:{start:function(){this.stats=[],this.started=!0,this.invoke()},stop:function(){this.started=!1},getInfo:function(){var e=this;if(setTimeout((function(){e.getInfo()}),2e3),m.get("http://35.221.238.105:4000/"+this.fn).then((function(t){e.describe=t.data.describe,e.pods=t.data.pods})).catch((function(t){console.log(t),e.describe=void 0,e.pods=void 0})),this.stats){for(var t={},s=0,a=0;a<this.stats.length;a++){var n=this.stats[a],r=t[n.sec]||{counter:0,ms:0,avg:0,replicas:0};n.noCall||(r.counter++,r.secOffset=r.ms+=n.ms,r.avg=parseInt(Math.round(r.ms/r.counter))),r.replicas=Math.max(r.replicas,n.replicas),0==a?(s=n.sec,r.secOffset=0):r.secOffset=n.sec-s,t[n.sec]=r}var c=[],o=[],i=[],f=[],d=parseInt((new Date).getTime()/1e3);Object.keys(t).forEach((function(e){if(e<d-300)return!0;c.push(t[e].secOffset),o.push(t[e].counter),i.push(t[e].replicas),f.push(t[e].avg)})),this.$refs.numCalls.reload(c,o),this.$refs.numReplicas.reload(c,i),this.$refs.avg.reload(c,f)}},getPodColor:function(e){switch(e.status){case"Running":return"green";case"Pending":return"gray";case"ContainerCreating":return"red";case"Terminating":return"red"}},invoke:function(){var e=this;if(this.started)if(setTimeout((function(){e.invoke()}),1e3),0==this.cps)this.stats.push({noCall:!0,sec:parseInt((new Date).getTime()/1e3),ms:0,replicas:this.describe.Replicas});else for(var t=function(t){var s=(new Date).getTime();m.post(e.gateway+"/function/"+e.fn,e.data).then((function(){var t=(new Date).getTime(),a=t-s;e.stats.push({sec:parseInt(t/1e3),ms:a,replicas:e.describe.Replicas})})).catch((function(e){console.log(e)}))},s=0;s<this.cps;s++)t(s)}}},g=v,y=(s("886c"),Object(j["a"])(g,c,o,!1,null,"642b6fe9",null)),k=y.exports,_={name:"App",components:{MainLayout:k}},w=_,z=Object(j["a"])(w,n,r,!1,null,null,null),x=z.exports,O=s("5f5b");s("f9e3"),s("2dd8");a["default"].config.productionTip=!1,a["default"].use(O["a"]),new a["default"]({render:function(e){return e(x)}}).$mount("#app")},"886c":function(e,t,s){"use strict";var a=s("42b5"),n=s.n(a);n.a}});
//# sourceMappingURL=app.f6a8ed23.js.map