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

function Header(props) {
  const {title} = props;
  return <h2>Section with list, {title}</h2>;
}

function Section(props) {
  const {bgClass, title, id, desc, listColor} = props;

  return (
  <section id={id} className={bgClass}>
    <Header title={title}/>
    <ul style={{color: listColor}}>
      <li>One</li>
      <li>Doi</li>
      <li>Three</li>
      <li><LikeButton/></li>
    </ul>
    <div>{desc}</div>
  </section>
  );
}

function App() {
  const description = "My awesome description";
  const color1 = "magenta";
  const color2 = "yellow";

  return (
    <div className='app'>
      <h1>Hello to my Website</h1>
      <LikeButton />
      <Section 
        desc={description} 
        listColor={color1}
        id="s1" 
        title="Section1" 
        bgClass="blue" 
      />
      <Section 
        desc={description} 
        listColor={color2}
        id="s2" 
        title="Sectiunea a 2" 
        bgClass="green" 
      />
    </div>
  );
}

const obj = {
  a: 1,
  b: 2,
  c: 3
}

const { a } = obj;


const myVar = obj.a
const b = obj.b
const c = obj.c

const array = [1, 2];

const [primu, aldoilea] = array;

const first = array[0];
const second = array[1];

export default App;
