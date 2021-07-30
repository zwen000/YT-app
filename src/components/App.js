import React from "react";
//import axios from "axios";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", { q: term });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
