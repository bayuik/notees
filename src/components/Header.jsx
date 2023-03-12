import React from "react";

const Header = ({onSearchNote}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <input type="text" placeholder="Search notes" onChange={onSearchNote} />
    </div>
  );
};

export default Header;
