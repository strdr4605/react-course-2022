import React from 'react';
import './App.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    console.log("clicked");
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <button onClick={this.handleOnClick}>
        Like
      </button>
    );
  }
}

function Header() {
  return <h2>Section with list</h2>;
}

function Section() {

  return (
  <section>
    <Header/>
    <ul>
      <li>One</li>
      <li>Doi</li>
      <li>Three</li>
      <li><LikeButton/></li>
    </ul>
  </section>
  );
}

function App() {
  return (
    <div>
      <h1>Hello to my Website</h1>
      <LikeButton />
      <Section />
      <Section />
    </div>
  );
}

export default App;
