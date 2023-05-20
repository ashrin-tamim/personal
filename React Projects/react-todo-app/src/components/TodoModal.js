/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button, { SelectButton } from './Button';
import toast from 'react-hot-toast';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { dataBase } from '../Firebase';
import { Bell, CalendarDay, Clock } from 'react-bootstrap-icons';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';

function TodoModal({ todo, type, modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [day, setDay] = useState(' ');
  const [time, setTime] = useState(' ');
  useEffect(() => {
    if (type == 'update' && todo) {
      console.log('type update');
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
      if (day.$D !== undefined && time.$H !== undefined) {
        if (type === 'add') {
          await addDoc(collection(dataBase, 'todos'), {
            title,
            status,
            day: day.toLocaleString(),
            time: time.toLocaleString()
          });
          toast.success('Task Added Successfully.');
        } else {
          if (
            todo.title !== title ||
            todo.status !== status ||
            todo.time !== time ||
            todo.day !== day
          ) {
            await updateDoc(doc(dataBase, 'todos', todo.id), {
              title,
              status,
              day: day.toLocaleString(),
              time: time.toLocaleString()
            });
            toast.success('Task Edited Successfully.');
          } else {
            toast.error('No Changes Are Made.');
          }
        }
        setModalOpen(false);
      } else {
        e.preventDefault();
        toast.error("Time or date sholdn't be empty.");
      }
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                <SelectButton
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </SelectButton>
              </label>

              <div className={styles['todo-time-picker']}>
                <div className={styles.remind}>
                  <div className={styles.title}>
                    <Bell />
                    <p>Remind Me!</p>
                  </div>
                </div>
                <div className={styles['pick-day']}>
                  <div className={styles.title}>
                    <CalendarDay />
                    <p>Choose a day</p>
                  </div>
                  <MobileDatePicker
                    // defaultValue={day}
                    // value={type === 'update' ? day : 'MM/DD/YYYY'}
                    value={day}
                    onChange={(day) => setDay(day)}
                  />
                </div>
                <div className={styles['pick-time']}>
                  <div className={styles.title}>
                    <Clock />
                    <p>Choose time</p>
                  </div>
                  <MobileTimePicker
                    // defaultValue={time}
                    // value={type === 'update' ? time : ' '}
                    // value={time}
                    onChange={(time) => setTime(time)}
                  />
                </div>
              </div>

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
          </LocalizationProvider>
        </div>
      </div>
    )
  );
}

export default TodoModal;
