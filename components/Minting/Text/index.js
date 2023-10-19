import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Index({text,speed,textHandler}) {
  const [typewriter_text] = useTypewriter({
    words: [text],
    loop: 1,
    onLoopDone: () => {
        textHandler(true)
    },
    typeSpeed:speed
  });
  return (
    <div>
      <p>{typewriter_text}</p>
    </div>
  );
}
