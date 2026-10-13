'use strict';
const PREVIEW_SCOPE='/cash/cash-preview-20261012/';
if(new URL(self.registration.scope).pathname!==PREVIEW_SCOPE||self.location.pathname!==PREVIEW_SCOPE+'sw.js')throw Error('Cash Preview requires its own path and scope');
const CACHE_PREFIX='cash-preview-20261012:';
const CACHE=CACHE_PREFIX+'shell-v1';
const SHELL=['','index.html','cash.css','cash-core.js','cash-app.js','analytics-fixtures.js','manifest.webmanifest','cash-icon.svg','cash-icon.png'].map(p=>PREVIEW_SCOPE+p);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!u.pathname.startsWith(PREVIEW_SCOPE)||!SHELL.includes(u.pathname))return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.open(CACHE).then(c=>c.match(e.request))));});
