import React from "react";
import "./css/Home.css";
import MultiPlayer from "./MultiPlayer";
import {Link} from 'react-router-dom'
import logo from "../pokeball.png";

export default function Home() {
  return (
    <div className="d-flex justify-content-center">
    <div className="holder">
      <div className="w-35 p-3">
        <div className="shadow-lg p-5 mb-5 bg-white rounded">
          <h5>Let's start Poké shopping <img src={logo} style={{width:'2rem', height:'2rem', display:'inline'}}/></h5>
         
          
          <form>
            <label>Email: </label>
            <input type="email" name="email" placeholder="Email" required className="form-control"/>
            

            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="form-control"
            />
          <div className="col text-center">
          <Link to="/pokemons">
            <button type="sumbit" className="btn btn-success mt-3 mb-3" style={{display:'block', margin:"0 auto"}} >
              Yes, I am ready
            </button>
            </Link>
            </div>
            <p>Fancy Poketrack along shopping?</p>
            <MultiPlayer
        urls={[
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/sbgsbuqa/106-the%20road%20to%20viridian%20city%20-%20from%20palette.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/ijviptkm/120-pokemon%20gym.mp3',
          'https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/pgfsczhv/128-battle%20%28vs%20gym%20leader%29.mp3'
        ]}
      />
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
