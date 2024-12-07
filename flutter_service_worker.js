'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "261f8ab03d380ca3da71af66616e1e7a",
"assets/AssetManifest.bin.json": "3fa3a14c7064fc3285581adbc611f560",
"assets/AssetManifest.json": "6c7590a9af7dedf795bf2b59231f8a74",
"assets/assets/Animation1.json": "9519be7843936f677d6726099d23cb64",
"assets/assets/Animation2.json": "80753fb0ee92db352c6d3cf33e9344cc",
"assets/assets/Animation3.json": "40df36c4a3565a4208f3a79169b0c273",
"assets/assets/backgroun2.jpg": "44d00fb4e3fd5501d551339a3e27744f",
"assets/assets/background.jpg": "8fb1cc469b1a43cdf7109081495a9e68",
"assets/assets/background1.jpg": "b3ace89abea96767b5e122da86c7b615",
"assets/assets/background3.jpg": "4c76cd317aa81adf23babd1c99456b8e",
"assets/assets/endpoint.txt": "23fd1832371621bdef2cb72e52d8f675",
"assets/assets/event.jpg": "3a59cce8e7a08653a1b98d6f7a052a39",
"assets/assets/event.json": "e9621b3603a90c373c33f1ce3f3b71d4",
"assets/assets/event2.jpg": "68dd3b9d417883e2c1aeb81269397905",
"assets/assets/event3%2520(1).jpg": "131ee264ed8a4a3eda642de2adbc9fd0",
"assets/assets/eventplanner1.jpg": "2ed3410fa97d2703386de237daa0fd4e",
"assets/assets/eventplanner2.jpg": "31cbf3d475f57b0cfa2d4a7e62b8fa0a",
"assets/assets/eventplanner3.jpg": "786d07d028a9af9bce25f618dcb80d90",
"assets/assets/food.jpg": "8a2824fff840c1a420a31cf616ed1db9",
"assets/assets/food1.jpg": "4a014c2f6421ab05cc32bf14a887ee2d",
"assets/assets/food3.jpeg": "383fc8d51e40bbac5292b43d0825d1a1",
"assets/assets/group-people-are-working-calendar-with-one-person-sitting-chair_1288601-6514.jpg": "a563e4d2d4b22e770b75317620bef793",
"assets/assets/loading.jpg": "6239c6401069cd4e1f1452765f464c55",
"assets/assets/login.jpg": "131ee264ed8a4a3eda642de2adbc9fd0",
"assets/assets/logon2.jpg": "6f4f32a98f9e5a2d7654b0a0dcdee7a9",
"assets/assets/profile.png": "e0da724278aa6ed3d8e63709635f448c",
"assets/assets/services1.jpg": "3f348fa5ed962f1f466360b662faec93",
"assets/assets/services2.jpg": "9efefb982efd6bd4f49563a4f47da464",
"assets/assets/services3.jpg": "51ca3fdd27bbe567c1dc65692bd475b5",
"assets/assets/services4.jpg": "cfcd87e006f5d49351c601470c599289",
"assets/assets/services5.jpg": "405a6568ee8214002adccf7cbdd81116",
"assets/assets/services6.jpg": "ff140e51ca34fb6eccc885ab1d71b370",
"assets/assets/speaker.jpeg": "f5ecd4183de4c71d03359cf35a0c4612",
"assets/assets/speaker2.jpeg": "8419779392d239a1f69fc961c34ccad8",
"assets/assets/venue.jpg": "f9049db4e2587680579a7ec79e2b4fce",
"assets/assets/venue2.jpg": "438ae288b798c6534d0c338369f7a00f",
"assets/assets/venue3.jpg": "45f8324b60d4c407f5d6a7500889347b",
"assets/assets/venues1.jpg": "caeec6795c49292ae47e91ec5f49e670",
"assets/assets/venues2.jpg": "4ed4abefc25febeaed2de8518352fa0a",
"assets/assets/venues3.jpg": "ed2840baba5daaaf6161b45069f0f490",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "083c3f252803e2aef9cf77ade515b420",
"assets/NOTICES": "e158fcb42ad5ab89ab2250890cfd5af8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "53161b5ec64f3630fde7a7c71fba6ecf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d67b2d6ca3440054b97d99996b0c006b",
"/": "d67b2d6ca3440054b97d99996b0c006b",
"main.dart.js": "190420a67f2dea73b50981c09ea957e2",
"manifest.json": "4dc65e5e0fb3f7b2481652fbd9463dfc",
"version.json": "daf3579fba93022023b30042bf6b7eb8"};
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
