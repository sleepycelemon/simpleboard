import { MouseEventHandler, useState } from "react";
import { styled } from "styled-components";
import AddButton from "./components/add-button";
import Emoji from "./components/emoji";
import EmojiPicker from "./components/emoji-picker";
import Note from "./components/note";
import { EmojiType, NoteType } from "./types";

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: slateblue;
  display: flex;
  padding: 16px;
  gap: 24px;
  position: relative;
`;


// Store notes in a map for instant deletion, editing, etc. No find required.
type Notes = {
  [idx: number]: NoteType,
}

export default function Canvas() {

  const [noteCount, setNoteCount] = useState<number>(0);
  const [notes, setNotes] = useState<Notes>({});
  const [emojis, setEmojis] = useState<EmojiType[]>([])

  // TODO: make this a custom hook
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 })
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addNewNote = () => {

    const newNoteCount = noteCount + 1;
    const newNote = { idx: newNoteCount, text: "" };

    setNoteCount(newNoteCount);
    setNotes(curr => ({ ...curr, ...{ [newNoteCount]: newNote } }))
  }

  const setNoteText = (text: string, idx: number) => {
    const updated = { ...notes };

    // Should never happen but we should check anyway.
    if (!updated[idx]) {
      return;
    }

    updated[idx] = { ...updated[idx], text };

    setNotes(updated);
  }

  const addEmoji = (emoji: string, text: string) => {
    setEmojis(curr => [...curr, { emoji, text, position: pickerPosition }])
  }

  const openEmojiPicker: MouseEventHandler = (e) => {
    setPickerPosition({ x: e.clientX, y: e.clientY })
    setShowEmojiPicker(true);
  }


  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
  }

  return (
    <Wrap onDoubleClick={openEmojiPicker}>
      {Object.values(notes).map(note => <Note key={note.idx} note={note} setText={setNoteText} />)}
      <AddButton addNewNote={addNewNote} />
      {showEmojiPicker && (<EmojiPicker position={pickerPosition} addEmoji={addEmoji} close={closeEmojiPicker} />)}
      {emojis.map(emoji => (<Emoji emoji={emoji} />))}
    </Wrap>
  )
} 
