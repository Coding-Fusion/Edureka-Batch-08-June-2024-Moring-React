import { Component } from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(1); // [value,updateFunction]
  let [count2, setCount2] = useState(100);
  // let count = array[0]
  // let updateCount = array[1]
  // number string array boolean or {}

  let incCount = () => {
    if (count > 9) {
      alert("Limit is till 10");
    } else {
      setCount(count + 1);
    }
  };

  let incCount2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <section className="main-section">
      <h1>{count}</h1>
      <button onClick={incCount}>INC Count</button>
      <h1>{count2}</h1>
      <button onClick={incCount2}>INC2</button>
    </section>
  );
}

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }

//   incCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <section className="main-section">
//         <h1>{this.state.count}</h1>
//         <button onClick={this.incCount}>INC Count</button>
//       </section>
//     );
//   }
// }

export default Counter;
