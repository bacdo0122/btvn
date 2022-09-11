import Layout from 'components/Layout';
import React from 'react';
import Pages from 'routes/Routers';
import './App.css';

function App() {
  
  return (
    <Layout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Pages />
      </React.Suspense>
    </Layout>
  );
}

export default App;
