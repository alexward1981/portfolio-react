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
  	siteTitle: 'Alexander Ward'
  }
}];

/**
 * Social Link fixture
 *
 * @label {string} The name of the link
 * @title {string} The title attribute text of the link
 * @class {string} the css class for the link
 * @link {string} the link itself
 *
 **/

exports.socialLinks = [
  {
  	label: 'Behance',
  	title: 'Check me out on Behance',
  	class: 'fa-behance-square',
  	link: 'https://www.behance.net/alexward1981/'
  },
  {
  	label: 'Github',
  	title: 'Check me out on Github',
  	class: 'fa-github',
  	link: 'https://github.com/alexward1981'
  },
  {
  	label: 'Dribbble',
  	title: 'Check me out on Dribbble',
  	class: 'fa-dribbble',
  	link: 'https://dribbble.com/alexbward'
  },
  {
  	label: 'Twitter',
  	title: 'Follow me on Twitter',
  	class: 'fa-twitter',
  	link: 'https://twitter.com/alexbward'
  },
  {
  	label: 'Facebook',
  	title: 'Follow me on Facebook',
  	class: 'fa-facebook-official',
  	link: 'https://twitter.com/alexbward'
  },
  {
  	label: 'LinkedIn',
  	title: 'Connect with me on LinkedIn',
  	class: 'fa-facebook-official',
  	link: 'https://uk.linkedin.com/in/alexbward'
  }
];


/**
 * Pages fixture
 *
 * @name {string} the pages name
 * @title {string} the pages title
 * @description {string} the pages description
 * @slug {string} the url for the page must match /^[a-zA-Z0-9-_]+$/
 * @in-nav {string} 'none': not in nav, 'header': in primary nav, 'footer': in footer nav, 'both': in both header and footer nav.
 * @parent {string} the slug of the parent page of this one, leave blank if this is a top level page. (if the page is nested more than one layer down, add a forward slash between parents - e.g. 'about-us/location')
 * @canonical {string} the canonical url for the page if different to the {host}/{parent}/{slug} pattern.
 * @class {string} An optional class to add to the page
 *
 **/

exports.pages = [
  {
    'name' : 'home',
    'title' : '[status]',
    'description' : 'I am a highly skilled and experienced front-end architect and designer currently contracting in London, UK',
    'slug' : '',
    'inNav' : 'header',
    'parent' : '',
    'canonical' : '',
    'class' : 'home'
  },
  {
    'name' : 'about',
    'title' : 'About me',
    'description' : 'A little bit of information about Alex Ward',
    'slug' : 'about-me',
    'inNav' : 'header',
    'parent' : '',
    'canonical' : '',
    'class' : 'about'
  },
  {
    'name' : 'skills',
    'title' : 'Skills',
    'description' : 'The skills and abilities of Alex Ward',
    'slug' : 'skills',
    'inNav' : 'header',
    'parent' : '',
    'canonical' : '',
    'class' : 'skills'
  }
]
