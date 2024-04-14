import React from "react";
import jessica from './assets/avatar-jessica.jpeg'
export default function App(){
  return(
    <section>
      <img src={jessica} alt="jessica"></img>
      <h1>Jessica Randall</h1>
      <h5>London, United Kingdom</h5>
      <p>"Front-end developer and avid reader."</p>
      <button>GitHub</button>
      <button>Frontend Mentor</button>
      <button>Linkedin</button>
      <button>Twitter</button>
      <button>Instagram</button>
    </section>
  )
}