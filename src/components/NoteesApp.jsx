import React from "react";
import Header from "./Header";
import NoteesForm from "./NoteesForm";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import { useState } from "react";

const NoteesApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchByTitle, setSearchByTitle] = useState({
    filteredNotes: [],
    tempNotes: [],
  });

  const handlerSearchNote = (e) => {
    let searchNotes = e.target.value;
    if (searchNotes.length != 0) {
      const noteList = notes;
      const filteredNotes = noteList.filter((note) => {
        return note.title.toLowerCase().includes(searchNotes.toLowerCase());
      });

      if (searchByTitle.tempNotes.length == 0) {
        setSearchByTitle({ filteredNotes, tempNotes: notes });
      } else {
        setSearchByTitle({ ...searchByTitle, filteredNotes });
      }
      setNotes(filteredNotes);
    } else {
      setNotes(searchByTitle.tempNotes);
      setSearchByTitle({ filteredNotes: [], tempNotes: [] });
    }
  };

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
      <Header onSearchNote={handlerSearchNote} />
      <NoteesForm addNote={handlerAddNote} />
      {notes.length ? (
        <NotesList
          notes={notes}
          onDelete={handlerDeleteNote}
          onArchive={handlerArchiveNote}
        />
      ) : (
        <p className="notes-list__empty-message">No notes yet</p>
      )}
    </>
  );
};

export default NoteesApp;
