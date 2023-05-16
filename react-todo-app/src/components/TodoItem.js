/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { dataBase } from '../Firebase';
import TodoModal from './TodoModal';
import toast from 'react-hot-toast';
import Checkbox from './Checkbox';

function TodoItem({ todo }) {
  const [updateModal, setUpdateModal] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(dataBase, 'todos', id));
    toast.success('Task Deleted Successfully.');
  };

  const handleCheck = async (todo) => {
    if (todo.status === 'complete') {
      await updateDoc(doc(dataBase, 'todos', todo.id), {
        status: 'incomplete'
      });
    } else {
      await updateDoc(doc(dataBase, 'todos', todo.id), {
        status: 'complete'
      });
    }
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <Checkbox checked={checked} handleCheck={() => handleCheck(todo)} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status == 'complete' && styles['todoText--completed']
              ])}>
              {todo.title}
            </p>
            <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            role="button"
            onClick={() => handleDelete(todo.id)}
            tabIndex={0}>
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            role="button"
            onClick={() => setUpdateModal(true)}
            tabIndex={0}>
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal todo={todo} type="update" modalOpen={updateModal} setModalOpen={setUpdateModal} />
    </>
  );
}

export default TodoItem;
