import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';

const client = new ApolloClient({
  uri: "https://YTBackend-1.bhargabnath.repl.co",
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
