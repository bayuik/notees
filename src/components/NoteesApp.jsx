import React from "react";
import Header from "./Header";
import NoteesForm from "./NoteesForm";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import { useState } from "react";

const NoteesApp = () => {
  const [notes, setNotes] = useState(getInitialData());

  const handlerAddNote = (note) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        createdAt: +new Date(),
        archived: false,
        ...note,
      },
    ]);
  };

  const handlerDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handlerArchiveNote = (id) => {
    const newNotes = notes.filter((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <>
      <Header />
      <NoteesForm addNote={handlerAddNote} />
      {
        notes.length > 0 ? (
          <NotesList
          notes={notes}
          onDelete={handlerDeleteNote}
          onArchive={handlerArchiveNote}
        />
        ) : (
          <p className="notes-list__empty-message">No notes yet</p>
        )
      }
    </>
  );
};

export default NoteesApp;
