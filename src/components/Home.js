import React from "react";
import "./css/Home.css";
import MultiPlayer from "./MultiPlayer";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="d-flex justify-content-center">
    <div className="holder">
      <div className="w-35 p-3">
        <div className="shadow-lg p-5 mb-5 bg-white rounded">
          <h5>let's start shopping</h5>
          <br></br>
          <form>
            <label>Email: </label>
            <input type="email" name="email" placeholder="Email" required />
            <br></br>
            <br></br>

            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          <div className="col text-center">
          <Link to="/pokemons">
            <button type="sumbit" className="btn btn-success" style={{display:'block'}} >
              yes
            </button>
            </Link>
            </div>
            <p>Fancy Poketrack?</p>
            <MultiPlayer
        urls={[
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/sbgsbuqa/106-the%20road%20to%20viridian%20city%20-%20from%20palette.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/ijviptkm/120-pokemon%20gym.mp3',
        ]}
      />
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
