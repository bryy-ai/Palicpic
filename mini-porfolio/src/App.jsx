import { useState } from "react";
import user from "./images/user.png"; // Import the image

import "./App.css";

function App() {
  return (
    <>
      <div class="header">
        <div class="image">
          <img src={user} height={200} alt="This is a car image" />
          <div>
            <h1>Vince Bryan G. Palicpic</h1>
            <h3>BSIT - MWA</h3>
            <p>I'm a 4th Year BSIT Student</p>
          </div>
        </div>
      </div>

      <div class="About">
        <h1> Things about me</h1>
      </div>

      <div class="Tech-Stack">
        <h2>Hobbies</h2>
        <>Playing Video Games</> <br />
        <>Watching Movies</>
        <br />
        <>Reading Manhwa/Manga</>
        <br />
      </div>

      <div class="Tech-Stack">
        <h2>Tech Stack</h2>
        <p>Javascript, React, Vite, Node.js, Java, Express.js, MongoDB</p>
      </div>

      <div class="Achievement">
        <h2>Achievement</h2>
        <p>First Honor Dean's Lister: A.Y. 2023 - 2026</p>
        <p></p>
      </div>

      <div class="Socials">
        <h2>Connect with me</h2>

        <>
          <a href="https://www.facebook.com/" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            Facebook
          </a>
          <br />
        </>
        <>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            Instagram
          </a>
          <br />
        </>

        <>
          <a href="https://www.tiktok.com/" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            Tiktok
          </a>
          <br />
        </>

        <>
          <a href="https://github.com/bryy-ai" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            Github
          </a>
          <br />
        </>

        <>
          <a href="https://www.reddit.com/" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            Reddit
          </a>
          <br />
        </>

        <>
          <a href="https://www.linkedin.com/" target="_blank">
            <img className="logo" src="{ViteLogo}" alt="" />
            LinkedIn
          </a>
          <br />
        </>
      </div>
    </>
  );
}

export default App;
