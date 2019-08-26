import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Notes = props => {
  const { notes, filter, toggleImportanceOf } = props;
  const notesToShow = () => {
    if (filter === 'ALL') {
      return notes;
    }
    return filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important);
  };

  return (
    <ul>
      {notesToShow().map(note => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filter: state.filter
  };
};

const mapDispatchToProps = {
  toggleImportanceOf
};

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);

export default ConnectedNotes;
