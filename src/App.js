import React, { Component } from "react";
import Footer from "./Footer";
import PhotoList from "./PhotoList";
import { photos } from "./robots";
import SearchInput from "./SearchInput";

class App extends Component {
  state = {
    photos: photos,
    searchFilter: "",
  };

  onSearchChange = (e) => {
    this.setState({
      searchFilter: e.target.value,
    });
  };

  render() {
    const filterPhoto = this.state.photos.filter((photo) => {
      return photo.name
        .toLowerCase()
        .includes(this.state.searchFilter.toLowerCase());
    });
    return (
      <div className="pt3 bg-light-blue">
        <h1 className="tc">IMAGE GALLERY</h1>
        <SearchInput searchInput={this.onSearchChange} />
        <PhotoList photos={filterPhoto} />
        <Footer />
      </div>
    );
  }
}

export default App;
