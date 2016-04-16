/**
 * Language fixture
 *
 * @language {string} the language of the content
 * @definitions {object} the container for the language definitions
 * Anything within the definitions object are static text strings for fixed parts of the site (eg, header, footer, etc...)
 *
 **/

exports.lang = [{
	language: 'en-gb',
  definitions: {
  	mobileMenuLabel: 'menu',
  	siteTitle: 'Alexander Ward',
  }
}];

/**
 * Pages fixture
 *
 * @title {string} the pages title
 * @description {string} the pages description
 * @slug {string} the url for the page must match /^[a-zA-Z0-9-_]+$/
 * @in-nav {string} 'none': not in nav, 'header': in primary nav, 'footer': in footer nav, 'both': in both header and footer nav.
 * @parent {string} the slug of the parent page of this one, leave blank if this is a top level page. (if the page is nested more than one layer down, add a forward slash between parents - e.g. 'about-us/location')
 * @canonical {string} the canonical url for the page if different to the {host}/{parent}/{slug} pattern.
 *
 **/

exports.pages = [
  {
    'title' : 'Alex Ward Portfolio',
    'description' : 'Description to be added later',
    'slug' : '',
    'inNav' : 'header',
    'parent' : '',
    'canonical' : ''
  }
]
