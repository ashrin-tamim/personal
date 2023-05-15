/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button, { SelectButton } from './Button';
import toast from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from '../Firebase';
function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && status) {
      await addDoc(collection(dataBase, 'todos'), {
        title,
        status,
        time: new Date().toLocaleString()
      });
      toast.success('Task Added Successfully.');
      setModalOpen(false);
    } else {
      toast.error("Title sholdn't be empty.");
    }
  };
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeButton} onClick={() => setModalOpen(false)} role="button">
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>Please add a task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            </label>
            <label htmlFor="status">
              Status
              <SelectButton id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </SelectButton>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                Add Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                tabIndex={0}
                role="button">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;
