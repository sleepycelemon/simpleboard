import { useState } from "react";
import { X } from "react-bootstrap-icons";
import { styled } from "styled-components"

const StyledEmojiPicker = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 32px;
  background-color: white;
  border: 2px solid black;
  width: fit-content;
  height: min-content;
  border-radius: 15px;

  box-shadow: -8px 8px 5px 0px rgba(0,0,0,0.75);
`;

const StyledEmojis = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledClose = styled.span`
  cursor: pointer;
  color: red;
  line-height: 0;
`;

const StyledEmoji = styled.span`
  cursor: pointer;
`;

const StyledMessageInput = styled.input`
  font-size: 20px;
  padding:12px;
  border-radius: 16px;
`;

const emojiReactions = ["😀", "😍", "😂", "😢", "😡", "👍"];

type Props = {
  addEmoji: () => void,
}

export default function EmojiPicker(props: Props) {

  const [commentText, setCommentText] = useState<string>("");

  return (
    <StyledEmojiPicker>
      <StyledEmojis>
        {emojiReactions.map(emoji => <StyledEmoji>{emoji}</StyledEmoji>)}
        <StyledClose>
          <X size={36} />
        </StyledClose>
      </StyledEmojis>
      <StyledMessageInput value={commentText} onChange={e => setCommentText(e.target.value)} placeholder="Add a comment" />
    </StyledEmojiPicker>
  )
}
