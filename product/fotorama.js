/*!
 * Fotorama 4.1.17 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/^m/)&&a.match(/-?\d+/g)[4]}function i(a){return kc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a){var b={};return kc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[T.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn.call(this)}),b.tEnd=!0}}function r(a,b,c){var d,e=a.data();e&&(e.onEndFn=function(){d||(c.call(this),d=!0)},e.tProp=b,q(a))}function s(a){if(kc?a.css(k(0)).data("onEndFn",f):a.stop(),a.length){var b=i(a);return a.css(j(b)),b}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.p=u.p||("https://"===location.protocol?"https://":"http://"),u.p}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e];if(g.i===c&&g.thumbsReady){d.splice(e,1,{i:c,video:g.video,videoReady:!0,caption:g.caption,img:g.img||b.img,thumb:g.thumb||b.thumb,id:g.id,fit:g.fit});break}}}function z(a){function b(a,b){var c=a.data(),d=a.children("img").eq(0),e=a.attr("href"),f=a.attr("src"),g=d.attr("src"),h=c.video,i=b?w(e,h===!0):!1;return i?e=!1:i=w(h,h),{video:i,img:c.img||e||f||g,thumb:c.thumb||g||f||e}}var d=[];return a.children().each(function(){var a=c(this),e=c.extend(a.data(),{id:a.attr("id")});if(a.is("a, img"))c.extend(e,b(a,!0));else{if(a.is(":empty"))return;c.extend(e,{html:this,_html:a.html()})}d.push(e)}),d}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a,b,c){a()?b():setTimeout(function(){B(a,b)},c||100)}function C(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function D(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.round(f),height:Math.round(h),marginLeft:Math.round(-f/2),marginTop:Math.round(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}}function E(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function F(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function G(a,b,c){if(!c)return!1;var d;if(!isNaN(a))return+a;for(var e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function H(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(M(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function I(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function J(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){J(a,c.extend({},b,{overPos:b.pos,time:Math.max(nc,b.time/2)}))});var g=j(d);kc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,tc,e)}function K(a,b,d,e){var g=a,h=b,i="crossfade"===e.method;a=a||c(a),b=b||c(b);var j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Ib+" "+Hb),a.addClass(Ib),b.addClass(Hb),kc?(s(a),s(b),i&&h&&a.css(c.extend(m,n)).width(),a.css(c.extend(i?l:m,o)),b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),h&&a.fadeTo(0,0),a.fadeTo(e.time,1,j),i&&b.fadeTo(e.time,0),g||h||j())}function L(a,b){a._x=b?a.touches[0].pageX:a.pageX,a._y=b?a.touches[0].pageY:a.pageY}function M(a,b){function d(a){return m=c(a.target),s.checked=i=l=p=q=!1,h||k||a.touches&&a.touches.length>1||a.which>1||$&&$.type!==a.type&&ab||(p=b.select&&m.is(b.select,r))?p:(o=a.type.match("touch"),q=m.is("a, a *",r),L(a,o),$=a,_=a.type.replace(/down|start/,"move"),j=a,n=s.control,(b.onStart||f).call(r,a,{control:n,$target:m}),h=k=!0,o||a.preventDefault(),void 0)}function e(a){if(!h||a.touches&&a.touches.length>1)return g(),void 0;if(_===a.type){L(a,o);var c=Math.abs(a._x-j._x),d=Math.abs(a._y-j._y),e=c-d,k=!s.stable||e>=3,m=-3>=e;l||(l=!(!k&&!m)),o&&!s.checked?((k||m)&&(s.checked=!0,i=k),(!s.checked||i)&&a.preventDefault()):!o||i?(a.preventDefault(),(b.onMove||f).call(r,a)):h=!1,s.checked=s.checked||k||m}}function g(a){var c=h;k=s.control=h=!1,!c||q&&!s.checked||(a&&a.preventDefault(),ab=!0,clearTimeout(bb),bb=setTimeout(function(){ab=!1},1e3),(b.onEnd||f).call(r,{moved:!!l,$target:m,control:n,startEvent:j,aborted:!a,touch:o}))}var h,i,j,k,l,m,n,o,p,q,r=a[0],s={};return r.addEventListener&&(r.addEventListener("touchstart",d),r.addEventListener("touchmove",e),r.addEventListener("touchend",g)),a.on("mousedown",d),hc.on("mousemove",e).on("mouseup",g),a.on("click","a",function(a){s.checked&&a.preventDefault()}),s}function N(a,b){function d(c){k=l=c._x,p=[[(new Date).getTime(),k]],m=n=s(a),z=C.stable=!(m%v),!z&&c.preventDefault(),(b.onStart||f).call(A,c,{pos:m})}function e(a,b){r=B.minPos,u=B.maxPos,v=B.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c){x&&(x=!1,d(c)),l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=F(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),C.noMove||(a.css(j(n)),y||(y=!0,Z.addClass("grabbing"))),(b.onMove||f).call(A,c,{pos:n,edge:o})}function i(a){if(!x){Z.removeClass("grabbing"),q=(new Date).getTime();for(var d,e,h,i,j,k,o,s,t,y=q-mc,z=null,B=nc,C=b.friction,D=p.length-1;D>=0;D--){if(d=p[D][0],e=Math.abs(d-y),null===z||h>e)z=d,i=p[D][1];else if(z===y||e>h)break;h=e}o=g(n,r,u);var E=i-l,F=E>=0,G=q-z,H=G>mc,I=!H&&n!==m&&o===n;v&&(o=g(Math[I?F?"floor":"ceil":"round"](n/v)*v,r,u),r=u=o),I&&(v||o===n)&&(t=-(E/G),B*=g(Math.abs(t),b.timeLow,b.timeHigh),j=Math.round(n+t*B/C),v||(o=j),(!F&&j>u||F&&r>j)&&(k=F?r:u,s=j-k,v||(o=k),s=g(o+.03*s,k-50,k+50),B=Math.abs((n-s)/(t/C)))),B*=w?10:1,(b.onEnd||f).call(A,c.extend(a,{pos:n,newPos:o,overPos:s,time:B,moved:H&&v||a.moved}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z,A=a[0],B=a.data(),C={};return C=c.extend(M(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),C)}function O(a){P(!0),uc.appendTo(a),db=0,vc(),cb=setInterval(vc,200)}function P(a){a||uc.detach(),clearInterval(cb)}var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},R=new RegExp("[&<>\"'/]","g"),S={escape:function(a){return null==a?"":(""+a).replace(R,function(a){return Q[a]})}},T=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),U={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},V="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)U.ok=!0;else for(var W=0,X=V.length;X>W;W++)if(U.prefix=V[W],"undefined"!=typeof b[U.prefix+"CancelFullScreen"]){U.ok=!0;break}U.ok&&(U.event=U.prefix+"fullscreenchange",U.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},U.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},U.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var Y,Z,$,_,ab,bb,cb,db,eb="fotorama",fb="fullscreen",gb=eb+"__wrap",hb=gb+"--not-ready",ib=gb+"--css3",jb=gb+"--video",kb=gb+"--fade",lb=gb+"--slide",mb=gb+"--no-controls",nb=eb+"__stage",ob=nb+"__frame",pb=ob+"--video",qb=nb+"__shaft",rb=nb+"--only-active",sb=eb+"__grab",tb=eb+"__arr",ub=tb+"--disabled",vb=tb+"--prev",wb=tb+"--next",xb=tb+"__arr",yb=eb+"__nav",zb=yb+"-wrap",Ab=yb+"__shaft",Bb=yb+"--dots",Cb=yb+"--thumbs",Db=yb+"__frame",Eb=Db+"--dot",Fb=Db+"--thumb",Gb=eb+"__fade",Hb=Gb+"-front",Ib=Gb+"-rear",Jb=eb+"__shadow",Kb=Jb+"s",Lb=Kb+"--left",Mb=Kb+"--right",Nb=eb+"__active",Ob=eb+"__select",Pb=eb+"--hidden",Qb=eb+"--fullscreen",Rb=eb+"__fullscreen-icon",Sb=eb+"__error",Tb=eb+"__loading",Ub=eb+"__loaded",Vb=Ub+"--full",Wb=Ub+"--img",Xb=eb+"__img",Yb=Xb+"--full",Zb=eb+"__dot",$b=eb+"__thumb",_b=$b+"-border",ac=eb+"__html",bc=eb+"__video",cc=bc+"-play",dc=bc+"-close",ec=eb+"__caption",fc=eb+"__oooo",gc=c(a),hc=c(b),ic="CSS1Compat"===b.compatMode,jc="quirks"===b.location.hash.replace("#",""),kc=T.csstransforms3d&&!jc,lc=U.ok,mc=300,nc=333,oc=5e3,pc=2,qc=64,rc=500,sc=333,tc=e([.1,0,.25,1]),uc=c(I("",I(fc))),vc=function(){uc.attr("class",fc+" "+fc+"--"+db),db++,db>4&&(db=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Dc,function(a,b){if(!b.i){b.i=gd++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Dc,cd),y(Dc,{img:d.img,thumb:d.thumb},b.i,cd)}}})}function i(){Dc=cd.data=Dc||z(e),Ec=cd.size=Dc.length,h(),Ed=A(Ed),bb.ok=!1,Ec&&(ad||(e.html("").append(kd),c.Fotorama.size++,ad=!0))}function q(){Id.noMove=2>Ec||Hc||Tc,md.toggleClass(sb,!Id.noMove)}function r(a){a===!0&&(a=""),f.autoplay=Math.max(Number(a)||oc,1.5*nc)}function t(a){return a?"add":"remove"}function u(){Tc="crossfade"===f.transition||"dissolve"===f.transition,Oc=f.loop&&(Ec>2||Tc);var a={add:[],remove:[]};Ec>1?(Pc=f.nav,Qc="top"===f.navPosition,a.remove.push(Ob),qd.show(),cb()):(Pc=!1,qd.hide()),a[t(Ec>1)].push("fotorama__wrap--navigation"),f.autoplay&&r(f.autoplay),Uc=l(f.thumbWidth)||qc,Vc=l(f.thumbHeight)||qc,q(),bc(f,!0),Pc===!0||"dots"===Pc?(sd.addClass(Bb).removeClass(Cb),X(Ec,"navDot")):"thumbs"===Pc?(E(id,c.Fotorama.jst.style({w:Uc,h:Vc,m:pc,s:ed,q:!ic})),sd.addClass(Cb).removeClass(Bb),X(Ec,"navThumb")):(Pc=!1,sd.removeClass(Cb+" "+Bb)),Rc=f.allowFullScreen,e.insertAfter(jd).removeClass(Pb),Pc&&Qc?rd.insertBefore(ld):rd.insertAfter(ld),Rc?(Cd.appendTo(ld),Sc=lc&&"native"===Rc):(Cd.detach(),Sc=!1),a[t(Tc)].push(kb),a[t(!Tc)].push(lb),P(),kd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),Gd=c.extend({},f)}function v(a){return 0>a?(Ec+a%Ec)%Ec:a>=Ec?a%Ec:a}function A(a){return g(a,0,Ec-1)}function L(a){return a>0||Oc?a-1:!1}function M(a){return Ec-1>a||Oc?a+1:!1}function Q(){zd.minPos=Oc?-1/0:-o(Ec-1,Hd.w,pc,Jc),zd.maxPos=Oc?1/0:-o(0,Hd.w,pc,Jc),zd.snap=Hd.w+pc}function R(){Ad.minPos=Math.min(0,Hd.w-td.width()),Ad.maxPos=0,Jd.noMove=Ad.minPos===Ad.maxPos,td.toggleClass(sb,!Jd.noMove)}function S(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Dc[v(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function T(a,b,c,d){(!Wc||"*"===Wc&&d===Fd)&&(a=n(f.width)||n(a)||rc,b=n(f.height)||n(b)||sc,cd.resize({width:a,ratio:f.ratio||c||a/b},0,d===Fd?!0:"*"))}function V(a,b,d,e,g){S(a,b,function(a,h,i,j,k,l){function m(a){var b=v(h);fc(a,{index:b,src:w,frame:Dc[b]})}function n(){s.remove(),c.Fotorama.cache[w]="error",i.$html&&"stage"===b||!x||x===w?(w&&!l.$html?(j.trigger("f:error").removeClass(Tb).addClass(Sb),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Tb+" "+Sb).addClass(Ub),m("load"),T()),l.state="error",!(Ec>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,cd.splice(h,1))):(i[u]=w=x,V([h],b,d,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},T(a,g,k,h),s.off("load error").addClass(Xb+(q?" "+Yb:"")).prependTo(j),D(s,d||Hd,e||i.fit||f.fit),c.Fotorama.cache[w]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Tb+" "+Sb).addClass(Ub+" "+(q?Vb:Wb)),"stage"===b&&m("load")},5)}function p(){B(function(){return!0},function(){o()})}if(j){var q=cd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",w=i[u],x=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!w)return n(),void 0;c.Fotorama.cache[w]?function y(){"error"===c.Fotorama.cache[w]?n():"loaded"===c.Fotorama.cache[w]?p():setTimeout(y,100)}():(c.Fotorama.cache[w]="*",s.on("load",p).on("error",n)),r.src=w}}})}function W(){var a=cd.activeFrame[wd];a&&!a.data().state&&(O(a),a.on("f:load f:error",function(){a.off("f:load f:error"),P()}))}function X(a,b){S(a,b,function(a,d,e,g,h,i){if(!g)if(g=e[h]=kd[h].clone(),i=g.data(),i.data=e,"stage"===b){if(e.html&&c('<div class="'+ac+'"></div>').append(c(e.html).removeAttr("id").html(e._html)).appendTo(g),f.captions&&e.caption&&c('<div class="'+ec+'"></div>').append(e.caption).appendTo(g),e.video){var j=Dd.clone();H(j,function(){cd.playVideo()},{onStart:function(a){jc.call(this,a),Id.control=!0},tail:Id}),g.addClass(pb).append(j)}nd=nd.add(g)}else"navDot"===b?ud=ud.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),vd=vd.add(g),e.video&&g.append(Dd.clone()))})}function $(a,b,c){return a&&a.length&&D(a,b,c)}function _(a){S(a,"stage",function(a,b,d,e,g,h){if(e){e.css(c.extend({left:Tc?0:o(b,Hd.w,pc,Jc)},Tc&&k(0))),h.appended||(e.appendTo(md),h.appended=!0,xc(d.$video));var i=d.fit||f.fit;$(h.$img,Hd,i),$(h.$full,Hd,i)}})}function ab(a,b){if("thumbs"===Pc&&!isNaN(a)){var d=Uc+pc,e=A(p(a+d,d)),f=A(p(a-Hd.w,d)),g={};g.w=Uc,g.h=Vc,vd.each(function(){var a=c(this),d=a.data(),h=d.eq,i="cover";e>h||h>f||$(d.$img,g,i)||b&&V([h],"navThumb",g,i)})}}function bb(a,b,d){bb.ok||(a=a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Dc.length;f>e;e++){var g=Dc[e];if(d.data===g){a=!0,d.eq=e;break}}return a||b.remove(),a}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).appendTo(b),d&&R(),bb.ok=!0)}function cb(){qd.each(function(a){c(this).toggleClass(ub,!Oc&&(0===Ed&&0===a||Ed===Ec-1&&1===a)&&!Hc)})}function db(a){return a.position().left+Uc/2}function Gb(a){J(Bd,{time:.9*a,pos:db(cd.activeFrame[Gc])})}function Hb(a){if(Dc[a.guessIndex][Gc]){var b=g(a.coo-db(Dc[a.guessIndex][Gc]),Ad.minPos,Ad.maxPos),c=.9*a.time;J(td,{time:c,pos:b,onEnd:function(){ab(b,!0)}}),c&&ab(b),vc(sd,F(b,Ad.minPos,Ad.maxPos))}}function Ib(){if("thumbs"===Pc)Fc=vd,Gc=yd;else{if(!Pc)return;Fc=ud,Gc=xd}bb(Fc,td,!0),Fc.removeClass(Nb),cd.activeFrame[Gc].addClass(Nb)}function Jb(){Jc=Kc=Ed;var a=cd.activeFrame,b=a[wd];b&&(nd.not(cd.activeFrame[wd].addClass(Nb)).detach().data("appended",!1).removeClass(Nb),s(md),md.css(j(0)),_([Ed,Mc,Nc]),Q(),R())}function bc(a,b){a&&c.extend(Hd,{width:a.width||Hd.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:Hd.width,height:Hd.height,minWidth:Hd.minWidth,maxWidth:Hd.maxWidth,minHeight:Hd.minHeight,maxHeight:Hd.maxHeight,ratio:Hd.ratio})}function fc(a,b){e.trigger(eb+":"+a,[cd,b])}function jc(){f.stopAutoplayOnTouch?cd.stopAutoplay():$c=!0}function mc(){$c=!(!Hc&&!_c)}function tc(){if(clearTimeout(tc.t),!f.autoplay||$c)return cd.autoplay&&(cd.autoplay=!1,fc("stopautoplay")),void 0;cd.autoplay||(cd.autoplay=!0,fc("startautoplay"));var a=Ed;tc.t=setTimeout(function(){var b=cd.activeFrame[wd].data();B(function(){return b.state||a!==Ed},function(){$c||a!==Ed||cd.show({index:v(Ed+1)})})},f.autoplay)}function uc(){cd.fullScreen&&(cd.fullScreen=!1,lc&&U.cancel(fd),Z.removeClass(fb),e.removeClass(Qb).insertAfter(jd),fc("fullscreenexit"),Hd=c.extend({},bd),xc(Hc,!0),cd.resize(),V([Ed,Mc,Nc],"stage"),gc.scrollLeft(Yc).scrollTop(Xc))}function vc(a,b){a.removeClass(Lb+" "+Mb),b&&!Hc&&a.addClass(b.replace(/^|\s/g," "+Kb+"--"))}function xc(a,b,c){b&&(kd.removeClass(jb),Hc=!1,q()),a&&a!==Hc&&(a.remove(),fc("unloadvideo")),c&&(mc(),tc())}function yc(a){kd.toggleClass(mb,a)}function zc(a,b){Hc?xc(Hc,!0,!0):b?yc():cd.show({index:a.shiftKey||a._x-ld.offset().left<Hd.w/3?"<":">",slow:a.altKey,direct:!0})}function Ac(a,b){var d=c(this).data().eq;cd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-sd.offset().left,time:b})}function Bc(){i(),u(),Cc.ok||(f.hash&&location.hash&&(Fd=G(location.hash.replace(/^#/,""),Dc,0===dd)),Fd=(Oc?v(Fd):A(Fd))||0,Ed=Jc=Kc=Lc=Fd),Ec?(Hc&&xc(Hc,!0),cd.show({index:Ed,time:0}),cd.resize()):cd.destroy()}function Cc(){Cc.ok||(Cc.ok=!0,kd.removeClass(hb),fc("ready"))}Y=Y||c("html"),Z=Z||c("body");var Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd=this,dd=wc,ed=(new Date).getTime(),fd=e.addClass(eb+ed)[0],gd=1,hd=e.data(),id=c("<style></style>").insertBefore(e),jd=c(I(Pb)).insertBefore(e),kd=c(I(gb+" "+hb)),ld=c(I(nb)).appendTo(kd),md=(ld[0],c(I(qb)).appendTo(ld)),nd=c(),od=c(I(tb+" "+vb,I(xb))),pd=c(I(tb+" "+wb,I(xb))),qd=od.add(pd).appendTo(ld),rd=c(I(zb)),sd=c(I(yb)).appendTo(rd),td=c(I(Ab)).appendTo(sd),ud=c(),vd=c(),wd="$stageFrame",xd="$navDotFrame",yd="$navThumbFrame",zd=md.data(),Ad=td.data(),Bd=c(I(_b)).appendTo(td),Cd=c(I(Rb)),Dd=c(I(cc)),Ed=(c(I(dc)).appendTo(ld),!1),Fd=!1,Gd={},Hd={},Id={},Jd={};kd[wd]=c(I(ob)),kd[yd]=c(I(Db+" "+Fb,I($b))),kd[xd]=c(I(Db+" "+Eb,I(Zb))),kc&&kd.addClass(ib),hd.fotorama=this,cd.options=f,wc++,cd.startAutoplay=function(a){return cd.autoplay?this:($c=_c=!1,r(a||f.autoplay),tc(),this)},cd.stopAutoplay=function(){return cd.autoplay&&($c=_c=!0,tc()),this},cd.show=function(a){function b(){W(),V([Ed,Mc,Nc],"stage"),Jb(),fc("showend",a.direct),mc(),tc()}var c,d,e=nc;if("object"!=typeof a?(c=a,a={}):(c=a.index,e="number"==typeof a.time?a.time:e,d=a.overPos),a.slow&&(e*=10),c=">"===c?Kc+1:"<"===c?Kc-1:"<<"===c?0:">>"===c?Ec-1:c,c=isNaN(c)?G(c,Dc,!0):c,c="undefined"==typeof c?Ed||0:c,cd.activeIndex=Ed=Oc?v(c):A(c),Mc=L(Ed),Nc=M(Ed),Kc=Oc?c:Ed,cd.activeFrame=Ic=Dc[Ed],xc(!1,Ic.i!==Dc[v(Jc)].i),X([Ed,Mc,Nc],"stage"),_([Kc]),fc("show",a.direct),Tc){var h=Ic[wd],i=Ed!==Lc?Dc[Lc][wd]:null;K(h,i,nd,{time:e,method:f.transition,onEnd:b})}else J(md,{pos:-o(Kc,Hd.w,pc,Jc),overPos:d,time:e,onEnd:b});if(cb(),Ib(),Pc){var j=A(Ed+g(Kc-Lc,-1,1)),k="undefined"==typeof a.coo;(k||j!==Ed)&&Hb({time:e,coo:k?Hd.w/2:a.coo,guessIndex:k?Ed:j})}return"thumbs"===Pc&&Gb(e),Zc="undefined"!=typeof Lc&&Lc!==Ed,Lc=Ed,f.hash&&Zc&&!cd.eq&&C(Ic.id||Ed+1),this},cd.requestFullScreen=function(){return Rc&&!cd.fullScreen&&(Xc=gc.scrollTop(),Yc=gc.scrollLeft(),gc.scrollTop(0).scrollLeft(0),bd=c.extend({},Hd),e.addClass(Qb).appendTo(Z.addClass(fb)),xc(Hc,!0),cd.fullScreen=!0,Sc&&U.request(fd),cd.resize(),V([Ed,Mc,Nc],"stage"),fc("fullscreenenter")),this},cd.cancelFullScreen=function(){return Sc&&U.is()?U.cancel(b):uc(),this},b.addEventListener&&b.addEventListener(U.event,function(){U.is()||Hc||uc()}),hc.on("keydown",function(a){Hc&&27===a.keyCode?(a.preventDefault(),xc(Hc,!0,!0)):(cd.fullScreen||f.keyboard&&!dd)&&(27===a.keyCode?(a.preventDefault(),cd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&cd.fullScreen?(a.preventDefault(),cd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&cd.fullScreen)&&(a.preventDefault(),cd.show({index:"<",slow:a.altKey,direct:!0})))}),dd||hc.on("keydown","textarea, input, select",function(a){cd.fullScreen||a.stopPropagation()}),cd.resize=function(b){if(Dc){bc(cd.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b,cd.fullScreen);var c=arguments[1]||0,d=arguments[2],e=Hd.width,f=Hd.height,h=Hd.ratio,i=a.innerHeight-(Pc?sd.height():0);return n(e)&&(kd.css({width:e,minWidth:Hd.minWidth,maxWidth:Hd.maxWidth}),e=Hd.w=kd.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=Hd.h=Math.round(g(f,m(Hd.minHeight)/100*i||l(Hd.minHeight),m(Hd.maxHeight)/100*i||l(Hd.maxHeight))),Jb(),ld.addClass(rb).stop().animate({width:e,height:f},c,function(){ld.removeClass(rb)}),Pc&&(sd.stop().animate({width:e},c).css({left:0}),Hb({guessIndex:Ed,time:c,coo:Hd.w/2}),"thumbs"===Pc&&bb.ok&&Gb(c)),Wc=d||!0,Cc())),this}},cd.setOptions=function(a){return c.extend(f,a),Bc(),this},cd.destroy=function(){return cd.stopAutoplay(),kd.detach(),e.html(hd.urtext),ad=!1,Dc=cd.data=null,c.Fotorama.size--,this},cd.playVideo=function(){var a=cd.activeFrame,b=a.video,d=Ed;return"object"==typeof b&&a.videoReady&&(Sc&&cd.fullScreen&&cd.cancelFullScreen(),B(function(){return!U.is()||d!==Ed},function(){d===Ed&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[wd]),kd.addClass(jb),Hc=a.$video,Id.noMove=!0,fc("loadvideo"))})),this},cd.stopVideo=function(){return xc(Hc,!0,!0),this},kd.hover(function(){yc(!1)},function(){yc(!0)}),Id=N(md,{onStart:jc,onMove:function(a,b){vc(ld,b.edge)},onEnd:function(a){if(vc(ld),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,Hd.w,pc,Jc);cd.show({index:b,time:a.time,overPos:a.overPos,direct:!0})}else a.aborted||zc(a.startEvent,a.touch)},timeLow:1,timeHigh:1,friction:2,select:"."+Ob+", ."+Ob+" *",$wrap:ld}),Jd=N(td,{onStart:jc,onMove:function(a,b){vc(sd,b.edge)},onEnd:function(a){function b(){mc(),tc(),ab(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(J(td,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),ab(a.newPos),vc(sd,F(a.newPos,Ad.minPos,Ad.maxPos))):b();else{var c=a.$target.closest("."+Db,td)[0];c&&Ac.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:sd}),H(qd,function(a){a.preventDefault(),Hc?xc(Hc,!0,!0):cd.show({index:qd.index(this)?">":"<",slow:a.altKey,direct:!0})},{onStart:function(a){jc.call(this,a),Id.control=!0},tail:Id}),H(Cd,function(){cd.fullScreen?cd.cancelFullScreen():cd.requestFullScreen(),mc(),tc()},{onStart:function(a){jc.call(this,a),Id.control=!0},tail:Id}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){cd[b]=function(){return Dc=Dc||[],"load"!==b?Array.prototype[b].apply(Dc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Dc=arguments[0]),Bc(),cd}}),gc.on("resize",cd.resize),Bc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):B(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:qc,thumbHeight:qc,allowFullScreen:!1,fit:"contain",transition:"slide",captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1},c.extend({},a,e)))})})},c.Fotorama.cache={};var wc=0;c.Fotorama.size=0,c(function(){c("."+eb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return S.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\npadding-left:0;\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame:last-child{\npadding-right:0}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb{\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nwidth:"+(null==(b=a.w-a.m*(a.q?0:2))?"":b)+"px;\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px;\nmargin-left:"+(null==(b=-a.w/2)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(S.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'}}(window,document,jQuery);