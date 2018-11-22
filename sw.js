self.addEventListener('install', function(evt) {
    var urlsToCache = [
        '/',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
    ];

    evt.waitUntil(
       
        caches.open('urls').then(function(cache) {
            cache.addAll(urlsToCache);
        })
        
    );

});

self.addEventListener('fetch', function(evt) {
    console.log(evt.requst);
});