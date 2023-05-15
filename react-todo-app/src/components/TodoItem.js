/* eslint-disable react/prop-types */
// import { format } from 'date-fns';
import React from 'react';
// import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
// import { getClasses } from '../utils/getClasses';
// import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  return (
    <>
      <div className={styles.todoDetails}>
        {todo.text}
        {/* <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === 'complete' && styles['todoText--completed']
            ])}>
            {todo.title}
          </p>
          <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon} role="button">
          <MdDelete />
        </div>
        <div className={styles.icon} role="button">
          <MdEdit />
        </div> */}
      </div>
      {/* <TodoModal type="update" todo={todo} /> */}
    </>
  );
}

export default TodoItem;
