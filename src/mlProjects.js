import R2AI from './images/screenshots/graph.svg';
import AgentCortex from './images/screenshots/agent-cortex-v1.png';
import AgentCortex2 from './images/screenshots/agent-cortex-v2.png';
import ragApi from './images/screenshots/rag-api.jpeg';
import agriculturalLeafVision from './images/screenshots/agricultural-leaf-vision.png';
import summitMind from './images/screenshots/summit-mind.drawio.png';
import parisAirbnbKMeans from './images/screenshots/paris_airbnb_clustering.png';
import breastCancerSvm from './images/screenshots/binary_classification.png';
import CareerCompass from './images/screenshots/career_compass_loss_curve.png';

export const mlProjects = [
    {
        name: 'R2AI',
        h2: 'R2AI Agent',
        description: 'R2AI is a semi-autonomous refactoring agent built using LangGraph. It analyzes and improves Python code structure using Ruff, refactors it via LLM, and supports human-in-the-loop review with feedback that can trigger iterative improvements.',
        image: R2AI,
        github: 'https://github.com/JacobMacInnis/r2ai',
        techList: ['Python',
            'LangGraph',
            'LangChain',
            'Ollama',
            'Mistral',
            'OpenAI API',
            'Ruff',
            'Poetry'],
        tags: ['ml', 'ai', 'agents']
    },
    {
        name: 'agent_cortex_v2',
        h2: 'Agent Cortex v2',
        description: 'Agent Cortex v2 expands the local AI assistant with new tools including: persistent long-term memory, Python code execution, and short-term conversational context. Built on LangChain and Mistral 7B, it enhances the original RAG, math, and web search tools',
        image: AgentCortex2,
        github: 'https://github.com/JacobMacInnis/agent_cortex_v2',
        techList: ['Python',
            'LangChain',
            'Mistral',
            'Ollama',
            'ChromaDB',
            'FAISS',
            'DuckDuckGo Search',
            'Python Code Execution',
            'Poetry'],
        tags: ['ml', 'agents']
    },
    {
        name: 'agent_cortex_v1',
        h2: 'Agent Cortex v1',
        description: 'Agent Cortex is a local AI assistant powered by LangChain and Mistral 7B. It combines: Document retrieval (RAG), Math solving, and DuckDuckGo web search. Runs fully offline (except for websearch)—no paid LLM APIs',
        image: AgentCortex,
        github: 'https://github.com/JacobMacInnis/agent_cortex_v1',
        techList: ['Python',
            'LangChain',
            'Mistral',
            'Ollama',
            'ChromaDB',
            'FAISS',
            'DuckDuckGo Search',
            'Python Code Execution',
            'Poetry'],
        tags: ['ml', 'agents']
    },
    {
        name: 'rag-api',
        h2: 'RAG API',
        description: 'production-ready RAG (Retrieval-Augmented Generation) backend built with FastAPI, SentenceTransformers, and FLAN-T5. It demonstrates a modern approach to question-answering using both semantic search and language generation.',
        image: ragApi,
        github: 'https://github.com/JacobMacInnis/rag-api',
        techList: ['Python',
            'FastAPI',
            'SentenceTransformers',
            'transformers',
            'torch',
            'numpy',
            'FAISS',
            'FLAN-T5',
            'Docker',
            'Poetry'],
        tags: ['ml', 'cloud']
    },
    {
        name: 'agricultural-leaf-vision',
        h2: 'Agricultural Leaf Vision',
        description: 'A lightweight computer vision project developed to deepen my understanding of image preprocessing, transfer learning, and end-to-end ML deployment with minimal cloud cost. It\'s built using transfer learning with CNN EfficientNetB2',
        image: agriculturalLeafVision,
        github: 'https://github.com/JacobMacInnis/rag-api',
        projectLink: 'https://agricultural-leaf-vision-7fab2.web.app/',
        linkText: 'Firebase Demo + Cloud Run',
        techList: ['Python',
            'TensorFlow',
            'Keras',
            'scikit-learn',
            'EfficientNetB2',
            'Transfer Learning',
            'matplotlib',
            'seaborn',
            'firebase',
            'google-cloud-aiplatform',
            'Docker',
            'FastAPI',
            'Poetry'],
        tags: ['ml', 'cv']
    },
    {
        name: 'summit-mind',
        h2: 'Summit Mind',
        description: 'a portfolio project built to experiment with and deploy lightweight abstracted summarization models based on the T5 (Text-to-Text Transfer Transformer series) models. Designed to summarize multi-turn conversations (e.g., meetings, support chats)',
        image: summitMind,
        github: 'https://github.com/JacobMacInnis/summit-mind',
        projectLink: 'https://summit-mind-55f22.web.app/',
        linkText: 'Firebase Demo + Cloud Run',
        techList: ['Python',
            'PyTorch',
            'T5',
            'Hugging Face Transformers',
            'Numpy',
            'FastAPI',
            'Firebase',
            'Google Cloud Run',
            'Google Cloud Registry',
            'Docker',
            'Poetry',
        ],
        tags: ['ml', 'nlp']
    },
    {
        name: 'paris-airbnb-kmeans',
        h2: 'Paris Airbnb Clustering',
        description: 'Exploratory KMeans analysis of Paris Airbnb listings that contrasts amenity + pricing bundles with spatial price bands, highlighting how neighborhoods and feature sets drive nightly rates.',
        image: parisAirbnbKMeans,
        github: 'https://github.com/JacobMacInnis/Unsupervised_KMeans_AirBnb_Paris',
        techList: [
            'Python',
            'pandas',
            'numpy',
            'scikit-learn',
            'KMeans',
            'matplotlib',
            'seaborn',
            'plotly',
            'geopandas',
            'contextily',
            'Jupyter Notebook'
        ],
        tags: ['ml', 'unsupervised']
    },
    {
        name: 'breast-cancer-svm',
        h2: 'Breast Cancer SVM',
        description: 'Binary classification pipeline that standardizes the UCI breast cancer dataset, trains an SVC baseline, then tunes C/Gamma and benchmarks against logistic regression and random forest to reach ~0.995 ROC-AUC.',
        image: breastCancerSvm,
        github: 'https://github.com/JacobMacInnis/SVM_Binary_Classification_Breast_Cancer_Diagnosis',
        techList: [
            'Python',
            'pandas',
            'numpy',
            'scikit-learn',
            'StandardScaler',
            'ColumnTransformer',
            'SVC (RBF)',
            'GridSearchCV',
            'SelectKBest',
            'LogisticRegression',
            'RandomForestClassifier',
            'matplotlib',
            'seaborn',
            'Jupyter Notebook'
        ],
        tags: ['ml', 'classification']
    },
    {
        name: 'career-compass',
        h2: 'Career Compass',
        description: 'A production-grade machine learning system that predicts whether a user is currently employed based on structured profile attributes. It uses a supervised binary classification model built with TensorFlow/Keras (Sequential API) — a deep feedforward neural network trained on structured tabular data.',
        image: CareerCompass,
        github: 'https://github.com/JacobMacInnis/career-compass',
        techList: [
            'Python',
            'TensorFlow',
            'Keras',
            'Pandas',
            'Scikit-learn',
            'Matplotlib',
            'Seaborn',
            'FastAPI',
            'PostgreSQL',
            'Cloud SQL',
            'Google Cloud Run',
            'Google Cloud Registry',
            'Docker',
            'Poetry'
        ],
        tags: ['ml', 'cloud']
    }


];
