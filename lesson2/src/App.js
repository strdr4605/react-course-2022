import React from "react";
import "./App.css";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    console.log("clicked");
    this.setState({ liked: true });
  };

  render() {
    if (this.state.liked) {
      return this.props.text;
    }

    return <button onClick={this.handleOnClick}>Like</button>;
  }
}

function SectionFooter(props) {
  const { title } = props;
  return <h2 style={{ color: "yellow" }}>{title}, my color is yellow</h2>;
}

function Section(props) {
  const { sectionFooter, id } = props;

  return (
    <section id={id}>
      This is a basic section on the page
      <SectionFooter title={sectionFooter} />
    </section>
  );
}

function App() {
  const section1Id = "s1";
  const section2Id = "s2";
  const section1Footer = "I stay at the end of section 1";
  const section2Footer = "Here is section 2 end";
  const textForLikeButton = "You liked. This text comes from <App /> component!"

  return (
    <div className="app">
      <h1>Learning react props</h1>
      <Section
        id={section1Id}
        sectionFooter={section1Footer}
      />
      <Section
        id={section2Id}
        sectionFooter={section2Footer}
      />
      <LikeButton text={textForLikeButton} />
    </div>
  );
}

export default App;
