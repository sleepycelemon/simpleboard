import { useState } from "react";
import { Check, Pencil, X } from "react-bootstrap-icons";
import { styled } from "styled-components"
import { NoteType } from "../types";

const StyledNote = styled.div`
  padding: 16px;
  background-color: yellow;
  height: 250px;
  width: 250px;
  box-shadow: -8px 10px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledNoteBody = styled.p`
  height: 100%;
  width: 100%;
  font-size: 24px;
  padding: 16px;
`;


const StyledInput = styled.textarea`
  padding: 16px;
  flex: 1; 
  background-color: darkorange;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const StyledButton = styled.button`
  padding: 4px;
  font-size: 24px;
  background-color: black;
  border: 3px solid white;
  color: white;
  border-radius: 25px;
  box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
`;

const StyledToolbar = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

type Props = {
  note: NoteType,
  setText: (text: string, idx: number) => void,
}

// TODO: 'setText' is a bad name. need to fix this.
// TODO: toolbar should always be visible, since we have an edit button.
export default function Note({ note, setText }: Props) {

  const [noteText, setNoteText] = useState(note.text);
  const [showInput, setShowInput] = useState(false);

  const cancelEdit = () => {
    setNoteText(note.text);

    setShowInput(false);
  }

  const confirmEdit = () => {
    setText(noteText, note.idx);
    setShowInput(false);
  }

  return (
    <StyledNote >
      {showInput ? (
        <>
          <StyledInput placeholder="Enter text here" value={noteText} onChange={e => setNoteText(e.target.value)} />

          <StyledToolbar>
            <StyledButton onClick={confirmEdit}>
              <Check />
            </StyledButton>
            <StyledButton onClick={cancelEdit}>
              <X />
            </StyledButton>
          </StyledToolbar>
        </>
      ) : (
        <>
          <StyledNoteBody>{note.text}</StyledNoteBody>
          <StyledButton onClick={() => setShowInput(true)}> <Pencil /> </StyledButton>
        </>
      )}
    </StyledNote>
  )
}
