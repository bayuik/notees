import React from "react";
import Header from "./Header";
import NoteesForm from "./NoteesForm";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils";
import { useState } from "react";

const NoteesApp = () => {
  const [notes, setNotes] = useState(getInitialData());

  const handlerAddNote = (note) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        createdAt: showFormattedDate(+new Date()),
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
      <NotesList
        notes={notes}
        onDelete={handlerDeleteNote}
        onArchive={handlerArchiveNote}
      />
    </>
  );
};

export default NoteesApp;
