
import axios from 'axios';
let results = ''


export const pokeData = results 

    async componentDidMount() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300");
       results= res.data["results"]
      console.log(results);
    }







