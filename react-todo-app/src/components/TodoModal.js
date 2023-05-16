/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button, { SelectButton } from './Button';
import toast from 'react-hot-toast';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { dataBase } from '../Firebase';
function TodoModal({ todo, type, modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && status) {
      if (type === 'add') {
        await addDoc(collection(dataBase, 'todos'), {
          title,
          status,
          time: new Date().toLocaleString()
        });
        toast.success('Task Added Successfully.');
      } else {
        if (todo.title !== title || todo.status !== status) {
          await updateDoc(doc(dataBase, 'todos', todo.id), {
            title,
            status
          });
          toast.success('Task Edited Successfully.');
        } else {
          toast.error('No Changes Are Made.');
        }
      }
      setModalOpen(false);
    } else {
      e.preventDefault();
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
            <h1 className={styles.formTitle}>{type === 'update' ? 'Update' : 'Add'} task</h1>
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
                {type === 'update' ? 'Update' : 'Add'} Task
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
