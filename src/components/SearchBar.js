import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  
  onFormSubmit = event => {
    event.preventDefault();
    // TODO: make sure we call callback function from parent component
    this.props.onFormSubmit(this.state.term);
    
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
