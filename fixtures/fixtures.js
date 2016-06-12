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
  	class: 'fa-linkedin-square',
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
    'name' : 'skills',
    'title' : 'Skills',
    'description' : 'The skills and abilities of Alex Ward',
    'slug' : 'skills',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'skills'
  },
  {
    'name' : 'brands',
    'title' : 'Brands',
    'description' : 'The brands and companies Alex Ward has worked with',
    'slug' : 'brands',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'brands'
  },
  {
    'name' : 'testimonials',
    'title' : 'Brands',
    'description' : 'The Testimonials given for Alex Ward',
    'slug' : 'testimonials',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'testimonials'
  },
  {
    'name' : 'contact',
    'title' : 'Get in touch',
    'description' : 'Contact Alex Ward',
    'slug' : 'contact',
    'inNav' : 'both',
    'parent' : '',
    'canonical' : '',
    'class' : 'contact'
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
    body: '<p>My experience with the web started in 1994 when I built a dial-up Bulletin Board System, this system was not built using HTML and instead had to be coded using ASCII characters. In 1996 I progressed from BBS\'s to Websites, launching my first ever website on GeoCities. It was a dazzling array of table layouts and animated GIFS. My career only progressed from there&hellip;</p><p>Are you <em>really</em> interested in my career history?  <a href="/skills/history">If so click here to see the rest of it.</a></p><p>More than anything else, I would consider myself a UI Architect, in a nutshell this means that I\'m at my best when I\'m creating a new project from scratch. I\'m very comfortable with creating HTML and CSS from wireframes or designs, setting the coding and accessibility standards and creating an efficient build system. Ideally I would also have some influence over the UX and design process.</p><p>Outside of web development, I\'m also a fairly skilled designer and illustrator (I made this site for example), I\'m also trying to develop my 3D modelling skills as I would love to develop games for the up and coming Virtual Reality platforms such as the Oculus Rift and HTC Vive.</p>',
    minime: '/static/images/alex-skills.svg',
    minimeAlt: 'An illustration of Alex Ward',
    buttonClass: '',
    buttonText: '',
    buttonUrl: ''
  },
  {
    pageName : 'brands',
    title: 'I love the brands I\'ve worked with...',
    subtitle: '',
    body: '<p>I\'ve been fortunate enough to work with some amazing companies over the years. Here is a selection of some of my favourites.</p><p>For a more in-depth look at the sort of things I work on, <a href="https://www.behance.net/alexward1981/">visit my Behance portfolio</a></p>',
    minime: '/static/images/alex-smile.svg',
    minimeAlt: 'An illustration of Alex Ward gesturing towards clients',
    buttonClass: '',
    buttonText: '',
    buttonUrl: ''
  },
  {
    pageName : 'testimonials',
    title: 'and I think they love me too!',
    subtitle: '',
    body: '<p>Here are a selection of a few nice things clients I\'ve worked with have had to say about me, for a full list of recommendations, please visit <a href="https://www.linkedin.com/in/alexbward#recommendations"> my LinkedIn profile</a>',
    minime: '/static/images/alex-blushing.svg',
    minimeAlt: 'An illustration of Alex Ward blushing',
    buttonClass: '',
    buttonText: '',
    buttonUrl: ''
  },
  {
    pageName : 'contact',
    title: 'and I think they love me too!',
    subtitle: '',
    body: '<p>If you wish to hire me for a contract or project, please contact me either using the form or the details below.</p><div class="details"><span><strong>Telephone:</strong> <a href="tel:02030867609" itemprop="telephone">0203 0867 609</a></span><span><strong>Email:</strong> <a href="mailto:hireme@bbqdigital.com" itemprop="email">hireme@bbqdigital.com</a></span><span><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/alexbward">Profile</a></span><span><strong>Yuno Juno:</strong><a href="https://app.yunojuno.com/p/alexbward">Profile</a></span><span><strong>Carrier Pigeon:</strong> No longer available</span></div><p><strong>Notice to agents:</strong><br> Please don’t contact me for permanent roles, I love contracting and no power in the \'verse will take me away from it.</p><p><a href="https://www.dropbox.com/s/arxwap21eqkw2h3/AlexWard-ContractorCV.docx?dl=0" class="btn-ico"><i class="fa fa-file-word-o tilt"></i>Download CV</a></p>',
    minime: '/static/images/alex-phone.svg',
    minimeAlt: 'An illustration of Alex Ward on the phone',
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
      key: 'IjzaZT2hwerfwel2CD!$zf',
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

/**
 * Brands fixture
 *
 * @image {string} the path to the brand image
 * @class {string} the class on the brand
 * @name {string} the brand name
 * @link {string} a link to relevant information (optional)
 *
 **/

exports.brands = [
  {
    image: '/static/images/brands/bandq.png',
    class: 'bandq',
    name: 'B&Q',
    link: '',
  },
  {
    image: '/static/images/brands/sse.png',
    class: 'sse',
    name: 'SSE',
    link: '',
  },
  {
    image: '/static/images/brands/govuk.png',
    class: 'gov',
    name: 'Gov.uk',
    link: '',
  },
  {
    image: '/static/images/brands/dove.png',
    class: 'dove',
    name: 'Dove',
    link: '',
  },
  {
    image: '/static/images/brands/nhs.png',
    class: 'nhs',
    name: 'NHS',
    link: '',
  },
  {
    image: '/static/images/brands/plusnet.png',
    class: 'plusnet',
    name: 'Plusnet',
    link: '',
  },
  {
    image: '/static/images/brands/pandg.png',
    class: 'pandg',
    name: 'P&G',
    link: '',
  },
  {
    image: '/static/images/brands/pampers.png',
    class: 'pampers',
    name: 'Pampers',
    link: '',
  },
  {
    image: '/static/images/brands/bowmore.png',
    class: 'bowmore',
    name: 'Bowmore',
    link: '',
  }
]

/**
 * Testimonials fixture
 *
 * @review {string} the Testimonial
 * @reviewerName {string} the name of the reviewer
 * @reviewerTitle {string} the job title of the reviewer
 * @reviewerCompany {string} the company of the reviewer
 *
 **/

exports.testimonials = [
  {
    review: '<p>Alex clearly has a great level of experience and technical knowledge and completed the task at ease. His enthusiasm and easy going attitude also made the task that much easier.</p>',
    reviewerName: 'Spencer Leah',
    reviewerTitle: 'Head of Digital',
    reviewerCompany: 'Plusnet',
    reviewerProfile: 'https://www.linkedin.com/in/spencer-leah-8ba74443',
    reviewerImage: '/static/images/testimonials/spencer-leah.jpg'
  },
  {
    review: '<p>Alex is an extremely capable front end developer, he is a great team player with a great depth of insight in to a number of areas that massively benefited the project we worked on together. If you are looking for someone who is fast, efficient, reliable and highly skilled then Alex is a great guy to have on board.</p><p> I will be keeping him at the top of my list for UI developers in the future.</p>',
    reviewerName: 'Matthew McConnell',
    reviewerTitle: 'Delivery Manager',
    reviewerCompany: 'Valtech',
    reviewerProfile: 'https://uk.linkedin.com/in/matthew-mcconnell-27b20b82',
    reviewerImage: '/static/images/testimonials/matt-mcconnell.jpg'
  },
  {
    review: '<p>Alex\'s deep experience in this area is evident both in the quality of his work, and his clear articulation of problems/challenges alongside workable solutions. I would happily recommend Alex, and would certainly use him again.</p>',
    reviewerName: 'David Fowler',
    reviewerTitle: 'Business & Systems Integration Manager',
    reviewerCompany: 'Accenture',
    reviewerProfile: 'https://www.linkedin.com/in/dcfowler',
    reviewerImage: '/static/images/testimonials/david-fowler.jpg'
  },
  {
    review: '<p>Alex has been nothing short of exemplary in his work. He has taken every brief and task given, always going beyond what was asked to deliver top quality results in a timely and professional manner.</p>',
    reviewerName: 'Vincent Pickering',
    reviewerTitle: 'Lead UX Developer',
    reviewerCompany: 'Bolser',
    reviewerProfile: 'https://www.linkedin.com/in/vipickering',
    reviewerImage: '/static/images/testimonials/vincent-pickering.jpg'
  },
  {
    review: '<p>Alex is a solid front end developer and a pleasure to work with. I was fortunate enough to work with him on a number of projects for high profile clients including P&G. He has a great attitude to development challenges and always delivers. I would certainly work with him again.</p>',
    reviewerName: 'Phillip Mundy',
    reviewerTitle: 'Distruptive technology Entrepreneur',
    reviewerCompany: 'Twentysix',
    reviewerProfile: 'https://uk.linkedin.com/in/philip-mundy-6a4b9a1',
    reviewerImage: '/static/images/testimonials/phil-mundy.jpg'
  }
]
