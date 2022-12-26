import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div className="note-app__body">
      <h2>Active Notes</h2>
      <div className="notes-list">
        {notes
          .filter((note) => note.archived === false)
          .map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
      </div>
      <h2>Archive Notes</h2>
      <div className="notes-list">
        {notes
          .filter((note) => note.archived === true)
          .map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
      </div>
    </div>
  );
};

export default NotesList;
