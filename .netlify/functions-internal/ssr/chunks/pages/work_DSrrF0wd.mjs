import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_CEALGWPi.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$ContactCTA } from './__CfjJ2wPo.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_Cetk-_xk.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_CYM0W_Zx.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mes Projets | Sophie Ostermeyer", "description": "D\xE9couvrez mes projets les plus r\xE9cents" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes Projets", "tagline": "D\xE9couvrez ci-dessous mes projets les plus r\xE9cents pour avoir une id\xE9e de mes comp\xE9tences.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/Terrage-04/portfolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/Terrage-04/portfolio/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
