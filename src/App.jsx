import React from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;