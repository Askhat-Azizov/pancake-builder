import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import PancakeBuilder from './Conteiners/PancakeBuilder/PancakeBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
         <PancakeBuilder/>
      </Layout>
      
    </div>
  );
}

export default App;
