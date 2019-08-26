import React from 'react';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

const App = ({ store }) => {
  return (
    <div className="App">
      <NewNote store={store} />
      <VisibilityFilter store={store} />
      <Notes store={store} />
    </div>
  );
};
export default App;
