"use strict";var precacheConfig=[["/ducatur_web/index.html","7c069223a195dc3b51e89eac3a4e5fab"],["/ducatur_web/static/css/main.44a401c6.css","26b40d0e4d0087b9a0cef896fb9a2b34"],["/ducatur_web/static/js/main.71a5d468.js","f2ca41e46f5667c8ac6228fbed6f4791"],["/ducatur_web/static/media/1.b217adb0.svg","b217adb01e145958218d8db45af22a2c"],["/ducatur_web/static/media/2.6faba8c2.svg","6faba8c2cb2d9d20e3ac68229c123924"],["/ducatur_web/static/media/3.ced5ce00.svg","ced5ce00c6e5949dbd36b3364adb9392"],["/ducatur_web/static/media/4.c350b51d.svg","c350b51d3dc381bee5d408aa6ce77ff2"],["/ducatur_web/static/media/5.515b42ef.svg","515b42ef1637ea26e3e2a0deb5fed720"],["/ducatur_web/static/media/6.84229185.svg","842291850607b614e6dcfce9b1d8f521"],["/ducatur_web/static/media/7.b8c4d1d6.svg","b8c4d1d6307431b08ad771c880765028"],["/ducatur_web/static/media/ArameBold.843142cb.otf","843142cb13a9f5e739370ee1d10b676c"],["/ducatur_web/static/media/ArameRegular.c1a13827.ttf","c1a138278b43c9981db162cc7814472e"],["/ducatur_web/static/media/DinProBold.37684a0a.otf","37684a0a69c0bf7152f34ed934dc07a6"],["/ducatur_web/static/media/DinProMedium.48a3635c.otf","48a3635ce1e76c0122a143b076f51adf"],["/ducatur_web/static/media/Logo.b7fdc3e2.svg","b7fdc3e228bec32f9215ae2baf84b4e9"],["/ducatur_web/static/media/Logo_Brand.0e627af0.svg","0e627af04bcbe39f2e127a7f0e6c1753"],["/ducatur_web/static/media/arrow.10fa5daf.svg","10fa5daf7d08119343fe6bba16e3d44f"],["/ducatur_web/static/media/menu.1f34dfc9.svg","1f34dfc9fb9d4464815831d4a3f4d9bf"],["/ducatur_web/static/media/multiCard.3c3f0f75.png","3c3f0f7520d6505f3437a1ac3e865cf8"],["/ducatur_web/static/media/plus.29112316.svg","29112316111e79e4b62b34c74018a1c4"],["/ducatur_web/static/media/star.9d0e87e9.svg","9d0e87e914ab2e6168133725534c8530"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/ducatur_web/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});