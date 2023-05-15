/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../Firebase';
// import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  const handleDelete = async (id) => {
    console.log('dleted...');
    await deleteDoc(doc(dataBase, 'todos', id));
  };
  const handleEdit = () => {
    console.log('Edited...');
  };
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
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
        <div className={styles.icon} role="button" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </div>
        <div className={styles.icon} role="button" onClick={handleEdit}>
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
