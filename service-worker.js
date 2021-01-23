/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "fc2febf491ed5180f346602de6be3b70"
  },
  {
    "url": "api/api/client.html",
    "revision": "86e36561d5a9459df3a1bb95e4c81636"
  },
  {
    "url": "api/api/rest.html",
    "revision": "b1b6eba48fd8c7d1f8c515d6a9804c8b"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "b8745a8663e2531affea04c8a5394491"
  },
  {
    "url": "api/guides/approve-asset-transfer.html",
    "revision": "230052889ab65c0acdc419843e243d5a"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "6cd33b683d4cb794d54e041a93ae9d05"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "af69e933d73840c51de4aebcd442e52d"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "03933ce43d1ab0ffe660c7026b59d3f8"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "a373496de0ec538e21dac286624cb88d"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "4460fd2638e1bf7c122698e2c8783349"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "cf4fb33866bcb6ce1cde2f5f6975e827"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "2ef56c46f7b72b06fe1743dc42a9d6d6"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "1bdba5744f2d422cf10d5ff888cf8356"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "e993faf90e225dc923065993a44b8fa9"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "bd4dda43fc0df8c0fd2da8f2061f1b2b"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "81253ff11024175d8f7d4a3a45292ab3"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "ca6421a1ac799829679ee69e657faded"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "ce6af479617c7f3522aa312aa3340faa"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "b035fda7542c17171b326a44a916b0a5"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "648d8fae3f66902b774dfb36ef75c1c3"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "fd7e07ee0142bb9c83f0993975276cb9"
  },
  {
    "url": "api/index.html",
    "revision": "b17624c87645c2a46b8d2e97d7fa05d8"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "56d107c890eee10e7cb841819dbed753"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "feee0ddc4781f3e581ce7f5a9ff8c0c3"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "4e6b4aba4eb3829485eb2a4ed7be4c9a"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "aaa44db4cade5024501ec7d10b975b15"
  },
  {
    "url": "assets/css/0.styles.d7956b4c.css",
    "revision": "71002a256a855627eae711e3964bf41c"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.4079c082.svg",
    "revision": "4079c08226ab1fce2cdfb44c124eab35"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.952cab5e.js",
    "revision": "695f81d0762b2e351035029e7626f5c0"
  },
  {
    "url": "assets/js/11.64f59fce.js",
    "revision": "4ce4582c77b4a72add8063945b0247ea"
  },
  {
    "url": "assets/js/12.e58e809b.js",
    "revision": "fce034d8acdfaaa8d31b58d90c10858d"
  },
  {
    "url": "assets/js/13.d8765d49.js",
    "revision": "9f32e09ee004c89abb1e81c645d0b01a"
  },
  {
    "url": "assets/js/14.75e0fe85.js",
    "revision": "5e590c3d076fcedd755acc0afad39736"
  },
  {
    "url": "assets/js/15.5dc157cb.js",
    "revision": "30cbed9bac7fec2be8bee6664ee370d0"
  },
  {
    "url": "assets/js/16.0248a4e2.js",
    "revision": "bc72aaa1fd4419af7398ba63d56ad3b2"
  },
  {
    "url": "assets/js/17.c5731ef2.js",
    "revision": "f34f0f3e55848abc6c6e05ca755383db"
  },
  {
    "url": "assets/js/18.75d84776.js",
    "revision": "fcfd7c468a5b7d6c9b6669f490ca7e44"
  },
  {
    "url": "assets/js/19.32c68757.js",
    "revision": "8b9048cf71932a4696e1970d906af192"
  },
  {
    "url": "assets/js/2.cf0f4b8b.js",
    "revision": "f460a2af23f1cfbbd52e0bf9967e82b4"
  },
  {
    "url": "assets/js/20.8024f409.js",
    "revision": "360ad8f6d87e84508bd4c9d13af4ed43"
  },
  {
    "url": "assets/js/21.5fa67964.js",
    "revision": "912cca0268f1089e969da3914bcbf3d4"
  },
  {
    "url": "assets/js/22.73171e48.js",
    "revision": "2b392f8a63f05236d3db5e4c71612d75"
  },
  {
    "url": "assets/js/23.6372b58b.js",
    "revision": "281b2f652d5d8e9dfe15c016b98931bb"
  },
  {
    "url": "assets/js/24.75016e6d.js",
    "revision": "9971fa86c25a9b6eb93861a52519e9b1"
  },
  {
    "url": "assets/js/25.f48616fb.js",
    "revision": "344c67c059d231d88c034d981399c1c4"
  },
  {
    "url": "assets/js/26.bfb315ac.js",
    "revision": "03810df4c775c19dc595e87fdeb0f9e9"
  },
  {
    "url": "assets/js/27.19c3c7f9.js",
    "revision": "9c04b6390cd167cf1a72e71f8958114e"
  },
  {
    "url": "assets/js/28.a7fa3796.js",
    "revision": "28e58933ae77ac12b69d5d385b376afc"
  },
  {
    "url": "assets/js/29.59eeef7d.js",
    "revision": "f9df658902550bec860a34e1f7917f05"
  },
  {
    "url": "assets/js/3.05b3d6f3.js",
    "revision": "b39a1e3478bcf8261601543891da82eb"
  },
  {
    "url": "assets/js/30.37639b56.js",
    "revision": "7adcde9a9c9ec33a4500d87efffac1ec"
  },
  {
    "url": "assets/js/31.bdfaea7e.js",
    "revision": "2adfb0bae624cff5f72cdaee64771ce5"
  },
  {
    "url": "assets/js/32.881593ff.js",
    "revision": "8f10c8f7d58985bc339abb278013a182"
  },
  {
    "url": "assets/js/33.7f609e16.js",
    "revision": "ad7bb2a760f278f063256c48f7a8bbdd"
  },
  {
    "url": "assets/js/34.6238b401.js",
    "revision": "26f1dcb32cff68f96f48942ee813e1d9"
  },
  {
    "url": "assets/js/35.99edb43a.js",
    "revision": "60f97f116db18d8a29c26785e91c57b9"
  },
  {
    "url": "assets/js/36.4c225126.js",
    "revision": "ccba0c0c5fd52c55a2e93eb807a8e2f1"
  },
  {
    "url": "assets/js/37.9278c4f8.js",
    "revision": "0a6fe77b63b5af586cf7c58fbb08f042"
  },
  {
    "url": "assets/js/38.38d1e215.js",
    "revision": "b313280e28d96c6bea579c3dc11ece08"
  },
  {
    "url": "assets/js/39.44f02f60.js",
    "revision": "af3c38be72ca8394d7fcd4a7ec482c78"
  },
  {
    "url": "assets/js/4.75ac3b12.js",
    "revision": "2ce554e8fa2c142820feedf2625f1c46"
  },
  {
    "url": "assets/js/40.6974f065.js",
    "revision": "a2ba7f71332169534bef7c61821d19e9"
  },
  {
    "url": "assets/js/41.8cff6157.js",
    "revision": "cce7f35f006c0e72ae9faf6639c237e9"
  },
  {
    "url": "assets/js/42.1951fb96.js",
    "revision": "6e7f503f1a6f18018233b72e5806b7ab"
  },
  {
    "url": "assets/js/43.666836c3.js",
    "revision": "631cf6989ae3716d3e554e344e1766e7"
  },
  {
    "url": "assets/js/44.90af89a4.js",
    "revision": "11627ad16f56b552f5b98a09151d6a11"
  },
  {
    "url": "assets/js/45.901653d3.js",
    "revision": "2454b5da6d6d59adf0108c97323e11af"
  },
  {
    "url": "assets/js/46.22c2734a.js",
    "revision": "7a704cc8e009324ddb21bd24c3a04371"
  },
  {
    "url": "assets/js/47.3f4507a4.js",
    "revision": "3b334898d6432c94b22f52831956526f"
  },
  {
    "url": "assets/js/48.a423c78a.js",
    "revision": "e942f870b06634413a7ce4fdd09bef3e"
  },
  {
    "url": "assets/js/49.2d86b713.js",
    "revision": "870b21cea0796aeb03d4fbe2b3acc1a5"
  },
  {
    "url": "assets/js/5.36f6fd2c.js",
    "revision": "417868d46de9b7ff9fda1f28e4e344e3"
  },
  {
    "url": "assets/js/50.8b159c85.js",
    "revision": "bbd3530a5fe40862979e1aef0aa1cdde"
  },
  {
    "url": "assets/js/51.e8bb1752.js",
    "revision": "c4123bab3b922db9ca64d7760e961fd4"
  },
  {
    "url": "assets/js/52.459e5d4d.js",
    "revision": "305eac65d0ad56778cdbcf2986eb20bd"
  },
  {
    "url": "assets/js/53.dc8544eb.js",
    "revision": "3bc0effd045229786ea32dd107ff4964"
  },
  {
    "url": "assets/js/54.56ddeb53.js",
    "revision": "3851915969dc22809ac62a9a14bd7fcf"
  },
  {
    "url": "assets/js/55.408881cc.js",
    "revision": "87961484deeb6e80f2d51f6dd96a895e"
  },
  {
    "url": "assets/js/56.c8f52b2f.js",
    "revision": "9905fe501347da01990a1571db2c4a25"
  },
  {
    "url": "assets/js/57.99c5d7fb.js",
    "revision": "adcf049e6dd8b2c9ac86626e3e3e6490"
  },
  {
    "url": "assets/js/58.e6b76c56.js",
    "revision": "a4dd2e99efc42a2f10b3edf492762683"
  },
  {
    "url": "assets/js/59.e49a88ca.js",
    "revision": "35981fb442eff178ab1a3e8a7e74ad83"
  },
  {
    "url": "assets/js/6.edff4e68.js",
    "revision": "9f35b2d4227378c457a6629dfabd644b"
  },
  {
    "url": "assets/js/60.42463428.js",
    "revision": "b9935448cb072b043b0fbfe19b306bc8"
  },
  {
    "url": "assets/js/61.5d60a3eb.js",
    "revision": "733d2d7d1f18094edecf0a378d5f1f09"
  },
  {
    "url": "assets/js/62.eca7f9c5.js",
    "revision": "8a50d83ba405c3e5e3dcd9b001741dd5"
  },
  {
    "url": "assets/js/63.25ba3168.js",
    "revision": "9a74b04debbfba8d3cfa536663bc63cc"
  },
  {
    "url": "assets/js/64.f6e37d15.js",
    "revision": "eebde579aaa2eb6b934499ed64435b41"
  },
  {
    "url": "assets/js/65.43442955.js",
    "revision": "16dacb18da2abb6d4c0622acc552dc2e"
  },
  {
    "url": "assets/js/66.3cb47644.js",
    "revision": "348fdc4854b11c3f5ac735d1191ccc18"
  },
  {
    "url": "assets/js/67.1e492440.js",
    "revision": "5424cd1f28205d8378a885075c1c3553"
  },
  {
    "url": "assets/js/68.2052cf0e.js",
    "revision": "706ce95b59dacb2822a4ec234bc51fea"
  },
  {
    "url": "assets/js/69.a36e8369.js",
    "revision": "e5abf08b8536ba70d96a9e546f5918ab"
  },
  {
    "url": "assets/js/7.ac8cad6a.js",
    "revision": "55514baaebb9cbe4924fc46edebf2fef"
  },
  {
    "url": "assets/js/70.dd265ac3.js",
    "revision": "ad2c5ab40e5e150f2dea520ae1fd9e30"
  },
  {
    "url": "assets/js/71.d1c57263.js",
    "revision": "cf00752e0c36cf51db1e78c78233a5f9"
  },
  {
    "url": "assets/js/72.c8fbd94d.js",
    "revision": "91a6dbadf351402046e2650171b083b7"
  },
  {
    "url": "assets/js/73.b1ed46be.js",
    "revision": "c34e5ada0160624e31e0e7c8c4585135"
  },
  {
    "url": "assets/js/74.c32d0072.js",
    "revision": "14416f2a82bb8ec5d828faacea193568"
  },
  {
    "url": "assets/js/75.ec562c5a.js",
    "revision": "928af3a2e4238a3c424f6cb14fa76572"
  },
  {
    "url": "assets/js/76.37333c2c.js",
    "revision": "2827ccc5e3fde4c0b097c464c71424b2"
  },
  {
    "url": "assets/js/77.a983caf5.js",
    "revision": "9e4f214507c7284d4cf1c25ade06eb19"
  },
  {
    "url": "assets/js/78.637f7e9a.js",
    "revision": "d2b7c7fda6fe8ef1806e3973e5a66323"
  },
  {
    "url": "assets/js/8.2fdc7666.js",
    "revision": "d2bff37153a9a3575b9543f2e3b75012"
  },
  {
    "url": "assets/js/9.d279c6e8.js",
    "revision": "fb2f126f41c1eb478f31d9ec32bff58e"
  },
  {
    "url": "assets/js/app.7d56474b.js",
    "revision": "bf96c2f87009f2e5613c077176aead6b"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "5d08c3260dda7c7bea924de995a1387c"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "72ee0270eb399f825da1e59dd1b34c75"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "8168603e7535e5dc9405dce6d10c4354"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "045eabfd2bf345f309d9ebff689c5be6"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "23cb9dbfc86e5d57d5bd39ba6caf9627"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "e1384f9def210002650dd604f3c60b63"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "16b3fbfbdb9626867cac746c5a2a592b"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "81f17d716dda2042ed393bb56dcb3fd0"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "9cdfa05ec99218e2df17d49c786aa73d"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "879c5db685d4b21d51bb27fdb11a67cd"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "25771b7554a9ce3f7def6bbcb6f8c9c5"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "867a5e8e363bcc24118a2c15a95e2f1d"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "eb3a02090948b6d849293502009fc5a8"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "aac91678d0b192bd26897eaa43045141"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "e6df887ce3dd02b747506733cb475535"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "a4d8609e8ca24abf436b0874fadaa97d"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "9a2618a772696846742e7b5baf477f0c"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "335d1df3af3d063c959d0cfe58fbfbc6"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "e6626a33c6cebdf351f966246a00413c"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "27b71952c165611a1132d06724ee9ecb"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "e8a8968d33e8ac47788e487d8d9c6143"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "92a6b3f1bfe3083989c5b503d910c9ec"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "84855afb03312e28191858a61ce98643"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "ecab50720878fc8087130fec03465401"
  },
  {
    "url": "framework/v2/guides/atomic-approval.html",
    "revision": "7f3c969d51d3140ab97e4456b7d99e5c"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "f93997921b830929afb7c1ff1e177a8e"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "8b20eed8560656e417597154b7f8d693"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "9f82d91e2c47c85cd5089d0278ed6721"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "47caef65f83b67a07018716c524674b6"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "f86e8b9c4d92a68f4c7442e32c652340"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "1f0ef47dbe5f4cf6b7b61b4264234b2e"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "b400726b1ab660f4d8328d47b768c0aa"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "280ea0f719ed7e08ac6ca7cc4a9a7dfc"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "7368571f60db1abc7be09a0c68940c6c"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "8dc2d119cc1585a46da7c25cf64398a3"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "4175b2fc7332b5546ac89fafb97a9976"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "c8ac1b72c1593aceb6914d07e0a52d9c"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "c34568f11a9ce656355c5f84b606b340"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "7cd6521b7a22eca06717457e7a96bf52"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "56f1e6f576c329092fa48bf789987e8a"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "0799226fcac92dbd850488aeda4006e2"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "07b0b12cfa3f4cec97e0b916e8d4e268"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "2adff4535388f860f5f9e4371627b5cf"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "f6ef06b18a7c696b7f5059988fce3e32"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
