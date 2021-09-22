(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{213:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},241:function(e,t){},250:function(e,t){},268:function(e,t){},270:function(e,t){},289:function(e,t){},290:function(e,t){},358:function(e,t){},360:function(e,t){},370:function(e,t){},372:function(e,t){},397:function(e,t){},399:function(e,t){},400:function(e,t){},405:function(e,t){},407:function(e,t){},420:function(e,t){},432:function(e,t){},435:function(e,t){},440:function(e,t){},448:function(e,t){},523:function(e,t,n){},524:function(e,t,n){},525:function(e,t,n){"use strict";n.r(t);var a,i,r,s,o,u,p,c,l,d,y,b,m,f=n(1),x=n(78),h=n.n(x),j=n(115),g=n(17),T=n(55),O=n(19),w=n.n(O),v=n(63),C=n(62),M=n.n(C),k=n(212),A=n.n(k),_=n(213),S=n(64),E=n(214),I=n(16),N={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},N),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},N),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},e),{},{account:t.payload.account});default:return e}},B={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},B),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},D=Object(S.b)({blockchain:F,data:U}),z=[E.a],L=Object(S.c)(S.a.apply(void 0,z)),R=Object(S.d)(D,L),H=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},P=function(e){return function(){var e=Object(v.a)(w.a.mark((function e(t){var n,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,R.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,R.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,R.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(H("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return{type:"CONNECTION_FAILED",payload:e}},q=function(e){return function(){var t=Object(v.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(P());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=n(18),Q=K.a.div(a||(a=Object(g.a)(["\n  background-color: var(--black);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),J=K.a.div(i||(i=Object(g.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Y=K.a.div(r||(r=Object(g.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=K.a.div(s||(s=Object(g.a)(["\n  height: 24px;\n  width: 24px;\n"]))),G=K.a.div(o||(o=Object(g.a)(["\n  height: 32px;\n  width: 32px;\n"]))),X=K.a.div(u||(u=Object(g.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Z=K.a.p(p||(p=Object(g.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(K.a.p(c||(c=Object(g.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),K.a.p(l||(l=Object(g.a)(["\n  color: var(--white);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),ee=(K.a.div(d||(d=Object(g.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/1.75f03515.png"),te=n(5),ne=K.a.button(y||(y=Object(g.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"]))),ae=K.a.div(b||(b=Object(g.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),ie=K.a.img(m||(m=Object(g.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var re=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.blockchain})),n=Object(T.c)((function(e){return e.data})),a=Object(f.useState)("What Personality will your Bee have?"),i=Object(j.a)(a,2),r=i[0],s=i[1],o=Object(f.useState)(!1),u=Object(j.a)(o,2),p=u[0],c=u[1],l=function(){""!==t.account&&null!==t.smartContract&&e(P(t.account))};return Object(f.useEffect)((function(){l()}),[t.account]),Object(te.jsx)(Q,{style:{backgroundColor:"var(--black)"},children:Object(te.jsxs)(X,{flex:1,ai:"center",style:{padding:12},children:[Object(te.jsx)(Z,{style:{textAlign:"center",fontSize:36,fontWeight:"bold"},children:"The Bee Collaborative NFT Minting Hive"}),Object(te.jsx)(V,{}),Object(te.jsxs)(ae,{flex:1,style:{padding:12},children:[Object(te.jsxs)(X,{flex:1,jc:"center",ai:"center",children:[Object(te.jsx)(ie,{alt:"example",src:ee}),Object(te.jsx)(V,{}),Object(te.jsxs)(Z,{style:{textAlign:"center",fontSize:26,fontWeight:"bold"},children:[n.totalSupply,"/10000"]})]}),Object(te.jsx)(V,{}),Object(te.jsx)(X,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#000000",padding:12},children:1e4==Number(n.totalSupply)?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z,{style:{textAlign:"center"},children:"The sale has ended."}),Object(te.jsx)(Y,{}),Object(te.jsxs)($,{style:{textAlign:"center"},children:["You can still buy and trade TBC NFTs on"," ",Object(te.jsx)("a",{target:"",href:"https://opensea.io/collection/the-bee-collaborative",children:"Opensea.io"})]})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z,{style:{textAlign:"center"},children:"1 Bee NFT costs .02 ETH"}),Object(te.jsx)(J,{}),Object(te.jsx)($,{style:{textAlign:"center"},children:"-excluding gas fee-"}),Object(te.jsx)(G,{}),Object(te.jsx)(Y,{}),Object(te.jsx)($,{style:{textAlign:"center"},children:r}),Object(te.jsx)(V,{}),""===t.account||null===t.smartContract?Object(te.jsxs)(X,{ai:"center",jc:"center",children:[Object(te.jsx)($,{style:{textAlign:"center"}}),Object(te.jsx)(Y,{}),Object(te.jsx)(ne,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(v.a)(w.a.mark((function e(t){var n,a,i,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),n=window,a=n.ethereum,i=a&&a.isMetaMask,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!i){e.next=23;break}return M.a.setProvider(a),r=new A.a(a),e.prev=8,e.next=11,a.request({method:"eth_requestAccounts"});case 11:return s=e.sent,e.next=14,a.request({method:"net_version"});case 14:4==e.sent?(o=new M.a(_,"0x990d8da48b7bc07c4ba8b8f6edd6bf144671dcb3"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:r}}),a.on("accountsChanged",(function(e){t(q(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(W("Change network to Ethereum")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t(W("Something went wrong"));case 21:e.next=24;break;case 23:t(W("Install Metamask"));case 24:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}()),l()},children:"CONNECT WALLET"}),""!==t.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Y,{}),Object(te.jsx)($,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(te.jsx)(X,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(ne,{disabled:p?1:0,onClick:function(n){var a;n.preventDefault(),(a=1)<=0||(s("Preparing your Twee the Bee NFT..."),c(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:"285000",to:"0x688db0131c807a3495c23bc1b25726a76ea31f49",from:t.account,value:t.web3.utils.toWei((.02*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("It seems the transaction was cancelled."),c(!1)})).then((function(n){s("Woohoo! You just helped save the Bees! Visit Opensea.io to view your randomly generated NFT!"),c(!1),e(P(t.account))}))),l()},children:p?"Busy...":"Buy 1 NFT"})})]})})]}),Object(te.jsx)(Y,{}),Object(te.jsxs)(X,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(te.jsx)($,{style:{textAlign:"center",fontSize:18},children:"50% of all proceeds go towards Charity and adding Liquidity to TBC Token"}),Object(te.jsx)(Y,{}),Object(te.jsxs)($,{style:{textAlign:"center",fontSize:14},children:["Bee Rewarded to help Save the Bees #TBCToken",Object(te.jsx)("p",{}),"*.*.*Launching_Soon*.*.*"]})]})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,529)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};n(523),n(524);h.a.render(Object(te.jsx)(T.a,{store:R,children:Object(te.jsx)(re,{})}),document.getElementById("root")),se()}},[[525,1,2]]]);
//# sourceMappingURL=main.8694e8c8.chunk.js.map