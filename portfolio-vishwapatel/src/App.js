import React from 'react';
import AppRouter from './components/AppRouter';
import AIChatWidget from './components/AIChatWidget';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <AppRouter />
      <AIChatWidget />
    </>
  );
}

export default App;
