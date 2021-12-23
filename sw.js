CacheName = "stuff"
StorageItems = ['/Build/RYUZAKAI.data.unityweb', 
'/Build/RYUZAKAI.json',
'/Build/RYUZAKAI.wasm.code.unityweb',
'/Build/RYUZAKAI.wasm.framework.unityweb',
'/Build/UnityLoader.js',
'/imgs/FlappyLogo.png',
'/TemplateData/favicon.ico',
'/TemplateData/fullscreen.png',
'/TemplateData/progressEmpty.Dark.png',
'/TemplateData/progressEmpty.Light.png',
'/TemplateData/progressFull.Dark.png',
'/TemplateData/progressFull.Light.png',
'/TemplateData/progressLogo.Dark.png',
'/TemplateData/progressLogo.Light.png',
'/TemplateData/style.css',
'/TemplateData/UnityProgress.js',
'/TemplateData/webgl-logo.png',
'/index.html',
'/manifest.json',
'/']

self.addEventListener('install', function(event)
{
    event.waitUntil(caches.open(CacheName).then(function(cache)
    {
        cache.addAll(StorageItems)
    })
    )
})

self.addEventListener('activate', function(event)
{

})

self.addEventListener('fetch', function(event)
{
    event.respondWith(
        caches.match(event.request).then(function(response)
        {
            return response || fetch(event.request)
        })
    )
})