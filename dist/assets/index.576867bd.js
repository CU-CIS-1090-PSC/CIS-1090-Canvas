(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();var N={},we={};Object.defineProperty(we,"__esModule",{value:!0});we.makeNoise2D=void 0;var fe=(3-Math.sqrt(3))/6,De=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function t1(e){e===void 0&&(e=Math.random);for(var r=new Uint8Array(256),a=0;a<256;a++)r[a]=a;for(var i,o,a=255;a>0;a--)i=Math.floor((a+1)*e()),o=r[a],r[a]=r[i],r[i]=o;for(var t=new Uint8Array(512),n=new Uint8Array(512),a=0;a<512;a++)t[a]=r[a&255],n[a]=t[a]%12;return function(l,g){var D=(l+g)*.5*(Math.sqrt(3)-1),m=Math.floor(l+D),y=Math.floor(g+D),v=(m+y)*fe,$=m-v,I=y-v,P=l-$,b=g-I,Y=P>b?1:0,p=P>b?0:1,c=P-Y+fe,w=b-p+fe,s=P-1+2*fe,f=b-1+2*fe,h=m&255,u=y&255,k=De[n[h+t[u]]],d=De[n[h+Y+t[u+p]]],S=De[n[h+1+t[u+1]]],T=.5-P*P-b*b,O=T<0?0:Math.pow(T,4)*(k[0]*P+k[1]*b),_=.5-c*c-w*w,W=_<0?0:Math.pow(_,4)*(d[0]*c+d[1]*w),A=.5-s*s-f*f,q=A<0?0:Math.pow(A,4)*(S[0]*s+S[1]*f);return 70.14805770653952*(O+W+q)}}we.makeNoise2D=t1;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.makeNoise3D=void 0;var j=1/6,Me=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]];function i1(e){e===void 0&&(e=Math.random);for(var r=new Uint8Array(256),a=0;a<256;a++)r[a]=a;for(var i,o,a=255;a>0;a--)i=Math.floor((a+1)*e()),o=r[a],r[a]=r[i],r[i]=o;for(var t=new Uint8Array(512),n=new Uint8Array(512),a=0;a<512;a++)t[a]=r[a&255],n[a]=t[a]%12;return function(l,g,D){var m=(l+g+D)/3,y=Math.floor(l+m),v=Math.floor(g+m),$=Math.floor(D+m),I=(y+v+$)*j,P=y-I,b=v-I,Y=$-I,p=l-P,c=g-b,w=D-Y,s,f,h,u,k,d;p>=c?c>=w?(s=u=k=1,f=h=d=0):p>=w?(s=u=d=1,f=h=k=0):(h=u=d=1,s=f=k=0):c<w?(h=k=d=1,s=f=u=0):p<w?(f=k=d=1,s=h=u=0):(f=u=k=1,s=h=d=0);var S=p-s+j,T=c-f+j,O=w-h+j,_=p-u+2*j,W=c-k+2*j,A=w-d+2*j,q=p-1+3*j,X=c-1+3*j,Z=w-1+3*j,B=y&255,F=v&255,L=$&255,H=Me[n[B+t[F+t[L]]]],J=Me[n[B+s+t[F+f+t[L+h]]]],E=Me[n[B+u+t[F+k+t[L+d]]]],U=Me[n[B+1+t[F+1+t[L+1]]]],K=.5-p*p-c*c-w*w,re=K<0?0:Math.pow(K,4)*(H[0]*p+H[1]*c+H[2]*w),Q=.5-S*S-T*T-O*O,ae=Q<0?0:Math.pow(Q,4)*(J[0]*S+J[1]*T+J[2]*O),V=.5-_*_-W*W-A*A,te=V<0?0:Math.pow(V,4)*(E[0]*_+E[1]*W+E[2]*A),z=.5-q*q-X*X-Z*Z,ie=z<0?0:Math.pow(z,4)*(U[0]*q+U[1]*X+U[2]*Z);return 94.68493150681972*(re+ae+te+ie)}}ge.makeNoise3D=i1;var ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.makeNoise4D=void 0;var R=(5-Math.sqrt(5))/20,he=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]];function o1(e){e===void 0&&(e=Math.random);for(var r=new Uint8Array(256),a=0;a<256;a++)r[a]=a;for(var i,o,a=255;a>0;a--)i=Math.floor((a+1)*e()),o=r[a],r[a]=r[i],r[i]=o;for(var t=new Uint8Array(512),n=new Uint8Array(512),a=0;a<512;a++)t[a]=r[a&255],n[a]=t[a]%12;return function(l,g,D,m){var y=(l+g+D+m)*(Math.sqrt(5)-1)/4,v=Math.floor(l+y),$=Math.floor(g+y),I=Math.floor(D+y),P=Math.floor(m+y),b=(v+$+I+P)*R,Y=v-b,p=$-b,c=I-b,w=P-b,s=l-Y,f=g-p,h=D-c,u=m-w,k=0,d=0,S=0,T=0;s>f?k++:d++,s>h?k++:S++,s>u?k++:T++,f>h?d++:S++,f>u?d++:T++,h>u?S++:T++;var O=k>=3?1:0,_=d>=3?1:0,W=S>=3?1:0,A=T>=3?1:0,q=k>=2?1:0,X=d>=2?1:0,Z=S>=2?1:0,B=T>=2?1:0,F=k>=1?1:0,L=d>=1?1:0,H=S>=1?1:0,J=T>=1?1:0,E=s-O+R,U=f-_+R,K=h-W+R,re=u-A+R,Q=s-q+2*R,ae=f-X+2*R,V=h-Z+2*R,te=u-B+2*R,z=s-F+3*R,ie=f-L+3*R,be=h-H+3*R,pe=u-J+3*R,Pe=s-1+4*R,Se=f-1+4*R,Te=h-1+4*R,Ne=u-1+4*R,oe=v&255,ne=$&255,le=I&255,se=P&255,ve=he[t[oe+t[ne+t[le+t[se]]]]%32],ke=he[t[oe+O+t[ne+_+t[le+W+t[se+A]]]]%32],de=he[t[oe+q+t[ne+X+t[le+Z+t[se+B]]]]%32],me=he[t[oe+F+t[ne+L+t[le+H+t[se+J]]]]%32],Re=he[t[oe+1+t[ne+1+t[le+1+t[se+1]]]]%32],Oe=.5-s*s-f*f-h*h-u*u,ze=Oe<0?0:Math.pow(Oe,4)*(ve[0]*s+ve[1]*f+ve[2]*h+ve[3]*u),We=.5-E*E-U*U-K*K-re*re,xe=We<0?0:Math.pow(We,4)*(ke[0]*E+ke[1]*U+ke[2]*K+ke[3]*re),qe=.5-Q*Q-ae*ae-V*V-te*te,e1=qe<0?0:Math.pow(qe,4)*(de[0]*Q+de[1]*ae+de[2]*V+de[3]*te),Be=.5-z*z-ie*ie-be*be-pe*pe,r1=Be<0?0:Math.pow(Be,4)*(me[0]*z+me[1]*ie+me[2]*be+me[3]*pe),Fe=.5-Pe*Pe-Se*Se-Te*Te-Ne*Ne,a1=Fe<0?0:Math.pow(Fe,4)*(Re[0]*Pe+Re[1]*Se+Re[2]*Te+Re[3]*Ne);return 72.37855765153665*(ze+xe+e1+r1+a1)}}ce.makeNoise4D=o1;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.makeNoise4D=e.makeNoise3D=e.makeNoise2D=void 0;var r=we;Object.defineProperty(e,"makeNoise2D",{enumerable:!0,get:function(){return r.makeNoise2D}});var a=ge;Object.defineProperty(e,"makeNoise3D",{enumerable:!0,get:function(){return a.makeNoise3D}});var i=ce;Object.defineProperty(e,"makeNoise4D",{enumerable:!0,get:function(){return i.makeNoise4D}})})(N);function ye(e){return Math.max(0,Math.min(1,e))}function n1(e,r,a=.5){return a=ye(a),[e[0]*(1-a)+r[0]*a,e[1]*(1-a)+r[1]*a,e[2]*(1-a)+r[2]*a]}function l1(e){return e=ye(e),[e,e,e]}function G(e,r,a){var i,o,t;if(e=e%1,r=ye(r),a=ye(a),r==0)i=o=t=a;else{var n=function(m,y,v){return v<0&&(v+=1),v>1&&(v-=1),v<.16666666666666666?m+(y-m)*6*v:v<.5?y:v<.6666666666666666?m+(y-m)*(.6666666666666666-v)*6:m},l=a<.5?a*(1+r):a+r-a*r,g=2*a-l;i=n(g,l,e+1/3),o=n(g,l,e),t=n(g,l,e-1/3)}return[i,o,t]}N.makeNoise3D();function s1(e,r,a){return[e,r,.5]}function f1(e,r){e.fillStyle="Yellow",e.fillRect(38,179.9,18.5,18.5),e.fillRect(38,160.9,18.5,18.5),e.fillRect(19,160.9,18.5,18.5),e.fillRect(19,141.9,18.5,18.5)}function h1(e,r){e.fillStyle="Purple",e.fillRect(76,179.9,18.5,18.5),e.fillRect(76,160.9,18.5,18.5),e.fillRect(95,160.9,18.5,18.5),e.fillRect(57,179.9,18.5,18.5)}function u1(e,r){e.fillStyle="Cyan",e.fillRect(114,217.9,18.5,18.5),e.fillRect(114,198.9,18.5,18.5),e.fillRect(114,179.9,18.5,18.5),e.fillRect(114,160.9,18.5,18.5)}function v1(e,r){e.fillStyle="Orange",e.fillRect(133,103.9,18.5,18.5),e.fillRect(133,84.9,18.5,18.5),e.fillRect(133,65.9,18.5,18.5),e.fillRect(133,46.9,18.5,18.5)}function k1(e,r){e.fillStyle="Red",e.fillRect(19,179.9,18.5,18.5),e.fillRect(19,198.9,18.5,18.5),e.fillRect(19,217.9,18.5,18.5),e.fillRect(38,217.9,18.5,18.5)}function d1(e,r){e.fillStyle="Red",e.fillRect(76,217.9,18.5,18.5),e.fillRect(95,217.9,18.5,18.5),e.fillRect(95,198.9,18.5,18.5),e.fillRect(95,179.9,18.5,18.5)}function m1(e,r){e.fillStyle="Green",e.fillRect(57,217.9,18.5,18.5),e.fillRect(57,198.9,18.5,18.5),e.fillRect(38,198.9,18.5,18.5),e.fillRect(76,198.9,18.5,18.5)}function R1(e,r){e.lineWidth=1.5,e.strokeStyle="#9a9a9a",e.fillStyle="#787878",e.font="15px serif",M1(e),e.strokeStyle="#9a9a9a",e.fillRect(1,10,155,18),e.fillRect(1,239,155,20),e.fillRect(0,10,19,250),e.fillRect(152,10,19,250),e.fillStyle="Orange",k1(e),m1(e),d1(e),u1(e),h1(e),f1(e),v1(e),e.fillStyle="#787878",e.strokeRect(1,238,17,17),e.strokeRect(20,238,17,17),e.strokeRect(39,238,17,17),e.strokeRect(58,238,17,17),e.strokeRect(77,238,17,17),e.strokeRect(96,238,17,17),e.strokeRect(115,238,17,17),e.strokeRect(134,238,17,17),e.strokeRect(153,238,17,17),e.strokeRect(1,219,17,17),e.strokeRect(1,200,17,17),e.strokeRect(1,181,17,17),e.strokeRect(1,162,17,17),e.strokeRect(1,143,17,17),e.strokeRect(1,124,17,17),e.strokeRect(1,105,17,17),e.strokeRect(1,86,17,17),e.strokeRect(1,67,17,17),e.strokeRect(1,48,17,17),e.strokeRect(1,29,17,17),e.strokeRect(1,10,17,17),e.strokeRect(153,219,17,17),e.strokeRect(153,200,17,17),e.strokeRect(153,181,17,17),e.strokeRect(153,162,17,17),e.strokeRect(153,143,17,17),e.strokeRect(153,124,17,17),e.strokeRect(153,105,17,17),e.strokeRect(153,86,17,17),e.strokeRect(153,67,17,17),e.strokeRect(153,48,17,17),e.strokeRect(153,29,17,17),e.strokeRect(153,10,17,17),e.strokeRect(20,10,17,17),e.strokeRect(39,10,17,17),e.strokeRect(58,10,17,17),e.strokeRect(77,10,17,17),e.strokeRect(96,10,17,17),e.strokeRect(115,10,17,17),e.strokeRect(134,10,17,17),e.strokeStyle="#303030",e.strokeRect(170.5,13,0,250),e.strokeRect(155,27.3,14,.1),e.strokeRect(155,46.5,14,.1),e.strokeRect(155,65.5,14,.1),e.strokeRect(155,84.5,14,.1),e.strokeRect(155,103.5,14,.1),e.strokeRect(155,122.5,14,.1),e.strokeRect(155,141.5,14,.1),e.strokeRect(155,160.5,14,.1),e.strokeRect(155,179.5,14,.1),e.strokeRect(155,198.5,14,.1),e.strokeRect(155,217.5,14,.1),e.strokeRect(155,236.5,14,.1),e.strokeRect(155,255.5,14,.1),e.strokeRect(1,255.5,152,.1),e.strokeRect(151.2,239,0,15),e.strokeRect(132.2,239,0,15),e.strokeRect(113.2,239,0,15),e.strokeRect(94.2,239,0,15),e.strokeRect(75.2,239,0,15),e.strokeRect(56.2,239,0,15),e.strokeRect(37.2,239,0,15),e.strokeRect(18.2,13.5,.1,250),e.strokeRect(3,236.5,14,.1),e.strokeRect(3,217.5,14,.1),e.strokeRect(3,198.5,14,.1),e.strokeRect(3,179.5,14,.1),e.strokeRect(3,160.5,14,.1),e.strokeRect(3,141.5,14,.1),e.strokeRect(3,122.5,14,.1),e.strokeRect(3,103.5,14,.1),e.strokeRect(3,84.5,14,.1),e.strokeRect(3,65.5,14,.1),e.strokeRect(3,46.5,14,.1),e.strokeRect(3,27.5,150,.1),e.strokeRect(151.2,12.5,0,14.1),e.strokeRect(132.2,12.5,0,14.1),e.strokeRect(113.2,12.5,0,14.1),e.strokeRect(94.2,12.5,0,14.1),e.strokeRect(75.2,12.5,0,14.1),e.strokeRect(56.2,12.5,0,14.1),e.strokeRect(37.2,12.5,0,14.1),e.strokeStyle="#9a9a9a"}function M1(e,r){e.strokeStyle="black",e.font="15px serif",e.strokeText("Ben Z",200,250)}const y1={name:"Tetris recreation",shade:s1,draw:R1};N.makeNoise3D();function w1(e,r,a){return[1,1,Math.sin(a)+1.5]}function g1(e,r){e.beginPath(),e.arc(50,50,30,0,2*Math.PI),e.arc(80,45,20,0,2*Math.PI),e.arc(20,60,20,0,2*Math.PI),e.fillStyle="grey",e.fill(),e.lineWidth=5,e.strokeRect(76,160,100,90),e.fillRect(100,187,52,60),e.fillStyle="grey",e.fill(),e.beginPath(),e.moveTo(55,160),e.lineTo(130,90),e.lineTo(200,160),e.closePath(),e.stroke(),e.fillStyle="grey",e.fill(),e.beginPath(),e.lineWidth=2,e.arc(225,30,30,0,10*Math.sin(r)),e.arc(225,30,30,0,2*Math.PI,20+10*Math.cos(r)),e.stroke(),e.fillStyle="yellow",e.fill()}const c1={name:"Sunny day flip",shade:w1,draw:g1};N.makeNoise3D();function b1(e,r,a){return[0,2,1]}function p1(e,r){e.beginPath(),e.arc(40,20+Math.sin(r+180)+170,25,0,2*Math.PI),e.strokeStyle="Black",e.stroke(),e.fillStyle="black",e.fill(),e.lineWidth=10,e.fillStyle="Yellow",e.fillRect(75,140,150,110),e.fillStyle="Black",e.fillRect(130,190,40,60),e.beginPath(),e.moveTo(50,140),e.lineTo(150,60),e.lineTo(250,140),e.closePath(),e.stroke(),e.fill()}const P1={name:"My House",shade:b1,draw:p1};let Le=N.makeNoise3D();function S1(e,r,a){let i=0;return i=i+Le(e,r,a/2)*.75,i=i+Le(e*3,r*3,a)*.25,G(Math.abs(i/6),1,i+Math.pow(r,5))}function T1(e,r){function a(i,o,t){e.beginPath(),e.arc(i,o,t,0,2*Math.PI)}e.lineWidth=2,e.strokeStyle="black",a(100,100,20),e.fillStyle="yellow",e.fill(),e.stroke(),e.beginPath(),e.arc(100,95,15,.25*Math.PI,.75*Math.PI),e.stroke(),e.fillStyle="black",a(92,94,2),e.fill(),a(108,94,2),e.fill()}const N1={name:"Everything is Fine",shade:S1,draw:T1};var M=function(e,r){this.real=e,this.im=r},Ee=M.prototype={fromRect:function(e,r){return this.real=e,this.im=r,this},fromPolar:function(e,r){if(typeof e=="string"){var a=e.split(" ");e=a[0],r=a[1]}return this.fromRect(e*Math.cos(r),e*Math.sin(r))},toPrecision:function(e){return this.fromRect(this.real.toPrecision(e),this.im.toPrecision(e))},toFixed:function(e){return this.fromRect(this.real.toFixed(e),this.im.toFixed(e))},finalize:function(){return this.fromRect=function(e,r){return new M(e,r)},Object.defineProperty&&(Object.defineProperty(this,"real",{writable:!1,value:this.real}),Object.defineProperty(this,"im",{writable:!1,value:this.im})),this},magnitude:function(){var e=this.real,r=this.im;return Math.sqrt(e*e+r*r)},angle:function(){return Math.atan2(this.im,this.real)},conjugate:function(){return this.fromRect(this.real,-this.im)},negate:function(){return this.fromRect(-this.real,-this.im)},multiply:function(e){e=M.from(e);var r=this.real,a=this.im;return this.fromRect(e.real*r-e.im*a,a*e.real+e.im*r)},divide:function(e){e=M.from(e);var r=Math.pow(e.real,2)+Math.pow(e.im,2),a=this.real,i=this.im;return this.fromRect((a*e.real+i*e.im)/r,(i*e.real-a*e.im)/r)},add:function(e){return e=M.from(e),this.fromRect(this.real+e.real,this.im+e.im)},subtract:function(e){return e=M.from(e),this.fromRect(this.real-e.real,this.im-e.im)},pow:function(e){e=M.from(e);var r=e.multiply(this.clone().log()).exp();return this.fromRect(r.real,r.im)},sqrt:function(){var e=this.magnitude(),r=this.im<0?-1:1;return this.fromRect(Math.sqrt((e+this.real)/2),r*Math.sqrt((e-this.real)/2))},log:function(e){return e||(e=0),this.fromRect(Math.log(this.magnitude()),this.angle()+e*2*Math.PI)},exp:function(){return this.fromPolar(Math.exp(this.real),this.im)},sin:function(){var e=this.real,r=this.im;return this.fromRect(Math.sin(e)*ee(r),Math.cos(e)*x(r))},cos:function(){var e=this.real,r=this.im;return this.fromRect(Math.cos(e)*ee(r),Math.sin(e)*x(r)*-1)},tan:function(){var e=this.real,r=this.im,a=Math.cos(2*e)+ee(2*r);return this.fromRect(Math.sin(2*e)/a,x(2*r)/a)},sinh:function(){var e=this.real,r=this.im;return this.fromRect(x(e)*Math.cos(r),ee(e)*Math.sin(r))},cosh:function(){var e=this.real,r=this.im;return this.fromRect(ee(e)*Math.cos(r),x(e)*Math.sin(r))},tanh:function(){var e=this.real,r=this.im,a=ee(2*e)+Math.cos(2*r);return this.fromRect(x(2*e)/a,Math.sin(2*r)/a)},clone:function(){return new M(this.real,this.im)},toString:function(e){if(e)return this.magnitude()+" "+this.angle();var r="",a=this.real,i=this.im;if(a&&(r+=a),(a&&i||i<0)&&(r+=i<0?"-":"+"),i){var o=Math.abs(i);o!=1&&(r+=o),r+="i"}return r||"0"},equals:function(e){return e=M.from(e),e.real==this.real&&e.im==this.im}},Ue={abs:"magnitude",arg:"angle",phase:"angle",conj:"conjugate",mult:"multiply",dev:"divide",sub:"subtract"};for(var Ce in Ue)Ee[Ce]=Ee[Ue[Ce]];var Ge={from:function(e,r){if(e instanceof M)return new M(e.real,e.im);var a=typeof e;if(a=="string"){e=="i"&&(e="0+1i");var i=e.match(/(\d+)?([\+\-]\d*)[ij]/);i&&(e=i[1],r=i[2]=="+"||i[2]=="-"?i[2]+"1":i[2])}return e=+e,r=+r,new M(isNaN(e)?0:e,isNaN(r)?0:r)},fromPolar:function(e,r){return new M(1,1).fromPolar(e,r)},i:new M(0,1).finalize(),one:new M(1,0).finalize()};for(var Ye in Ge)M[Ye]=Ge[Ye];var x=function(e){return(Math.pow(Math.E,e)-Math.pow(Math.E,-e))/2},ee=function(e){return(Math.pow(Math.E,e)+Math.pow(Math.E,-e))/2},Xe=M;function D1(e,r,a){e=(e-.7)*3,r=(r-.5)*3;let i=new Xe(e,r),o=new Xe(e,r),t;for(t=0;t<40;t++)if(o=o.pow(2).add(i),o.abs()>60)return G(a+t/70,1,t/50);return[0,0,0]}function j1(){}const $1={name:"Mandelbrot",shade:D1,draw:j1};N.makeNoise3D();function I1(e,r,a){return[1,0,1]}function _1(e,r){e.moveTo(108,0),e.lineTo(141,70),e.lineTo(218,78.3),e.lineTo(162,131),e.lineTo(175,205),e.lineTo(108,170),e.lineTo(41.2,205),e.lineTo(55,131),e.lineTo(1,78),e.lineTo(75,68),e.lineTo(108,0),e.closePath(),e.fill()}const A1={name:"My Star",shade:I1,draw:_1};N.makeNoise3D();function O1(e,r,a){return[.27,.57,.38]}function W1(e,r){e.lineWidth=2,e.strokeStyle="white",e.beginPath(),e.moveTo(185,150),e.lineTo(95,150),e.lineTo(135,25),e.closePath(),e.strokeStyle="Black",e.stroke(),e.fillStyle="Red",e.fill(),e.beginPath(),e.arc(148,23,12,0,2*Math.PI),e.fillStyle="White",e.fill(),e.strokeStyle="Black",e.stroke(),e.beginPath(),e.arc(140,150,45,0,Math.PI),e.fillStyle="Pink",e.fill(),e.beginPath(),e.arc(120,160,5,0,2*Math.PI),e.fillStyle="Black",e.fill(),e.beginPath(),e.arc(160,160,5,0,2*Math.PI),e.fillStyle="Black",e.fill(),e.beginPath(),e.arc(140,170,15,0,Math.PI),e.strokeStyle="Black",e.stroke(),e.fillStyle=" White",e.fill(),e.fillStyle="Red",e.fillRect(110,195,60,70),e.strokeRect(110,195,60,70),e.beginPath(),e.moveTo(160,194),e.lineTo(120,194),e.lineTo(140,240),e.closePath(),e.strokeStyle="Black",e.stroke(),e.fillStyle="White",e.fill()}const q1={name:"Jolly Elf",shade:O1,draw:W1};N.makeNoise3D();function B1(e,r,a){return[Math.sin(a),Math.cos(a),Math.tan(a)]}function F1(e,r){e.lineWidth=2,e.strokeStyle="black",e.strokeRect(50,130,75,80*Math.cos(r)),e.strokeRect(50,130,75,-40*Math.cos(r)),e.strokeRect(125,130,75,40*Math.cos(r)),e.strokeRect(125,130,75,-80*Math.cos(r))}const L1={name:"Abstract with spinning rectangles",shade:B1,draw:F1};N.makeNoise3D();function E1(e,r,a){return[.65,.45,.32]}function U1(e,r){function a(i,o,t){e.beginPath(),e.arc(i,o,t,0,2*Math.PI)}e.lineWidth=2,e.strokeStyle="black",a(100,100,40),e.fillStyle="yellow",e.fill(),e.stroke(),a(80,100,8),e.fillStyle="black",e.fill(),e.stroke(),a(108,94,8),e.fillStyle="black",e.fill(),e.stroke(),e.beginPath(),e.arc(100,100,15,.25*Math.PI,.7*Math.PI),e.stroke(),C1(e)}let C1=e=>{function r(t,n,l){e.beginPath(),e.arc(t,n,l,0,2*Math.PI)}const a=(t,n)=>Math.random()*(n-t)+t;let i=a(0,250),o=a(0,250);r(o,i,5),e.fillStyle="white",e.fill(),e.stroke()};const G1={name:"Snowstorm",shade:E1,draw:U1};let Ze=N.makeNoise3D(),je=5,He,Je,Ke;function Y1(e,r,a){e=(e-.5)*3,r=(r-.5)*3,a!=Ke&&(He=new Array(je).fill().map((o,t)=>Ze(t,0,a/(t+1))),Je=new Array(je).fill().map((o,t)=>Ze(10,t,a/(t+1))),Ke=a);let i=0;for(let o=0;o<je;o++){let t=e-He[o],n=r-Je[o],l=Math.sqrt(t*t+n*n);l=Math.max(0,1-l),l=Math.pow(l,3),i=i+l}return i>.8?G(.55,1,i/2+.3):l1(0)}function X1(){}const Z1={name:"Metaballs",shade:Y1,draw:X1};N.makeNoise3D();function H1(e,r,a){return[(155*r*Math.cos(a+180)+12)/100,(155*e*Math.sin(a+180)+17)/100,a]}function J1(e,r){e.beginPath(),e.arc(155*Math.cos(r+180)+170,155*Math.sin(r+180)+170,25,0,2*Math.PI),e.strokeStyle="grey",e.stroke(),e.fillStyle="grey",e.fill()}function K1(e,r){e.beginPath(),e.arc(155*Math.cos(r)+170,155*Math.sin(r)+170,25,0,2*Math.PI),e.strokeStyle="yellow",e.stroke(),e.fillStyle="yellow",e.fill()}function Q1(e){e.lineWidth=2,e.strokeStyle="black",e.strokeRect(75,140,150,110),e.fillRect(100,190,40,60),e.strokeRect(190,190,20,20),e.strokeRect(170,190,20,20),e.strokeRect(190,170,20,20),e.strokeRect(170,170,20,20),e.beginPath(),e.moveTo(50,140),e.lineTo(150,60),e.lineTo(250,140),e.closePath(),e.stroke()}function V1(e,r){Q1(e),K1(e,r),J1(e,r)}const z1={name:"Sun and Moon going around a house",shade:H1,draw:V1};N.makeNoise3D();function x1(e,r,a){return[0,0,Math.cos(a*2+1*r)]}function er(e,r){e.lineWidth=5,e.strokeStyle="#F0E68C",e.beginPath(130,135),e.moveTo(130,40),e.lineTo(40,40),e.lineTo(110,120),e.lineTo(80,10),e.lineTo(30,115),e.closePath(),e.stroke(),e.beginPath(230,240),e.moveTo(230,140),e.lineTo(140,140),e.lineTo(210,220),e.lineTo(180,110),e.lineTo(130,215),e.closePath(),e.stroke(),e.beginPath(),e.arc(200,45,20,10,100*Math.PI),e.fillStyle="#FFFACD",e.fill()}const rr={name:"Starry Night",shade:x1,draw:er};let Qe=N.makeNoise3D();function ar(e,r,a){let i=G(.66,1,.3+.15*(Math.sin((a/3-2*r+Qe(e*3,0,a/10)/20)*20)+1)),o=G(r/2-.4,1,.3);if(r>.65&&(o=G((.6-r)/2-.2,1,.3),Math.pow(1-Math.abs(.39-e)+(r-.2)*.1,5)>.9&&(o=G(.15,1,.7))),r<.65)return o;let t=3*Math.pow(r,3)*Math.abs(Qe(e,20*r,a/10));return n1(o,i,t*t)}function tr(e,r){e.beginPath(),e.arc(100,145,20,0,2*Math.PI),e.fillStyle="yellow",e.fill()}const ir={name:"Sunset",shade:ar,draw:tr};let Ae=[y1,c1,P1,N1,$1,A1,q1,L1,G1,Z1,z1,rr,ir],$e=Ae[0],Ie=document.querySelector("#select");Ae.forEach((e,r)=>{Ie.appendChild(new Option(e.name,r,r))});Ie.addEventListener("change",e=>{$e=Ae[Ie.value]});const C=256;document.querySelector("#app");const or=document.querySelector("#canvas"),_e=or.getContext("2d"),ue=_e.createImageData(C,C);let nr=new Date().getTime();function Ve(){let r=new Date().getTime()-nr;for(let a=0;a<C;a++)for(let i=0;i<C;i++){let o=$e.shade(a/C,i/C,r/1e3),t=4*(C*i+a);ue.data[t+0]=o[0]*255,ue.data[t+1]=o[1]*255,ue.data[t+2]=o[2]*255,ue.data[t+3]=255}_e.putImageData(ue,0,0),$e.draw(_e,r/1e3),window.requestAnimationFrame(Ve)}window.requestAnimationFrame(Ve);
