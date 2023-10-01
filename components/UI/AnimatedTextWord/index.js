import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Index({handleCurrent,words,value}) {
    let [text] = useTypewriter({
    words: [words],
    loop: 1,
    typeSpeed:0,
    onLoopDone: () => handleCurrent(value)
  })
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
