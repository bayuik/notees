import React, { useState } from "react";

const NoteesForm = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const [limit, setLimit] = useState(50);

  const onChangeHandler = (e) => {
    if (e.target.name === "title") {
      let max = 50;
      setLimit(max - e.target.value.length);
    }

    if (e.target.name === "title" && e.target.value.length >= 50) {
      return;
    } else {
      setNote({
        ...note,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      body: "",
    });
  };

  return (
    <div className="note-input">
      <h2>Create Note</h2>
      <p className="note-input__title__char-limit">Character limit: {limit}</p>
      <div className="note-input__body">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onChangeHandler}
          />
          <textarea
            name="body"
            value={note.body}
            onChange={onChangeHandler}
            placeholder="Write Your notes here ..."
          ></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default NoteesForm;
