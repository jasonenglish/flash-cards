import Card from "./Card";
import { useState, useRef } from "react";

export interface Word {
  english: string;
  spanish: string;
  success: boolean;
}

interface CardManagerProps {
  collection: Word[];
}

function CardManager({ collection }: CardManagerProps) {
  const [cardNumber, setCardNumber] = useState(0);
  const [words, setWords] = useState(collection);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onSkip() {
    setCardNumber((index) => {
      if (words.length === index + 1) {
        return 0;
      }
      return index + 1;
    });
  }

  function onSubmit() {
    console.log(inputRef.current?.value);
    const input = inputRef.current?.value;
    if (words[cardNumber].english === input) {
      setWords((ws) => {
        let newWords = ws;
        let word = {
          ...newWords[cardNumber],
          success: true,
        };

        newWords.splice(cardNumber, 1, word);

        return [...newWords];
      });
    }
  }

  return (
    <>
      <Card key={words[cardNumber]} word={words[cardNumber]} />
      <div>
        <input ref={inputRef} />
        <button onClick={onSubmit}>Submit {cardNumber}</button>
        <button onClick={onSkip}>Skip</button>
      </div>
    </>
  );
}

export default CardManager;
