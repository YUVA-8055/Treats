'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7926d0dc7b4825dfd0b63581db35a781",
"assets/AssetManifest.json": "2176e0baf84fd4ab298c3b8254bbeda4",
"assets/assets/font/static/DancingScript-Bold.ttf": "a3fc746619e755e853818ee67924ebbe",
"assets/assets/font/static/DancingScript-Medium.ttf": "d903e1aee8365007ae713e8a32e31a6a",
"assets/assets/font/static/DancingScript-Regular.ttf": "4878c050aa42659a505ce45884f008f8",
"assets/assets/font/static/DancingScript-SemiBold.ttf": "7a221ed294fb3ebcfc999bb6b68c32b7",
"assets/assets/images/cakes/black%2520forest.png": "8c470aa847000c9c53ece7d06b2353ac",
"assets/assets/images/cakes/blue%2520berry%2520cake.png": "f71695eb5304dd96d397cf9964dea6b1",
"assets/assets/images/cakes/chocolate%2520cake.png": "36ee54e4ce13537a1823e32de258811c",
"assets/assets/images/cakes/golden%2520cake.png": "167f48edb169812d0f7b18e442b7dc1e",
"assets/assets/images/cakes/logo.png": "63dbc2e78ac0063c365bb6bfde46caf9",
"assets/assets/images/cakes/red%2520velvet.png": "816c776ed0a8954255d0683fb78e74c6",
"assets/assets/images/cakes/strawberry%2520cake.png": "3e26d032b422b1d3fe6a785c3c65bdc5",
"assets/assets/images/cakes/vanilla%2520cake.png": "eda4377722e260977806bc5e0d47ebd9",
"assets/assets/images/cakes/white%2520cake.png": "e81a6cc4feba2a1da4ab8e738f842dd6",
"assets/assets/images/pasteries/bs.png": "5561e858cb373fb8c81472ff8e978b51",
"assets/assets/images/pasteries/cp.png": "cb31449f16dd872e91bef1de68662d05",
"assets/assets/images/pasteries/sp.png": "7772f0322e6f260c8896b9d125b74a11",
"assets/assets/images/pasteries/vp.png": "a924f361e47fb2044eabc578b923d13a",
"assets/assets/images/snacks/bc.png": "3c6490f69ce69f31c325884e327f5d22",
"assets/assets/images/snacks/pc.png": "259af9859a7a840ac3c6e6f7abb6eda9",
"assets/assets/images/snacks/samosa.png": "83e4640827ef933a49411d11402f6833",
"assets/assets/images/snacks/sev.png": "0ae058920c54632e422209afa2ab9a4c",
"assets/assets/images/sweets/barfi.png": "0e7fa3e4a95e08aa1e1b849af2abb043",
"assets/assets/images/sweets/gj.png": "1e138bdd45f2cc855218a9e43cbd7b49",
"assets/assets/images/sweets/jalebi.png": "5027cc1bafacbb8c9650062383d4f717",
"assets/assets/images/sweets/rasgulla.png": "2ff6ed007c9229b45091fbe245ce780e",
"assets/assets/images/sweets/rm.png": "1ba668a41dfede7508281362854500bd",
"assets/assets/svg/cakesvg.svg": "0f0b997149c02873015d1d12343b65e3",
"assets/assets/svg/pastrysvg.svg": "bdbb79a3418379d7091a5e2ac614ff54",
"assets/assets/svg/snacks.svg": "f9b5d1586fc1cb719453fafaa5379b3b",
"assets/assets/svg/sweetsvg.svg": "5dd21a9b0ac3a24df15790898e2a7449",
"assets/assets/svg/treats%2520logo.svg": "f80f028429e1f961c42c0cd968e278ce",
"assets/FontManifest.json": "25e4271f7f702fbc409bb9edd97744b0",
"assets/fonts/MaterialIcons-Regular.otf": "50b14009a693236b2a6d13b4133b5a02",
"assets/NOTICES": "c9b00d8e1d16b0f25248e980d3b7863c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90694d092ddc07aee8b22ac897f9540c",
"/": "90694d092ddc07aee8b22ac897f9540c",
"main.dart.js": "e5238d8f7d081add48210b0a2b54f619",
"manifest.json": "6123806e0215767065fcdf80f681c5ce",
"version.json": "e43134f7ab03dc9a43a9dd18c2cfbee1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
