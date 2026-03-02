import{J as $t,r as x,m as rt,R as pt}from"./index-BAvTzSiC.js";function ue(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function de(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var pe=(function(){function t(r){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(de(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ue(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},t})(),k="-ms-",nt="-moz-",S="-webkit-",Ft="comm",wt="rule",xt="decl",me="@import",Wt="@keyframes",he="@layer",ge=Math.abs,at=String.fromCharCode,ye=Object.assign;function ve(t,e){return z(t,0)^45?(((e<<2^z(t,0))<<2^z(t,1))<<2^z(t,2))<<2^z(t,3):0}function Vt(t){return t.trim()}function be(t,e){return(t=e.exec(t))?t[0]:t}function O(t,e,r){return t.replace(e,r)}function mt(t,e){return t.indexOf(e)}function z(t,e){return t.charCodeAt(e)|0}function B(t,e,r){return t.slice(e,r)}function Y(t){return t.length}function Et(t){return t.length}function J(t,e){return e.push(t),t}function we(t,e){return t.map(e).join("")}var st=1,F=1,Bt=0,L=0,M=0,W="";function it(t,e,r,n,a,s,i){return{value:t,root:e,parent:r,type:n,props:a,children:s,line:st,column:F,length:i,return:""}}function V(t,e){return ye(it("",null,null,"",null,null,0),t,{length:-t.length},e)}function xe(){return M}function Ee(){return M=L>0?z(W,--L):0,F--,M===10&&(F=1,st--),M}function T(){return M=L<Bt?z(W,L++):0,F++,M===10&&(F=1,st++),M}function N(){return z(W,L)}function Q(){return L}function H(t,e){return B(W,t,e)}function U(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ut(t){return st=F=1,Bt=Y(W=t),L=0,[]}function qt(t){return W="",t}function tt(t){return Vt(H(L-1,ht(t===91?t+2:t===40?t+1:t)))}function Se(t){for(;(M=N())&&M<33;)T();return U(t)>2||U(M)>3?"":" "}function Oe(t,e){for(;--e&&T()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return H(t,Q()+(e<6&&N()==32&&T()==32))}function ht(t){for(;T();)switch(M){case t:return L;case 34:case 39:t!==34&&t!==39&&ht(M);break;case 40:t===41&&ht(t);break;case 92:T();break}return L}function Ae(t,e){for(;T()&&t+M!==57;)if(t+M===84&&N()===47)break;return"/*"+H(e,L-1)+"*"+at(t===47?t:T())}function $e(t){for(;!U(N());)T();return H(t,L)}function Pe(t){return qt(et("",null,null,null,[""],t=Ut(t),0,[0],t))}function et(t,e,r,n,a,s,i,o,u){for(var d=0,m=0,h=i,w=0,E=0,y=0,p=1,c=1,v=1,g=0,b="",R=a,f=s,C=n,P=b;c;)switch(y=g,g=T()){case 40:if(y!=108&&z(P,h-1)==58){mt(P+=O(tt(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:P+=tt(g);break;case 9:case 10:case 13:case 32:P+=Se(y);break;case 92:P+=Oe(Q()-1,7);continue;case 47:switch(N()){case 42:case 47:J(Ie(Ae(T(),Q()),e,r),u);break;default:P+="/"}break;case 123*p:o[d++]=Y(P)*v;case 125*p:case 59:case 0:switch(g){case 0:case 125:c=0;case 59+m:v==-1&&(P=O(P,/\f/g,"")),E>0&&Y(P)-h&&J(E>32?It(P+";",n,r,h-1):It(O(P," ","")+";",n,r,h-2),u);break;case 59:P+=";";default:if(J(C=Pt(P,e,r,d,m,a,o,b,R=[],f=[],h),s),g===123)if(m===0)et(P,e,C,C,R,s,h,o,f);else switch(w===99&&z(P,3)===110?100:w){case 100:case 108:case 109:case 115:et(t,C,C,n&&J(Pt(t,C,C,0,0,a,o,b,a,R=[],h),f),a,f,h,o,n?R:f);break;default:et(P,C,C,C,[""],f,0,o,f)}}d=m=E=0,p=v=1,b=P="",h=i;break;case 58:h=1+Y(P),E=y;default:if(p<1){if(g==123)--p;else if(g==125&&p++==0&&Ee()==125)continue}switch(P+=at(g),g*p){case 38:v=m>0?1:(P+="\f",-1);break;case 44:o[d++]=(Y(P)-1)*v,v=1;break;case 64:N()===45&&(P+=tt(T())),w=N(),m=h=Y(b=P+=$e(Q())),g++;break;case 45:y===45&&Y(P)==2&&(p=0)}}return s}function Pt(t,e,r,n,a,s,i,o,u,d,m){for(var h=a-1,w=a===0?s:[""],E=Et(w),y=0,p=0,c=0;y<n;++y)for(var v=0,g=B(t,h+1,h=ge(p=i[y])),b=t;v<E;++v)(b=Vt(p>0?w[v]+" "+g:O(g,/&\f/g,w[v])))&&(u[c++]=b);return it(t,e,r,a===0?wt:o,u,d,m)}function Ie(t,e,r){return it(t,e,r,Ft,at(xe()),B(t,2,-2),0)}function It(t,e,r,n){return it(t,e,r,xt,B(t,0,n),B(t,n+1,-1),n)}function D(t,e){for(var r="",n=Et(t),a=0;a<n;a++)r+=e(t[a],a,t,e)||"";return r}function Ce(t,e,r,n){switch(t.type){case he:if(t.children.length)break;case me:case xt:return t.return=t.return||t.value;case Ft:return"";case Wt:return t.return=t.value+"{"+D(t.children,n)+"}";case wt:t.value=t.props.join(",")}return Y(r=D(t.children,n))?t.return=t.value+"{"+r+"}":""}function Me(t){var e=Et(t);return function(r,n,a,s){for(var i="",o=0;o<e;o++)i+=t[o](r,n,a,s)||"";return i}}function Re(t){return function(e){e.root||(e=e.return)&&t(e)}}function ze(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var ke=function(e,r,n){for(var a=0,s=0;a=s,s=N(),a===38&&s===12&&(r[n]=1),!U(s);)T();return H(e,L)},Le=function(e,r){var n=-1,a=44;do switch(U(a)){case 0:a===38&&N()===12&&(r[n]=1),e[n]+=ke(L-1,r,n);break;case 2:e[n]+=tt(a);break;case 4:if(a===44){e[++n]=N()===58?"&\f":"",r[n]=e[n].length;break}default:e[n]+=at(a)}while(a=T());return e},Te=function(e,r){return qt(Le(Ut(e),r))},Ct=new WeakMap,Ye=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Ct.get(n))&&!a){Ct.set(e,!0);for(var s=[],i=Te(r,s),o=n.props,u=0,d=0;u<i.length;u++)for(var m=0;m<o.length;m++,d++)e.props[d]=s[u]?i[u].replace(/&\f/g,o[m]):o[m]+" "+i[u]}}},Xe=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Gt(t,e){switch(ve(t,e)){case 5103:return S+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return S+t+nt+t+k+t+t;case 6828:case 4268:return S+t+k+t+t;case 6165:return S+t+k+"flex-"+t+t;case 5187:return S+t+O(t,/(\w+).+(:[^]+)/,S+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return S+t+k+"flex-item-"+O(t,/flex-|-self/,"")+t;case 4675:return S+t+k+"flex-line-pack"+O(t,/align-content|flex-|-self/,"")+t;case 5548:return S+t+k+O(t,"shrink","negative")+t;case 5292:return S+t+k+O(t,"basis","preferred-size")+t;case 6060:return S+"box-"+O(t,"-grow","")+S+t+k+O(t,"grow","positive")+t;case 4554:return S+O(t,/([^-])(transform)/g,"$1"+S+"$2")+t;case 6187:return O(O(O(t,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),t,"")+t;case 5495:case 3959:return O(t,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return O(O(t,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+t+t;case 4095:case 3583:case 4068:case 2532:return O(t,/(.+)-inline(.+)/,S+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Y(t)-1-e>6)switch(z(t,e+1)){case 109:if(z(t,e+4)!==45)break;case 102:return O(t,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+nt+(z(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch")?Gt(O(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(z(t,e+1)!==115)break;case 6444:switch(z(t,Y(t)-3-(~mt(t,"!important")&&10))){case 107:return O(t,":",":"+S)+t;case 101:return O(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(z(t,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(z(t,e+11)){case 114:return S+t+k+O(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return S+t+k+O(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return S+t+k+O(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return S+t+k+t+t}return t}var Ne=function(e,r,n,a){if(e.length>-1&&!e.return)switch(e.type){case xt:e.return=Gt(e.value,e.length);break;case Wt:return D([V(e,{value:O(e.value,"@","@"+S)})],a);case wt:if(e.length)return we(e.props,function(s){switch(be(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([V(e,{props:[O(s,/:(read-\w+)/,":"+nt+"$1")]})],a);case"::placeholder":return D([V(e,{props:[O(s,/:(plac\w+)/,":"+S+"input-$1")]}),V(e,{props:[O(s,/:(plac\w+)/,":"+nt+"$1")]}),V(e,{props:[O(s,/:(plac\w+)/,k+"input-$1")]})],a)}return""})}},_e=[Ne],je=function(e){var r=e.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(p){var c=p.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=e.stylisPlugins||_e,s={},i,o=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(p){for(var c=p.getAttribute("data-emotion").split(" "),v=1;v<c.length;v++)s[c[v]]=!0;o.push(p)});var u,d=[Ye,Xe];{var m,h=[Ce,Re(function(p){m.insert(p)})],w=Me(d.concat(a,h)),E=function(c){return D(Pe(c),w)};u=function(c,v,g,b){m=g,E(c?c+"{"+v.styles+"}":v.styles),b&&(y.inserted[v.name]=!0)}}var y={key:r,sheet:new pe({key:r,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return y.sheet.hydrate(o),y},ct={exports:{}},A={};var Mt;function De(){if(Mt)return A;Mt=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,i=t?Symbol.for("react.provider"):60109,o=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,d=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,h=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,E=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,p=t?Symbol.for("react.block"):60121,c=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,g=t?Symbol.for("react.scope"):60119;function b(f){if(typeof f=="object"&&f!==null){var C=f.$$typeof;switch(C){case e:switch(f=f.type,f){case u:case d:case n:case s:case a:case h:return f;default:switch(f=f&&f.$$typeof,f){case o:case m:case y:case E:case i:return f;default:return C}}case r:return C}}}function R(f){return b(f)===d}return A.AsyncMode=u,A.ConcurrentMode=d,A.ContextConsumer=o,A.ContextProvider=i,A.Element=e,A.ForwardRef=m,A.Fragment=n,A.Lazy=y,A.Memo=E,A.Portal=r,A.Profiler=s,A.StrictMode=a,A.Suspense=h,A.isAsyncMode=function(f){return R(f)||b(f)===u},A.isConcurrentMode=R,A.isContextConsumer=function(f){return b(f)===o},A.isContextProvider=function(f){return b(f)===i},A.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},A.isForwardRef=function(f){return b(f)===m},A.isFragment=function(f){return b(f)===n},A.isLazy=function(f){return b(f)===y},A.isMemo=function(f){return b(f)===E},A.isPortal=function(f){return b(f)===r},A.isProfiler=function(f){return b(f)===s},A.isStrictMode=function(f){return b(f)===a},A.isSuspense=function(f){return b(f)===h},A.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===d||f===s||f===a||f===h||f===w||typeof f=="object"&&f!==null&&(f.$$typeof===y||f.$$typeof===E||f.$$typeof===i||f.$$typeof===o||f.$$typeof===m||f.$$typeof===c||f.$$typeof===v||f.$$typeof===g||f.$$typeof===p)},A.typeOf=b,A}var Rt;function Fe(){return Rt||(Rt=1,ct.exports=De()),ct.exports}var lt,zt;function We(){if(zt)return lt;zt=1;var t=Fe(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[t.ForwardRef]=n,s[t.Memo]=a;function i(y){return t.isMemo(y)?a:s[y.$$typeof]||e}var o=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,w=Object.prototype;function E(y,p,c){if(typeof p!="string"){if(w){var v=h(p);v&&v!==w&&E(y,v,c)}var g=u(p);d&&(g=g.concat(d(p)));for(var b=i(y),R=i(p),f=0;f<g.length;++f){var C=g[f];if(!r[C]&&!(c&&c[C])&&!(R&&R[C])&&!(b&&b[C])){var P=m(p,C);try{o(y,C,P)}catch{}}}}return y}return lt=E,lt}We();var Ve=!0;function Ht(t,e,r){var n="";return r.split(" ").forEach(function(a){t[a]!==void 0?e.push(t[a]+";"):a&&(n+=a+" ")}),n}var St=function(e,r,n){var a=e.key+"-"+r.name;(n===!1||Ve===!1)&&e.registered[a]===void 0&&(e.registered[a]=r.styles)},Jt=function(e,r,n){St(e,r,n);var a=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Be(t){for(var e=0,r,n=0,a=t.length;a>=4;++n,a-=4)r=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(t.charCodeAt(n+2)&255)<<16;case 2:e^=(t.charCodeAt(n+1)&255)<<8;case 1:e^=t.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ue={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe=/[A-Z]|^ms/g,Ge=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Kt=function(e){return e.charCodeAt(1)===45},kt=function(e){return e!=null&&typeof e!="boolean"},ft=ze(function(t){return Kt(t)?t:t.replace(qe,"-$&").toLowerCase()}),Lt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ge,function(n,a,s){return X={name:a,styles:s,next:X},a})}return Ue[e]!==1&&!Kt(e)&&typeof r=="number"&&r!==0?r+"px":r};function q(t,e,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var a=r;if(a.anim===1)return X={name:a.name,styles:a.styles,next:X},a.name;var s=r;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)X={name:i.name,styles:i.styles,next:X},i=i.next;var o=s.styles+";";return o}return He(t,e,r)}case"function":{if(t!==void 0){var u=X,d=r(t);return X=u,q(t,e,d)}break}}var m=r;if(e==null)return m;var h=e[m];return h!==void 0?h:m}function He(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=q(t,e,r[a])+";";else for(var s in r){var i=r[s];if(typeof i!="object"){var o=i;e!=null&&e[o]!==void 0?n+=s+"{"+e[o]+"}":kt(o)&&(n+=ft(s)+":"+Lt(s,o)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(e==null||e[i[0]]===void 0))for(var u=0;u<i.length;u++)kt(i[u])&&(n+=ft(s)+":"+Lt(s,i[u])+";");else{var d=q(t,e,i);switch(s){case"animation":case"animationName":{n+=ft(s)+":"+d+";";break}default:n+=s+"{"+d+"}"}}}return n}var Tt=/label:\s*([^\s;{]+)\s*(;|$)/g,X;function Ot(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";X=void 0;var s=t[0];if(s==null||s.raw===void 0)n=!1,a+=q(r,e,s);else{var i=s;a+=i[0]}for(var o=1;o<t.length;o++)if(a+=q(r,e,t[o]),n){var u=s;a+=u[o]}Tt.lastIndex=0;for(var d="",m;(m=Tt.exec(a))!==null;)d+="-"+m[1];var h=Be(a)+d;return{name:h,styles:a,next:X}}var Je=function(e){return e()},Ke=$t.useInsertionEffect?$t.useInsertionEffect:!1,Zt=Ke||Je,Qt=x.createContext(typeof HTMLElement<"u"?je({key:"css"}):null);Qt.Provider;var te=function(e){return x.forwardRef(function(r,n){var a=x.useContext(Qt);return e(r,a,n)})},ee=x.createContext({}),ot={}.hasOwnProperty,gt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",re=function(e,r){var n={};for(var a in r)ot.call(r,a)&&(n[a]=r[a]);return n[gt]=e,n},Ze=function(e){var r=e.cache,n=e.serialized,a=e.isStringTag;return St(r,n,a),Zt(function(){return Jt(r,n,a)}),null},Qe=te(function(t,e,r){var n=t.css;typeof n=="string"&&e.registered[n]!==void 0&&(n=e.registered[n]);var a=t[gt],s=[n],i="";typeof t.className=="string"?i=Ht(e.registered,s,t.className):t.className!=null&&(i=t.className+" ");var o=Ot(s,void 0,x.useContext(ee));i+=e.key+"-"+o.name;var u={};for(var d in t)ot.call(t,d)&&d!=="css"&&d!==gt&&(u[d]=t[d]);return u.className=i,r&&(u.ref=r),x.createElement(x.Fragment,null,x.createElement(Ze,{cache:e,serialized:o,isStringTag:typeof a=="string"}),x.createElement(a,u))}),ne=Qe,tr=rt.Fragment,I=function(e,r,n){return ot.call(r,"css")?rt.jsx(ne,re(e,r),n):rt.jsx(e,r,n)},Yt=function(e,r){var n=arguments;if(r==null||!ot.call(r,"css"))return x.createElement.apply(void 0,n);var a=n.length,s=new Array(a);s[0]=ne,s[1]=re(e,r);for(var i=2;i<a;i++)s[i]=n[i];return x.createElement.apply(null,s)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Yt||(Yt={}));function ae(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Ot(e)}function l(){var t=ae.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var er=function t(e){for(var r=e.length,n=0,a="";n<r;n++){var s=e[n];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var o in s)s[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function rr(t,e,r){var n=[],a=Ht(t,n,r);return n.length<2?r:a+e(n)}var nr=function(e){var r=e.cache,n=e.serializedArr;return Zt(function(){for(var a=0;a<n.length;a++)Jt(r,n[a],!1)}),null},ut=te(function(t,e){var r=[],n=function(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];var h=Ot(d,e.registered);return r.push(h),St(e,h,!1),e.key+"-"+h.name},a=function(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];return rr(e.registered,n,er(d))},s={css:n,cx:a,theme:x.useContext(ee)},i=t.children(s);return x.createElement(x.Fragment,null,x.createElement(nr,{cache:e,serializedArr:r}),i)}),ar=Object.defineProperty,sr=(t,e,r)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,K=(t,e,r)=>sr(t,typeof e!="symbol"?e+"":e,r),yt=new Map,Z=new WeakMap,Xt=0,ir=void 0;function or(t){return t?(Z.has(t)||(Xt+=1,Z.set(t,Xt.toString())),Z.get(t)):"0"}function cr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?or(t.root):t[e]}`).toString()}function lr(t){const e=cr(t);let r=yt.get(e);if(!r){const n=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(o=>{var u;const d=o.isIntersecting&&a.some(m=>o.intersectionRatio>=m);t.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=d),(u=n.get(o.target))==null||u.forEach(m=>{m(d,o)})})},t);a=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:n},yt.set(e,r)}return r}function se(t,e,r={},n=ir){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:a,observer:s,elements:i}=lr(r),o=i.get(t)||[];return i.has(t)||i.set(t,o),o.push(e),s.observe(t),function(){o.splice(o.indexOf(e),1),o.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),yt.delete(a))}}function fr(t){return typeof t.children!="function"}var Nt=class extends x.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),K(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),fr(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:s}=this.props;this._unobserveCb=se(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:E,entry:y}=this.state;return t({inView:E,entry:y,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:n,root:a,rootMargin:s,onChange:i,skip:o,trackVisibility:u,delay:d,initialInView:m,fallbackInView:h,...w}=this.props;return x.createElement(e||"div",{ref:this.handleNode,...w},t)}};function ie({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:a,triggerOnce:s,skip:i,initialInView:o,fallbackInView:u,onChange:d}={}){var m;const[h,w]=x.useState(null),E=x.useRef(d),[y,p]=x.useState({inView:!!o,entry:void 0});E.current=d,x.useEffect(()=>{if(i||!h)return;let b;return b=se(h,(R,f)=>{p({inView:R,entry:f}),E.current&&E.current(R,f),f.isIntersecting&&s&&b&&(b(),b=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:r,delay:e},u),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,h,a,n,s,i,r,u,e]);const c=(m=y.entry)==null?void 0:m.target,v=x.useRef(void 0);!h&&c&&!s&&!i&&v.current!==c&&(v.current=c,p({inView:!!o,entry:void 0}));const g=[w,y.inView,y.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var dt={exports:{}},$={};var _t;function ur(){if(_t)return $;_t=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),o=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function p(c){if(typeof c=="object"&&c!==null){var v=c.$$typeof;switch(v){case t:switch(c=c.type,c){case r:case a:case n:case d:case m:return c;default:switch(c=c&&c.$$typeof,c){case o:case i:case u:case w:case h:case s:return c;default:return v}}case e:return v}}}return $.ContextConsumer=i,$.ContextProvider=s,$.Element=t,$.ForwardRef=u,$.Fragment=r,$.Lazy=w,$.Memo=h,$.Portal=e,$.Profiler=a,$.StrictMode=n,$.Suspense=d,$.SuspenseList=m,$.isAsyncMode=function(){return!1},$.isConcurrentMode=function(){return!1},$.isContextConsumer=function(c){return p(c)===i},$.isContextProvider=function(c){return p(c)===s},$.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},$.isForwardRef=function(c){return p(c)===u},$.isFragment=function(c){return p(c)===r},$.isLazy=function(c){return p(c)===w},$.isMemo=function(c){return p(c)===h},$.isPortal=function(c){return p(c)===e},$.isProfiler=function(c){return p(c)===a},$.isStrictMode=function(c){return p(c)===n},$.isSuspense=function(c){return p(c)===d},$.isSuspenseList=function(c){return p(c)===m},$.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===r||c===a||c===n||c===d||c===m||c===E||typeof c=="object"&&c!==null&&(c.$$typeof===w||c.$$typeof===h||c.$$typeof===s||c.$$typeof===i||c.$$typeof===u||c.$$typeof===y||c.getModuleId!==void 0)},$.typeOf=p,$}var jt;function dr(){return jt||(jt=1,dt.exports=ur()),dt.exports}var pr=dr();l`
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
`;l`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;l`
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
`;l`
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
`;l`
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
`;l`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;l`
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
`;l`
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
`;l`
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
`;l`
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
`;l`
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
`;l`
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
`;l`
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
`;const mr=l`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,hr=l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gr=l`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yr=l`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr=l`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,At=l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,br=l`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wr=l`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xr=l`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Er=l`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sr=l`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Or=l`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ar=l`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function $r({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=At,iterationCount:a=1}){return ae`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Pr(t){return t==null}function Ir(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function oe(t,e){return r=>r?t():e()}function G(t){return oe(t,()=>null)}function vt(t){return G(()=>({opacity:0}))(t)}const _=t=>{const{cascade:e=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:s=0,keyframes:i=At,triggerOnce:o=!1,className:u,style:d,childClassName:m,childStyle:h,children:w,onVisibilityChange:E}=t,y=x.useMemo(()=>$r({keyframes:i,duration:a}),[a,i]);return Pr(w)?null:Ir(w)?I(Mr,{...t,animationStyles:y,children:String(w)}):pr.isFragment(w)?I(ce,{...t,animationStyles:y}):I(tr,{children:x.Children.map(w,(p,c)=>{if(!x.isValidElement(p))return null;const v=n+(e?c*a*r:0);switch(p.type){case"ol":case"ul":return I(ut,{children:({cx:g})=>I(p.type,{...p.props,className:g(u,p.props.className),style:Object.assign({},d,p.props.style),children:I(_,{...t,children:p.props.children})})});case"li":return I(Nt,{threshold:s,triggerOnce:o,onChange:E,children:({inView:g,ref:b})=>I(ut,{children:({cx:R})=>I(p.type,{...p.props,ref:b,className:R(m,p.props.className),css:G(()=>y)(g),style:Object.assign({},h,p.props.style,vt(!g),{animationDelay:v+"ms"})})})});default:return I(Nt,{threshold:s,triggerOnce:o,onChange:E,children:({inView:g,ref:b})=>I("div",{ref:b,className:u,css:G(()=>y)(g),style:Object.assign({},d,vt(!g),{animationDelay:v+"ms"}),children:I(ut,{children:({cx:R})=>I(p.type,{...p.props,className:R(m,p.props.className),style:Object.assign({},h,p.props.style)})})})})}})})},Cr={display:"inline-block",whiteSpace:"pre"},Mr=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:i=0,triggerOnce:o=!1,className:u,style:d,children:m,onVisibilityChange:h}=t,{ref:w,inView:E}=ie({triggerOnce:o,threshold:i,onChange:h});return oe(()=>I("div",{ref:w,className:u,style:Object.assign({},d,Cr),children:m.split("").map((y,p)=>I("span",{css:G(()=>e)(E),style:{animationDelay:a+p*s*n+"ms"},children:y},p))}),()=>I(ce,{...t,children:m}))(r)},ce=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:a,style:s,children:i,onVisibilityChange:o}=t,{ref:u,inView:d}=ie({triggerOnce:n,threshold:r,onChange:o});return I("div",{ref:u,className:a,css:G(()=>e)(d),style:Object.assign({},s,vt(!d)),children:i})},Rr=l`
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
`,zr=l`
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
`,kr=l`
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
`,Lr=l`
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
`,Tr=l`
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
`,Yr=l`
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
`,Xr=l`
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
`,Nr=l`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,_r=l`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,jr=l`
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
`;function Dr(t,e){switch(e){case"down":return t?Xr:zr;case"left":return t?Nr:kr;case"right":return t?_r:Lr;case"up":return t?jr:Tr;default:return t?Yr:Rr}}const Fr=t=>{const{direction:e,reverse:r=!1,...n}=t,a=x.useMemo(()=>Dr(r,e),[e,r]);return I(_,{keyframes:a,...n})},Wr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Vr=l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Br=l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ur=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,qr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Gr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Hr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Jr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Kr=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Zr=l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Qr=l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,tn=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,en=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function rn(t,e,r){switch(r){case"bottom-left":return e?Vr:hr;case"bottom-right":return e?Br:gr;case"down":return t?e?qr:vr:e?Ur:yr;case"left":return t?e?Hr:br:e?Gr:At;case"right":return t?e?Kr:xr:e?Jr:wr;case"top-left":return e?Zr:Er;case"top-right":return e?Qr:Sr;case"up":return t?e?en:Ar:e?tn:Or;default:return e?Wr:mr}}const nn=t=>{const{big:e=!1,direction:r,reverse:n=!1,...a}=t,s=x.useMemo(()=>rn(e,n,r),[e,r,n]);return I(_,{keyframes:s,...a})},an=l`
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
`,sn=l`
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
`,on=l`
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
`,cn=l`
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
`,ln=l`
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
`;function fn(t,e){switch(e){case"horizontal":return t?cn:sn;case"vertical":return t?ln:on;default:return an}}const un={backfaceVisibility:"visible"},dn=t=>{const{direction:e,reverse:r=!1,style:n,...a}=t,s=x.useMemo(()=>fn(r,e),[e,r]);return I(_,{keyframes:s,style:Object.assign({},n,un),...a})},pn=l`
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
`,mn=l`
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
`,hn=l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gn=l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,yn={transformOrigin:"top left"},vn=t=>{const{style:e,...r}=t;return I(_,{keyframes:pn,style:Object.assign({},e,yn),...r})},bn=t=>I(_,{keyframes:mn,...t});function wn(t){return t?gn:hn}const xn=t=>{const{reverse:e=!1,...r}=t,n=x.useMemo(()=>wn(e),[e]);return I(_,{keyframes:n,...r})},En=l`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Sn=l`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On=l`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,An=l`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$n=l`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pn=l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,In=l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Cn=l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Mn=l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Rn=l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function zn(t,e){switch(e){case"bottom-left":return t?[In,{transformOrigin:"left bottom"}]:[Sn,{transformOrigin:"left bottom"}];case"bottom-right":return t?[Cn,{transformOrigin:"right bottom"}]:[On,{transformOrigin:"right bottom"}];case"top-left":return t?[Mn,{transformOrigin:"left bottom"}]:[An,{transformOrigin:"left bottom"}];case"top-right":return t?[Rn,{transformOrigin:"right bottom"}]:[$n,{transformOrigin:"right bottom"}];default:return t?[Pn,{transformOrigin:"center"}]:[En,{transformOrigin:"center"}]}}const kn=t=>{const{direction:e,reverse:r=!1,style:n,...a}=t,[s,i]=x.useMemo(()=>zn(r,e),[e,r]);return I(_,{keyframes:s,style:Object.assign({},n,i),...a})},Ln=l`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tn=l`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Yn=l`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Xn=l`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Nn=l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,_n=l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,jn=l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Dn=l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Fn(t,e){switch(e){case"down":return t?Nn:Ln;case"right":return t?jn:Yn;case"up":return t?Dn:Xn;default:return t?_n:Tn}}const Wn=t=>{const{direction:e,reverse:r=!1,...n}=t,a=x.useMemo(()=>Fn(r,e),[e,r]);return I(_,{keyframes:a,...n})},Vn=l`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Bn=l`
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
`,Un=l`
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
`,qn=l`
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
`,Gn=l`
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
`,Hn=l`
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
`,Jn=l`
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
`,Kn=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Zn=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Qn=l`
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
`;function ta(t,e){switch(e){case"down":return t?Jn:Bn;case"left":return t?Kn:Un;case"right":return t?Zn:qn;case"up":return t?Qn:Gn;default:return t?Hn:Vn}}const ea=t=>{const{direction:e,reverse:r=!1,...n}=t,a=x.useMemo(()=>ta(r,e),[e,r]);return I(_,{keyframes:a,...n})};function ra(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}var na=["effect","className"],le={bounce:Fr,fade:nn,flip:dn,hinge:vn,jackinthebox:bn,roll:xn,rotate:kn,slide:Wn,zoom:ea},aa=Object.keys(le);function fa(t){var e=t.effect,r=e===void 0?"fade":e,n=t.className,a=ra(t,na),s=le[r];if(!s)throw new Error("Please specify a valid effect: "+aa.join(", "));var i=a.cascade||!["string","number","boolean"].includes(typeof a.children)?a.children:pt.createElement("div",null," ",a.children," ");return pt.createElement(s,Object.assign({className:n},a,{children:i}))}const Dt=(t,e,r,n)=>{t.style.transition=`${e} ${r}ms ${n}`},j=(t,e,r)=>Math.min(Math.max(t,e),r);class sa{constructor(e,r){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=i=>{const{width:o,height:u}=i,d=Math.sqrt(o**2+u**2);return{width:d,height:d}},this.setSize=i=>{const o=this.calculateGlareSize(i);this.glareEl.style.width=`${o.width}px`,this.glareEl.style.height=`${o.height}px`},this.update=(i,o,u,d)=>{this.updateAngle(i,o.glareReverse),this.updateOpacity(i,o,u,d)},this.updateAngle=(i,o)=>{const{xPercentage:u,yPercentage:d}=i,m=180/Math.PI,h=u?Math.atan2(d,-u)*m:0;this.glareAngle=h-(o?180:0)},this.updateOpacity=(i,o,u,d)=>{const{xPercentage:m,yPercentage:h}=i,{glarePosition:w,glareReverse:E,glareMaxOpacity:y}=o,p=u?-1:1,c=d?-1:1,v=E?-1:1;let g=0;switch(w){case"top":g=-m*p*v;break;case"right":g=h*c*v;break;case"bottom":case void 0:g=m*p*v;break;case"left":g=-h*c*v;break;case"all":g=Math.hypot(m,h)}const b=j(g,0,100);this.glareOpacity=b*y/100},this.render=i=>{const{glareColor:o}=i;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${o} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:r,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},a=this.calculateGlareSize(e),s={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${a.width}px`,height:`${a.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,s)}}class ia{constructor(){this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,r)=>{this.updateTilt(e,r),this.updateTiltManualInput(e,r),this.updateTiltReverse(r),this.updateTiltLimits(r)},this.updateTilt=(e,r)=>{const{xPercentage:n,yPercentage:a}=e,{tiltMaxAngleX:s,tiltMaxAngleY:i}=r;this.tiltAngleX=n*s/100,this.tiltAngleY=a*i/100*-1},this.updateTiltManualInput=(e,r)=>{const{tiltAngleXManual:n,tiltAngleYManual:a,tiltMaxAngleX:s,tiltMaxAngleY:i}=r;(n!==null||a!==null)&&(this.tiltAngleX=n!==null?n:0,this.tiltAngleY=a!==null?a:0,e.xPercentage=100*this.tiltAngleX/s,e.yPercentage=100*this.tiltAngleY/i)},this.updateTiltReverse=e=>{const r=e.tiltReverse?-1:1;this.tiltAngleX=r*this.tiltAngleX,this.tiltAngleY=r*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:r}=e;this.tiltAngleX=j(this.tiltAngleX,-90,90),this.tiltAngleY=j(this.tiltAngleY,-90,90),r&&(this.tiltAngleX=r==="x"?this.tiltAngleX:0,this.tiltAngleY=r==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:r,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/r*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const oa={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class fe extends x.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;if(typeof e=="function")return void(await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove));window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:r}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),r&&r({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:r}=this.props;if(this.setTransitions(),r&&r({event:e}),this.props.reset){const n=new CustomEvent("autoreset");this.onMove(n)}},this.processInput=e=>{const{scale:r}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=r;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=r;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=r;break;case"autoreset":{const{tiltAngleXInitial:n,tiltAngleYInitial:a,tiltMaxAngleX:s,tiltMaxAngleY:i}=this.props,o=a/i*100;this.wrapperEl.clientPosition.xPercentage=j(n/s*100,-100,100),this.wrapperEl.clientPosition.yPercentage=j(o,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:r,tiltMaxAngleY:n}=this.props,a=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/r*100,this.wrapperEl.clientPosition.yPercentage=a/n*100,this.wrapperEl.clientPosition.xPercentage=j(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=j(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:r,flipVertically:n,flipHorizontally:a}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),r&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,a)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let r,n;if(e){const{x:a,y:s}=this.wrapperEl.clientPosition;r=s/window.innerHeight*200-100,n=a/window.innerWidth*200-100}else{const{size:{width:a,height:s,left:i,top:o},clientPosition:{x:u,y:d}}=this.wrapperEl;r=(d-o)/s*200-100,n=(u-i)/a*200-100}this.wrapperEl.clientPosition.xPercentage=j(r,-100,100),this.wrapperEl.clientPosition.yPercentage=j(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:r}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),r&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new ia,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const r=new CustomEvent("initial");this.emitOnMove(r)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:r}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),r&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:r}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),r&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:r}=this.props;e&&(this.glare=new sa(this.wrapperEl.size,r),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:r}=this.props;if(!r)return;let n=0,a=0;this.glare&&(n=this.glare.glareAngle,a=this.glare.glareOpacity),r({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:a,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:r}=this.props;Dt(this.wrapperEl.node,"all",e,r),this.glare&&Dt(this.glare.glareEl,"opacity",e,r)}render(){const{children:e,className:r,style:n}=this.props;return rt.jsx("div",{ref:a=>{this.wrapperEl.node=a},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:r,style:n,children:e})}}fe.defaultProps=oa;function bt(){return bt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},bt.apply(null,arguments)}function ua(t){var e;return pt.createElement(fe,Object.assign({},t,{style:bt({transformStyle:"preserve-3d"},(e=t.style)!=null?e:{})}))}const da="/Palana-Portfolio/assets/image7-BtjfxAtU.png";export{fa as R,ua as T,da as i};
