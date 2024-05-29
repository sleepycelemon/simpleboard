import { useState } from "react";
import { styled } from "styled-components";
import { EmojiType } from "../types";

const StyledEmoji = styled.div`
  position: absolute;
  font-size: 32px;
  cursor: pointer;
`;

const StyledComment = styled.div`
  background-color: white;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 25px;
  box-shadow: -8px 8px 5px 0px rgba(0,0,0,0.75);
`;

export default function Emoji({ emoji }: { emoji: EmojiType }) {
  const [showComment, setShowComment] = useState(false);

  return (
    <StyledEmoji onMouseOver={() => setShowComment(true)} onMouseLeave={() => setShowComment(false)} style={{ top: emoji.position.y, left: emoji.position.x }}>
      {emoji.emoji}
      {showComment && emoji.text && <StyledComment>{emoji.text}</StyledComment>}
    </StyledEmoji>
  )
}
