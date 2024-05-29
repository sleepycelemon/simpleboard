import { useState } from "react";
import { styled } from "styled-components";
import AddButton from "./components/add-button";
import Note from "./components/note";
import { NoteType } from "./types";

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: slateblue;
  display: flex;
  padding: 16px;
`;


// Store notes in a map for instant deletion, editing, etc. No find required.
type Notes = {
  [idx: number]: NoteType,
}

export default function Canvas() {

  const [noteCount, setNoteCount] = useState<number>(0);
  const [notes, setNotes] = useState<Notes>({});

  const addNewNote = () => {

    const newNoteCount = noteCount + 1;
    const newNote = { idx: newNoteCount, text: "" };

    setNoteCount(newNoteCount);
    setNotes(curr => ({ ...curr, ...{ [newNoteCount]: newNote } }))
  }

  return (
    <Wrap>
      {Object.values(notes).map(note => <Note note={note} />)}
      <AddButton addNewNote={addNewNote} />
    </Wrap>
  )
} 
