import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BNN2kNZW.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DZPmHAsi.mjs');
const _page1 = () => import('./chunks/404_C3CahQAG.mjs');
const _page2 = () => import('./chunks/about_GTGRFrQ6.mjs');
const _page3 = () => import('./chunks/work_BLSPt-7V.mjs');
const _page4 = () => import('./chunks/_.._MPh0dV21.mjs');
const _page5 = () => import('./chunks/index_CF0NiWAe.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/work.astro", _page3],
    ["src/pages/work/[...slug].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d6ba02a1-3945-4219-8622-7fcf59300d6c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
