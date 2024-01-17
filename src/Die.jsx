import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };

  return (
    <div className="die" onClick={props.holdDice} style={styles}>
      <h2 className="die-value">{props.value}</h2>
    </div>
  );
}
