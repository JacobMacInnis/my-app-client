import React from 'react';
import './styles/my-stack.css';

import html5 from './../images/tech-icons/html5.png';
import css3 from './../images/tech-icons/css3.png';
import typescript from './../images/tech-icons/typescript.png';
import javascript from './../images/tech-icons/javascript.png';
import python from './../images/tech-icons/python.png';

import node from './../images/tech-icons/node.png';
import express from './../images/tech-icons/express.png';
import react from './../images/tech-icons/react.png';
import reactNative from './../images/tech-icons/reactnative.svg';
import redux from './../images/tech-icons/redux.png';
import fastApi from './../images/tech-icons/fastApi.png';
import streamlit from './../images/tech-icons/streamlit.png';
import serverless from './../images/tech-icons/serverless.png';
import electron from './../images/tech-icons/electron.png';
import cordova from './../images/tech-icons/cordova.png';

import aws from './../images/tech-icons/aws-logo.png';
import gcp from './../images/tech-icons/gcp.png';
import azure from './../images/tech-icons/azure.png';

import tensorflow from './../images/tech-icons/tensorflow.png';
import pytorch from './../images/tech-icons/pytorch.png';
import langgraph from './../images/tech-icons/langgraph.png';
import pandas from './../images/tech-icons/pandas.svg';
import numpy from './../images/tech-icons/numpy.png';
import seaborn from './../images/tech-icons/seaborn.svg';
import matplotlib from './../images/tech-icons/matplotlib.png';

import firestore from './../images/tech-icons/firestore.png';
import typesense from './../images/tech-icons/typesense.png';
import mongodb from './../images/tech-icons/mongodb.png';
import sql from './../images/tech-icons/sql.png';
import postgresql from './../images/tech-icons/postgresql.png';
import couchdb from './../images/tech-icons/couchdb.svg';
import pouchdb from './../images/tech-icons/pouchdb.svg';
import cloudant from './../images/tech-icons/cloudant.svg';

import pnpm from './../images/tech-icons/pnpm.png';
import nx from './../images/tech-icons/nx.webp';
import npm from './../images/tech-icons/npm-logo.png';
import poetry from './../images/tech-icons/poetry.jpeg';

import jest from './../images/tech-icons/jest.png';
import mocha from './../images/tech-icons/mocha.png';
import chai from './../images/tech-icons/chai.png';
import enzyme from './../images/tech-icons/enzyme.png';

import circleci from './../images/tech-icons/circleci.png';
import travisci from './../images/tech-icons/travisci.png';

const techGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', img: typescript, link: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', img: javascript, link: 'https://www.javascript.com/' },
      { name: 'Python', img: python, link: 'https://www.python.org/' },
      { name: 'HTML5', img: html5, link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
      { name: 'CSS3', img: css3, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ]
  },
  {
    title: 'Frontend & UX',
    items: [
      { name: 'React', img: react, link: 'https://reactjs.org/' },
      { name: 'React Native', img: reactNative, link: 'https://reactnative.dev/' },
      { name: 'Redux', img: redux, link: 'https://redux.js.org/' },
      { name: 'Electron', img: electron, link: 'https://www.electronjs.org/' },
      { name: 'Cordova', img: cordova, link: 'https://cordova.apache.org/' },
      { name: 'Streamlit', img: streamlit, link: 'https://streamlit.io/', height: '75px' }
    ]
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: node, link: 'https://nodejs.org/en/' },
      { name: 'Express', img: express, link: 'https://expressjs.com/' },
      { name: 'FastAPI', img: fastApi, link: 'https://fastapi.tiangolo.com/', height: '70px' }
    ]
  },
  {
    title: 'Cloud & Platform',
    items: [
      { name: 'AWS', img: aws, link: 'https://aws.amazon.com/' },
      { name: 'GCP', img: gcp, link: 'https://cloud.google.com/' },
      { name: 'Azure', img: azure, link: 'https://azure.microsoft.com/en-us/' },
      { name: 'Serverless', img: serverless, link: 'https://www.serverless.com/' },
      { name: 'Docker', img: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', link: 'https://www.docker.com/' }
    ]
  },
  {
    title: 'AI / ML Stack',
    items: [
      { name: 'LangGraph', img: langgraph, link: 'https://langgraph.com/' },
      { name: 'LangChain', img: langgraph, link: 'https://langchain.com/' },
      { name: 'Scikit-learn', img: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png', link: 'https://scikit-learn.org/stable/', height: '50px' },
      { name: 'TensorFlow', img: tensorflow, link: 'https://www.tensorflow.org/', height: '70px' },
      { name: 'PyTorch', img: pytorch, link: 'https://pytorch.org/', height: '70px' },
      { name: 'Pandas', img: pandas, link: 'https://pandas.pydata.org/' },
      { name: 'NumPy', img: numpy, link: 'https://numpy.org/' },
      { name: 'Seaborn', img: seaborn, link: 'https://seaborn.pydata.org/' },
      { name: 'Matplotlib', img: matplotlib, link: 'https://matplotlib.org/' }
    ]
  },
  {
    title: 'Data & Search',
    items: [
      { name: 'Firestore', img: firestore, link: 'https://firebase.google.com/docs/firestore' },
      { name: 'Typesense', img: typesense, link: 'https://typesense.org/' },
      { name: 'MongoDB', img: mongodb, link: 'https://www.mongodb.com/' },
      { name: 'SQL', img: sql, link: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'PostgreSQL', img: postgresql, link: 'https://www.postgresql.org/' },
      { name: 'CouchDB', img: couchdb, link: 'https://couchdb.apache.org/' },
      { name: 'PouchDB', img: pouchdb, link: 'https://pouchdb.com/' },
      { name: 'Cloudant', img: cloudant, link: 'https://www.ibm.com/cloud/cloudant' }
    ]
  },
  {
    title: 'Tooling & Delivery',
    items: [
      { name: 'pnpm', img: pnpm, link: 'https://pnpm.io/' },
      { name: 'Nx', img: nx, link: 'https://nx.dev/' },
      { name: 'NPM', img: npm, link: 'https://www.npmjs.com/', height: '45px' },
      { name: 'Poetry', img: poetry, link: 'https://python-poetry.org/' },
      { name: 'Webpack', img: 'https://webpack.js.org/assets/icon-square-big.svg', link: 'https://webpack.js.org/', height: '60px' },
      { name: 'CircleCI', img: circleci, link: 'https://circleci.com/' },
      { name: 'Travis CI', img: travisci, link: 'https://travis-ci.org/' }
    ]
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', img: jest, link: 'https://jestjs.io/' },
      { name: 'Mocha', img: mocha, link: 'https://mochajs.org/' },
      { name: 'Chai', img: chai, link: 'https://www.chaijs.com/' },
      { name: 'Enzyme', img: enzyme, link: 'https://enzymejs.github.io/enzyme/' }
    ]
  }
];

const MyStack = () => (
  <section className='tech-stack' id='tech-stack'>
    <div className='tech-stack-hero'>
      <h1 className='tech-stack-header'>Tech Stack</h1>
    </div>
    <div className='tech-card-grid'>
      {techGroups.map(group => (
        <article key={group.title} className='tech-card'>
          <h2>{group.title}</h2>
          <div className='tech-logo-grid'>
            {group.items.map(item => (
              <a href={item.link} key={item.name} target='_blank' rel='noopener noreferrer'>
                <img src={item.img} alt={`${item.name} logo`} height={item.height ? item.height : '60px'} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default MyStack;
