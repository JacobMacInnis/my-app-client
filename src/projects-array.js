import FE from './images/screenshots/FUNCTION_EARTH_SCREENSHOTS.png'
import BTM from './images/screenshots/BEACHTIDES_MOBILE_SCREENSHOTS.png';
import TP from './images/screenshots/TP-SCREENSHOTS.png';
import BT from './images/screenshots/BEACHTIDES-SCREENSHOTS.jpg';
import CSC from './images/screenshots/CS-CARDS-SCREENSHOTS.jpg';
import SG from './images/screenshots/SG-SCREENSHOTS.jpg';
import PT from './images/screenshots/PRIMETHREE-SCREENSHOTS.png';

export  const projectsArray = [
  {
    name: 'functionEarth',
    h2: 'Function Earth',
    description: 'Available at Google Play Store - React Native application t​racks what we are doing around the world to reduce our footprint and preserve our environment for future generations. Built a compost bin? Recycled? Picked up trash from the ocean? Helped the elderly? Took care of an animal? Use Function Earth to log these actions. Race other cities, states and countries to be the greenest region in the world!',
    image: FE,
    projectLink: 'https://play.google.com/store/apps/details?id=com.functionearth.FunctionEarth',
    linkText: 'Download Here',
    githubLinkClient: 'https://github.com/JacobMacInnis/function-earth',
    githubLinkServer: 'https://github.com/JacobMacInnis/server-function-earth',    
    techList: ['JavaScript', 'Node', 'React-Native', 'React', 'Redux', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Passport-JWT', 'Jest', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku'],
    tags: ['mobile', 'legacy']
  },
  {
    name: 'beachTidesMobile',
    h2: 'Beach Tides Mobile App',
    description: 'Available at Google Play Store - MVP React-Native Application Beach Tides is built to give real time and future tide predictions for the coastal United States. Use BeachTides to search by zip code or city and get beach tide predictions. Search for tide information without creating accounts',
    image: BTM,
    projectLink: 'https://play.google.com/store/apps/details?id=com.beachtides.beachtides',
    linkText: 'Download Here',
    githubLinkClient: 'https://github.com/JacobMacInnis/BeachTides',
    githubLinkServer: 'https://github.com/JacobMacInnis/beach-tides-server',    
    techList: ['TypeScript', 'JavaScript', 'Node', 'React', 'Redux', 'Express', 'Socket.io', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku'],
    tags: ['mobile', 'legacy']
  },
  {
    name: 'thinkPrograming',
    h2: 'Think Programming',
    description: 'A place to challenge other coding enthusiests in languages or programing categories.  Be fastest and cleanest coder to level up fast.  Gain experience and coding muscle memory fast.',
    image: TP,
    projectLink: 'https://think-programming-client.herokuapp.com/',
    linkText: 'Demo Here',
    githubLinkClient: 'https://github.com/thinkful-ei23/think-programming-client',
    githubLinkServer: 'https://github.com/thinkful-ei23/think-programming-server',    
    techList: ['Node', 'React', 'Redux', 'JavaScript', 'Express', 'Socket.io', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Google-OAuth-2.0', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku'],
    tags: ['legacy', 'web']
  },
  {
  name: 'beachtides',
  h2: 'Beach Tides Web App',
  description: 'A Full-Stack mobile first responisive web app built to give users in coastal U.S. tidal predictions. Search by zipcode or city and state. Create accounts using Google OAuth 2.0 to save locations and more.',
  image: BT,
  projectLink: 'https://www.beachtides.us',
  linkText: 'BeachTides.us',
  githubLinkClient: 'https://github.com/JacobMacInnis/beach-tides-client',
  githubLinkServer: 'https://github.com/JacobMacInnis/beach-tides-server',
  techList: ['Node', 'React', 'Redux', 'JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Google-OAuth-2.0', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Travis-CI', 'Heroku'],
  tags: ['legacy', 'cloud']
}, {
  name: 'CS Cards',
  h2: 'CS Cards',
  description: 'Using a spaced repetition algorithm CS Cards teaches users Computer Science Concepts.  It is built using linked-lists in a mongo db and changes values of data structures depending on user answers.',
  image: CSC,
  projectLink: 'https://client-cs-cards.herokuapp.com/',
  linkText: 'CS-Cards',
  githubLinkClient: 'https://github.com/thinkful-ei23/Client-CS-Cards',
  githubLinkServer: 'https://github.com/thinkful-ei23/Server-CS-Cards',
  techList: ['Node', 'React', 'Redux', 'Socket.io', 'WebSockets','JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'JWT-Auth', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Heroku' ],
  tags: ['legacy', 'web']
}, {
  name: 'scottish-gaelic',
  h2: 'Scottish Gaelic',
  description: 'Scottish Gaelic is a language learning app designed to improve your abilty to learn the beautiful Scottish language of Gaelic. Using our specialized algorithm it teaches words and phrases.',
  image: SG,
  projectLink: 'https://scottish-gaelic.herokuapp.com/',
  linkText: 'Scottish Gaelic',
  githubLinkClient: 'https://github.com/JacobMacInnis/scottish-gaelic-client',
  githubLinkServer: 'https://github.com/JacobMacInnis/scottish-gaelic-server',
  techList: ['Node', 'React', 'Redux', 'Socket.io', 'WebSockets','JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'JWT-Auth', 'Passport-JWT', 'Mocha', 'Chai', 'Enzyme', 'Heroku' ],
  tags: ['legacy', 'web']
},
{
  name: 'PrimeThree',
  h2: 'Prime Three',
  description: 'One day project built to find the first prime number that contains the three digits a user inputs.',
  image: PT,
  projectLink: 'https://primethree-client.herokuapp.com/',
  linkText: 'Scottish Gaelic',
  githubLinkClient: 'https://github.com/JacobMacInnis/primethree-client',
  githubLinkServer: 'https://github.com/JacobMacInnis/primethree-server',
  techList: ['Node', 'React', 'Redux','JavaScript', 'Express', 'MongoDB', 'Mongoose', 'mLab', 'HTML5', 'CSS3', 'Mocha', 'Chai', 'Enzyme', 'Sinon', 'Heroku' ],
  tags: ['legacy', 'web']
}
];
// {
//   name: 'bookmarkcentral',
//   h2: 'Bookmark Central',
//   description: 'Bookmark Central is an early front-end responsive web app.  It allows users to save urls and rate them using 0 to 5 star rating.  Users can change ratings, edit descriptions and delete bookmarks.',
//   projectLink: 'https://thinkful-ei23.github.io/jacob-bookmarks-app/',
//   linkText: 'BookmarkCentral',
//   githubLinkClient: 'https://github.com/thinkful-ei23/jacob-bookmarks-app',
//   techList: ['JavaScript', 'JQuery', 'HTML5', 'CSS3', 'Github-Pages' ]
// }
