import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B3i_CdwK.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"quatorzeorg\">Quatorze.org</h2>\n<blockquote>\n<p>“La musique est le langage des émotions.” – Ludwig van Beethoven</p>\n</blockquote>\n<p>Bienvenu sur <a href=\"https://quatorze.org/\">Quatorze</a>, le blog des amoureux de musique. Découvrez les pépites musicales de nos 14 chroniqueurs passionnés. Rock, pop, jazz, classique ou musique du monde, il y en a pour toutes les oreilles !</p>\n<p>Découvrez des playlists de qualité pour toutes les ambiances.</p>\n<p>Des bons plans et autres activités liés à la musique pour s’amuser ou se cultiver à Paris.</p>\n<h3 id=\"hébergement\">Hébergement</h3>\n<p>Le blog quatorze.org est hébergé sur Hostinger, une plateforme d’hébergement Web de nouvelle génération. Hostinger est reconnu pour sa rapidité et sa fiabilité, ce qui assure une expérience utilisateur optimale pour les visiteurs du blog.</p>\n<h3 id=\"thème-et-plugins\">Thème et plugins</h3>\n<p>Le blog utilise le thème WordPress Blocksy, qui est rapide, léger et construit avec les dernières technologies web. Il est également compatible avec les constructeurs de pages WordPress populaires. En ce qui concerne les plugins, le blog utilise plusieurs plugins pour améliorer ses fonctionnalités, y compris Anti-Spam, Magical Posts Display, Starbox Author Box, WPForm, Yet Another Related Posts Plugin, et Yoast SEO.</p>\n<h3 id=\"rédaction-des-articles\">Rédaction des articles</h3>\n<p>Les articles sur le blog quatorze.org sont rédigés à tour de rôle par les membres de l’équipe, à raison de deux articles par semaine. Cela garantit un flux constant de contenu frais et diversifié pour les lecteurs.</p>\n<h4 id=\"compétences-acquises\">Compétences acquises</h4>\n<ul>\n<li>WordPress</li>\n<li>SEO</li>\n</ul>";

				const frontmatter = {"title":"Quatorze","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/stock-1.png","img_alt":"accueil du blog Quatorze.org","description":"Le blog musical crée en collaboration avec ma promo - Coordinatrice du projet\n","tags":["Blog","WordPress","Design"]};
				const file = "C:/Users/Terrage-04/portfolio/src/content/work/quatorze.md";
				const url = undefined;
				function rawContent() {
					return "\n## Quatorze.org\n\n> “La musique est le langage des émotions.” – Ludwig van Beethoven\n\nBienvenu sur <a href=\"https://quatorze.org/\">Quatorze</a>, le blog des amoureux de musique. Découvrez les pépites musicales de nos 14 chroniqueurs passionnés. Rock, pop, jazz, classique ou musique du monde, il y en a pour toutes les oreilles !\n\nDécouvrez des playlists de qualité pour toutes les ambiances.\n\nDes bons plans et autres activités liés à la musique pour s'amuser ou se cultiver à Paris.\n\n### Hébergement\n\nLe blog quatorze.org est hébergé sur Hostinger, une plateforme d’hébergement Web de nouvelle génération. Hostinger est reconnu pour sa rapidité et sa fiabilité, ce qui assure une expérience utilisateur optimale pour les visiteurs du blog.\n\n### Thème et plugins\n\nLe blog utilise le thème WordPress Blocksy, qui est rapide, léger et construit avec les dernières technologies web. Il est également compatible avec les constructeurs de pages WordPress populaires. En ce qui concerne les plugins, le blog utilise plusieurs plugins pour améliorer ses fonctionnalités, y compris Anti-Spam, Magical Posts Display, Starbox Author Box, WPForm, Yet Another Related Posts Plugin, et Yoast SEO.\n\n### Rédaction des articles\n\nLes articles sur le blog quatorze.org sont rédigés à tour de rôle par les membres de l’équipe, à raison de deux articles par semaine. Cela garantit un flux constant de contenu frais et diversifié pour les lecteurs.\n\n#### Compétences acquises\n\n- WordPress\n- SEO\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"quatorzeorg","text":"Quatorze.org"},{"depth":3,"slug":"hébergement","text":"Hébergement"},{"depth":3,"slug":"thème-et-plugins","text":"Thème et plugins"},{"depth":3,"slug":"rédaction-des-articles","text":"Rédaction des articles"},{"depth":4,"slug":"compétences-acquises","text":"Compétences acquises"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
