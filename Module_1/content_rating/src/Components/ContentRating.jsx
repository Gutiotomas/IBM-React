import { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }

  // Define the event handlers as class methods
  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  };

  render() {
    return (
      <div className="content-rating">
        <p>React is a JavaScript library for building user interfaces.</p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
