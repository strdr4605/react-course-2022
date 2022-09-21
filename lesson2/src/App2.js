import React from "react";
import "./App2.css";

function SectionHeader({id, text}) {
    return <h3>{id} + {text}</h3>
}

function Section(props) {
    const {id, footerText} = props;

    return (
        <section id={id}>
            <SectionHeader id={id} text={footerText}/>
            <p>Basic section on the page</p>
            <SectionFooter2 text={footerText} />
        </section>
    );
}

function SectionFooter({text}) {
    return (<h2 style={{color: "yellow"}}>{text}, my color is yellow</h2>)
}

class SectionFooter2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h2 style={{color: "yellow"}}>{this.props.text}, my color is yellow</h2>);
    }
}

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
        const {text} = this.props;
      if (this.state.liked) {
        return text;
      }
  
      return (
        <button onClick={this.handleOnClick}>
          Like
        </button>
      );
    }
  }

export default function App2() {
    const section1Id = "s1";
    const section2Id = "s2";
    const section1Footer = "I stay at the end of section 1";
    const section2Footer = "Here is section 2 end";
    const textForLikeButton = "You liked. This text comes from <App /> component!"

    return (
        <div>
            <h1>Learning react props</h1>
            <Section id={section1Id} footerText={section1Footer} />
            <Section id={section2Id} footerText={section2Footer} />
            <LikeButton text={textForLikeButton} />
        </div>
    );
}