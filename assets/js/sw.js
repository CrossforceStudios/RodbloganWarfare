if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const f=e=>c(e,r),o={module:{uri:r},exports:d,require:f};s[r]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(i(...e),d)))}}define(["./workbox-7ccfef04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_config.yml",revision:"7a1d513c9c1987869c1ffc439b45bfaa"},{url:"_data/settings.yml",revision:"f03c669e7f5618ed2c63cd478b0a20a5"},{url:"_includes/disqus.html",revision:"9db8b9607d2adbee9b18be9c82d28ade"},{url:"_includes/footer.html",revision:"d3335330b0250d6016af11c6505fe3c7"},{url:"_includes/google-analytics.html",revision:"d4eb6c7077d6e21f7f45d1bbf545c417"},{url:"_includes/head.html",revision:"7ecf51932a44b1a8033bbacf97cbd711"},{url:"_includes/header.html",revision:"ca687f8886f757ca8cc07a94b6280ef3"},{url:"_includes/menu.html",revision:"ef62b4e8f0dd87424f72cf12f3e768b5"},{url:"_includes/post-date.html",revision:"0402163038a2d309840e950974f02625"},{url:"_includes/read-time.html",revision:"fbcd2a3118ebc70003f5b9c461d18ecf"},{url:"_includes/related-posts.html",revision:"173fb256827c15e37782c4ef312a63e5"},{url:"_includes/social-icons.html",revision:"1f7c7a246339f5618039e14b181d68fc"},{url:"_includes/social-sharing.html",revision:"ee6d0aac3b9aa1f1efb17b9f4e6278a7"},{url:"_layouts/archive.html",revision:"3c183e83d6e70eb0126f9b1cb3b77b19"},{url:"_layouts/default.html",revision:"6618d2924c850ec0ccbb8d2ccca54909"},{url:"_layouts/home.html",revision:"af8ad924dab4b1f93bddf384b8222a3a"},{url:"_layouts/page.html",revision:"6cb5db0e7754612663cd422a582f02e2"},{url:"_layouts/post.html",revision:"336b4c1c465eed1c5c8981cfdca192bf"},{url:"_posts/2021-5-21-changelog-1.md",revision:"53764fad72e1438d4b03b88e0268c22e"},{url:"_posts/2021-5-30-changelog-2.md",revision:"76c9e8868ed5e71ef0f34a28a6881e24"},{url:"_posts/2021-8-30-changelog-3.md",revision:"ee89c67e62d505e7f6caaec6ad44c461"},{url:"_posts/2021-9-19-changelog-4.md",revision:"bc4416d101217482eb7d601a0b7e2ef9"},{url:"_posts/2022-1-12-changelog-5.md",revision:"2f2f030d5a9f10eaa8142f3565926659"},{url:"_posts/2022-10-31-changelog-10.md",revision:"e697d36b4482c66209d02c78401372f5"},{url:"_posts/2022-12-20-changelog-11.md",revision:"3e921a0e527ce652efdd3da579e1a432"},{url:"_posts/2022-2-4-changelog-6.md",revision:"a1933d1d20f0481da4b2904962780c70"},{url:"_posts/2022-5-13-changelog-7.md",revision:"94bd8a93a43164cf882c17e8030ddf75"},{url:"_posts/2022-6-15-changelog-8.md",revision:"c40cebfab3b55d5dc76eb4eb029608f9"},{url:"_posts/2022-8-31-changelog-9.md",revision:"d36631d0fbf05fd591afba7561874a07"},{url:"_posts/2023-1-31-changelog-12.md",revision:"a14551a29620e7d08811867dd58cdbc0"},{url:"_posts/2023-11-3-theme-song.md",revision:"a6816ca604d6fc0b745cff86c654ca42"},{url:"_posts/2023-3-30-changelog-13.md",revision:"b73a95b6e1115a60c6f8edf8171d6aae"},{url:"_posts/2023-4-24-changelog-14.md",revision:"bae5ae2e8f61113510e9891fb1e1726b"},{url:"_posts/2023-6-1-changelog-15.md",revision:"50163e889f6483df1dd1cd184607ced9"},{url:"_posts/2023-7-1-changelog-16.md",revision:"c0ac66c7660e160a88a3005f1380df03"},{url:"_posts/2023-8-25-changelog-17.md",revision:"30fd52a0107abb2d0b597a5d05f65b3e"},{url:"_sass/_-sections-dir.scss",revision:"8662f13267323c38b913b4d6b0225d05"},{url:"_sass/_base.scss",revision:"9e95214dce1a1f13ab27560cde4d2545"},{url:"_sass/_code.scss",revision:"d94879f4cc59300ccb6fe3f4a4a58ce4"},{url:"_sass/_default.scss",revision:"b69bda64307707fe637d86d8e26eea81"},{url:"_sass/_home.scss",revision:"01b2e340e8529b000bf5ffe9c96368c1"},{url:"_sass/_post.scss",revision:"9cd16c33d956951ed3c9fa2023fe1170"},{url:"_sass/_social-icons.scss",revision:"8e30f6f5dc634bd51a845b7191e08057"},{url:"404.html",revision:"461f6511b2568f928aebda70874609f9"},{url:"assets/css/cirrus/cirrus-all.css",revision:"22bb9cca625773a328450c8d361b1af5"},{url:"assets/css/cirrus/cirrus-all.min.css",revision:"80e893c0196630bf929c2a54bb3902ed"},{url:"assets/css/cirrus/cirrus-core.css",revision:"49348c5251d99ed43faa12886ed78ef4"},{url:"assets/css/cirrus/cirrus-core.min.css",revision:"4ac71ecd7a1dd913dbd7d1ac0597ff2c"},{url:"assets/css/cirrus/cirrus.css",revision:"bdbe2546211c84839c407efe2b3da647"},{url:"assets/css/cirrus/cirrus.min.css",revision:"da47a7d81efa7802c281a8e9a2c50e8d"},{url:"assets/css/main.scss",revision:"0bb72c3c6fb1a06253692a0c05f8b559"},{url:"assets/css/syntax.css",revision:"a6277492daf6bf271a6053d17bf68c5e"},{url:"assets/img/aug-2021.png",revision:"792fbb43a3c3ca02d58e6b49c55c6f3c"},{url:"assets/img/aug-2022.png",revision:"8618014868210b711e58ee55c80140aa"},{url:"assets/img/cards.jpg",revision:"a1555103756c2a89c46eab4b1f82f8ee"},{url:"assets/img/cutting.jpg",revision:"cdd2da20f995033d7f7d37d44e0d9ce0"},{url:"assets/img/forest.jpg",revision:"e81511c8fb6bb010c32b5ba005263996"},{url:"assets/img/hero-img.png",revision:"e665b5db6e7f0a85597dac4ef33fa67a"},{url:"assets/img/mountains.jpg",revision:"419a64164a8ae0df0ffdd50e5126f4f3"},{url:"assets/img/spools.jpg",revision:"883622b723e4608bf6e0400c2dcc1e6f"},{url:"favicon.ico",revision:"7c8a7967a856a0aed774c5500b6f6884"},{url:"index.html",revision:"efbd4f37f6f5ce6a3f2a615fa6418fc9"},{url:"lagrange.gemspec",revision:"1ba38e47dcc96a1ce08af918f01161b3"},{url:"LICENSE.md",revision:"9d33a2e2372fc9d6e864794938f8eae9"},{url:"manifest.webmanifest",revision:"a9d4e9d2f88b693d48bc3e27516d2d1a"},{url:"README.md",revision:"4e9a9846f9daeefa2b22b27253fc0c99"},{url:"rss-feed.xml",revision:"783a5924d971dae7b91cd1c75bdf848b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map