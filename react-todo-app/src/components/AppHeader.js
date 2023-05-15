import React, { useState } from 'react';
import Button from './Button';
import styles from '../styles/modules/app.module.scss';
import { SelectButton } from './Button';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" type="button" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="filter__selector">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
