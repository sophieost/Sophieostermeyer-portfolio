import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B3i_CdwK.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Page d’accueil responsive d’un site de type blog entièrement réalisée avec Bootstrap.</p>";

				const frontmatter = {"title":"Minimo","publishDate":"2019-10-02T00:00:00.000Z","img":"/assets/stock-4.png","img_alt":"Minimo landing page","description":"Page d'accueil de blog réalisée avec Bootstrap\n","tags":["Bootstrap","Flex"]};
				const file = "C:/Users/Terrage-04/portfolio/src/content/work/minimo.md";
				const url = undefined;
				function rawContent() {
					return "\nPage d'accueil responsive d'un site de type blog entièrement réalisée avec Bootstrap.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
