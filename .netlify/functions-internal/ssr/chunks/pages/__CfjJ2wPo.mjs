import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML } from '../astro_CEALGWPi.mjs';
import 'kleur/colors';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero } from './404_Cetk-_xk.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                           */

const $$Astro$3 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/Terrage-04/portfolio/src/components/CallToAction.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Envie de travailler avec moi?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:ostermeyer75@gmail.com.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Ecrivez moi
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/Terrage-04/portfolio/src/components/ContactCTA.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/la-montagne.md": () => import('../la-montagne_DYHHWxI4.mjs'),"/src/content/work/minimo.md": () => import('../minimo_nLEn3JMc.mjs'),"/src/content/work/nested/affiche-parisienne.md": () => import('../affiche-parisienne_DDtmyod_.mjs'),"/src/content/work/quatorze.md": () => import('../quatorze_D2z4B-vq.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"la-montagne":"/src/content/work/la-montagne.md","minimo":"/src/content/work/minimo.md","quatorze":"/src/content/work/quatorze.md","nested/affiche-parisienne":"/src/content/work/nested/affiche-parisienne.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/la-montagne.md": () => import('../la-montagne_BvqZhowd.mjs'),"/src/content/work/minimo.md": () => import('../minimo_DJxuDhKV.mjs'),"/src/content/work/nested/affiche-parisienne.md": () => import('../affiche-parisienne_CNPxQK3c.mjs'),"/src/content/work/quatorze.md": () => import('../quatorze_Bh49NPU6.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/Terrage-04/portfolio/src/components/Pill.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-qwekciqp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-qwekciqp> <div class="stack gap-15" data-astro-cid-qwekciqp> <header data-astro-cid-qwekciqp> <div class="wrapper stack gap-2" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-qwekciqp": true }, { "default": ($$result3) => renderTemplate` <div class="details" data-astro-cid-qwekciqp> <div class="tags" data-astro-cid-qwekciqp> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-qwekciqp": true }, { "default": ($$result4) => renderTemplate`${t}` })}`)} </div> <p class="description" data-astro-cid-qwekciqp>${entry.data.description}</p> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-qwekciqp> <div class="stack gap-10 content" data-astro-cid-qwekciqp> ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-qwekciqp>`} <div class="content" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qwekciqp": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> ` })} `;
}, "C:/Users/Terrage-04/portfolio/src/pages/work/[...slug].astro", void 0);

const $$file = "C:/Users/Terrage-04/portfolio/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$Pill as a, $$CallToAction as b, getCollection as g };
