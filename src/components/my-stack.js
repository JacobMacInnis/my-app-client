import React, { Component } from 'react';
import './styles/my-stack.css';
/** Languages */
import html5 from './../images/tech-icons/html5.png';
import css3 from './../images/tech-icons/css3.png';
import typescript from './../images/tech-icons/typescript.png';
import node from './../images/tech-icons/node.png';
import javascript from './../images/tech-icons/javascript.png';
import python from './../images/tech-icons/python.png';

/** Cloud */
import aws from './../images/tech-icons/aws-logo.png';
import gcp from './../images/tech-icons/gcp.png';
import azure from './../images/tech-icons/azure.png';

/** Frameworks and Libraries */
import express from './../images/tech-icons/express.png';
import react from './../images/tech-icons/react.png';
import redux from './../images/tech-icons/redux.png';
import webpack from './../images/tech-icons/webpack.png';

// import reactNative from './../images/tech-icons/react-native.svg';
import reactNative from './../images/tech-icons/reactnative.svg';
import serverless from './../images/tech-icons/serverless.png';
import tensorflow from './../images/tech-icons/tensorflow.png';
import electron from './../images/tech-icons/electron.png';
import cordova from './../images/tech-icons/cordova.png';
// import graphQL from './../images/tech-icons/graphql-logo.png';

/** Data Science and Machine Learning */
import pandas from './../images/tech-icons/pandas.svg';
import numpy from './../images/tech-icons/numpy.png';
import matplotlib from './../images/tech-icons/matplotlib.png';

/** Databases */
import firestore from './../images/tech-icons/firestore.png';
import typesense from './../images/tech-icons/typesense.png';
import mongodb from './../images/tech-icons/mongodb.png';
import sql from './../images/tech-icons/sql.png';
import postgresql from './../images/tech-icons/postgresql.png';
import couchdb from './../images/tech-icons/couchdb.svg';
import pouchdb from './../images/tech-icons/pouchdb.svg';
import cloudant from './../images/tech-icons/cloudant.svg';

/** Package Managers and other Tools */
import pnpm from './../images/tech-icons/pnpm.png';
import nx from './../images/tech-icons/nx.webp';
import npm from './../images/tech-icons/npm-logo.png';

/** Testing */
import jest from './../images/tech-icons/jest.png';
import mocha from './../images/tech-icons/mocha.png';
import chai from './../images/tech-icons/chai.png';
import enzyme from './../images/tech-icons/enzyme.png';
// import angular from './../images/tech-icons/angular.png';

/** CI/CD Services */
import circleci from './../images/tech-icons/circleci.png';
import travisci from './../images/tech-icons/travisci.png';

class MyStack extends Component {
  render() {
    return (
      <section className='tech-stack' id='tech-stack'>
        <h1 className='tech-stack-header'>Tech Stack</h1>
        <div className='container-1'>
          {[
            { name: "Languages", type: 'header' },
            { name: "TypeScript", img: typescript, link: "https://www.typescriptlang.org/" },
            { name: "JavaScript", img: javascript, link: "https://www.javascript.com/" },
            { name: "Python", img: python, link: "https://www.python.org/" },
            { name: "HTML5", img: html5, link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
            { name: "CSS3", img: css3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

            { name: "Libraries, Frameworks and Runtimes", type: 'header' },
            { name: "Node.js", img: node, link: "https://nodejs.org/en/" },
            { name: "Express", img: express, link: "https://expressjs.com/" },
            { name: "React", img: react, link: "https://reactjs.org/" },
            { name: "React Native", img: reactNative, link: "https://reactnative.dev/" },
            { name: "Redux", img: redux, link: "https://redux.js.org/" },
            { name: "Electron", img: electron, link: "https://www.electronjs.org/" },
            { name: "Cordova", img: cordova, link: "https://cordova.apache.org/" },
            { name: "Webpack", img: webpack, link: "https://webpack.js.org/" },
            // { name: "GraphQL", img: graphQL, link: "https://graphql.org/" },

            { name: "Cloud and Infrastructure", type: 'header' },
            { name: "AWS", img: aws, link: "https://aws.amazon.com/" },
            { name: "GCP", img: gcp, link: "https://cloud.google.com/" },
            { name: "Azure", img: azure, link: "https://azure.microsoft.com/en-us/" },
            { name: "Serverless", img: serverless, link: "https://www.serverless.com/" },

            { name: "Data Science and Machine Learning", type: 'header' },
            { name: "TensorFlow", img: tensorflow, link: "https://www.tensorflow.org/", height: '70px' },
            { name: "Pandas", img: pandas, link: "https://pandas.pydata.org/" },
            { name: "NumPy", img: numpy, link: "https://numpy.org/" },
            { name: "Matplotlib", img: matplotlib, link: "https://matplotlib.org/" },

            { name: "Databases", type: 'header' },
            { name: "Firestore", img: firestore, link: "https://firebase.google.com/docs/firestore" },
            { name: 'Typesense', img: typesense, link: 'https://typesense.org/' },
            { name: "MongoDB", img: mongodb, link: "https://www.mongodb.com/" },
            { name: "SQL", img: sql, link: "https://en.wikipedia.org/wiki/SQL" },
            { name: "PostgreSQL", img: postgresql, link: "https://www.postgresql.org/" },
            { name: "CouchDB", img: couchdb, link: "https://couchdb.apache.org/" },
            { name: "PouchDB", img: pouchdb, link: "https://pouchdb.com/" },
            { name: "IBM Cloudant", img: cloudant, link: "https://www.ibm.com/cloud/cloudant" },

            { name: "Package Managers", type: 'header' },
            { name: "pnpm", img: pnpm, link: "https://pnpm.io/" },
            { name: "Nx", img: nx, link: "https://nx.dev/" },
            { name: "NPM", img: npm, link: "https://www.npmjs.com/", height: '45px' },

            { name: "CI/CD Services", type: 'header' },
            { name: "CircleCI", img: circleci, link: "https://circleci.com/" },
            { name: "Travis CI", img: travisci, link: "https://travis-ci.org/" },

            { name: "Testing", type: 'header' },
            { name: "Jest", img: jest, link: "https://jestjs.io/" },
            { name: "Mocha", img: mocha, link: "https://mochajs.org/" },
            { name: "Chai", img: chai, link: "https://www.chaijs.com/" },
            { name: "Enzyme", img: enzyme, link: "https://enzymejs.github.io/enzyme/" },
            // { name: "Docker", img: docker, link: "https://www.docker.com/" },

          ].map((tech, index) => {
            if (tech.type === 'header') {
              console.log('tech', tech)
              return (<div key={index} className="tech-category">
                <h2 key={index} className='tech-stack-list-header'>{tech.name}</h2>
              </div>)
            } else {
              return (<div key={index}>
                <a href={tech.link} target='_blank' rel='noopener noreferrer'>
                  <img src={tech.img} alt={`${tech.name} logo`} height={tech.height ? tech.height : '65px'} />
                  <h3>{tech.name}</h3>
                </a>
              </div>)
            }
          })}
        </div>
      </section>
    );
  }
}

export default MyStack;
