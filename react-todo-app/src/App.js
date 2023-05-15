import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
