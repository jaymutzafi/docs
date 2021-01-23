(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{320:function(t,a,e){"use strict";e.r(a);var s=e(32),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"value-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value-management"}},[t._v("#")]),t._v(" Value Management")]),t._v(" "),e("p",[t._v("A value is a representation of a cryptocurrency. It is compliant with the "),e("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-20")]),t._v(" standard for fungible tokens on the Ethereum blockchain. If you would like to operate with ZXC tokens, you would encapsulate that as a value.")]),t._v(" "),e("p",[t._v("When we talk about currency, we talk about value. A value is stored in the structure of a storage called Value Ledger. A Value ledger on the Ethereum blockchain represents a smart contract that complies with the ERC-20 standard. The 0xcert Framework follows this standard and adds some additional functions visible in the "),e("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section.")],1),t._v(" "),e("div",{staticClass:"card custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Learn by example")]),t._v(" "),e("p",[t._v("Click "),e("a",{attrs:{href:"https://stackblitz.com/edit/value-management-example",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section.")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("We recommend you employ the package as an NPM package in your application.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @0xcert/ethereum-value-ledger\n")])])]),e("p",[t._v("On our official "),e("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("GitHub repository")]),t._v(", we also host a compiled and minimized JavaScript file that can be directly implemented in your website. Please refer to the "),e("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section to learn more about value ledger.")],1),t._v(" "),e("h2",{attrs:{id:"usage-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),e("p",[t._v("As usual, we begin by importing the module.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ValueLedger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/ethereum-value-ledger'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Let's first deploy a new value ledger to the Ethereum blockchain.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ValueLedger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Utility token'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("symbol")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTT'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    decimals"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'500000000000000000000000000'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 500 mio")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valueLedgerId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receiverId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Now that we have created a new value ledger on the network, we can load its instance.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valueLedger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ValueLedger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valueLedgerId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("First, let's read the ledger data.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" valueLedgerInfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" valueLedger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> { name, ... }")]),t._v("\n")])])]),e("p",[t._v("Because we are the ones who deploy the value ledger on the network, we automatically own the whole ledger value supply. In our account, we therefore have the total value of the value ledger, freely available for managing.")]),t._v(" "),e("p",[t._v("First, we make sure that we have two MetaMask accounts open. The example below shows how to transfer a value of "),e("code",[t._v("100")]),t._v(" to the account with "),e("code",[t._v("0x")]),t._v(" ID (change this ID to the address of your second Ethereum wallet).")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" valueLedger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    receiverId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100000000000000000000'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Finally, verify whether the amount has indeed been transferred to the new wallet.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" balance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" valueLedger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 100000000000000000000")]),t._v("\n")])])]),e("p",[t._v("For more details, please refer to the "),e("RouterLink",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section.")],1),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("We have now gained a clear understanding of assets and values. Next, we proceed to "),e("RouterLink",{attrs:{to:"/guide/atomic-orders.html"}},[t._v("swapping them among owners in a decentralized manner")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);