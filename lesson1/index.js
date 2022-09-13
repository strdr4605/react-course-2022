console.log("Script running");
("use strict");

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
        Like <Hello />
      </button>
    );
  }
}

function Container() {
  return (
    <main id="main-container">
      Container
      <LikeButton />
      <Hello></Hello>
    </main>
  );
}

function Hello() {
  return <span>Hello</span>;
}

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <LikeButton></LikeButton>
      <Container></Container>
    </div>
  );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
