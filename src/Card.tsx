import { Word } from "./CardManager";

interface CardProps {
  word: Word;
}

function Card({ word }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: word.success ? "green" : "white",
        color: "black",
        borderRadius: 15,
        padding: 150,
        outline: "10px solid pink",
      }}
    >
      {word.spanish}
      {word.success}
    </div>
  );
}

export default Card;
