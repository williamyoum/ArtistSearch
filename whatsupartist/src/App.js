import React, {Component} from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props){
    super(props);
    const params = this.getHashParams();
    console.log(params);
    const token = params.access_token;
    console.log("Here is the token: " + token);
    if (token){
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      artistList: []
    }
    // place bindings here
    this.getArtistList = this.getArtistList.bind(this);
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  
  getArtistList(){
    spotifyApi.getFollowedArtists()
    .then((response) => {
      this.setState({
        artistList: artistList
      })
    })
  }


  render() {
    return (
      <div className = "Main-container">
        <div className = "links-container">
          <a href = "http://localhost:4002/callback">
            <button>backend link</button>
          </a>
        </div>
      </div>




    );
  }
  
}

export default App;
