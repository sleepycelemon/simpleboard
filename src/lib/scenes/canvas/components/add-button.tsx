import { Plus } from 'react-bootstrap-icons'
import { styled } from "styled-components"

const StyledAddButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;

  font-size: 64px;
  background: black;
  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: center;
  border: 1px solid white;
`;

type Props = {
  addNewNote: () => void,
}

export default function AddButton({ addNewNote }: Props) {
  return (
    <StyledAddButton onClick={addNewNote}>
      <Plus />
    </StyledAddButton>
  )
}
