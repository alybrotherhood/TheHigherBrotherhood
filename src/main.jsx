import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

import { PrismicProvider } from '@prismicio/react';
import { client } from './modules/prismic';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrismicProvider client={client}>
        <App />
    </PrismicProvider>
);
