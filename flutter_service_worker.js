'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "0c324e30437301aa64ec37591ec1a45e",
"/": "0c324e30437301aa64ec37591ec1a45e",
"canvaskit/skwasm_heavy.wasm": "5d7d4249bb9165bd1fcfe02d801f0e5c",
"canvaskit/skwasm.js.symbols": "e00ad292d7142f4e5ed8832aac7a8cdc",
"canvaskit/skwasm_heavy.js": "ff62b0ccde0d87bb610723a5276bfcfc",
"canvaskit/skwasm.js": "bb7f9a4f8e1315e306e274ee39c92280",
"canvaskit/skwasm.wasm": "7859bbbb10484220145487e228e46926",
"canvaskit/canvaskit.js.symbols": "cf652bfcb769d3a1475ef2e681cb296d",
"canvaskit/canvaskit.wasm": "2f053397f614d475e570d44f80653160",
"canvaskit/skwasm_heavy.js.symbols": "ffae643d20705177ab25d85913fe7d3b",
"canvaskit/chromium/canvaskit.js.symbols": "dd0639cede41313568f23adab0d59d69",
"canvaskit/chromium/canvaskit.wasm": "6283f2e30f9fbfea919aea255d69c768",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "404757b2e37a819ca0a382c512dc210c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "415d84eebc658d24590f1467f0577947",
"assets/AssetManifest.bin": "0dd1e0a0ce370326f2a0dd7068e432b1",
"assets/packages/nes_ui/assets/checkered_pattern.png": "7f3e9d7ae73d37c7329ee95d1d54f531",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/fonts/MaterialIcons-Regular.otf": "8067a7201a7fd28b256f948b99f21a0d",
"assets/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/images/enemies/obstacles.png": "c762c55339770aa3508b28aae1469902",
"assets/assets/images/enemies/flying_enemy.png": "d8e5aec679c548a3288c5142908f14a8",
"assets/assets/images/dash/dash_running.png": "1502bd7518a9f338081c485982882a57",
"assets/assets/images/dash/dash_still.png": "37401c44652077551aa263afe26b8ace",
"assets/assets/images/dash/dash_jumping.png": "79cc6c974eb4340c8b0c4a942918077f",
"assets/assets/images/dash/dash_spritesheet.png": "b19986a23e098d656d58b78a6f04c7bb",
"assets/assets/images/dash/dash_falling.png": "afea749d618fe0ee38f191775eede965",
"assets/assets/images/ember.png": "3027f5f0b80b46ee1ae2463f2ab3d1ce",
"assets/assets/images/README.md": "542268c3df538d0ff84c881a2ca8019b",
"assets/assets/images/scenery/clouds.png": "e0dfcc6f83c9e30c3e3594b2595d545e",
"assets/assets/images/scenery/cliffs.png": "d139844482c5e70dfe9ce93ac652c132",
"assets/assets/images/scenery/background.png": "c61d91d268b88b395610c09de1595feb",
"assets/assets/images/scenery/ground.png": "ef0f0c2752ccc83faac10852233e3407",
"assets/assets/images/scenery/trees.png": "7a11e6940b6588d3835dfffb8945aa57",
"assets/assets/images/banner.png": "32f20ea98f8534fb377696aed94f11ea",
"assets/assets/sfx/double_jump1.mp3": "58633df43115de841cf9235fccd64133",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"assets/assets/sfx/hit1.mp3": "52f15e8def2750b4220796d7dd749e18",
"assets/assets/sfx/jump1.mp3": "247686373bffc27c3962702465614ea8",
"assets/assets/sfx/score2.mp3": "f9494ae1fe1a9b78563b386acca66c2c",
"assets/assets/sfx/score1.mp3": "f51ae86826ee34f92514fb8e4b027edc",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/damage1.mp3": "e73bde6e93a3754205a6960f994acf91",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/damage2.mp3": "3ae6d56c2fdff524875df5c956f62012",
"assets/assets/sfx/README.md": "c2318c37838f1811dd8a00d1bd6220a8",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/hit2.mp3": "19e99975f122b67cb5e17bb5e04818da",
"assets/assets/music/free_run.mp3": "c700cf7861e33436a916cdf7e5da4e5b",
"assets/assets/music/bit_forrest.mp3": "f330991a5bd6973c5d1167619319abd0",
"assets/assets/music/CREDITS.TXT": "664b159f17146e56808c4e23d7603f6e",
"assets/assets/music/tropical_fantasy.mp3": "44bdafbd3982d2ba451f225294f56dff",
"assets/AssetManifest.json": "13f7dd413543244e13c37bcd5dc52c32",
"assets/FontManifest.json": "bb088d44ffb0135c622e939192cf0799",
"version.json": "6e8e7538b785d50214aeaa726a85cb98",
"main.dart.js": "d7958be557580fd4212f938f4f87cc64",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "eae065ab96f638aeff1a23608f8b7ae7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2c37d1de730b628b3169b287d966a499"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
