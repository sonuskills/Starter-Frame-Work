/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'social-media\'">' + entity + '</span>' + html;
	}
	var icons = {
		'sm-mail': '&#xe900;',
		'sm-google-plus': '&#xe901;',
		'sm-hangouts': '&#xe902;',
		'sm-google-drive': '&#xe903;',
		'sm-facebook': '&#xe904;',
		'sm-facebook-squire': '&#xe905;',
		'sm-instagram': '&#xe906;',
		'sm-whatsapp': '&#xe907;',
		'sm-telegram': '&#xe908;',
		'sm-twitter': '&#xe909;',
		'sm-rss': '&#xe90a;',
		'sm-youtube': '&#xe90b;',
		'sm-youtube-icon': '&#xe90c;',
		'sm-vimeo': '&#xe90d;',
		'sm-flickr': '&#xe90e;',
		'sm-behance2': '&#xe90f;',
		'sm-dropbox': '&#xe910;',
		'sm-onedrive': '&#xe911;',
		'sm-wordpress': '&#xe912;',
		'sm-blogger': '&#xe913;',
		'sm-skype': '&#xe914;',
		'sm-linkedin': '&#xe915;',
		'sm-pinterest': '&#xe916;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/sm-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
