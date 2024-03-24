import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B3i_CdwK.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"la-montagne\">La Montagne</h2>\n<p>Bienvenue sur <a href=\"https://github.com/sophieost/La_Montagne\">La Montagne</a>, la page d’accueil d’un blog.</p>\n<h3 id=\"sass\">Sass</h3>\n<p>Cette page a été réalisée en Sass. J’ai divisé cette page en 3 layouts Sass : header, main et footer. J’ai également crée un component button et une mixin title.</p>\n<h3 id=\"navigation\">Navigation</h3>\n<p>Hover sur un élement qui n’est pas survolé et nav en position absolute.</p>\n<h3 id=\"grid\">Grid</h3>\n<p>Le formulaire de contact a été mis en place avec un grid.</p>\n<h3 id=\"animation\">Animation</h3>\n<p>Animation au chargement de la page en créant un before au body.</p>\n<h4 id=\"compétences-acquises\">Compétences acquises</h4>\n<ul>\n<li>Sass</li>\n<li>Grid</li>\n</ul>";

				const frontmatter = {"title":"La montagne","publishDate":"2019-12-01T00:00:00.000Z","img":"/assets/stock-2.png","img_alt":"Page vitrine de blog","description":"Conception de la page vitrine d'un blog  \n","tags":["Sass","Animation CSS","Grid"]};
				const file = "C:/Users/Terrage-04/portfolio/src/content/work/la-montagne.md";
				const url = undefined;
				function rawContent() {
					return "\n## La Montagne\n\n\nBienvenue sur <a href=\"https://github.com/sophieost/La_Montagne\">La Montagne</a>, la page d'accueil d'un blog.\n\n### Sass\n\nCette page a été réalisée en Sass. J'ai divisé cette page en 3 layouts Sass : header, main et footer. J'ai également crée un component button et une mixin title.\n\n### Navigation\n\nHover sur un élement qui n'est pas survolé et nav en position absolute.\n\n### Grid\n\nLe formulaire de contact a été mis en place avec un grid.\n\n### Animation\n\nAnimation au chargement de la page en créant un before au body.\n\n\n#### Compétences acquises\n\n- Sass\n- Grid\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"la-montagne","text":"La Montagne"},{"depth":3,"slug":"sass","text":"Sass"},{"depth":3,"slug":"navigation","text":"Navigation"},{"depth":3,"slug":"grid","text":"Grid"},{"depth":3,"slug":"animation","text":"Animation"},{"depth":4,"slug":"compétences-acquises","text":"Compétences acquises"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
