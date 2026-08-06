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
import poetry from './../images/tech-icons/poetry.svg';

import jest from './../images/tech-icons/jest.png';
import mocha from './../images/tech-icons/mocha.png';
import chai from './../images/tech-icons/chai.png';

import circleci from './../images/tech-icons/circleci.png';
import git from './../images/tech-icons/git.png';

import docker from './../images/tech-icons/docker.png';
import scikitLearn from './../images/tech-icons/scikit-learn.png';
import webpack from './../images/tech-icons/webpack.svg';

import kotlin from './../images/tech-icons/kotlin.svg';
import terraform from './../images/tech-icons/terraform.svg';
import firebase from './../images/tech-icons/firebase.svg';
import cloudRun from './../images/tech-icons/cloud-run.svg';
import langchain from './../images/tech-icons/langchain.svg';
import huggingface from './../images/tech-icons/huggingface.svg';
import ollama from './../images/tech-icons/ollama.svg';
import claude from './../images/tech-icons/claude.svg';
import anthropic from './../images/tech-icons/anthropic.svg';
import openai from './../images/tech-icons/openai.svg';
import codex from './../images/tech-icons/codex.svg';
import mcp from './../images/tech-icons/modelcontextprotocol.svg';
import bigquery from './../images/tech-icons/googlebigquery.svg';
import pubsub from './../images/tech-icons/googlepubsub.svg';
import dataflow from './../images/tech-icons/googledataflow.svg';
import vite from './../images/tech-icons/vite.svg';
import vitest from './../images/tech-icons/vitest.svg';

export const techGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', img: typescript, link: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', img: javascript, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Python', img: python, link: 'https://www.python.org/' },
      { name: 'Kotlin', img: kotlin, link: 'https://kotlinlang.org/' },
      { name: 'HTML5', img: html5, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
      { name: 'CSS3', img: css3, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ]
  },
  {
    title: 'Frameworks & Runtimes',
    items: [
      { name: 'React', img: react, link: 'https://react.dev/' },
      { name: 'React Native', img: reactNative, link: 'https://reactnative.dev/' },
      { name: 'Redux', img: redux, link: 'https://redux.js.org/' },
      { name: 'Electron', img: electron, link: 'https://www.electronjs.org/' },
      { name: 'Streamlit', img: streamlit, link: 'https://streamlit.io/' },
      { name: 'Node.js', img: node, link: 'https://nodejs.org/en' },
      { name: 'Express', img: express, link: 'https://expressjs.com/' },
      { name: 'FastAPI', img: fastApi, link: 'https://fastapi.tiangolo.com/' }
    ]
  },
  {
    title: 'Cloud & Platform',
    items: [
      { name: 'AWS', img: aws, link: 'https://aws.amazon.com/' },
      { name: 'GCP', img: gcp, link: 'https://cloud.google.com/' },
      { name: 'Azure', img: azure, link: 'https://azure.microsoft.com/' },
      { name: 'Serverless', img: serverless, link: 'https://www.serverless.com/' },
      { name: 'Docker', img: docker, link: 'https://www.docker.com/' },
      { name: 'Terraform', img: terraform, link: 'https://developer.hashicorp.com/terraform' },
      { name: 'Cloud Run', img: cloudRun, link: 'https://cloud.google.com/run' },
      { name: 'Firebase', img: firebase, link: 'https://firebase.google.com/' }
    ]
  },
  {
    title: 'AI / ML Stack',
    items: [
      { name: 'LangGraph', img: langgraph, link: 'https://www.langchain.com/langgraph' },
      { name: 'LangChain', img: langchain, link: 'https://www.langchain.com/' },
      { name: 'Hugging Face', img: huggingface, link: 'https://huggingface.co/' },
      { name: 'Ollama', img: ollama, mono: true, link: 'https://ollama.com/' },
      { name: 'TensorFlow', img: tensorflow, link: 'https://www.tensorflow.org/' },
      { name: 'PyTorch', img: pytorch, link: 'https://pytorch.org/' },
      { name: 'Scikit-learn', img: scikitLearn, link: 'https://scikit-learn.org/stable/' }
    ]
  },
  {
    title: 'AI Coding & Agent Tooling',
    items: [
      { name: 'Claude Code', img: claude, link: 'https://claude.com/claude-code' },
      { name: 'Anthropic API', img: anthropic, mono: true, link: 'https://docs.anthropic.com/' },
      { name: 'OpenAI API', img: openai, mono: true, link: 'https://platform.openai.com/docs' },
      { name: 'Codex', img: codex, mono: true, link: 'https://openai.com/codex/' },
      { name: 'Agent Skills', abbr: 'SK', link: 'https://code.claude.com/docs/en/skills' },
      { name: 'MCP Servers', img: mcp, mono: true, link: 'https://modelcontextprotocol.io/' }
    ]
  },
  {
    title: 'Data Science',
    items: [
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
      { name: 'BigQuery', img: bigquery, link: 'https://cloud.google.com/bigquery' },
      { name: 'PostgreSQL', img: postgresql, link: 'https://www.postgresql.org/' },
      { name: 'MongoDB', img: mongodb, link: 'https://www.mongodb.com/' },
      { name: 'Pub/Sub', img: pubsub, link: 'https://cloud.google.com/pubsub' },
      { name: 'Dataflow', img: dataflow, link: 'https://cloud.google.com/dataflow' },
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
      { name: 'NPM', img: npm, link: 'https://www.npmjs.com/' },
      { name: 'Poetry', img: poetry, link: 'https://python-poetry.org/' },
      { name: 'Vite', img: vite, link: 'https://vite.dev/' },
      { name: 'Webpack', img: webpack, link: 'https://webpack.js.org/' },
      { name: 'CircleCI', img: circleci, link: 'https://circleci.com/' },
      { name: 'Jest', img: jest, link: 'https://jestjs.io/' },
      { name: 'Vitest', img: vitest, link: 'https://vitest.dev/' },
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
                    className={item.mono ? 'tech-icon-mono' : undefined}
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
