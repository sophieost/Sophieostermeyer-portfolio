import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-U8404IY.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DL5xwOXU.mjs');
const _page1 = () => import('./chunks/404_BLt3bMqy.mjs');
const _page2 = () => import('./chunks/about_Ca-lDCCL.mjs');
const _page3 = () => import('./chunks/work_HFmztMnv.mjs');
const _page4 = () => import('./chunks/_.._CR7tf2LB.mjs');
const _page5 = () => import('./chunks/index_CqqZN0sK.mjs');
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
    "middlewareSecret": "453b8aae-b743-4328-8d08-771451b65aff"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
