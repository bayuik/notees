import React from "react";

const NoteesForm = () => {
  return (
    <div className="note-input">
      <h2>Create Note</h2>
      <p className="note-input__title__char-limit">Character limit: </p>
      <div className="note-input__body">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write Your notes here ..."></textarea>
        <button type="submit">Add Note</button>
      </div>
    </div>
  );
};

export default NoteesForm;
