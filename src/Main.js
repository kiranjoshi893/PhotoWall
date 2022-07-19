import React, { Component } from "react";
import List from "./List";
import Title from "./Title";
const data = ["Bed", "shofa", "Chair", "table", "dressing", "Almira"];
class Main extends Component {
  render() {
    return (
      <>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Collection of all component
        </h2>
        <Title title={"List"} />
        <List list={data} />
      </>
    );
  }
}
export default Main;
