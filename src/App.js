import "./styles.css";
import React from "react";
//https://leetcode.com/problems/two-sum/
export default function App() {
  const [arr] = React.useState([2, 7, 11, 15]);
  const res = 9;
  const [output, setOutput] = React.useState([]);
  React.useEffect(() => {
    let isBreak = false;
    for (let i = 0; i < arr.length; i++) {
      if (isBreak) break;
      for (let j = 0; j < arr.length; j++) {
        if (j === i) {
          continue;
        } else if (arr[i] + arr[j] === res) {
          isBreak = true;
          setOutput([arr.indexOf(arr[i]), arr.indexOf(arr[j])]);
          break;
        }
      }
    }
  }, []);
  return <div className="App">{JSON.stringify(output)}</div>;
}
