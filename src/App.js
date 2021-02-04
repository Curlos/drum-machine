import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [clipName, setClipName] = useState('');

  function downHandler({ key }) {
    console.log(document.getElementById(key.toUpperCase()).parentElement.click());
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const handleClick = (event) => {
    let key = event.target.innerText;
    let audio = document.getElementById(key);
    let playPromise = audio.play();
    setClipName(event.target.id);

    if(playPromise !== undefined) {
      playPromise.then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      })
    } else {
      audio.play();
    }
  }
  
  return (
    <div className="box">
      <div id="drum-machine">
        <div className="drum-pad" id="Chord-1" onClick={handleClick}>
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio>
          Q
        </div>

        <div class="drum-pad" id="Chord-2" onClick={handleClick}>
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio>
          W
        </div>

        <div className="drum-pad" id="Chord-3" onClick={handleClick}>
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>
          E
        </div>

        <div className="drum-pad" id="Shaker" onClick={handleClick}>
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>
          A
        </div>

        <div className="drum-pad" id="Open-HH" onClick={handleClick}>
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>
          S
        </div>

        <div className="drum-pad" id="Closed-HH" onClick={handleClick}>
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>
          D
        </div>

        <div className="drum-pad" id="Punchy-Kick" onClick={handleClick}>
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>
          Z
        </div>

        <div className="drum-pad" id="Side-Stick" onClick={handleClick}>
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>
          X
        </div>

        <div className="drum-pad" id="Snare" onClick={handleClick}>
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>
          C
        </div>
      </div>

      <div id="display">Audio name: {clipName}</div>
    </div>
  );
}

export default App;
