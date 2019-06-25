import React from "react";
import Headshot from './../images/JacobMacInnis-square.jpg';
import './styles/resume.css';

export default props => {
  return (
      <main className='resume' id="top">
        <div id="cv" className="instaFade">
	        <div className="mainDetails">
		        <div id="headshot" className="quickFade">
			        <img src={Headshot} alt="Jacob MacInnis" />
		        </div>
	          <div id="name">
			        <h1 className="quickFade delayTwo resume-h1 ">Jacob MacInnis</h1>
			        <h2 className="quickFade delayThree resume-h2">Software Developer</h2>
		        </div>
        		<div id="contactDetails" className="quickFade delayFour">
			        <ul>
                <li><i className="fas fa-envelope fa-1x icon"></i><a href="mailto:jacobmacinnis7@gmail.com" target="_blank" rel='noopener noreferrer'> &nbsp;jacobmacinnis7@gmail.com</a></li>
                <li><i className="fas fa-at fa-1x"></i><a href="http://www.JacobMacInnis.com" target="_blank" rel='noopener noreferrer'> &nbsp;www.JacobMacInnis.com</a></li>
                <li><i className="fab fa-linkedin-in fa-1x icon"></i><a href="https://www.linkedin.com/in/jacob-macinnis/" target="_blank" rel='noopener noreferrer'> &nbsp;linkedin.com/in/jacob-macinnis</a></li>
                <li><i className="fab fa-github fa-1x icon"></i><a href="http://www.github.com/JacobMacInnis" target="_blank" rel='noopener noreferrer'> &nbsp;github.com/JacobMacInnis</a></li>
                <li><i className="fas fa-phone fa-1x"></i> &nbsp;508-244-1362</li>
              </ul>
		        </div>
		        <div className="clear"></div>
	        </div>
  	      <div id="mainArea" className="quickFade delayFive">
		        <section className='section'>
			        <article>
                <div className="sectionTitle">
                  <h1 className='resume-h1'>Professional Summary</h1>
                </div> 	
				        <div className="sectionContent">
                  <p className='resume-p'>Full Stack Javascript/Typescript Web Developer experienced in designing, developing, testing, debugging mobile and web applications.  &nbsp;Developed dynamic interactive applications using React, React-Native, Redux, Node, Express, Superagent.  &nbsp;Experience with MongoDB and SQL.  &nbsp;Built RESTful API servers using NodeJS runtime environment. &nbsp;Experience using Jest, Enzyme, Mocha and Chai unit and integration testing.</p>
                </div>
              </article>
              <div className="clear"></div>
		        </section>
            <section className='section'>
              <div className="sectionTitleSkills">
                <h1 className='resume-h1'>Main Skills</h1>
              </div>
              <div className="sectionContentSkills">
                <ul className="keySkills">
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;JavaScript ES6</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;TypeScript</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;NodeJS, Express</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;React, Redux</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;React-Native, Expo.io</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;AWS</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;GraphQL, Apollo</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Angular, VueJS</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;WebSockets</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Socket.io</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;HTML5, CSS3, jQuery</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;MongoDB</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;CouchDB/CouchDB</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;SQL - PostgreSQL</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Git + Github</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;NPM, Yarn</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Heroku, Travis CI</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;C++, Python</li>
                </ul>
              </div>
              <div className="clear"></div>
            </section>
            <section className='section'>
              <div className="sectionTitle">
                <h1 className='resume-h1'>Recent Projects</h1>
              </div>
              <article className='resume-projects'>
                <p className='resume-p'><strong><a href="https://play.google.com/store/apps/details?id=com.beachtides.beachtides">BeachTides​</a></strong>&nbsp; (Mobile App) - M​VP version Available at Google Play Store - React Native mobile version of my BeachTides web application. Improved client side data handling using mobile async storage. Users can enter location and get daily or future dated tidal information.</p>
              </article>
              <article className='resume-projects'>
                <p className='resume-p'><strong><a href="https://play.google.com/store/apps/details?id=com.functionearth.FunctionEarth">Function Earth​ (Mobile App)</a></strong>- M​VP Available at Google Play Store - React Native application t​racks what we are doing around the world to reduce our footprint and preserve our environment for future generations. Built a compost bin? Recycled? Picked up trash from the ocean? Helped the elderly? Took care of an animal? Use Function Earth to log these actions. Race other cities, states and countries to be the greenest region in the world!</p>
              </article>
              <article className='resume-projects'>
              <p className='resume-p'><strong><a href="https://think-programming-client.herokuapp.com/">Think Programming </a></strong>&nbsp;- Competitive remote pair programming application using websockets. Challenge live opponents in head to head coding problems. Improve programming skills while writing and reviewing coding solutions. Teaches HTML, CSS, JavaScript and data structures.</p>
              </article>
              <article className='resume-projects'>
                <p className='resume-p'><strong><a href="http://www.beachtides.us/">www.BeachTides.us</a></strong> &nbsp;- US Tidal Predictions. Users can save locations for faster results.  Full-Stack Mobile First Responsive Web App. Built using MERN Stack and Google OAuth 2.0.</p>
              </article>
              <article className='resume-projects'>
                <p className='resume-p'><strong><a href="https://client-cs-cards.herokuapp.com/">CS-Cards</a></strong> &nbsp;- Computer Science Cards is a mobile first full-stack project. Using Passport and JWTs for authentication and a spaced-repetition algorithm and Mongo linked list data-structure.</p>
              </article>
              <div className="clear"></div>
            </section>
            <section className='section'>
              <div className="sectionTitleSkills">
                <h1 className='resume-h1'>Other Skills</h1>
              </div>
              <div className="sectionContentSkills">
                <ul className="keySkills">
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Ecommerce</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Management</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Start-Up</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Website Operations</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Leadership</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Inventory Mangement</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Shipping/Receiving</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Business Dev.</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Accounting</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Bookkeeping</li>
                  <li><i class="fas fa-circle fa-sm"></i> &nbsp;Business Automation</li>
                </ul>
              </div>
			        <div className="clear"></div>
		        </section>
		        <section className='section'>
              <div className="sectionTitle work-experience-title">
                <h1 className='resume-h1'>Work Experience</h1>
              </div>
              <div className="sectionContent work-experience">
                <article>
                  <h2 className='resume-h2'>Full Stack Software Engineer - Insight Global/OneView Commerce</h2>
                  <p className="subDetails resume-p">February 2019 to Present</p>
                </article>
                <div className='clear'>
                  <ul className='work-experience-list'>
                    <li>Developed the ability for Kroger Supermarket customers to order online and pickup grocery orders at a  Walgreens store by developing associate to receive shipments from Kroger Supermarkets</li>
                    <li>Developed for SaaS Desktop/Mobile Headless Point Of Sale application using Electron, Cordova</li>
                    <li>Working with Serverless AWS Architected Software: Lambda, Gateway, Cloudfront, SNS, SQS</li>
                    <li>TypeScript, JavaScript, Node, React, Redux, React-Context, CouchDB, PouchDB, AWS, IBM Cloudant</li>
                  </ul>
                </div>
                <article>
                  <h2 className='resume-h2'>Full-Stack Mobile Software Engineer at Function Earth</h2>
                  <p className="subDetails resume-p">November 2018 to Present</p>
                </article>
                <div className='clear'>
                  <ul className='work-experience-list'>
                    <li>Deployed BeachTides Mobile App to Google Play Store June 2019</li>
                    <li>Deployed Function Earth Mobile App to Google Play Store February 2019</li>
                    <li>Developing IOS and Android application designed to promote users to clean the environment</li>
                    <li>leveraged Using React-Native, React-Native-Navigation, React, Redux, Node, Express, MongoDB, Javascript, HTML, CSS </li>
                  </ul>
                </div>
                <article>
                  <h2 className='resume-h2'>Developer Apprentice at Thinkful</h2>
                  <p className="subDetails resume-p">May 2018 to Present</p>
                </article>
                <div className='clear'>
                  <ul className='work-experience-list'>
                    <li>Deployed mobile first responsive web apps using  the MERN Stack MongoDB with MLab for cloud database, Node and Express RESTFUL API, React.js and Redux for state management. BeachTides uses Google OAuth 2.0 for authentication and JWT and Passport on the backend.</li>
                    <li>Used JavaScript and ES6 to build interactive client-side web apps, advanced frontend designs, build, test, and deploy complex apps using React, Redux, React Router, Redux Form, Redux Thunk, and front end testing with Enzyme.</li>
                    <li>Built Server Side Programming with NodeJS and ExpressJS- Built modern RESTful APIs with PostGres and Mongo backends. Learn modern JWT-based auth flows and test apps with the Mocha and Chai frameworks on TravisCI, and deploying with Heroku.</li>
                    <li>Used Computer Science, data structures, algorithms and Big O notation to produce clean optimal code.</li>
                  </ul>
                </div>
                <article>
                  <h2 className='resume-h2'>Founder & President at E-Prime Sourcing Inc.</h2>
                  <p className="subDetails resume-p">April 2015 - July 2018</p>
                </article>
                <div className='clear'>
                  <ul className='work-experience-list'>
                    <li>Opened E-Prime Sourcing as an S-Corporation in April 2015. Starting in Garage part time to commercial warehouse with one employee and over 1.29 million in sales leading to a distribution deal with 3M Manufacturing Company.</li>
                    <li>Earned over $857,000 in revenue within a last calendar year with 41,357 units ordered and shipped.</li>
                    <li>Developed ecommerce website from ground up to include over 350 products and revenue streams with Amazon, Walmart and Ebay. &nbsp;Successfully added over 800 listings on Amazon.com, 300 on Ebay, and over 120 on Walmart.com.</li>
                    <li>In July of 2018 closed company due increased competition, decreased margins and Amazon changes.</li>
                  </ul>
                  </div>
                <article>
                  <h2 className='resume-h2'>Pro-Services Specialist at Lowe's</h2>
                  <p className="subDetails resume-p">January 2013 - March 2016</p>
                </article>
                <article>
                  <h2 className='resume-h2'>Elementary Education Support for Manchester, NH School District</h2>
                  <p className="subDetails resume-p">2009 - 2012</p>
                </article>
                {/* <article>
                  <h2 className='resume-h2'>Custom Picture Framer</h2>
                  <p className="subDetails framer resume-p">2006 - 2008</p>
                </article> */}
              </div>
			        <div className="clear"></div>
		        </section>
		        <section className='section'>
              <div className="sectionTitle">
                <h1 className='resume-h1'>Education</h1>
              </div>
              <div className="sectionContent education">
                <article>
                  <h2 className='resume-h2'>Thinkful</h2>
                  <p className="subDetails resume-p">Engineering Immersion - Full Stack - November 2018</p>
                </article>
                <div className="clear"></div>
                  <ul className='education-list'>
                    <li>Daily mentorship meetings with Senior Software Developers. Used Agile Methodology</li>
                    <li>rigorous and structured full-time programming school - completed group projects and pair program with a group of 20 peers all day, every day for 5 months over 1600 hours of course work.</li>
                    <li>JavaScript and ES6 - Built interactive web apps with React and Redux.</li>
                    <li>Server Side Programming with NodeJS and ExpressJS- Build modern RESTful APIs with PostGres and Mongo backends. Learned modern JWT-based auth flows and test apps with the Mocha and Chai frameworks on TravisCI, and deploy to Heroku.</li>
                    <li>Learned to design, build, test, and deploy complex apps using React, Redux, React Router, Redux Form, and Redux Thunk. Testing with Enzyme and Mocha, and deployment using Netlify and Heroku.</li>
                    <li>Computer Science Foundations - Learn foundations of CS, data structures, and the analysis of algorithms</li>
                  </ul>
                <article>
                  <h2 className='resume-h2'>Eastern Nazarene College</h2>
                  <p className="subDetails resume-p">Bachelor of Arts - Child/Adolescent Psychology - January 2009</p>
                </article>
              </div>
			      <div className="clear"></div>
		      </section>
      	</div>
      </div>
      <script type="text/javascript">
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
        document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
      </script>
      <script type="text/javascript">
        var pageTracker = _gat._getTracker("UA-3753241-1");
        pageTracker._initData();
        pageTracker._trackPageview();
      </script>
    </main>
  );
};