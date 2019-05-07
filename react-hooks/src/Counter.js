import React, { useState } from "react";

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }

const Counter = () => {
  // count is the state variable
  // setCount is the function that allows to modify the state variable
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // increase the count
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
