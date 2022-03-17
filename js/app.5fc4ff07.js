(()=>{"use strict";var e={5979:(e,t,r)=>{r(5363),r(71);var a=r(8880),o=r(9592),s=r(3673);function n(e,t,r,a,o,n){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var i=r(7286);const c=(0,s.aZ)({name:"App",mixins:[(0,i.Z)((function(){return{title:"Wikeeb | Keyboard wiki"}}))]});var l=r(4260);const d=(0,l.Z)(c,[["render",n]]),u=d;var p=r(8953),h=r(3340),f=r(9582);const y=[{name:"home",path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(624)]).then(r.bind(r,4624)),children:[{name:"explore",path:"",component:()=>Promise.all([r.e(736),r.e(871)]).then(r.bind(r,2871))},{name:"keyboards",path:"/keyboards",component:()=>Promise.all([r.e(736),r.e(475)]).then(r.bind(r,3475))},{name:"keycaps",path:"/keycaps",component:()=>Promise.all([r.e(736),r.e(64),r.e(811)]).then(r.bind(r,5529))},{name:"keycaps-details",path:"/keycaps/:id",component:()=>Promise.all([r.e(736),r.e(64),r.e(41)]).then(r.bind(r,5041))},{name:"login",path:"/login",component:()=>Promise.all([r.e(736),r.e(996)]).then(r.bind(r,2996))},{name:"register",path:"/register",component:()=>Promise.all([r.e(736),r.e(380)]).then(r.bind(r,1380))},{name:"private",path:"/private",component:()=>Promise.all([r.e(736),r.e(582)]).then(r.bind(r,6582)),meta:{requiresAuth:!0}},{name:"favorite-keycaps",path:"/favorite-keycaps",component:()=>Promise.all([r.e(736),r.e(64),r.e(192)]).then(r.bind(r,7990)),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(400)]).then(r.bind(r,2400))}],m=y;var g=r(2396);const v=(0,h.BC)((function({store:e}){const t=f.PO,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("/")});return r.beforeEach((async(t,r,a)=>{const{ensureAuthIsInitialized:o,isAuthenticated:s}=g.Z;await o(e);try{t.matched.some((e=>e.meta.requiresAuth))?s(e)?a():a("/"):a()}catch(n){console.log(n),a()}})),r}));async function b(e,t){const a="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,8953)),n="function"===typeof v?await v({store:a}):v;a.$router=n;const i=e(u);return i.use(o.Z,t),{app:i,store:a,storeKey:s,router:n}}var K=r(6249),w=r(6417),k=r(4379),Z=r(6443);const A={config:{brand:{primary:"#BD93F9",secondary:"#42CFCF",accent:"#9C27B0",dark:"#1B1B1B",positive:"hsl(153, 53%, 53%)",negative:"hsl(348, 86%, 61%)",info:"hsl(207, 61%, 53%)",warning:"hsl(14, 100%, 53%)","dark-page":"#161616"}},plugins:{Loading:K.Z,Notify:w.Z,Dialog:k.Z,Meta:Z.ZP}},U="/";async function F({app:e,router:t,store:r,storeKey:a},o){let s=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},c=window.location.href.replace(window.location.origin,"");for(let d=0;!1===s&&d<o.length;d++)try{await o[d]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:c,publicPath:U})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==s&&(e.use(t),e.use(r,a),e.mount("#q-app"))}b(a.ri,A).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2490)),Promise.resolve().then(r.bind(r,9979)),Promise.resolve().then(r.bind(r,7560))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));F(e,r)}))))},9979:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(3340),o=r(9058);const s=(0,a.xr)((async()=>{o.Z.set(!0)}))},2490:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(3340),o=r(2396);const s=(0,a.xr)((async({app:e,router:t,store:r,Vue:a})=>{o.Z.fBInit({apiKey:"AIzaSyDyysto8thfS59V4sFwCdQlj9TvMwgT2ZA",authDomain:"dev-wikeeb.firebaseapp.com",projectId:"dev-wikeeb",storageBucket:"dev-wikeeb.appspot.com",messagingSenderId:"754337739134",appId:"1:754337739134:web:06e4fb61756c480ad8832f"}),o.Z.auth().onAuthStateChanged((e=>{o.Z.handleOnAuthStateChanged(r,e)}),(e=>{console.error(e)})),r.$fb=o.Z}))},7560:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(3340);r(2396);const o=(0,a.xr)((async({app:e,router:t,store:r,Vue:a})=>{r.dispatch("getInitalKeycapsFromDB")}))},2396:(e,t,r)=>{r.d(t,{Z:()=>S});var a={};r.r(a),r.d(a,{auth:()=>c,db:()=>l,fBInit:()=>d});var o={};r.r(o),r.d(o,{createUserWithEmail:()=>u,ensureAuthIsInitialized:()=>g,handleOnAuthStateChanged:()=>m,isAuthenticated:()=>y,logOut:()=>f,loginWithEmail:()=>p,registerUser:()=>h,resetPassword:()=>v});var s={};r.r(s),r.d(s,{addFavoriteKeycapsToUser:()=>F,addUserData:()=>b,docRef:()=>I,getBeginningOfCollection:()=>Z,getCollection:()=>K,getFilteredItemsOfCollection:()=>U,getListFromCollection:()=>P,getNextItemsOfCollection:()=>A,pushItemToCollection:()=>w,removeFavoriteKeycapsToUser:()=>C,storageRef:()=>O,updateItemOnCollection:()=>k});var n={};r.r(n),r.d(n,{getURLRessource:()=>T,putImageToStorage:()=>E});var i=r(5720);r(4479);const c=()=>i.Z.auth(),l=()=>i.Z.firestore(),d=e=>i.Z.initializeApp(e);r(6701);const u=async(e,t)=>i.Z.auth().createUserWithEmailAndPassword(e,t),p=(e,t)=>i.Z.auth().signInWithEmailAndPassword(e,t),h=(e,t)=>i.Z.auth().createUserWithEmailAndPassword(e,t),f=()=>i.Z.auth().signOut(),y=e=>e.state.auth.isAuthenticated,m=async(e,t)=>{e.commit("setAuthState",null!==t),t&&(e.commit("setUserToken",t),await e.dispatch("bindCurrentUser",t.uid))},g=async e=>!!e.state.auth.isReady||new Promise(((e,t)=>{const r=i.Z.auth().onAuthStateChanged((t=>{e(),r()}),(()=>{t(new Error("Looks like there is a problem with the firebase service. Please try again later"))}))})),v=e=>i.Z.auth().sendPasswordResetEmail(e);r(71),r(8043);const b=async(e,t,r)=>i.Z.firestore().collection("users").doc(e).set({name:t,email:r,favoritesKeycaps:[]}),K=async e=>i.Z.firestore().collection(e).get(),w=async(e,t)=>i.Z.firestore().collection(e).add(t),k=async(e,t,r)=>i.Z.firestore().collection(e).doc(t).update(r),Z=async(e,t=15)=>i.Z.firestore().collection(e).orderBy(i.Z.firestore.FieldPath.documentId()).limit(t).get(),A=async(e,t,r=5)=>{if(t)return i.Z.firestore().collection(e).orderBy(i.Z.firestore.FieldPath.documentId()).startAfter(t).limit(r).get()},U=async(e,t)=>{let r=i.Z.firestore().collection(e);for(const o in t){var a;(null===(a=t[o])||void 0===a?void 0:a.length)>0&&(console.log(t[o]),r=r.where(o,"==",t[o]))}return r.get()},F=async(e,t)=>i.Z.firestore().collection("users").doc(e).update({favoritesKeycaps:i.Z.firestore.FieldValue.arrayUnion(t)}),P=async(e,t)=>{const r=[];for(const a of t)i.Z.firestore().collection(e).doc(a).get().then((e=>{let t=e.data();t.id=e.id,r.push(t)}));return r},C=async(e,t)=>i.Z.firestore().collection("users").doc(e).update({favoritesKeycaps:i.Z.firestore.FieldValue.arrayRemove(t)}),I=(e,t)=>i.Z.firestore().collection(e).doc(t),O=e=>i.Z.storage().ref(e);r(1271);const T=async e=>i.Z.storage().ref(e).getDownloadURL(),E=async(e,t)=>i.Z.storage().ref().child(e).put(t),S=Object.assign({},a,o,s,n)},8953:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(3340),o=r(7874);const s={isAuthenticated:!1,uid:null,isReady:!1},n={getAuthStatus:e=>e.isAuthenticated,getUserUID:e=>e.uid},i={async loginUser({commit:e},t){const r=this.$fb,{email:a,password:o}=t;return new Promise((t=>{r.loginWithEmail(a,o).then((r=>{e("setAuthState",null!==r),e("setUserToken",r),console.log("Successfully logged in"),t("/private")})).catch((e=>{console.error(e),t("/")}))}))},async registerUser({commit:e},t){const r=this.$fb,{name:a,email:o,password:s}=t;return new Promise((e=>{r.registerUser(o,s).then((t=>r.addUserData(t.user.uid,a,o).then((()=>{console.log("Account successfully added"),this.loginUser({email:o,password:s}).then((()=>e("/private"))).catch((()=>e("/")))})))).catch((t=>{e("/"),console.error(t)}))}))},async logoutUser({commit:e}){const t=this.$fb;t.logOut().then((t=>{e("destroyUser"),console.log(t)})).catch((e=>{console.log(e)}))}},c={setAuthState(e,t){e.isAuthenticated=t,e.isReady=t},setUserToken(e,t){e.uid=t.uid},destroyUser(e){e.isAuthenticated=!1,e.uid=""}},l={state:s,getters:n,actions:i,mutations:c},d={allKeycaps:[],filteredKeycaps:[],lastKeycapsId:null},u={getAllKeycaps:e=>e.allKeycaps,getLastKeycaps:e=>e.lastKeycapsId,getFavoriteKeycaps:(e,t)=>e.allKeycaps.filter((e=>t.getFavoritesKeycaps.includes(e.id))),getFilteredKeycaps:e=>e.filteredKeycaps,getKeycapsById:e=>t=>e.allKeycaps.filter((e=>e.id==t))[0]},p={async getKeycapsFromDB({commit:e}){const t=this.$fb;e("resetKeycaps"),t.getCollection("keycaps").then((t=>{t.forEach((t=>{const r={id:t.id,data:t.data()};e("addKeycaps",r)}))}))},async getInitalKeycapsFromDB({commit:e}){e("resetKeycaps"),this.$fb.getBeginningOfCollection("keycaps").then((t=>{const r=null===t||void 0===t?void 0:t.docs.length;r>2&&(t.forEach((t=>{const r={id:t.id,data:t.data()};e("addKeycaps",r)})),e("setLastKeycapsVisible",t.docs[r-1].id))}))},async getNextKeycapsFromDB({commit:e,getters:t}){this.$fb.getNextItemsOfCollection("keycaps",t.getLastKeycaps).then((t=>{const r=null===t||void 0===t?void 0:t.docs.length;r>2&&(t.forEach((t=>{const r={id:t.id,data:t.data()};e("addKeycaps",r)})),e("setLastKeycapsVisible",t.docs[r-1].id))}))},async fetchFilteredKeycaps({commit:e},t){e("resetFilteredKeycaps"),this.$fb.getFilteredItemsOfCollection("keycaps",t).then((t=>{const r=null===t||void 0===t?void 0:t.docs.length;r>0&&t.forEach((t=>{const r={id:t.id,data:t.data()};e("addFilteredKeycaps",r)}))}))}},h={addKeycaps(e,t){t.data.id=t.id,e.allKeycaps.push(t.data)},addFilteredKeycaps(e,t){t.data.id=t.id,e.filteredKeycaps.push(t.data)},resetKeycaps(e){e.allKeycaps=[]},resetFilteredKeycaps(e){e.filteredKeycaps=[]},setLastKeycapsVisible(e,t){e.lastKeycapsId=t}},f={state:d,getters:u,actions:p,mutations:h};var y=r(8679),m=r(2396);const g={currentUser:{favoritesKeycaps:[]}},v={getFavoritesKeycaps:e=>e.currentUser.favoritesKeycaps,getAdminStatus:e=>e.currentUser.admin},b={async addKeycapsToFavorties({commit:e,state:t},r){const a=this.$fb,{keycapsUID:o,userUID:s}=r;t.currentUser.favoritesKeycaps.includes(o)?a.removeFavoriteKeycapsToUser(t.currentUser.id,o).then((()=>{e("removeKeycapToFavorite",o),console.log("rempve from your favorites")})):a.addFavoriteKeycapsToUser(t.currentUser.id,o).then((()=>{e("addKeycapToFavorite",o),console.log("add to your favorites")}))},bindCurrentUser:(0,y.ye)((({bindFirestoreRef:e},t)=>e("currentUser",m.Z.docRef("users",t))))},K={addKeycapToFavorite(e,t){e.currentUser.favoritesKeycaps.push(t)},removeKeycapToFavorite(e,t){e.currentUser.favoritesKeycaps=e.currentUser.favoritesKeycaps.filter((e=>e!=t))},setFavoritesKeycaps(e,t){e.currentUser.favoritesKeycaps=t}},w={state:g,getters:v,actions:b,mutations:K},k=(0,a.h)((function(){const e=(0,o.MT)({modules:{auth:l,keycaps:f,user:w},mutations:{...y.nk},strict:!1});return e}))}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,s)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){for(var[a,o,s]=e[d],i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,o,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{41:"6c2314cf",64:"3dd62e3e",192:"2d842324",380:"d3ceaaa5",400:"8cf34732",475:"2429add2",582:"a1d8a1ab",624:"6bd2538d",811:"834e9b28",871:"1ebd78be",996:"26a2e173"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{41:"b68701a4",143:"dc9fff7e",192:"3f8276d6",624:"4b346ab9",736:"4e028819",811:"3f8276d6"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="wikeeb:";r.l=(a,o,s,n)=>{if(e[a])e[a].push(o);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[o];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=s=>{if(o.onerror=o.onload=null,"load"===s.type)r();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],s=o.getAttribute("data-href");if(s===e||s===t)return o}},a=a=>new Promise(((o,s)=>{var n=r.miniCssF(a),i=r.p+n;if(t(n,i))return o();e(a,i,o,s)})),o={143:0};r.f.miniCss=(e,t)=>{var r={41:1,192:1,624:1,811:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=s);var n=r.p+r.u(t),i=new Error,c=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};r.l(n,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[n,i,c]=a,l=0;if(n.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var d=c(r)}for(t&&t(a);l<n.length;l++)s=n[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},a=self["webpackChunkwikeeb"]=self["webpackChunkwikeeb"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(5979)));a=r.O(a)})();