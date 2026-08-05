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

import pnpm from './../images/tech-icons/pnpm.png';
import nx from './../images/tech-icons/nx.webp';
import npm from './../images/tech-icons/npm-logo.png';
import poetry from './../images/tech-icons/poetry.jpeg';

import jest from './../images/tech-icons/jest.png';
import mocha from './../images/tech-icons/mocha.png';
import chai from './../images/tech-icons/chai.png';

import circleci from './../images/tech-icons/circleci.png';
import git from './../images/tech-icons/git.png';

const techGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', img: typescript, link: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', img: javascript, link: 'https://www.javascript.com/' },
      { name: 'Python', img: python, link: 'https://www.python.org/' },
      { name: 'Kotlin', abbr: 'KT', link: 'https://kotlinlang.org/' },
      { name: 'HTML5', img: html5, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
      { name: 'CSS3', img: css3, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ]
  },
  {
    title: 'Frontend & UX',
    items: [
      { name: 'React', img: react, link: 'https://react.dev/' },
      { name: 'React Native', img: reactNative, link: 'https://reactnative.dev/' },
      { name: 'Redux', img: redux, link: 'https://redux.js.org/' },
      { name: 'Electron', img: electron, link: 'https://www.electronjs.org/' },
      { name: 'Streamlit', img: streamlit, link: 'https://streamlit.io/', height: '75px' }
    ]
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', img: node, link: 'https://nodejs.org/en' },
      { name: 'Express', img: express, link: 'https://expressjs.com/' },
      { name: 'FastAPI', img: fastApi, link: 'https://fastapi.tiangolo.com/', height: '70px' }
    ]
  },
  {
    title: 'Cloud & Platform',
    items: [
      { name: 'AWS', img: aws, link: 'https://aws.amazon.com/' },
      { name: 'GCP', img: gcp, link: 'https://cloud.google.com/' },
      { name: 'Azure', img: azure, link: 'https://azure.microsoft.com/' },
      { name: 'Serverless', img: serverless, link: 'https://www.serverless.com/' },
      { name: 'Docker', img: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', link: 'https://www.docker.com/' },
      { name: 'Terraform', abbr: 'TF', link: 'https://developer.hashicorp.com/terraform' },
      { name: 'Cloud Run', abbr: 'CR', link: 'https://cloud.google.com/run' },
      { name: 'Firebase', abbr: 'FB', link: 'https://firebase.google.com/' }
    ]
  },
  {
    title: 'AI / ML Stack',
    items: [
      { name: 'LangGraph', img: langgraph, link: 'https://www.langchain.com/langgraph' },
      { name: 'LangChain', img: langgraph, link: 'https://www.langchain.com/' },
      { name: 'MCP', abbr: 'MCP', link: 'https://modelcontextprotocol.io/' },
      { name: 'Hugging Face', abbr: 'HF', link: 'https://huggingface.co/' },
      { name: 'Ollama', abbr: 'OL', link: 'https://ollama.com/' },
      { name: 'TensorFlow', img: tensorflow, link: 'https://www.tensorflow.org/', height: '70px' },
      { name: 'PyTorch', img: pytorch, link: 'https://pytorch.org/', height: '70px' },
      { name: 'Scikit-learn', img: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png', link: 'https://scikit-learn.org/stable/', height: '50px' },
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
      { name: 'BigQuery', abbr: 'BQ', link: 'https://cloud.google.com/bigquery' },
      { name: 'PostgreSQL', img: postgresql, link: 'https://www.postgresql.org/' },
      { name: 'MongoDB', img: mongodb, link: 'https://www.mongodb.com/' },
      { name: 'Pub/Sub', abbr: 'PS', link: 'https://cloud.google.com/pubsub' },
      { name: 'Dataflow', abbr: 'DF', link: 'https://cloud.google.com/dataflow' },
      { name: 'Typesense', img: typesense, link: 'https://typesense.org/' },
      { name: 'FAISS', abbr: 'FA', link: 'https://faiss.ai/' },
      { name: 'SQL', img: sql, link: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'CouchDB', img: couchdb, link: 'https://couchdb.apache.org/' },
      { name: 'PouchDB', img: pouchdb, link: 'https://pouchdb.com/' }
    ]
  },
  {
    title: 'Tooling & Delivery',
    items: [
      { name: 'Git', img: git, link: 'https://git-scm.com/' },
      { name: 'pnpm', img: pnpm, link: 'https://pnpm.io/' },
      { name: 'Nx', img: nx, link: 'https://nx.dev/' },
      { name: 'NPM', img: npm, link: 'https://www.npmjs.com/', height: '45px' },
      { name: 'Poetry', img: poetry, link: 'https://python-poetry.org/' },
      { name: 'Webpack', img: 'https://webpack.js.org/assets/icon-square-big.svg', link: 'https://webpack.js.org/', height: '60px' },
      { name: 'CircleCI', img: circleci, link: 'https://circleci.com/' }
    ]
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', img: jest, link: 'https://jestjs.io/' },
      { name: 'Mocha', img: mocha, link: 'https://mochajs.org/' },
      { name: 'Chai', img: chai, link: 'https://www.chaijs.com/' }
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
        <article key={group.title} className='tech-card' data-reveal>
          <h2>{group.title}</h2>
          <div className='tech-logo-grid'>
            {group.items.map(item => (
              <a
                href={item.link}
                key={item.name}
                target='_blank'
                rel='noopener noreferrer'
                className={item.img ? '' : 'tech-wordmark'}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={`${item.name} logo`}
                    height={item.height ? item.height : '60px'}
                    loading='lazy'
                  />
                ) : (
                  <span className='tech-wordmark-tile' aria-hidden='true'>
                    {item.abbr}
                  </span>
                )}
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
