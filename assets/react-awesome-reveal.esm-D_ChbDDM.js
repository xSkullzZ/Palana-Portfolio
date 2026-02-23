import{K as Ot,r as x,m as ut,R as $t}from"./index-C3o0K5-H.js";var Ct=globalThis;Ct.__PlasmicComponentRegistry==null&&(Ct.__PlasmicComponentRegistry=[]);function cr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function fr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var lr=(function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=cr(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},t})(),_="-ms-",rt="-moz-",S="-webkit-",Xt="comm",gt="rule",bt="decl",ur="@import",Dt="@keyframes",dr="@layer",mr=Math.abs,et=String.fromCharCode,pr=Object.assign;function yr(t,r){return A(t,0)^45?(((r<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}function Ft(t){return t.trim()}function hr(t,r){return(t=r.exec(t))?t[0]:t}function O(t,r,e){return t.replace(r,e)}function dt(t,r){return t.indexOf(r)}function A(t,r){return t.charCodeAt(r)|0}function B(t,r,e){return t.slice(r,e)}function M(t){return t.length}function vt(t){return t.length}function H(t,r){return r.push(t),t}function gr(t,r){return t.map(r).join("")}var nt=1,D=1,Vt=0,T=0,P=0,F="";function at(t,r,e,n,a,o,s){return{value:t,root:r,parent:e,type:n,props:a,children:o,line:nt,column:D,length:s,return:""}}function V(t,r){return pr(at("",null,null,"",null,null,0),t,{length:-t.length},r)}function br(){return P}function vr(){return P=T>0?A(F,--T):0,D--,P===10&&(D=1,nt--),P}function z(){return P=T<Vt?A(F,T++):0,D++,P===10&&(D=1,nt++),P}function L(){return A(F,T)}function Z(){return T}function G(t,r){return B(F,t,r)}function U(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bt(t){return nt=D=1,Vt=M(F=t),T=0,[]}function Ut(t){return F="",t}function Q(t){return Ft(G(T-1,mt(t===91?t+2:t===40?t+1:t)))}function xr(t){for(;(P=L())&&P<33;)z();return U(t)>2||U(P)>3?"":" "}function wr(t,r){for(;--r&&z()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return G(t,Z()+(r<6&&L()==32&&z()==32))}function mt(t){for(;z();)switch(P){case t:return T;case 34:case 39:t!==34&&t!==39&&mt(P);break;case 40:t===41&&mt(t);break;case 92:z();break}return T}function Sr(t,r){for(;z()&&t+P!==57;)if(t+P===84&&L()===47)break;return"/*"+G(r,T-1)+"*"+et(t===47?t:z())}function Or(t){for(;!U(L());)z();return G(t,T)}function $r(t){return Ut(tt("",null,null,null,[""],t=Bt(t),0,[0],t))}function tt(t,r,e,n,a,o,s,l,d){for(var m=0,p=0,y=s,w=0,I=0,h=0,u=1,c=1,v=1,g=0,b="",N=a,f=o,k=n,R=b;c;)switch(h=g,g=z()){case 40:if(h!=108&&A(R,y-1)==58){dt(R+=O(Q(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:R+=Q(g);break;case 9:case 10:case 13:case 32:R+=xr(h);break;case 92:R+=wr(Z()-1,7);continue;case 47:switch(L()){case 42:case 47:H(Cr(Sr(z(),Z()),r,e),d);break;default:R+="/"}break;case 123*u:l[m++]=M(R)*v;case 125*u:case 59:case 0:switch(g){case 0:case 125:c=0;case 59+p:v==-1&&(R=O(R,/\f/g,"")),I>0&&M(R)-y&&H(I>32?Rt(R+";",n,e,y-1):Rt(O(R," ","")+";",n,e,y-2),d);break;case 59:R+=";";default:if(H(k=It(R,r,e,m,p,a,l,b,N=[],f=[],y),o),g===123)if(p===0)tt(R,r,k,k,N,o,y,l,f);else switch(w===99&&A(R,3)===110?100:w){case 100:case 108:case 109:case 115:tt(t,k,k,n&&H(It(t,k,k,0,0,a,l,b,a,N=[],y),f),a,f,y,l,n?N:f);break;default:tt(R,k,k,k,[""],f,0,l,f)}}m=p=I=0,u=v=1,b=R="",y=s;break;case 58:y=1+M(R),I=h;default:if(u<1){if(g==123)--u;else if(g==125&&u++==0&&vr()==125)continue}switch(R+=et(g),g*u){case 38:v=p>0?1:(R+="\f",-1);break;case 44:l[m++]=(M(R)-1)*v,v=1;break;case 64:L()===45&&(R+=Q(z())),w=L(),p=y=M(b=R+=Or(Z())),g++;break;case 45:h===45&&M(R)==2&&(u=0)}}return o}function It(t,r,e,n,a,o,s,l,d,m,p){for(var y=a-1,w=a===0?o:[""],I=vt(w),h=0,u=0,c=0;h<n;++h)for(var v=0,g=B(t,y+1,y=mr(u=s[h])),b=t;v<I;++v)(b=Ft(u>0?w[v]+" "+g:O(g,/&\f/g,w[v])))&&(d[c++]=b);return at(t,r,e,a===0?gt:l,d,m,p)}function Cr(t,r,e){return at(t,r,e,Xt,et(br()),B(t,2,-2),0)}function Rt(t,r,e,n){return at(t,r,e,bt,B(t,0,n),B(t,n+1,-1),n)}function X(t,r){for(var e="",n=vt(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function Ir(t,r,e,n){switch(t.type){case dr:if(t.children.length)break;case ur:case bt:return t.return=t.return||t.value;case Xt:return"";case Dt:return t.return=t.value+"{"+X(t.children,n)+"}";case gt:t.value=t.props.join(",")}return M(e=X(t.children,n))?t.return=t.value+"{"+e+"}":""}function Rr(t){var r=vt(t);return function(e,n,a,o){for(var s="",l=0;l<r;l++)s+=t[l](e,n,a,o)||"";return s}}function Er(t){return function(r){r.root||(r=r.return)&&t(r)}}function kr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Pr=function(r,e,n){for(var a=0,o=0;a=o,o=L(),a===38&&o===12&&(e[n]=1),!U(o);)z();return G(r,T)},Nr=function(r,e){var n=-1,a=44;do switch(U(a)){case 0:a===38&&L()===12&&(e[n]=1),r[n]+=Pr(T-1,e,n);break;case 2:r[n]+=Q(a);break;case 4:if(a===44){r[++n]=L()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=et(a)}while(a=z());return r},Ar=function(r,e){return Ut(Nr(Bt(r),e))},Et=new WeakMap,_r=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Et.get(n))&&!a){Et.set(r,!0);for(var o=[],s=Ar(e,o),l=n.props,d=0,m=0;d<s.length;d++)for(var p=0;p<l.length;p++,m++)r.props[m]=o[d]?s[d].replace(/&\f/g,l[p]):l[p]+" "+s[d]}}},Tr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function Wt(t,r){switch(yr(t,r)){case 5103:return S+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return S+t+rt+t+_+t+t;case 6828:case 4268:return S+t+_+t+t;case 6165:return S+t+_+"flex-"+t+t;case 5187:return S+t+O(t,/(\w+).+(:[^]+)/,S+"box-$1$2"+_+"flex-$1$2")+t;case 5443:return S+t+_+"flex-item-"+O(t,/flex-|-self/,"")+t;case 4675:return S+t+_+"flex-line-pack"+O(t,/align-content|flex-|-self/,"")+t;case 5548:return S+t+_+O(t,"shrink","negative")+t;case 5292:return S+t+_+O(t,"basis","preferred-size")+t;case 6060:return S+"box-"+O(t,"-grow","")+S+t+_+O(t,"grow","positive")+t;case 4554:return S+O(t,/([^-])(transform)/g,"$1"+S+"$2")+t;case 6187:return O(O(O(t,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),t,"")+t;case 5495:case 3959:return O(t,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return O(O(t,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+t+t;case 4095:case 3583:case 4068:case 2532:return O(t,/(.+)-inline(.+)/,S+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(t)-1-r>6)switch(A(t,r+1)){case 109:if(A(t,r+4)!==45)break;case 102:return O(t,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+rt+(A(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~dt(t,"stretch")?Wt(O(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(A(t,r+1)!==115)break;case 6444:switch(A(t,M(t)-3-(~dt(t,"!important")&&10))){case 107:return O(t,":",":"+S)+t;case 101:return O(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(A(t,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+_+"$2box$3")+t}break;case 5936:switch(A(t,r+11)){case 114:return S+t+_+O(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return S+t+_+O(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return S+t+_+O(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return S+t+_+t+t}return t}var zr=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case bt:r.return=Wt(r.value,r.length);break;case Dt:return X([V(r,{value:O(r.value,"@","@"+S)})],a);case gt:if(r.length)return gr(r.props,function(o){switch(hr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([V(r,{props:[O(o,/:(read-\w+)/,":"+rt+"$1")]})],a);case"::placeholder":return X([V(r,{props:[O(o,/:(plac\w+)/,":"+S+"input-$1")]}),V(r,{props:[O(o,/:(plac\w+)/,":"+rt+"$1")]}),V(r,{props:[O(o,/:(plac\w+)/,_+"input-$1")]})],a)}return""})}},Mr=[zr],jr=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(u){var c=u.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var a=r.stylisPlugins||Mr,o={},s,l=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(u){for(var c=u.getAttribute("data-emotion").split(" "),v=1;v<c.length;v++)o[c[v]]=!0;l.push(u)});var d,m=[_r,Tr];{var p,y=[Ir,Er(function(u){p.insert(u)})],w=Rr(m.concat(a,y)),I=function(c){return X($r(c),w)};d=function(c,v,g,b){p=g,I(c?c+"{"+v.styles+"}":v.styles),b&&(h.inserted[v.name]=!0)}}var h={key:e,sheet:new lr({key:e,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:d};return h.sheet.hydrate(l),h},st={exports:{}},$={};var kt;function Lr(){if(kt)return $;kt=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,e=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,c=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,g=t?Symbol.for("react.scope"):60119;function b(f){if(typeof f=="object"&&f!==null){var k=f.$$typeof;switch(k){case r:switch(f=f.type,f){case d:case m:case n:case o:case a:case y:return f;default:switch(f=f&&f.$$typeof,f){case l:case p:case h:case I:case s:return f;default:return k}}case e:return k}}}function N(f){return b(f)===m}return $.AsyncMode=d,$.ConcurrentMode=m,$.ContextConsumer=l,$.ContextProvider=s,$.Element=r,$.ForwardRef=p,$.Fragment=n,$.Lazy=h,$.Memo=I,$.Portal=e,$.Profiler=o,$.StrictMode=a,$.Suspense=y,$.isAsyncMode=function(f){return N(f)||b(f)===d},$.isConcurrentMode=N,$.isContextConsumer=function(f){return b(f)===l},$.isContextProvider=function(f){return b(f)===s},$.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},$.isForwardRef=function(f){return b(f)===p},$.isFragment=function(f){return b(f)===n},$.isLazy=function(f){return b(f)===h},$.isMemo=function(f){return b(f)===I},$.isPortal=function(f){return b(f)===e},$.isProfiler=function(f){return b(f)===o},$.isStrictMode=function(f){return b(f)===a},$.isSuspense=function(f){return b(f)===y},$.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===m||f===o||f===a||f===y||f===w||typeof f=="object"&&f!==null&&(f.$$typeof===h||f.$$typeof===I||f.$$typeof===s||f.$$typeof===l||f.$$typeof===p||f.$$typeof===c||f.$$typeof===v||f.$$typeof===g||f.$$typeof===u)},$.typeOf=b,$}var Pt;function Yr(){return Pt||(Pt=1,st.exports=Lr()),st.exports}var it,Nt;function Xr(){if(Nt)return it;Nt=1;var t=Yr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=n,o[t.Memo]=a;function s(h){return t.isMemo(h)?a:o[h.$$typeof]||r}var l=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,w=Object.prototype;function I(h,u,c){if(typeof u!="string"){if(w){var v=y(u);v&&v!==w&&I(h,v,c)}var g=d(u);m&&(g=g.concat(m(u)));for(var b=s(h),N=s(u),f=0;f<g.length;++f){var k=g[f];if(!e[k]&&!(c&&c[k])&&!(N&&N[k])&&!(b&&b[k])){var R=p(u,k);try{l(h,k,R)}catch{}}}}return h}return it=I,it}Xr();var Dr=!0;function qt(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):a&&(n+=a+" ")}),n}var xt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||Dr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},Gt=function(r,e,n){xt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Fr(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Br=/[A-Z]|^ms/g,Ur=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ht=function(r){return r.charCodeAt(1)===45},At=function(r){return r!=null&&typeof r!="boolean"},ct=kr(function(t){return Ht(t)?t:t.replace(Br,"-$&").toLowerCase()}),_t=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Ur,function(n,a,o){return j={name:a,styles:o,next:j},a})}return Vr[r]!==1&&!Ht(r)&&typeof e=="number"&&e!==0?e+"px":e};function W(t,r,e){if(e==null)return"";var n=e;if(n.__emotion_styles!==void 0)return n;switch(typeof e){case"boolean":return"";case"object":{var a=e;if(a.anim===1)return j={name:a.name,styles:a.styles,next:j},a.name;var o=e;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)j={name:s.name,styles:s.styles,next:j},s=s.next;var l=o.styles+";";return l}return Wr(t,r,e)}case"function":{if(t!==void 0){var d=j,m=e(t);return j=d,W(t,r,m)}break}}var p=e;if(r==null)return p;var y=r[p];return y!==void 0?y:p}function Wr(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=W(t,r,e[a])+";";else for(var o in e){var s=e[o];if(typeof s!="object"){var l=s;r!=null&&r[l]!==void 0?n+=o+"{"+r[l]+"}":At(l)&&(n+=ct(o)+":"+_t(o,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var d=0;d<s.length;d++)At(s[d])&&(n+=ct(o)+":"+_t(o,s[d])+";");else{var m=W(t,r,s);switch(o){case"animation":case"animationName":{n+=ct(o)+":"+m+";";break}default:n+=o+"{"+m+"}"}}}return n}var Tt=/label:\s*([^\s;{]+)\s*(;|$)/g,j;function wt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";j=void 0;var o=t[0];if(o==null||o.raw===void 0)n=!1,a+=W(e,r,o);else{var s=o;a+=s[0]}for(var l=1;l<t.length;l++)if(a+=W(e,r,t[l]),n){var d=o;a+=d[l]}Tt.lastIndex=0;for(var m="",p;(p=Tt.exec(a))!==null;)m+="-"+p[1];var y=Fr(a)+m;return{name:y,styles:a,next:j}}var qr=function(r){return r()},Gr=Ot.useInsertionEffect?Ot.useInsertionEffect:!1,Jt=Gr||qr,Kt=x.createContext(typeof HTMLElement<"u"?jr({key:"css"}):null);Kt.Provider;var Zt=function(r){return x.forwardRef(function(e,n){var a=x.useContext(Kt);return r(e,a,n)})},Qt=x.createContext({}),ot={}.hasOwnProperty,pt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tr=function(r,e){var n={};for(var a in e)ot.call(e,a)&&(n[a]=e[a]);return n[pt]=r,n},Hr=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return xt(e,n,a),Jt(function(){return Gt(e,n,a)}),null},Jr=Zt(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[pt],o=[n],s="";typeof t.className=="string"?s=qt(r.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=wt(o,void 0,x.useContext(Qt));s+=r.key+"-"+l.name;var d={};for(var m in t)ot.call(t,m)&&m!=="css"&&m!==pt&&(d[m]=t[m]);return d.className=s,e&&(d.ref=e),x.createElement(x.Fragment,null,x.createElement(Hr,{cache:r,serialized:l,isStringTag:typeof a=="string"}),x.createElement(a,d))}),rr=Jr,Kr=ut.Fragment,E=function(r,e,n){return ot.call(e,"css")?ut.jsx(rr,tr(r,e),n):ut.jsx(r,e,n)},zt=function(r,e){var n=arguments;if(e==null||!ot.call(e,"css"))return x.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=rr,o[1]=tr(r,e);for(var s=2;s<a;s++)o[s]=n[s];return x.createElement.apply(null,o)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(zt||(zt={}));function er(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return wt(r)}function i(){var t=er.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Zr=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=t(o);else{s="";for(var l in o)o[l]&&l&&(s&&(s+=" "),s+=l)}break}default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};function Qr(t,r,e){var n=[],a=qt(t,n,e);return n.length<2?e:a+r(n)}var te=function(r){var e=r.cache,n=r.serializedArr;return Jt(function(){for(var a=0;a<n.length;a++)Gt(e,n[a],!1)}),null},ft=Zt(function(t,r){var e=[],n=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];var y=wt(m,r.registered);return e.push(y),xt(r,y,!1),r.key+"-"+y.name},a=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];return Qr(r.registered,n,Zr(m))},o={css:n,cx:a,theme:x.useContext(Qt)},s=t.children(o);return x.createElement(x.Fragment,null,x.createElement(te,{cache:r,serializedArr:e}),s)}),re=Object.defineProperty,ee=(t,r,e)=>r in t?re(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,J=(t,r,e)=>ee(t,typeof r!="symbol"?r+"":r,e),yt=new Map,K=new WeakMap,Mt=0,ne=void 0;function ae(t){return t?(K.has(t)||(Mt+=1,K.set(t,Mt.toString())),K.get(t)):"0"}function oe(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?ae(t.root):t[r]}`).toString()}function se(t){const r=oe(t);let e=yt.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(s=>{s.forEach(l=>{var d;const m=l.isIntersecting&&a.some(p=>l.intersectionRatio>=p);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=m),(d=n.get(l.target))==null||d.forEach(p=>{p(m,l)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},yt.set(r,e)}return e}function nr(t,r,e={},n=ne){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const d=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:a,observer:o,elements:s}=se(e),l=s.get(t)||[];return s.has(t)||s.set(t,l),l.push(r),o.observe(t),function(){l.splice(l.indexOf(r),1),l.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),yt.delete(a))}}function ie(t){return typeof t.children!="function"}var jt=class extends x.Component{constructor(t){super(t),J(this,"node",null),J(this,"_unobserveCb",null),J(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),J(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),ie(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=nr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:I,entry:h}=this.state;return t({inView:I,entry:h,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:d,delay:m,initialInView:p,fallbackInView:y,...w}=this.props;return x.createElement(r||"div",{ref:this.handleNode,...w},t)}};function ar({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:m}={}){var p;const[y,w]=x.useState(null),I=x.useRef(m),[h,u]=x.useState({inView:!!l,entry:void 0});I.current=m,x.useEffect(()=>{if(s||!y)return;let b;return b=nr(y,(N,f)=>{u({inView:N,entry:f}),I.current&&I.current(N,f),f.isIntersecting&&o&&b&&(b(),b=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},d),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,y,a,n,o,s,e,d,r]);const c=(p=h.entry)==null?void 0:p.target,v=x.useRef(void 0);!y&&c&&!o&&!s&&v.current!==c&&(v.current=c,u({inView:!!l,entry:void 0}));const g=[w,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var lt={exports:{}},C={};var Lt;function ce(){if(Lt)return C;Lt=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function u(c){if(typeof c=="object"&&c!==null){var v=c.$$typeof;switch(v){case t:switch(c=c.type,c){case e:case a:case n:case m:case p:return c;default:switch(c=c&&c.$$typeof,c){case l:case s:case d:case w:case y:case o:return c;default:return v}}case r:return v}}}return C.ContextConsumer=s,C.ContextProvider=o,C.Element=t,C.ForwardRef=d,C.Fragment=e,C.Lazy=w,C.Memo=y,C.Portal=r,C.Profiler=a,C.StrictMode=n,C.Suspense=m,C.SuspenseList=p,C.isAsyncMode=function(){return!1},C.isConcurrentMode=function(){return!1},C.isContextConsumer=function(c){return u(c)===s},C.isContextProvider=function(c){return u(c)===o},C.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},C.isForwardRef=function(c){return u(c)===d},C.isFragment=function(c){return u(c)===e},C.isLazy=function(c){return u(c)===w},C.isMemo=function(c){return u(c)===y},C.isPortal=function(c){return u(c)===r},C.isProfiler=function(c){return u(c)===a},C.isStrictMode=function(c){return u(c)===n},C.isSuspense=function(c){return u(c)===m},C.isSuspenseList=function(c){return u(c)===p},C.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===e||c===a||c===n||c===m||c===p||c===I||typeof c=="object"&&c!==null&&(c.$$typeof===w||c.$$typeof===y||c.$$typeof===o||c.$$typeof===s||c.$$typeof===d||c.$$typeof===h||c.getModuleId!==void 0)},C.typeOf=u,C}var Yt;function fe(){return Yt||(Yt=1,lt.exports=ce()),lt.exports}var le=fe();i`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;i`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;i`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;i`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;i`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;i`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ue=i`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,de=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=i`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=i`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,St=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=i`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=i`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ve=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xe=i`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,we=i`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Se=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Oe({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=St,iterationCount:a=1}){return er`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function $e(t){return t==null}function Ce(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function or(t,r){return e=>e?t():r()}function q(t){return or(t,()=>null)}function ht(t){return q(()=>({opacity:0}))(t)}const Y=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:s=St,triggerOnce:l=!1,className:d,style:m,childClassName:p,childStyle:y,children:w,onVisibilityChange:I}=t,h=x.useMemo(()=>Oe({keyframes:s,duration:a}),[a,s]);return $e(w)?null:Ce(w)?E(Re,{...t,animationStyles:h,children:String(w)}):le.isFragment(w)?E(sr,{...t,animationStyles:h}):E(Kr,{children:x.Children.map(w,(u,c)=>{if(!x.isValidElement(u))return null;const v=n+(r?c*a*e:0);switch(u.type){case"ol":case"ul":return E(ft,{children:({cx:g})=>E(u.type,{...u.props,className:g(d,u.props.className),style:Object.assign({},m,u.props.style),children:E(Y,{...t,children:u.props.children})})});case"li":return E(jt,{threshold:o,triggerOnce:l,onChange:I,children:({inView:g,ref:b})=>E(ft,{children:({cx:N})=>E(u.type,{...u.props,ref:b,className:N(p,u.props.className),css:q(()=>h)(g),style:Object.assign({},y,u.props.style,ht(!g),{animationDelay:v+"ms"})})})});default:return E(jt,{threshold:o,triggerOnce:l,onChange:I,children:({inView:g,ref:b})=>E("div",{ref:b,className:d,css:q(()=>h)(g),style:Object.assign({},m,ht(!g),{animationDelay:v+"ms"}),children:E(ft,{children:({cx:N})=>E(u.type,{...u.props,className:N(p,u.props.className),style:Object.assign({},y,u.props.style)})})})})}})})},Ie={display:"inline-block",whiteSpace:"pre"},Re=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:l=!1,className:d,style:m,children:p,onVisibilityChange:y}=t,{ref:w,inView:I}=ar({triggerOnce:l,threshold:s,onChange:y});return or(()=>E("div",{ref:w,className:d,style:Object.assign({},m,Ie),children:p.split("").map((h,u)=>E("span",{css:q(()=>r)(I),style:{animationDelay:a+u*o*n+"ms"},children:h},u))}),()=>E(sr,{...t,children:p}))(e)},sr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:l}=t,{ref:d,inView:m}=ar({triggerOnce:n,threshold:e,onChange:l});return E("div",{ref:d,className:a,css:q(()=>r)(m),style:Object.assign({},o,ht(!m)),children:s})},Ee=i`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,ke=i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pe=i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ne=i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ae=i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e=i`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Te=i`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,ze=i`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Me=i`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,je=i`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function Le(t,r){switch(r){case"down":return t?Te:ke;case"left":return t?ze:Pe;case"right":return t?Me:Ne;case"up":return t?je:Ae;default:return t?_e:Ee}}const Ye=t=>{const{direction:r,reverse:e=!1,...n}=t,a=x.useMemo(()=>Le(e,r),[r,e]);return E(Y,{keyframes:a,...n})},Xe=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,De=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Fe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ve=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Be=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ue=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,We=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,qe=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ge=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,He=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Je=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ke=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ze=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Qe(t,r,e){switch(e){case"bottom-left":return r?De:de;case"bottom-right":return r?Fe:me;case"down":return t?r?Be:ye:r?Ve:pe;case"left":return t?r?We:he:r?Ue:St;case"right":return t?r?Ge:be:r?qe:ge;case"top-left":return r?He:ve;case"top-right":return r?Je:xe;case"up":return t?r?Ze:Se:r?Ke:we;default:return r?Xe:ue}}const tn=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=x.useMemo(()=>Qe(r,n,e),[r,e,n]);return E(Y,{keyframes:o,...a})},rn=i`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,en=i`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,nn=i`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,an=i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,on=i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function sn(t,r){switch(r){case"horizontal":return t?an:en;case"vertical":return t?on:nn;default:return rn}}const cn={backfaceVisibility:"visible"},fn=t=>{const{direction:r,reverse:e=!1,style:n,...a}=t,o=x.useMemo(()=>sn(e,r),[r,e]);return E(Y,{keyframes:o,style:Object.assign({},n,cn),...a})},ln=i`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,un=i`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,dn=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mn=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,pn={transformOrigin:"top left"},yn=t=>{const{style:r,...e}=t;return E(Y,{keyframes:ln,style:Object.assign({},r,pn),...e})},hn=t=>E(Y,{keyframes:un,...t});function gn(t){return t?mn:dn}const bn=t=>{const{reverse:r=!1,...e}=t,n=x.useMemo(()=>gn(r),[r]);return E(Y,{keyframes:n,...e})},vn=i`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,xn=i`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,wn=i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Sn=i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On=i`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$n=i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Cn=i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,In=i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Rn=i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,En=i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function kn(t,r){switch(r){case"bottom-left":return t?[Cn,{transformOrigin:"left bottom"}]:[xn,{transformOrigin:"left bottom"}];case"bottom-right":return t?[In,{transformOrigin:"right bottom"}]:[wn,{transformOrigin:"right bottom"}];case"top-left":return t?[Rn,{transformOrigin:"left bottom"}]:[Sn,{transformOrigin:"left bottom"}];case"top-right":return t?[En,{transformOrigin:"right bottom"}]:[On,{transformOrigin:"right bottom"}];default:return t?[$n,{transformOrigin:"center"}]:[vn,{transformOrigin:"center"}]}}const Pn=t=>{const{direction:r,reverse:e=!1,style:n,...a}=t,[o,s]=x.useMemo(()=>kn(e,r),[r,e]);return E(Y,{keyframes:o,style:Object.assign({},n,s),...a})},Nn=i`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,An=i`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_n=i`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tn=i`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zn=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Mn=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,jn=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Ln=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Yn(t,r){switch(r){case"down":return t?zn:Nn;case"right":return t?jn:_n;case"up":return t?Ln:Tn;default:return t?Mn:An}}const Xn=t=>{const{direction:r,reverse:e=!1,...n}=t,a=x.useMemo(()=>Yn(e,r),[r,e]);return E(Y,{keyframes:a,...n})},Dn=i`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Fn=i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vn=i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Bn=i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Un=i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Wn=i`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,qn=i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gn=i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Hn=i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Jn=i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Kn(t,r){switch(r){case"down":return t?qn:Fn;case"left":return t?Gn:Vn;case"right":return t?Hn:Bn;case"up":return t?Jn:Un;default:return t?Wn:Dn}}const Zn=t=>{const{direction:r,reverse:e=!1,...n}=t,a=x.useMemo(()=>Kn(e,r),[r,e]);return E(Y,{keyframes:a,...n})};function Qn(t,r){if(t==null)return{};var e={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(r.indexOf(n)!==-1)continue;e[n]=t[n]}return e}var ta=["effect","className"],ir={bounce:Ye,fade:tn,flip:fn,hinge:yn,jackinthebox:hn,roll:bn,rotate:Pn,slide:Xn,zoom:Zn},ra=Object.keys(ir);function aa(t){var r=t.effect,e=r===void 0?"fade":r,n=t.className,a=Qn(t,ta),o=ir[e];if(!o)throw new Error("Please specify a valid effect: "+ra.join(", "));var s=a.cascade||!["string","number","boolean"].includes(typeof a.children)?a.children:$t.createElement("div",null," ",a.children," ");return $t.createElement(o,Object.assign({className:n},a,{children:s}))}export{aa as R};
