/**
 * Config fixture
 *
 * @language {string} the language of the content
 * @definitions {object} the container for the language definitions
 * Anything within the definitions object are static text strings for fixed parts of the site (eg, header, footer, etc...)
 *
 **/

exports.config = [{
  status: 'available',
  statusText: 'I\'m <strong>currently available</strong> for projects in the London area'
}];

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
    copyright: '©MMVI Alexander Ward. All Rights reserved.'
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
    'title' : 'Alex Ward | Consultant UI Architect and Writer from London',
    'description' : 'I am a highly skilled and experienced front-end architect, designer and writer currently contracting in London, UK',
    'slug' : '',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'home'
  },
  {
    'name' : 'about',
    'title' : 'About me',
    'description' : 'A little bit of information about Alex Ward',
    'slug' : 'about-me',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'about'
  },
  {
    'name' : 'skills',
    'title' : 'Skills',
    'description' : 'The skills and abilities of Alex Ward',
    'slug' : 'skills',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'skills'
  }
]

/**
 * Page content fixture
 *
 * @pageName {string} the page this content should be displayed on
 * @title {string} the pages main title
 * @subtitle {string} the pages subtitle
 * @body {string} the main body copy
 * @buttonClass {string} if a button exists on the page, this is the class the button uses
 * @buttonText {string} if a button exists on the page, this is the text the button uses
 * @buttonUrl {string} if a button exists on the page, this is the url the button uses
 *
 **/

exports.pageContent = [
  {
    pageName : 'home',
    title: 'Hi! I\'m Alex',
    subtitle: 'I make websites',
    body: '',
    minime: '/static/images/alex-available.svg',
    minimeAlt: 'An illustration of Alex Ward waving',
    buttonClass: '',
    buttonText: '',
    buttonUrl: ''
  },
  {
    pageName : 'skills',
    title: 'I know my stuff',
    subtitle: '',
    body: '<p>My experience with the web started in 1994 when I built a dial-up Bulletin Board System, this system was not built using HTML and instead had to be coded using ASCII characters. In 1996 I progressed from BBS\'s to Websites, launching my first ever website on GeoCities. It was a dazzling array of table layouts and animated GIFS. My career only progressed from there&hellip;</p><p>Are you <em>really</em> interested in my career history?  <a href="/skills/history">If so click here to see the rest of it.</a></p>',
    minime: '/static/images/alex-tables.svg',
    minimeAlt: 'An illustration of Alex Ward',
    buttonClass: '',
    buttonText: '',
    buttonUrl: ''
  }
]

/**
 * Skills fixture
 *
 * @name {string} The name of the Skill
 * @level {number} The level I am at from beginner to middle-weight to expert (1,2,3)
 *
 **/

exports.skills = [{
  levels : [
    {
      name: 'senior',
      level: 1
    },
    {
      name: 'middle-weight',
      level: 2
    },
    {
      name: 'junior',
      level: 3
    }
  ],
  skills : [
    {
      key: 'hMnQ4pS@K',
      name : 'HTML5',
      level: 1
    },
    {
      key: '$TLQ[9b#13q',
      name : 'CSS3',
      level: 1
    },
    {
      key: 'W^OETz7QG)7D4',
      name : 'SASS / Less',
      level: 1
    },
    {
      key: 'W^OETz7Q234G)7D4',
      name : 'Stylus',
      level: 1
    },
    {
      key: 'lvoTtoBK0)TCd',
      name : 'jQuery',
      level: 1
    },
    {
      key: 'LOVp8ylp',
      name : 'Git',
      level: 1
    },
    {
      key: 'KyT%MhvGcJq',
      name : 'Gulp / Grunt',
      level: 1
    },
    {
      key: '^AArCIVa',
      name : 'Accessibility',
      level: 1
    },
    {
      key: 'hry^aFrt&',
      name : 'Usability',
      level: 1
    },
    {
      key: 'IjzaZT[2hl2CD!$zf',
      name : 'Pure JavaScript',
      level: 2
    },
    {
      key: 'v#m^&jQnuIA(2fvtX8A',
      name : 'React',
      level: 2
    },
    {
      key: 'v234#m^&jQnuIA(2fvtX8A',
      name : 'Redux',
      level: 2
    },
    {
      key: '9%6Y5A0GR',
      name : 'Express',
      level: 2
    },
    {
      key: '9%6Y5A0GRwer',
      name : 'MongoDB',
      level: 2
    },
    {
      key: 'IjzaZT[2hl2CD!$zf',
      name : 'Handlebars',
      level: 2
    },
    {
      key: 'IjzaZT[2hl2xCD!$zf',
      name : 'Moustache',
      level: 2
    },
    {
      key: 'Ij23zaZT[2hl2CD!$zf',
      name : 'Nunjucks',
      level: 1
    },
    {
      key: '8Y6ZJILHwyZIB8@Fp',
      name : 'Wordpress',
      level: 2
    },
    {
      key: '8Y6ZJI23424LHwyZIB8@Fp',
      name : 'SVN / HG',
      level: 2
    },
    {
      key: '8Y6ZJI234223423424LHwyZIB8@Fp',
      name : 'Webpack',
      level: 2
    },
    {
      key: 'qx9uSad]SCiY',
      name : 'Illustration',
      level: 2
    },
    {
      key: 'TVtC$I8X4iCv',
      name : 'Design',
      level: 1
    },
    {
      key: 'pWYd*FFb',
      name : 'Server Management',
      level: 2
    },
    {
      key: 'eCa^&P#tL3uR@[P#pzc$',
      name : 'Procedural PHP',
      level: 2
    },
    {
      key: '1DX5T428$',
      name : 'MySQL',
      level: 3
    },
    {
      key: '*]uHWV234mDZo4E',
      name : 'NodeJS',
      level: 3
    },
    {
      key: 'Aqs3*',
      name : 'OO PHP',
      level: 3
    },
    {
      key: '*]uHWVmDZo4E',
      name : 'AngularJS',
      level: 3
    },
    {
      key: 'QygDyOC4s6s[R',
      name : 'PHP MVC',
      level: 3
    },
    {
      key: 'e(ljP7iZ9p[',
      name : '3D Modelling',
      level: 3
    },
    {
      key: '1fa#Os3SvnDY0jJl',
      name : 'Responsive Design',
      level: 1
    }
  ],
  intro: 'My skills are grouped by ability, I am comfortable working in anything in the middle-weight or junior groups provided there is room for on-the-job learning. However my strengths and passions lie in the senior column so this is where clients will get the best from me'
}]
