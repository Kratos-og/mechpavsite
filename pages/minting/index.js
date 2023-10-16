import React, { useState } from 'react'
import Hero from './Hero';
import Page from "./Page_1";

export default function Index() {
  const [enter,setEnter] = useState(false);
const enterHandler =(data)=>{setEnter(data)}
  return (
    <div>
      {enter ? <Page/> : <Hero enterHandler={enterHandler}/>}
      
    </div>
  )
}
