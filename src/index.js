import React from "react";
import { createRoot } from "react-dom/client";
import Notees from "./components/NoteesApp";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<Notees />);
