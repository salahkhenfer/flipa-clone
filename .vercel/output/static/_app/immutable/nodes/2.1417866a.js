import{s as ce,n as W,r as ze,c as Me,f as Ue,h as je}from"../chunks/scheduler.0d2b0a59.js";import{S as de,i as ue,g as d,s as b,h as u,j as f,c as w,y as Q,f as c,k as i,a as j,x as s,z as we,A as ie,B as Re,C as Ye,m as L,n as z,o as Be,r as ye,u as $e,v as Ie,d as Ee,t as Ve,w as De}from"../chunks/index.19692e55.js";import{l as U,b as Ne}from"../chunks/gloobl.30ede4c5.js";import"../chunks/singletons.62053080.js";import{e as ke}from"../chunks/each.e59479a4.js";import{g as qe}from"../chunks/navigation.bb62f277.js";import{p as Ge}from"../chunks/stores.c0390316.js";const Oe=()=>"بيع مجاني",Pe=()=>"احصل على التحقق المجاني",Je=()=>"العربية ",Ke=()=>"يمديك ",Qe=()=>"السوق رقم 1 للشراء والبيع",We=()=>" ...ابحث ",Xe=()=>"Sell Free",Ze=()=>"Get Free Validation",et=()=>"English  ",tt=()=>"Yamdik",rt=()=>"#1 Marketplace to Buy & Sell",lt=()=>" Search... ",Te=(h={},e={})=>({ar:Oe,en:Xe})[e.languageTag??U()](),Ce=(h={},e={})=>({ar:Pe,en:Ze})[e.languageTag??U()](),re=(h={},e={})=>({ar:Je,en:et})[e.languageTag??U()](),at=(h={},e={})=>({ar:Ke,en:tt})[e.languageTag??U()](),st=(h={},e={})=>({ar:Qe,en:rt})[e.languageTag??U()](),nt=(h={},e={})=>({ar:We,en:lt})[e.languageTag??U()]();function Y(h,e){return h=ot(h),`/${e}${h}`}function ot(h){const[e,t,...r]=h.split("/");return Ne.includes(t)?"/"+r.join("/"):h}function Se(h,e,t){const r=h.slice();return r[6]=e[t],r}function He(h){let e,t,r=ke(h[1]),n=[];for(let a=0;a<r.length;a+=1)n[a]=Ae(Se(h,r,a));return{c(){e=d("div"),t=d("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=u(a,"DIV",{class:!0});var o=f(e);t=u(o,"UL",{class:!0});var l=f(t);for(let v=0;v<n.length;v+=1)n[v].l(l);l.forEach(c),o.forEach(c),this.h()},h(){i(t,"class","bg-white overflow-scroll h-56 p-2"),i(e,"class","rounded-xl overflow-hidden")},m(a,o){j(a,e,o),s(e,t);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(t,null)},p(a,o){if(o&2){r=ke(a[1]);let l;for(l=0;l<r.length;l+=1){const v=Se(a,r,l);n[l]?n[l].p(v,o):(n[l]=Ae(v),n[l].c(),n[l].m(t,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=r.length}},d(a){a&&c(e),Ye(n,a)}}}function Ae(h){let e,t,r=h[6].title+"",n,a,o,l,v;return{c(){e=d("li"),t=d("a"),n=L(r),o=b(),l=d("hr"),v=b(),this.h()},l(m){e=u(m,"LI",{});var _=f(e);t=u(_,"A",{href:!0});var D=f(t);n=z(D,r),D.forEach(c),o=w(_),l=u(_,"HR",{class:!0}),v=w(_),_.forEach(c),this.h()},h(){i(t,"href",a=`/search?search=${encodeURIComponent(h[6].title)}`),i(l,"class","h-px my-8 bg-gray-200 border-0 dark:bg-gray-700")},m(m,_){j(m,e,_),s(e,t),s(t,n),s(e,o),s(e,l),s(e,v)},p(m,_){_&2&&r!==(r=m[6].title+"")&&Be(n,r),_&2&&a!==(a=`/search?search=${encodeURIComponent(m[6].title)}`)&&i(t,"href",a)},d(m){m&&c(e)}}}function it(h){let e,t,r,n,a,o,l,v="Search",m,_,D,$,E,S,H,T,I,A,g,p=h[1].length>0&&He(h);return{c(){e=d("div"),t=d("div"),r=d("div"),n=d("form"),a=d("input"),o=b(),l=d("button"),l.textContent=v,m=b(),_=d("div"),D=b(),$=d("div"),E=b(),S=d("div"),H=b(),T=d("div"),I=b(),p&&p.c(),this.h()},l(x){e=u(x,"DIV",{class:!0});var y=f(e);t=u(y,"DIV",{class:!0});var C=f(t);r=u(C,"DIV",{class:!0});var V=f(r);n=u(V,"FORM",{autocomplete:!0,class:!0});var k=f(n);a=u(k,"INPUT",{placeholder:!0,type:!0,class:!0}),o=w(k),l=u(k,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-5c3xhg"&&(l.textContent=v),k.forEach(c),m=w(V),_=u(V,"DIV",{class:!0}),f(_).forEach(c),D=w(V),$=u(V,"DIV",{class:!0}),f($).forEach(c),E=w(V),S=u(V,"DIV",{class:!0}),f(S).forEach(c),H=w(V),T=u(V,"DIV",{class:!0}),f(T).forEach(c),V.forEach(c),I=w(C),p&&p.l(C),C.forEach(c),y.forEach(c),this.h()},h(){i(a,"placeholder",nt()),i(a,"type","text"),i(a,"class","rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"),i(l,"type","submit"),i(l,"class","bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"),i(n,"autocomplete","off"),i(n,"class","relative flex z-50 bg-white rounded-full"),i(_,"class","glow glow-1 z-10 bg-pink-400 absolute svelte-runwoo"),i($,"class","glow glow-2 z-20 bg-purple-400 absolute svelte-runwoo"),i(S,"class","glow glow-3 z-30 bg-indigo-500 absolute svelte-runwoo"),i(T,"class","glow glow-4 z-40 bg-blue-400 absolute svelte-runwoo"),i(r,"class","overflow-hidden z-0 rounded-full relative p-3"),i(t,"class","p-12 max-md:p-0 max-md:pt-5 w-full sm:max-w-2xl sm:mx-auto"),i(e,"class","bg-transparent flex flex-col justify-center")},m(x,y){j(x,e,y),s(e,t),s(t,r),s(r,n),s(n,a),we(a,h[0]),s(n,o),s(n,l),s(r,m),s(r,_),s(r,D),s(r,$),s(r,E),s(r,S),s(r,H),s(r,T),s(t,I),p&&p.m(t,null),A||(g=[ie(a,"input",h[4]),ie(a,"input",h[3]),ie(n,"submit",Re(h[2]))],A=!0)},p(x,[y]){y&1&&a.value!==x[0]&&we(a,x[0]),x[1].length>0?p?p.p(x,y):(p=He(x),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i:W,o:W,d(x){x&&c(e),p&&p.d(),A=!1,ze(g)}}}function ct(h,e,t){let r="",n=[];const a=()=>{r.trim().length<3||(console.log(encodeURIComponent(r),"searchTerm"),qe(`/search?search=${encodeURIComponent(r)}`))};let o;const l=()=>{r.trim().length<3||(clearTimeout(o),o=setTimeout(()=>{fetch("/api/autoCompelete?search="+r).then(m=>m.json()).then(m=>{console.log(m,"data"),t(1,n=m)})},200))};function v(){r=this.value,t(0,r)}return[r,n,a,l,v]}class dt extends de{constructor(e){super(),ue(this,e,ct,it,ce,{})}}function ut(h){let e,t,r=re()+"",n,a;return{c(){e=d("div"),t=d("a"),n=L(r),this.h()},l(o){e=u(o,"DIV",{class:!0});var l=f(e);t=u(l,"A",{href:!0,hreflang:!0});var v=f(t);n=z(v,r),v.forEach(c),l.forEach(c),this.h()},h(){i(t,"href",a=Y(h[0].url.pathname,"ar")),i(t,"hreflang","ar"),i(e,"class","text-xl text-white px-4")},m(o,l){j(o,e,l),s(e,t),s(t,n)},p(o,l){l&1&&a!==(a=Y(o[0].url.pathname,"ar"))&&i(t,"href",a)},d(o){o&&c(e)}}}function ht(h){let e,t,r=re()+"",n,a;return{c(){e=d("div"),t=d("a"),n=L(r),this.h()},l(o){e=u(o,"DIV",{class:!0});var l=f(e);t=u(l,"A",{href:!0,hreflang:!0});var v=f(t);n=z(v,r),v.forEach(c),l.forEach(c),this.h()},h(){i(t,"href",a=Y(h[0].url.pathname,"en")),i(t,"hreflang","en"),i(e,"class","text-xl text-white px-4")},m(o,l){j(o,e,l),s(e,t),s(t,n)},p(o,l){l&1&&a!==(a=Y(o[0].url.pathname,"en"))&&i(t,"href",a)},d(o){o&&c(e)}}}function ft(h){let e,t,r=re()+"",n,a;return{c(){e=d("div"),t=d("a"),n=L(r),this.h()},l(o){e=u(o,"DIV",{class:!0});var l=f(e);t=u(l,"A",{href:!0,hreflang:!0});var v=f(t);n=z(v,r),v.forEach(c),l.forEach(c),this.h()},h(){i(t,"href",a=Y(h[0].url.pathname,"ar")),i(t,"hreflang","ar"),i(e,"class","text-xl text-white px-4")},m(o,l){j(o,e,l),s(e,t),s(t,n)},p(o,l){l&1&&a!==(a=Y(o[0].url.pathname,"ar"))&&i(t,"href",a)},d(o){o&&c(e)}}}function vt(h){let e,t,r=re()+"",n,a;return{c(){e=d("div"),t=d("a"),n=L(r),this.h()},l(o){e=u(o,"DIV",{class:!0});var l=f(e);t=u(l,"A",{href:!0,hreflang:!0});var v=f(t);n=z(v,r),v.forEach(c),l.forEach(c),this.h()},h(){i(t,"href",a=Y(h[0].url.pathname,"en")),i(t,"hreflang","en"),i(e,"class","text-xl text-white px-4")},m(o,l){j(o,e,l),s(e,t),s(t,n)},p(o,l){l&1&&a!==(a=Y(o[0].url.pathname,"en"))&&i(t,"href",a)},d(o){o&&c(e)}}}function pt(h){let e,t,r,n='<img class="w-20 h-19" src="/static/Screenshot_2024-01-14_151943-removebg-preview.png" alt=""/>',a,o,l,v="|",m,_,D,$,E,S=Ce()+"",H,T,I,A=Te()+"",g,p,x,y,C='<img class="w-20 h-19" src="/static/Screenshot_2024-01-14_151943-removebg-preview.png" alt=""/>',V,k,R,N,he=Ce()+"",le,ae,q,fe=Te()+"",se,ne,B,ve="|",oe,P;function Fe(M,F){return U()==="ar"?ht:ut}let J=Fe()(h);function Le(M,F){return U()==="ar"?vt:ft}let K=Le()(h);return{c(){e=d("nav"),t=d("div"),r=d("a"),r.innerHTML=n,a=b(),o=d("div"),l=d("div"),l.textContent=v,m=b(),J.c(),_=b(),D=d("div"),$=d("div"),E=d("div"),H=L(S),T=b(),I=d("div"),g=L(A),p=b(),x=d("div"),y=d("a"),y.innerHTML=C,V=b(),k=d("div"),R=d("div"),N=d("div"),le=L(he),ae=b(),q=d("div"),se=L(fe),ne=b(),B=d("div"),B.textContent=ve,oe=b(),P=d("div"),K.c(),this.h()},l(M){e=u(M,"NAV",{class:!0});var F=f(e);t=u(F,"DIV",{class:!0});var G=f(t);r=u(G,"A",{href:!0,class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1yg19r8"&&(r.innerHTML=n),a=w(G),o=u(G,"DIV",{class:!0});var X=f(o);l=u(X,"DIV",{class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1hlodne"&&(l.textContent=v),m=w(X),J.l(X),X.forEach(c),_=w(G),D=u(G,"DIV",{class:!0});var pe=f(D);$=u(pe,"DIV",{class:!0});var Z=f($);E=u(Z,"DIV",{class:!0});var me=f(E);H=z(me,S),me.forEach(c),T=w(Z),I=u(Z,"DIV",{class:!0});var _e=f(I);g=z(_e,A),_e.forEach(c),Z.forEach(c),pe.forEach(c),G.forEach(c),p=w(F),x=u(F,"DIV",{class:!0});var ee=f(x);y=u(ee,"A",{href:!0,class:!0,"data-svelte-h":!0}),Q(y)!=="svelte-1yg19r8"&&(y.innerHTML=C),V=w(ee),k=u(ee,"DIV",{class:!0});var O=f(k);R=u(O,"DIV",{class:!0});var te=f(R);N=u(te,"DIV",{class:!0});var ge=f(N);le=z(ge,he),ge.forEach(c),ae=w(te),q=u(te,"DIV",{class:!0});var xe=f(q);se=z(xe,fe),xe.forEach(c),te.forEach(c),ne=w(O),B=u(O,"DIV",{class:!0,"data-svelte-h":!0}),Q(B)!=="svelte-1hlodne"&&(B.textContent=ve),oe=w(O),P=u(O,"DIV",{});var be=f(P);K.l(be),be.forEach(c),O.forEach(c),ee.forEach(c),F.forEach(c),this.h()},h(){i(r,"href","/"),i(r,"class","flex items-center space-x-3 rtl:space-x-reverse"),i(l,"class","text-3xl text-white px-4"),i(o,"class","flex"),i(E,"class","text-white border-spacing-0 hover:text-black cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl"),i(I,"class","text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl"),i($,"class","flex gap-3"),i(D,"class","mt-2 flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"),i(t,"class","md:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"),i(y,"href","/"),i(y,"class","flex items-center space-x-3 rtl:space-x-reverse"),i(N,"class","text-white border-spacing-0 hover:text-black max-md:text-sm cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl"),i(q,"class","text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl"),i(R,"class","flex gap-3"),i(B,"class","text-3xl text-white px-4"),i(k,"class","flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"),i(x,"class","max-lg:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"),i(e,"class",`shadow-lg shadow-cyan-500/10 w-full bg-gradient-to-r ${U()==="en"?"from-teal-500 to-indigo-800":"from-indigo-800 to-teal-500"} border-gray-200 sticky`)},m(M,F){j(M,e,F),s(e,t),s(t,r),s(t,a),s(t,o),s(o,l),s(o,m),J.m(o,null),s(t,_),s(t,D),s(D,$),s($,E),s(E,H),s($,T),s($,I),s(I,g),s(e,p),s(e,x),s(x,y),s(x,V),s(x,k),s(k,R),s(R,N),s(N,le),s(R,ae),s(R,q),s(q,se),s(k,ne),s(k,B),s(k,oe),s(k,P),K.m(P,null)},p(M,[F]){J.p(M,F),K.p(M,F)},i:W,o:W,d(M){M&&c(e),J.d(),K.d()}}}function mt(h,e,t){let r;return Me(h,Ge,n=>t(0,r=n)),[r]}class _t extends de{constructor(e){super(),ue(this,e,mt,pt,ce,{})}}function gt(h){let e,t,r,n,a,o=st()+"",l,v,m,_,D,$,E,S=at()+"",H,T,I,A;return e=new _t({}),I=new dt({}),{c(){ye(e.$$.fragment),t=b(),r=d("div"),n=d("div"),a=d("div"),l=L(o),v=b(),m=d("div"),_=d("img"),$=b(),E=d("div"),H=L(S),T=b(),ye(I.$$.fragment),this.h()},l(g){$e(e.$$.fragment,g),t=w(g),r=u(g,"DIV",{class:!0});var p=f(r);n=u(p,"DIV",{class:!0});var x=f(n);a=u(x,"DIV",{class:!0});var y=f(a);l=z(y,o),y.forEach(c),x.forEach(c),v=w(p),m=u(p,"DIV",{class:!0});var C=f(m);_=u(C,"IMG",{class:!0,src:!0,alt:!0}),$=w(C),E=u(C,"DIV",{class:!0});var V=f(E);H=z(V,S),V.forEach(c),C.forEach(c),T=w(p),$e(I.$$.fragment,p),p.forEach(c),this.h()},h(){i(a,"class","mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit"),i(n,"class","pt-20 w-fit h-fit mx-auto"),i(_,"class","w-20 h-18 mx-auto mt-2"),Ue(_.src,D="/static/Screenshot_2024-01-14_151943-removebg-preview.png")||i(_,"src",D),i(_,"alt",""),i(E,"class","mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit"),i(m,"class","flex items-center pt-5 w-fit h-fit mx-auto"),i(r,"class",je(`w-full h-screen bg-gradient-to-r ${U()==="en"?"from-teal-500 to-indigo-800":"from-indigo-800 to-teal-500"} `)+" svelte-3tdn1r")},m(g,p){Ie(e,g,p),j(g,t,p),j(g,r,p),s(r,n),s(n,a),s(a,l),s(r,v),s(r,m),s(m,_),s(m,$),s(m,E),s(E,H),s(r,T),Ie(I,r,null),A=!0},p:W,i(g){A||(Ee(e.$$.fragment,g),Ee(I.$$.fragment,g),A=!0)},o(g){Ve(e.$$.fragment,g),Ve(I.$$.fragment,g),A=!1},d(g){g&&(c(t),c(r)),De(e,g),De(I)}}}class kt extends de{constructor(e){super(),ue(this,e,null,gt,ce,{})}}export{kt as component};