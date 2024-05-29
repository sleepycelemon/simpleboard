import { useState } from "react";
import { styled } from "styled-components";
import AddButton from "./components/add-button";

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: slateblue;
  display: flex;
`;

type Note = {
  idx: number,
  text: string,
}

// Store notes in a map for instant deletion, editing, etc. No find required.
type Notes = {
  [idx: number]: Note,
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
      {Object.values(notes).map(note => <p>{note.idx}</p>)}
      <AddButton addNewNote={addNewNote} />
    </Wrap>
  )
} 
