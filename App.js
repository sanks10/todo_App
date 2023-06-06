// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TodoList from './src/components/TodoList';
import AddTodoForm from './src/components/AddTodoForm';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodoForm />
    </Provider>
  );
};

export default App;
