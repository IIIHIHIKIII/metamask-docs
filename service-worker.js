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
    "url": "404.html",
    "revision": "ed238cb83f0a907f73c9d7f2694f0f7f"
  },
  {
    "url": "assets/css/0.styles.136e0e71.css",
    "revision": "cf5a8f9622999aeee52cd1d33da709c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b5c3295.js",
    "revision": "667a0a2fa26dda73128c3f8374fe6f93"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.134edf91.js",
    "revision": "6831c5b8d341f31f544caad3493b5006"
  },
  {
    "url": "assets/js/13.3f1cd67b.js",
    "revision": "80703b91e70faaa5a909b2851feff5e7"
  },
  {
    "url": "assets/js/14.b8a0ac1d.js",
    "revision": "f62ea58682faed905d073266e9ef754b"
  },
  {
    "url": "assets/js/15.3c543bab.js",
    "revision": "d9c8c7778e4806940c7ca19c92691fb0"
  },
  {
    "url": "assets/js/16.9012ef23.js",
    "revision": "b9425e77a79897e81a8063a3d5d21c48"
  },
  {
    "url": "assets/js/17.3a3d433c.js",
    "revision": "b2686ea7eb6f0696d38567147b9ab5c9"
  },
  {
    "url": "assets/js/18.c7a5d970.js",
    "revision": "843350a3a3adf1576fee7a90db434dad"
  },
  {
    "url": "assets/js/19.63413caa.js",
    "revision": "b7ec7484b16d31ca4d987da6dbde1ddf"
  },
  {
    "url": "assets/js/20.f786e3ff.js",
    "revision": "5d1902c026a5f4252f9e5796bc2d055f"
  },
  {
    "url": "assets/js/21.aa06821b.js",
    "revision": "96f633ae09af3b40a8183fe88e787fbe"
  },
  {
    "url": "assets/js/22.e0b0246a.js",
    "revision": "137d09addf56fe9ec077727cc0ab6664"
  },
  {
    "url": "assets/js/23.b731f2c5.js",
    "revision": "0062aa0b54aa28bad51bf1d7ce37694b"
  },
  {
    "url": "assets/js/24.5ec8dbbc.js",
    "revision": "6c4c555da120fe1a6df872c181d86418"
  },
  {
    "url": "assets/js/25.70a17f7e.js",
    "revision": "6eeafbb7b70e85a02d63f2cbd9d97267"
  },
  {
    "url": "assets/js/26.0fb6b2a9.js",
    "revision": "2f3ea04b8e14e4de5530054820d34c01"
  },
  {
    "url": "assets/js/27.69c7357f.js",
    "revision": "6e8be5c960783b7cf61b2e7e93cb24e2"
  },
  {
    "url": "assets/js/28.7020bcc0.js",
    "revision": "81bcf4249896afbb92e323776f8a6a6c"
  },
  {
    "url": "assets/js/29.85eb6db7.js",
    "revision": "37097a8006bd87414abfa415751cc644"
  },
  {
    "url": "assets/js/3.706dd5d3.js",
    "revision": "588ca0e5b6a3884b4dfd3c42c7e27194"
  },
  {
    "url": "assets/js/30.e58c5899.js",
    "revision": "7eb22d9a88c9bce3f22b608599091934"
  },
  {
    "url": "assets/js/4.7d38fd43.js",
    "revision": "a1e282d8a6dd8282d2ed841ffc43ef30"
  },
  {
    "url": "assets/js/5.a9f95618.js",
    "revision": "6037c33f7a7cc47c3e1dc811ed3c813c"
  },
  {
    "url": "assets/js/6.df9aa455.js",
    "revision": "394aa6c73de49d83fda7660f9d7a731b"
  },
  {
    "url": "assets/js/7.53c339ea.js",
    "revision": "96684965052e84ef43e38e2d4de24d73"
  },
  {
    "url": "assets/js/8.dfd83fe9.js",
    "revision": "7a2bcf6742375d383cf2d0c83fc2cabf"
  },
  {
    "url": "assets/js/9.f64036f1.js",
    "revision": "424a0dcb1019f027650fc057a4fbd5ac"
  },
  {
    "url": "assets/js/app.aaaa8204.js",
    "revision": "0e9d63a7f782067fe0ab9a7e5565ef08"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "7d904eabaa46222153f5847ce0c6236c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "626f463cf803242ddf08a3f2404ab26c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "aed334968b8a9af0c7b4cbb85a97920f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "06d346427633d327184d02700b9b371d"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "d9b3032eacf6fd214fbfe329aa08685a"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "a9f7600417480945a6beba4e5a63dedf"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "616e293fbaba6045fb9143fd1577a8f3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "65f7d88d334876d6a64f19ab55f7b7f3"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "93c9692ff829d9bbc588ad325ad9b6a1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "38683d0acca304166f750e25599083cc"
  },
  {
    "url": "guide/index.html",
    "revision": "99aa95a1f4e1c58b4ea999f4e186ebe5"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "44f01b3d7a13f3e4f64e65b1f668ddd1"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7d2d02ae82e7c2f6900f1c2f208ad6ab"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "771427b04387133b4006203e1031d24d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fbb7b5a2445128d3944aa3cd8660dd6c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b179670b1621daebfe6078d6511f4cfe"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "84c3bc88a529e5ca94f2d0b7290f1495"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "db916e87633da0bd1d8d6738bfbf0327"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "bae26fba2b5ce02634d42cf59985fcea"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "cbf24f66725a1a3f741248b510a80b98"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "36058e5815e951e0bb357c0595e56274"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
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
