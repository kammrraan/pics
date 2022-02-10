import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      term: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  //   onInputChange = (event) => {
  //     console.log(event.  target.value);
  //   };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input
              type="term"
              value={this.state.term}
              onChange={(e) => {
                this.setState({
                  term: e.target.value,
                });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
