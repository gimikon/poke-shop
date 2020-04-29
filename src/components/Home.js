import React from "react";
import "./css/Home.css";
import MultiPlayer from "./MultiPlayer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <div className="holder">
        <form className="form-signin">
          <div className="shadow-lg p-5 mb-10 bg-white rounded">
            <h2
              className="h3 mb-3 font-weight-normal text-center"
              style={{ color: "#184F86" }}
            >
              Please Sign Up
            </h2>
            <input
              type="text"
              name="fName"
              className="form-control top"
              placeholder="Name"
              required
              autofocus
            />

            <input
              type="password"
              name="password"
              className="form-control bottom"
              placeholder="password"
              required
            />
            <Link to="/pokemons">
              <button class="btn  btn-primary btn-block" type="submit">
                Start!
              </button>
            </Link>
            <p>Fancy Pokétrack?</p>

            <MultiPlayer
              urls={[
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/sbgsbuqa/106-the%20road%20to%20viridian%20city%20-%20from%20palette.mp3",
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3",
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/jucncspp/115-battle%20%28vs%20trainer%29.mp3",
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/ijviptkm/120-pokemon%20gym.mp3",
              ]}
            />
          
          
        </div>
         
        </form>

        
      </div>
    </React.Fragment>
  );
}

////
//
//tala lan lan lan

///
// https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3
//pokemon center
// </div>
//           <div class="stage">
//           <div class="poke bounce"></div>
