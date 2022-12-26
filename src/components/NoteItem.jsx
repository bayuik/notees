import React from "react";

const NoteItem = ({ id, title, body, createdAt, archived }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h4 className="note-item__title">{title}</h4>
        <p className="note-item__date">{createdAt}</p>
        <div className="note-item__body">
          <p>{body}</p>
        </div>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" id={id}>Delete</button>
        <button className="note-item__archive-button" id={id}>Archive</button>
      </div>
    </div>
  );
};

export default NoteItem;
