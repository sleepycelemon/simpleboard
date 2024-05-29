import { useState } from "react";
import { styled } from "styled-components";
import { EmojiType } from "../types";

const StyledEmoji = styled.div`
  position: absolute;
  font-size: 32px;
  cursor: pointer;
`;


const EmojiToolbar = styled.div` 
  background-color: white;
  font-size: 16px;
  border-radius: 25px;
  box-shadow: -8px 8px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px; 
`;

export default function Emoji({ emoji }: { emoji: EmojiType }) {
  const [showToolbar, setShowToolbar] = useState(false);

  return (
    <StyledEmoji onMouseOver={() => setShowToolbar(true)} onMouseLeave={() => setShowToolbar(false)} style={{ top: emoji.position.y, left: emoji.position.x }}>
      {emoji.emoji}
      {showToolbar && emoji.text && (
        <EmojiToolbar>
          {emoji.text}
        </EmojiToolbar>
      )}
    </StyledEmoji>
  )
}
