import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Index({ text, speed, index, onDone }) {
  const [typewriter_text, helper] = useTypewriter({
    words: [text],
    loop: 1,
    typeSpeed: speed
  });
  const { isType, isDelete, isDelay, isDone } = helper;
  if (isDone) {
    onDone(index + 1)
  }
  return (
    <div>
      <p>{typewriter_text}</p>
    </div>
  );
}
