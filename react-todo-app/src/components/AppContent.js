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
      const sortedTodoList = [...todosArr];
      sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
      setTodos(sortedTodoList);
    });
    return () => fetchData;
  }, []);

  return (
    <div>
      {todos ? todos.map((todo, index) => <TodoItem key={index} todo={todo} />) : 'no todo found'}
    </div>
  );
}

export default AppContent;
