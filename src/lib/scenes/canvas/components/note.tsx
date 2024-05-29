import { styled } from "styled-components"
import { NoteType } from "../types";

const StyledNote = styled.div`
  padding: 16px;
  background-color: yellow;
  height: 150px;
  width: 150px;
`;

type Props = {
  note: NoteType,
}

export default function Note({ note }: Props) {
  return (
    <StyledNote>
      {note.text}
    </StyledNote>
  )
}
