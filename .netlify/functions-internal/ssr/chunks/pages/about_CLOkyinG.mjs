import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent } from '../astro_B3i_CdwK.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Hero, b as $$BaseLayout } from './404_CGHpHZrm.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/Terrage-04/portfolio/src/components/CallToAction.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Envie de travailler avec moi?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:ostermeyer75@gmail.com.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Ecrivez moi
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "C:/Users/Terrage-04/portfolio/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Jeanine White", "description": "About Jeanine White Lorem Ipsum", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "A propos de moi", "tagline": "Je suis Sophie, D\xE9veloppeuse Web Junior et c'est ici que je vous parle de mon parcours..", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="300" height="100" src="/assets/at-work.jpg" alt="Sophie Ostermeyer" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Après deux années en licence de psychologie et un CAP et un BP de coiffure, j’ai effectué plusieurs années dans le domaine de la coiffure ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, l’écoute, le conseil ainsi que des qualités relationnelles importantes. J'ai ensuite voulu me reconvertir professionnellement dans le Développement Web, domaine qui m’intéressait depuis de nombreuses années.
</p> <p data-astro-cid-kh7btl4r>
Je suis actuellement une formation chez Colombbus en vue d'obtenir le titre developpeur web/web mobile (Bac+2). J'ai déjà acquis des compétences en HTML, CSS, JavaScript et PHP, me permettant de créer des applications web dynamiques.
</p> <p data-astro-cid-kh7btl4r>
Au cours de ma formation, j’ai eu l’opportunité de créer et d’héberger un site WordPress : quatorze.org. Cette expérience m’a permis de me familiariser avec l’utilisation de ce CMS populaire et de mieux comprendre le référencement naturel (SEO). J’ai également eu l’occasion de développer un site e-commerce en utilisant HTML, CSS, JavaScript, Bootstrap et PHP. Ces projets m’ont permis d’acquérir une expérience pratique précieuse et de renforcer mes compétences en développement web. Chaque projet a été une occasion d’apprendre et de grandir en tant que développeur.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Diplômes</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>BAC+2 Developpeur web / web mobile, titre RNCP (en cours)</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Curieuse, Créative, Autonome, Organisée, Polyvalente, Travail d'équipe, Souci du détail</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/Terrage-04/portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Terrage-04/portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CallToAction as $, $$ContactCTA as a, about as b };
