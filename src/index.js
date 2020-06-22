import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
// ========================================

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); //브라우저 렌더링 시 실행할 것
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}
class GuGudan extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prev) => {
        console.log("prev" + prev);
        return {
          result: prev.value + " 정답",
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
      this.input.focus();
    } else {
      this.setState(() => {
        return {
          result: "오답",
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
      this.input.focus();
    }
  };

  input;
  onInput = (c) => {
    this.input = c;
  };
  //컨텐츠
  render() {
    return (
      <>
        <div>
          {this.state.first}곱하기{this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            ref={this.onInput}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

//class vs function

const Hooks = () => {
  // state = {
  //   first: Math.ceil(Math.random() * 9),
  //   second: Math.ceil(Math.random() * 9),
  //   value: "",
  //   result: "",
  // };
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); // [ A , B() ]
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const inputRef = React.useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitValue = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prev) => {
        return value + " 장딥";
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("오답");
      setValue("");
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmitValue}>
        <input
          type="number"
          ref={inputRef}
          onChange={onChange}
          value={value}
        ></input>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};
class Whole extends Component {
  render() {
    return (
      <div>
        <Clock />

        <App />
      </div>
    );
  }
}
ReactDOM.render(<Whole />, document.getElementById("root"));
ReactDOM.render(<Hooks />, document.getElementById("root2"));
