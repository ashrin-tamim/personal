import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { dataBase } from '../Firebase';
import { addDoc } from 'firebase/firestore';
const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};
const initialValue = {
  todoList: getInitialTodo()
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem('todoList', JSON.stringify([{ ...action.payload }]));
      }
      addDoc(collection(dataBase, 'todos'), {});

      useEffect(() => {
        const FbQuery = query(collection(dataBase, 'todos'));
        const fetchData = onSnapshot(FbQuery, (querySnapshot) => {
          if (querySnapshot.length > 0) {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
              todosArr.push({ ...doc.data(), id: doc.id });
            });
          }
        });
        return () => fetchData;
      }, []);
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    }
  }
});

export const { addTodo } = todoSlice.actions;
export const { updateTodo } = todoSlice.actions;
export const { deleteTodo } = todoSlice.actions;
export const { updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
