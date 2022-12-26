import React from "react";
import Header from "./Header";
import NoteesForm from "./NoteesForm";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils";
import { useState } from "react";

const NoteesApp = () => {
  const [notes, setNotes] = useState(getInitialData());

  const handlerDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handlerArchiveNote = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
    });
  };

  return (
    <>
      <Header />
      <NoteesForm />
      <NotesList notes={notes} />
    </>
  );
};

export default NoteesApp;
