/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { dataBase } from '../Firebase';
import TodoItem from './TodoItem';

function AppContent() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const FbQuery = query(collection(dataBase, 'todos'));
    const fetchData = onSnapshot(FbQuery, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
      console.log(todosArr);
    });
    return () => fetchData;
  }, []);
  // const todoList = useSelector((state) => state.todoL.todoList);
  // const sortedTodoList = [...todoList];
  // sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
      {/* {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => todo.title + ' ')
        : 'no todo found'} */}
    </div>
  );
}

export default AppContent;
