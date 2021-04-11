import React from 'react';
import { MainLayout } from 'layouts/MainLayout';
import { Page as TestTaskPage } from './features/test-task/Page';

function App() {
  return (
    <MainLayout>
      <TestTaskPage />
    </MainLayout>
  );
}

export default App;
